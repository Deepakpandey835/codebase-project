import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import menubutton from "../assets/image/menubutton.png"
import {AiOutlineMenu,AiOutlineCloseCircle} from "react-icons/ai"

const NavBar = () => {
    const[path,setPath]=useState("")
    let [open, setOpen] =useState(false);

    let Links;
    let menu;
    if(path=="/dashboard" || path=="/sidebar" || path=="/upload"){
        menu=(
            <>
            <div className='md:flex md:items-center pr-4 '>
                <h2 className="text-black">krishna</h2>
                <img src={menubutton} alt="Your Image" className="w-6 h-6 relative flex-col  items-start w-6 h-6 relative flex-col justify-start items-start inline-flex mr-6" />
                <button type="" className='border pl-5 bg-indigo-500 rounded-md text-white pr-3 inline-flex'>logout
                </button>
                </div>
            </>
        )}
    else{

    Links =[
        {name:"Home",link:"/Home"},
        {name:"About ",link:"/sidebar"},  
        {name:"Contact ",link:"/Contact"},
        {name:"Login ",link:"/Login"},
        {name:"Signup ",link:"/SignUp"},
      ]
      menu=(<ul className={`md:flex md:items-center md:pt-8 md:pb-0 mr-16 pb-12 absolute  md:static bg-white gap-2  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
      {
          Links.map((link) => (
          <li className='md:ml-8 md:my-0 my-7 font-semibold'>
              <a href={link.link} className='text-black  hover:text-indigo-500 duration-500 '>{link.name}</a>
          </li>)
          )
          
      }
      
  </ul>)
    };
 
     useEffect(
        ()=>{
            setPath(window.location["pathname"])
            console.log(path)
        }
     )

    return (
        
        <div className=' w-full fixed top-0 bg-white z-10  left-0'>
           <div className='md:flex items-center justify-between  text-indigo-500 text-xl py-4 md:px-5 px-7 bg-white shadow hover:border-2 hover:border-indigo-400'>
      
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1 pl-14'>                
                <span>{"{"}Code base{"}"}
            </span>
            </div>
            
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <AiOutlineCloseCircle/> : <AiOutlineMenu />
                }
            </div>
            
            {menu}
            
           </div>
           
        </div>
    );
};

export default NavBar;

