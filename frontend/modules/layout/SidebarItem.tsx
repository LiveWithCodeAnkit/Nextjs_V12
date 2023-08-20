import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { sideMenu } from "@constants/layout";

const SidebarItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleSubItem = (menuUrl?: string) => {
    !!menuUrl ? router.push(`${menuUrl}`) : setIsOpen(!isOpen);
  };
  const activeClass = (menuUrl?: string) => {
    return router.pathname === menuUrl
      ? "text-black dark:text-white hover:dark:text-white font-medium"
      : "text-blue-600 hover:text-black dark:text-slate-300 dark:hover:text-white";
  };

  return (
    <ul>
      {sideMenu.map((menu, index) => (
        <li key={`${index}`}>
          <button
            onClick={() => toggleSubItem(menu.url)}
            className={`flex items-center py-3 ${activeClass(menu.url)}`}
          >
            <span className="mx-5 text-[17px]">{menu.icon}</span>
            <span className="text-sm">{menu.label}</span>
            {menu.items && (
              <span className="ml-6">
                {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </span>
            )}
          </button>
          {!!menu.items && (
            <ul
              className={`${
                isOpen ? "block" : "hidden"
              } bg-gray-100/75 dark:bg-slate-800/50`}
            >
              {menu.items.map((menuItems, index) => (
                <li key={`${index}`}>
                  <div className="py-3 px-6 text-sm">
                    <Link
                      href={menuItems.url}
                      className={`${activeClass(menuItems.url)}`}
                    >
                      {menuItems.label}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SidebarItem;
