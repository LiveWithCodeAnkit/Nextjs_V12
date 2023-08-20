import React from "react";

interface Props extends React.HTMLProps<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<Props> = ({ className, ...props }) => {
  return (
    <div className="text-gray-600  ">
      <input
        className={`border bg-white p-3 text-sm rounded text-neutral-800 w-full`}
        {...props}
      />
    </div>
  );
};

export default Input;
