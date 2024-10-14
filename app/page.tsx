import Sidebar from "./Components/Sidebar";
import React from "react";
import AllProjects from "./Pages/AllProjects/AllProjects";
import AllTasksContainer from "./Pages/AllTasks/AllTasks";

export default function Home() {
  return (
  <div className="flex w-full h-screen poppins bg-white">
    {/* sidebar */}
    <Sidebar/>
    {/* All Projects Page */}
    <AllProjects/> 
    <AllTasksContainer/>
    </div>
  )
}
