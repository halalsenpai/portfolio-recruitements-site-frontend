import React, { useEffect, useMemo, useRef, useState } from "react";

import { Select, Spin } from "antd";
import useRefState from "react-usestateref";

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
  fetchOptions,
  allowClear = true,
  placeholder = "Select options",
  debounceTimeout = 800,
  fixedOptions = [],
  keys = ["id", "title"],
  ...props
}) => {
  const fetchOnSearchRef = useRef(0);
  const fetchOnScrollRef = useRef(1);
  const totalPages = useRef(0);
  const [options, setOptions, optionsRef] = useRefState([]);

  const [searchOptions, setSearchOptions] = useState([]);
  const [newOptions, setNewOptions] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [params, setParams] = useState({
    page: 1,
    limit: 100,
  });

  useEffect(() => {
    debounceOnSearchFetcher();
  }, []);

  useEffect(() => {
    setOptions(searchOptions);
  }, [searchOptions]);

  useEffect(() => {
    setOptions([...optionsRef.current, ...newOptions]);
  }, [newOptions]);

  const debounceOnSearchFetcher = useMemo(() => {
    const loadOptions = (title) => {
      fetchOnSearchRef.current += 1;
      const fetchId = fetchOnSearchRef.current;
      setSearchOptions([]);
      setFetching(true);
      const _params = {
        page: 1,
        limit: 100,
        title,
      };
      setParams(_params);
      fetchOptions(_params).then(({ data, meta }) => {
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
      const _params = { ...params, page: fetchId };
      setParams(_params);
      fetchOptions(_params).then(({ data, meta }) => {
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

        setNewOptions(_options);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);

  return (
    <Select
      showSearch={true}
      placeholder={placeholder}
      onSearch={debounceOnSearchFetcher}
      onPopupScroll={debounceOnScrollFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={[...initOptions, ...fixedOptions, ...optionsRef.current]}
    />
  );
};
