import Sidebar from "./Components/Sidebar";
import React from "react";
import AllProjects from "./Pages/AllProjects/AllProjects";

export default function Home() {
  return (
  <div className="flex w-full h-screen poppins bg-white">
    <Sidebar/>
    <AllProjects/> 
    </div>
  )
}
