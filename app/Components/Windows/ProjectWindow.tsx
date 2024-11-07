"use client"
import React from "react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useContextApp } from "@/app/contextApp";
import BorderAllIcon from '@mui/icons-material/BorderAll';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';


export function  ProjectWindow (){
    const {
        openProjectWindowObject : {openProjectWindow, setOpenProjectWindow},
    } = useContextApp();
}
return (
   <div
   className={`${ 
    openProjectWindow ? "block" : "hidden"
    } w-[48%] max-sm:w-[82%]  max-[600px]:w-[93%] z-[80] p-3 left-1/2 top-[47%] -translate-y-1/2
     -translate-x-1/2 absolute flex flex-col gap-3 border  border-slate-50  bg-white rounded-lg shadow-md
    `}
   >
  {/* header */}
  <Header/>
  {/* body */}
  <form
  onSubmit={(e) => e.preventDefault()}
  className="flex flex-col gap-2 pt-8 px-7 mt-3"
  >
   {/* Project Input */}
    <ProjectInput/>
  {/* Footer */}
    <Footer/>
  </form>
   </div>  
)
}

function Header (){
    const {
        openProjectWindowObject : { setOpenProjectWindow},
    } = useContextApp();
    return(
        <div className="">

        <div/>
    )
}


function ProjectInput (){
    return(
        <>
        </>
    )
}


function  Footer (){
    return(
        <>
        </>
    )
}