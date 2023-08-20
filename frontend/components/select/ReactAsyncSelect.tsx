import React from "react";
import AsyncSelect from "react-select/async";

interface Props {
  onChange: Function;
  options: Array<Record<string, any>>;
}

const ReactAsyncSelect = ({ onChange, options }: Props) => {
  const filteredData = (inputValue: string) =>
    options.filter((item) =>
      item.label.toLowerCase().includes(inputValue.toLowerCase())
    );

  const loadOptions = (
    inputValue: string,
    callback: (options: Array<Record<string, any>>) => void
  ) => {
    setTimeout(() => {
      callback(filteredData(inputValue));
    }, 500);
  };

  return (
    <AsyncSelect
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions
      onChange={(item) => onChange(item?.value)}
    />
  );
};

export default ReactAsyncSelect;
