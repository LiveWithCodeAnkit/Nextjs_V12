import React, { useState, useEffect, ReactNode } from "react";
import { parseCookies, setCookie } from "nookies";
import { useRouter } from "next/router";
import { Layout_UserFragment } from "generated/graphql";
import { useCurrentUser } from "./hooks";
import { LayoutContext } from "../../lib/LayoutContext";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode | ((props: LayoutChildProps) => React.ReactNode);
  forbiddenWhen?: AuthRestrict;
}

interface LayoutChildProps {
  currentUser?: Layout_UserFragment | null;
}

export enum AuthRestrict {
  NEVER = 0,
  LOGGED_OUT = 1 << 0,
  LOGGED_IN = 1 << 1,
}

const Layout = ({
  forbiddenWhen = AuthRestrict.LOGGED_OUT,
  children,
}: LayoutProps) => {
  const cookies = parseCookies();
  const router = useRouter();
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (cookies.theme == "light") {
      setTheme("dark");
    }
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { currentUser, loading } = useCurrentUser();
  const toggleSidebar = isSidebarOpen ? "ml-64 lg:ml-0" : "";

  const never = forbiddenWhen & AuthRestrict.NEVER;
  const forbiddenLoggedIn = forbiddenWhen & AuthRestrict.LOGGED_IN;
  const forbiddenLoggedOut = forbiddenWhen & AuthRestrict.LOGGED_OUT;
  const loggedIn = !!currentUser && forbiddenLoggedIn;
  const loggedOut = !currentUser && forbiddenLoggedOut;
  const isLoginForm = !currentUser && forbiddenLoggedIn;

  const renderChildren = (props: LayoutChildProps) => {
    const inner = typeof children === "function" ? children(props) : children;
    if (!loading && loggedOut) {
      router.push("/login");
    } else if (!loading && loggedIn) {
      router.push("/dashboard");
    } else if (!never) {
      return inner;
    }
    return inner;
  };

  return (
    <div className={`${theme}`}>
      <div className="lg:overflow-visible bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
        <div
          className={`${toggleSidebar} ${
            !isLoginForm ? "lg:pl-64" : ""
          }  min-h-screen w-screen lg:w-auto transition-position `}
        >
          <LayoutContext.Provider
            value={{
              currentUser: currentUser || null,
            }}
          >
            {!isLoginForm && (
              <div>
                <Header
                  toggleTheme={() => {
                    setTheme(theme == "dark" ? "light" : "dark");
                    setCookie(null, "theme", `${theme}`);
                  }}
                  toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                  isSidebarOpen={isSidebarOpen}
                />
                <Sidebar isSidebarOpen={isSidebarOpen} theme={theme} />
              </div>
            )}

            <section className={`${!isLoginForm ? "p-10" : ""}`}>
              {loading ? "Loading..." : renderChildren({ currentUser })}
            </section>
          </LayoutContext.Provider>
        </div>
      </div>
    </div>
  );
};
export default Layout;
