/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef } from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import LogoutIcon from "@mui/icons-material/Logout";
import { useContextApp } from "@/app/contextApp";
import { SvgIconProps } from "@mui/material";
import { AppType, SideBarMenuItem } from "../types/AppType";

function SideBar() {
  const {
    openSideBarObject: { openSideBar, setOpenSideBar },
    sideBarMenuObject: { sideBarMenu, setSideBarMenu },
  } = useContextApp();

const sideBarMenuRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  
  function handleClickOutside(event: MouseEvent) {
    if (
      sideBarMenuRef.current && 
      !sideBarMenuRef.current.contains(event.target as Node)
    )
       {
      setOpenSideBar(false);
    }
  }

  if (openSideBar) {
    document.addEventListener("mousedown", handleClickOutside);
  } else {
    document.removeEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };

}, [openSideBar, setOpenSideBar]);

  return (
    <div
    ref={sideBarMenuRef }
      className={`${
        openSideBar
          ? "w-[280px] fixed shadow-xl"
          : "w-[97px] max-[940px]:hidden"
      } h-screen py-10 bg-white flex flex-col items-center justify-between z-[90] transition-all `}

      // className="w-[97px] max-h-screen py-8 bg-white flex flex-col items-center justify-between max-[940px]:hidden"
    >
      <Logo />
      <Menu />
      <Profile />
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Profile() {
  const {
    openSideBarObject: { openSideBar },
  } = useContextApp();
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-orange-600 rounded-md"></div>
      {openSideBar && (
        <ul>
          <li className="font-bold text-[14px]">Dummy Name</li>
          <li className="text-slate-400 text-[11px]">dummy@gmail.com</li>
        </ul>
      )}
    </div>
  );
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars

// Menu
function Menu() {
   const {
    openSideBarObject: { openSideBar, setOpenSideBar },
    sideBarMenuObject: { sideBarMenu, setSideBarMenu },
  } = useContextApp();
  const iconMap: Record<string, React.ComponentType<SvgIconProps>> = {
    "1": BorderAllIcon,
    "2": SplitscreenIcon,
    "3": LogoutIcon,
  };
   
  function handleClickedItem (id:number) {
    const updateMenuSideBar = sideBarMenu.map((item) => {
      if (item.id === id) {
        return { ...item, isSelected: true };
      } 
        return {...item,  isSelected: false };
      
    })

    setSideBarMenu(updateMenuSideBar);
  }
  // const {
  //   openSideBarObject: { openSideBar },
  // } = useContextApp();

  return (
    <div className="flex flex-col gap-6 ">
    {sideBarMenu.map((menuItem: SideBarMenuItem) => {
  const IconComponent = iconMap[menuItem.id];
  return (
    <div
      onClick={() => {
        if (menuItem.id === 1 || menuItem.id === 2) {
          handleClickedItem(menuItem.id);
        }
      }}
      key={menuItem.id}
      className="flex items-center gap-2 cursor-pointer"
    >
      <IconComponent sx={{ fontSize: "25px" }} />

      {openSideBar && (
        <span
          className={`${
            menuItem.isSelected ? "text-orange-600" : "text-slate-300"
          }`}
        >
          {menuItem.name}
        </span>
      )}
    </div>
  );
})}
      {/* Projects */}
      {/* <div className="flex items-center gap-2">
        <BorderAllIcon
          className="text-orange-600 cursor-pointer"
          sx={{ fontSize: "27px" }}
        />
        {openSideBar && <span className="text-slate-400">All Projects</span>}
      </div> */}

      {/* Tasks */}
      {/* <div className="flex items-center gap-2">
        <SplitscreenIcon
          className="text-orange-600 cursor-pointer"
          sx={{ fontSize: "25px" }}
        />
        {openSideBar && <span className="text-orange-600">All Tasks</span>}
      </div> */}
      {/* <div className="flex items-center gap-2">
        <LogoutIcon
          className="text-slate-300 cursor-pointer"
          sx={{ fontSize: "27px" }}
        />
        {openSideBar && <span className="text-orange-400">Log Out</span>}
      </div> */}
    </div>
  );
}

function Logo() {
  const {
    openSideBarObject: { openSideBar },
  } = useContextApp();
  return (
    <div className="flex items-center gap-2  justify-center">
      <TaskAltIcon
        className="text-orange-600 font-bold"
        sx={{ fontSize: "41px" }}
      />
      {openSideBar && (
        <div className="text-xl flex items-center gap-1 ">
          <span className="font-semibold">Project</span>
          <span className="text-slate-600">Master</span>
        </div>
      )}
    </div>
  );
}

export default SideBar;
