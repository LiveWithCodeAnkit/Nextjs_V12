import React, { MouseEventHandler } from "react";
import { IoClose } from "react-icons/io5";
import Button from "@components/Button";

interface Props {
  header: string;
  close: MouseEventHandler;
  isShowModal: boolean;
  children?: React.ReactNode;
}

const Modal: React.FC<Props> = ({ header, close, isShowModal, children }) => {
  return (
    <div className={`${isShowModal ? "block" : "hidden"}`}>
      <div className="flex flex-col bg-white max-w-[800px] inset-0 m-auto mt-7 h-fit border rounded-2xl fixed ">
        <div className=" p-4 text-gray-800 font-medium text-xl border-b rounded-t-2xl  flex justify-between w-full ">
          <span>{header}</span>
          <Button type="button" className="bg-none" onClick={close}>
            <span>
              <IoClose />
            </span>
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
