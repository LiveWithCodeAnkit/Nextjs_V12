import React from "react";
import SidebarItem from "./SidebarItem";

interface Props {
  isSidebarOpen: boolean;
  theme?: string;
}

const Sidebar = ({ isSidebarOpen, theme }: Props) => {
  return (
    <>
      <aside
        className={`${
          isSidebarOpen ? "block" : "hidden lg:flex"
        } left-0 lg:py-2 lg:pl-2 w-64 fixed flex top-0 h-screen overflow-hidden`}
      >
        <div className="lg:rounded-2xl flex-1 flex flex-col overflow-hidden bg-white  dark:bg-slate-900 border dark:border-none">
          <div className="flex h-14 items-center justify-center">
            <b className="font-black">Task Management</b>
          </div>
          <div
            className={`${
              theme == "dark" ? "dark" : "light"
            } flex-1 overflow-x-hidden`}
          >
            <SidebarItem />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
