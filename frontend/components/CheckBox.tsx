import React from "react";
import { Input } from "./input";

interface Props extends React.HTMLProps<HTMLInputElement> {
  label?: string;
}

const CheckBox: React.FC<Props> = ({ label, ...props }) => (
  <span className="text-gray-600 flex gap-1">
    <Input type="checkbox" {...props} />
    {label}
  </span>
);

export default CheckBox;
