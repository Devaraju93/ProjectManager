/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CircleIcon from "@mui/icons-material/Circle";

function SingleProjectCard() {
  return (
    <li className="w-[300px]  max-md:w-[96%] flex flex-col gap-8 rounded-lg p-7 bg-white">
      <ProjectCardHeader />
      <ProjectCardBody />
      <ProjectCardFooter />
    </li>
  );
}

function ProjectCardHeader() {
  return (
    <div className="flex justify-between items-center">
      {/* title and icon */}
      <div className="flex gap-3 items-center">
        {/* project icon */}
        <div className="bg-orange-600 flex justify-center items-center w-[38px] h-[38px] rounded-md">
          <SplitscreenIcon className="text-white" sx={{ fontSize: "19px" }} />
        </div>
        {/* project title */}
        <div className="flex flex-col">
          <span className="font-semibold text-[19px]">Project Title</span>
          <span className="text-slate-400 text-[13px]">2 days ago</span>
        </div>
        {/* Progress bar */}
      </div>

      {/* More Option */}
      <div>
        <MoreVertIcon className="text-slate-400 text-[19px] cursor-pointer" />
      </div>
    </div>
  );
}

function ProjectCardBody() {
  return (
    <ul className="text-slate-400 text-[13px] flex flex-col gap-2 ml-3">
      <li className="flex gap-2 items-center">
        <CircleIcon className="text-[8px]" />
        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
      </li>

      <li className="flex gap-2 items-center">
        <CircleIcon className="text-[8px]" />
        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
      </li>

    </ul>
  );
}

function ProjectCardFooter (){
    return (
        <div className="flex gap-4 flex-col mt-2">
            <div className="text-[12px] gap-3 items-center flex w-full">
                <div className="w-full h-[7px] rounded-xl bg-slate-100 overflow-hidden">
                    <div className="w-1/2 bg-orange-600 h-full rounded-r-xl"></div>
                </div>

            </div>

            <div className="flex justify-between">                
                <p className="text-[13px] text-slate-400 ">
                On Progress
                </p>
                <div className="flex gap-1 text-[13px]">
                    {/* List icon */}
                 <p>78%</p>
                </div>
            </div>

        </div>
    )
}


export default SingleProjectCard;
