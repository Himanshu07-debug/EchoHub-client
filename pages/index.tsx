import Image from "next/image";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { CiSearch, CiUser } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa";
import { PiBookmarkSimple } from "react-icons/pi";
import FeedCard from "@/components/FeedCard";

// Interface is just a Struct / template of C++
interface TwitterSidebarButton {
  title : string;
  icon : React.ReactNode;
}

const SideBarMenuItems : TwitterSidebarButton[] = [
  {
    title : "Home",
    icon : <GoHomeFill />
  },
  {
    title : "Explore",
    icon : <CiSearch />
  },
  {
    title : "Notifications",
    icon : <IoMdNotificationsOutline />
  },
  {
    title : "Messages",
    icon : <FaRegEnvelope />
  },
  {
    title : "Bookmarks",
    icon : <PiBookmarkSimple />
  },
  {
    title : "Profile",
    icon : <CiUser />
  },
  
]


export default function Home() {
  return (
    <div> 
      <div className=" grid grid-cols-12 px-56 w-screen h-screen ">

        <div className=" col-span-3 ml-28">

          <div className=" text-2xl p-3 w-fit hover:bg-gray-900 rounded-full cursor-pointer transition-all mt-2">
            <BsTwitterX />
          </div>

          <div>

            <ul>
            {
              SideBarMenuItems.map((item) => (
              <li 
              className="flex justify-start font-semibold items-center px-3 py-2 gap-3 w-fit hover:bg-gray-900 rounded-full cursor-pointer transition-all mt-2"
              key={item.title}>
                <span className="text-3xl">{item.icon}</span>
                <span className="text-xl">{item.title}</span>
              </li>))
            }
            </ul>

            <div className="pr-12">
              <button className="bg-[#1d96f0] font-semibold mt-5 p-3 rounded-full w-full text-xl">Tweet</button>
            </div>

            

          </div>

          

        </div>
        <div className=" col-span-5 border-x-2 border-gray-700 h-screen overflow-y-scroll  ">
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
        </div>


        <div className=" col-span-3"></div>

      </div>
    </div>
   
  );
}
