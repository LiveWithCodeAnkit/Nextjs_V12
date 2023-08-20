import React from "react";

interface Props extends React.HTMLProps<HTMLTextAreaElement> {
  className?: string;
}

const TextArea: React.FC<Props> = ({ ...props }) => {
  return (
    <textarea
      className={`bg-white border text-neutral-800 text-sm  rounded px-2 py-3`}
      {...props}
    />
  );
};

export default TextArea;
