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
  maxTagCount,
  disabled,
  fetchOptions,
  dependencyId,
  allowClear = true,
  showSearch = true,
  placeholder = "Select option(s)",
  debounceTimeout = 800,
  fixedOptions = [],
  searchKey = "search",
  keys = ["id", "title"],
  style,
  ...props
}) => {
  const fetchOnSearchRef = useRef(0);
  const fetchOnScrollRef = useRef(1);
  const totalPages = useRef(0);

  const [searchOptions, setSearchOptions] = useState([]);
  const [options, setOptions, optionsRef] = useRefState([]);
  const [newOptions, setNewOptions] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [params, setParams] = useState({
    page: 1,
    limit: 100,
  });
  const [selected, setSelected] = useState();

  const clearSelected = () => {
    setSelected(null);
  };

  useEffect(() => {
    if (!dependencyId) {
      debounceOnSearchFetcher();
    }
  }, []);

  useEffect(() => {
    if (dependencyId) {
      debounceOnSearchFetcher();
    }
  }, [dependencyId]);

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
      setParams(_params);
      let request = null;
      if (dependencyId) {
        request = fetchOptions(_params, dependencyId);
      } else {
        request = fetchOptions(_params);
      }
      if (!request) {
        return;
      }
      request.then(({ data, meta }) => {
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
  }, [fetchOptions, debounceTimeout, dependencyId]);

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
      autoComplete={"" + Math.random()}
      style={style}
      maxTagCount={maxTagCount}
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
          {/* {initOptions.map((d) => (
            <Option key={d.value} value={d.value}>
              {d.label}
            </Option>
          ))} */}
          {fixedOptions.map((d) => (
            <Option key={d.value} value={d.value}>
              {d.label}
            </Option>
          ))}
          {optionsRef.current.map((d) => (
            <Option key={d.value} value={d.value}>
              {d.label}
            </Option>
          ))}
        </>
      )}
    </Select>
  );
};
