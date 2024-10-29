/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { useCallback,useState } from "react";
import AllProjects from "./Pages/AllProjects/AllProjects";
import AllTasksContainer from "./Pages/AllTasks/AllTasks";
import { useContextApp } from "./contextApp";
import Sidebar from "./Components/Sidebar";

export default function Home() {
  const {
    openSideBarObject: { openSidebar },
  } = useContextApp();
  const handleChange =(value: string) => {
    console.log("Input Changed: ", value);
  }
  return (
  <div className="flex w-full h-screen poppins bg-white">
    {/* sidebar */}
    <Sidebar/>
    {/* All Projects Page */}
    {/* <AllProjects/>  */}
    <AllTasksContainer/>
    </div>
  )
}
