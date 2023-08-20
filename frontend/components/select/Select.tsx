import React from "react";

interface Props {
  onChange: Function;
  option: string[] | number[];
  label?: String;
  className?: string;
  value?: number | string;
  placeholder?: string;
}

const Select: React.FC<Props> = ({ option, onChange, value, ...props }) => {
  return (
    <select
      {...props}
      value={value}
      onChange={(e) => {
        onChange(
          typeof value === "number" ? Number(e.target.value) : e.target.value
        );
      }}
      className={`border bg-white p-3 text-neutral-800 text-sm rounded`}
    >
      {option.map((data) => (
        <option key={data} value={data} className="text-neutral-800 ">
          {data}
        </option>
      ))}
    </select>
  );
};

export default Select;
