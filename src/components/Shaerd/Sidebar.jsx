import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { AiOutlineUpload } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Sidebar = () => {
  const menus = [
    { name: "Dashboard", link: "/dashboard", icon: MdDashboard },
    { name: "Upload", link: "/upload", icon: AiOutlineUpload },
  ];

  const [open,setOpen] =useState(true);

  return (
    <section className="flex gap-6 ">
      <div className={`bg-gray-100  bg-white p-4 shadow-2xl rounded-2xl	box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); min-h-screen  ${open ? 'w-72':'w-16' }  text-black text-size[4px] px-4 `}>
      <div className="flex">
        <AiOutlineArrowLeft  size={26} className="cursor-pointer absolute bottom-[10px] left-[270px]" onClick={() => setOpen(!open)} />
      </div>

      <div className="mt-14 flex flex-col gap-4 relative">
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-indigo-400 rounded-md"
          >
            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
            <h2 
              style={{
                transitionDelay: `${i + 3}00ms`,
              }}
            
            className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>{menu?.name}</h2>
          </Link>
        ))}

        
      </div>
      </div>
      <div className="m-3 text-xl text-gray-900 font-semibold">Side bar</div>
    </section>
  );
};
export default Sidebar;
