import React, { useState, useContext } from "react";
import Link from "next/link";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { profileNavbar } from "@constants/layout";
import { LayoutContext } from "../../lib/LayoutContext";
import { useLogout } from "./hooks";

const HeaderProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { onClick } = useLogout();
  const activeClass = isOpen ? "text-black dark:text-slate-400 " : " ";
  const { currentUser } = useContext(LayoutContext);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`${activeClass} relative text-color py-2 sm:px-3`}
    >
      <div className="flex items-center">
        <div className="mr-2 lg:mr-3">
          <img
            src={`${currentUser?.avatarUrl}`}
            alt={`${currentUser?.name}`}
            className="rounded-full w-6 bg-white"
          />
        </div>
        <span className="px-2 hidden sm:block">{currentUser?.name}</span>
        <span className="mr-2 lg:ml-3">
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </span>
      </div>
      <div
        className={` ${
          isOpen ? "block" : "hidden"
        } text-sm p-2 absolute mt-3 w-max left-[-35px] sm:left-0 md:pr-10 rounded-lg shadow-lg bg-white border-gray-100 dark:bg-slate-800 border dark:border-slate-700`}
      >
        {profileNavbar.map((items, index) => (
          <div key={`${index}`} className="text-color p-2 sm:px-3">
            <Link
              href={items.url}
              onClick={onClick}
              className="flex items-center "
            >
              <span className="text-base mr-2">{items.icon}</span>
              <span>{items.label}</span>
            </Link>
          </div>
        ))}
      </div>
    </button>
  );
};

export default HeaderProfile;
