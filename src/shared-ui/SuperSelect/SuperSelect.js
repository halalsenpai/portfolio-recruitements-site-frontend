import React, { useEffect, useMemo, useRef, useState } from "react";

import { Select, Spin } from "antd";
import useRefState from "react-usestateref";

import { Option } from "antd/lib/mentions";
import { debounce } from "../../utils/powerFunctions";

const initOptions = [
  {
    label: "Select",
    value: "",
  },
];

const getOptions = (data, keys) => {
  return data.map((d) => ({
    value: d[keys[0]],
    label: d[keys[1]],
  }));
};

export const SuperSelect = ({
  mode,
  disabled,
  fetchOptions,
  allowClear = true,
  showSearch = true,
  placeholder = "Select options",
  debounceTimeout = 800,
  fixedOptions = [],
  searchKey = "search",
  categoryId,
  keys = ["id", "title"],
  ...props
}) => {
  const fetchOnSearchRef = useRef(0);
  const fetchOnScrollRef = useRef(1);
  const totalPages = useRef(0);

  const [searchOptions, setSearchOptions] = useState([]);
  const [options, setOptions, optionsRef] = useRefState([]);
  const [newOptions, setNewOptions] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [category, setCategory] = useState(2);
  const [params, setParams] = useState({
    page: 1,
    limit: 100,
  });

  useEffect(() => {
    debounceOnSearchFetcher();
  }, []);

  useEffect(() => {
    setCategory(categoryId);
    console.log("category id in super select", categoryId);
  }, [categoryId]);

  useEffect(() => {
    setOptions(searchOptions);
  }, [searchOptions]);

  useEffect(() => {
    const _options = optionsRef.current;
    const _newOptions = newOptions;
    setOptions([..._options, ..._newOptions]);
  }, [newOptions]);

  const debounceOnSearchFetcher = useMemo(() => {
    const loadOptions = (search) => {
      fetchOnSearchRef.current += 1;
      const fetchId = fetchOnSearchRef.current;
      setSearchOptions([]);
      setFetching(true);
      const _params = {
        page: 1,
        limit: 100,
        [searchKey]: search,
      };
      const _categoryId = categoryId;
      setParams(_params);
      setCategory(_categoryId);
      fetchOptions(_params, 192).then(({ data, meta }) => {
        console.log("catefioehowiehio", _params, category);
        const _data = data.items || data;
        const _meta = data.meta || meta;
        if (_meta) {
          totalPages.current = _meta.totalPages;
        }
        const _options = getOptions(_data, keys);
        if (fetchId !== fetchOnSearchRef.current) {
          // for fetch callback order
          return;
        }

        setSearchOptions(_options);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);

  const debounceOnScrollFetcher = useMemo(() => {
    const loadOptions = () => {
      fetchOnScrollRef.current += 1;
      const fetchId = fetchOnScrollRef.current;
      if (totalPages && totalPages.current <= fetchId) {
        return;
      }
      const _params = { ...params, limit: 50, page: fetchId };
      setParams(_params);
      fetchOptions(_params).then(({ data, meta }) => {
        const _data = data.items || data;
        const _meta = data.meta || meta;
        if (_meta) {
          totalPages.current = _meta.totalPages;
        }
        const _options = getOptions(_data, keys);
        if (fetchId !== fetchOnScrollRef.current) {
          // for fetch callback order
          return;
        }
        setNewOptions(_options);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);

  return (
    <Select
      disabled={disabled}
      showArrow={mode ? false : true}
      mode={mode}
      filterOption={false}
      showSearch={showSearch}
      placeholder={placeholder}
      defaultActiveFirstOption={false}
      onSearch={debounceOnSearchFetcher}
      onPopupScroll={debounceOnScrollFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}>
      {!fetching && (
        <>
          {initOptions.map((d) => (
            <Option key={d.value}>{d.label}</Option>
          ))}
          {fixedOptions.map((d) => (
            <Option key={d.value}>{d.label}</Option>
          ))}
          {optionsRef.current.map((d) => (
            <Option key={d.value}>{d.label}</Option>
          ))}
        </>
      )}
    </Select>
  );
};
