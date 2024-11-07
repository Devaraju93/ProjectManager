/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { AppType, SideBarMenuItem } from "./types/AppType";

// setting the structure of the context

// setting the default State
const defaultState: AppType = {
  openSideBarObject: { openSideBar: false, setOpenSideBar: () => {} },
  sideBarMenuObject: { sideBarMenu: [], setSideBarMenu: () => {} },
};

// creating the context
const ContextApp = createContext<AppType>(defaultState);

// creating the provider
export default function ContextAppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [sideBarMenu, setSideBarMenu] = useState<SideBarMenuItem[]>([
    {
      id: 1,
      name: "All Projects",
      isSelected: true,
    },
    {
      id: 2,
      name: "All Tasks",
      isSelected: true,
    },
    {
      id: 3,
      name: "LogOut",
      isSelected: true,
    },
  ]);

  // update the window size
  useEffect(() => {
    function handleResize() {
      setIsMobileView(window.innerWidth < 768);
    }
 ;

  // Initial Check
  handleResize();

  // event listener for window resize
  window.addEventListener("resize", handleResize);

  // cleanup
  return () => {
    window.removeEventListener("resize", handleResize);
  };
},[])

// close the side bar when mobile view is false
useEffect(() => {
  if (!isMobileView) {
    setOpenSideBar(false);
  }
}, [isMobileView]);

useEffect ( () =>{
 setOpenSideBar(false);
},[sideBarMenu])


  return (
    <ContextApp.Provider
    value={{
      openSideBarObject: { openSideBar, setOpenSideBar },
      sideBarMenuObject: { sideBarMenu, setSideBarMenu },
    }}
  >
    {children}
  </ContextApp.Provider>
  );
}

export function useContextApp() {
  return useContext(ContextApp);
}
function handleResize(this: Window, ev: UIEvent) {
  throw new Error("Function not implemented.");
}
