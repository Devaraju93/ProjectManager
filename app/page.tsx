/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React from "react";
import { useCallback,useState } from "react";
import AllProjects from "./Pages/AllProjects/AllProjects";
import AllTasksContainer from "./Pages/AllTasks/AllTasks";
import { useContextApp } from "./contextApp";
import Sidebar from "./Components/sidebar";

export default function Home() {

  const {
    openSideBarObject: { openSideBar },
    sideBarMenuObject : {sideBarMenu}
  } = useContextApp();

const componentMap : Record <number, React.ReactNode> = {
  1 : <AllProjects/>,
  2 : <AllTasksContainer/>
}

const componentKey = sideBarMenu.findIndex((item) => item.isSelected);
const selectedComponent = componentMap[componentKey + 1 ] || null;


  return (
  <div className="flex w-full h-screen poppins bg-white">
    {openSideBar && (
    <div className="w-full h-full z-50 bg-slate-800 fixed opacity-50"></div>
       )
    }
    {/* sidebar */}
    <Sidebar/>
    {/* All Projects Page */}
    {/* <AllProjects/>  */}
    {/* <AllTasksContainer/> */}
    {selectedComponent && selectedComponent}
    </div>
  )
}
