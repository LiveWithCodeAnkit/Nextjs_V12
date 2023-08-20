import React from "react";
import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";
import { CgDarkMode } from "react-icons/cg";
import HeaderProfile from "./HeaderProfile";

interface Props {
  toggleTheme: () => void;
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Header = ({ toggleTheme, toggleSidebar, isSidebarOpen }: Props) => {
  return (
    <nav className="flex items-center justify-between lg:justify-end sticky top-0 w-auto h-14 transition-position bg-gray-50 dark:bg-slate-800">
      <button
        onClick={toggleSidebar}
        className="text-color lg:hidden h-14 text-[24px] px-3"
      >
        {isSidebarOpen ? <RiMenuFoldLine /> : <RiMenuUnfoldLine />}
      </button>
      <div className="flex">
        <HeaderProfile />
        <div className="flex justify-center text-color mr-8 ml-5">
          <button onClick={toggleTheme}>
            <span>
              <CgDarkMode />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
