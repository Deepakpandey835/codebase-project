import React,{useEffect} from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidDownload } from "react-icons/bi";
import { Link } from "react-router-dom";
import pic from "../../assets/image/pic.png"
import pic1 from "../../assets/image/pic1.png"
import pic2 from "../../assets/image/pic2.png"



function Dashboard() {
     
  

  return (
    <div>
    <from ClassName='w-[40px] relative '>
      <div className="relative flex justify-center z-index: 20; pt-40 px-6 "   >
              <input type="search" placeholder='Search code.... '  className='w-[764px] p-4 rounded-full bg-white-100 hover:border-2 hover:border-indigo-400 bg-white shadow-2xl rounded-2 box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);hover:border-2'></input>
              <button className=  "relative right-[80px] top1/2-translate-y-1/2 p-4 rounded-full">
                   <AiOutlineSearch/>   
              </button>
      </div>
    </from>

    <div  className=" flex justify-center py-12">
              <div className="w-[764px] h-[150px] pl-4 py-3 mx-auto  bg-white-100 rounded-2xl hover:border-2 hover:border-indigo-400 bg-white shadow-2xl rounded-2 box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);">
              <img src={pic} alt="Your Image" className="w-[114px] h-[114]px  py-2 pl-2 rounded-full shadow" />
              <h1 className=" left-40 md:text-xl text-sm  font-bold  relative bottom-32">Face Machine using Python</h1>
              <p1 className="left-40 relative bottom-20 w-[312px] text-neutral-900 text-[10px] font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p1>

              <button className="relative h-[42px] w-[80px] left-[320px] bottom-20 border pl-5 bg-indigo-500 rounded-md
              text-4xl text-white">
                <BiSolidDownload/>
              </button>
              </div>  
        </div>

        <div  className=" flex justify-center py-12">
              <div className="w-[764px] h-[150px] pl-4 py-3 mx-auto  bg-white-100 rounded-2xl hover:border-2 hover:border-indigo-400 bg-white shadow-2xl rounded-2 box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);">
              <img src={pic1} alt="Your Image" className="w-[114px] h-[114]px  py-2 pl-2 rounded-full shadow" />
              <h1 className=" left-40 md:text-xl text-sm  font-bold  relative bottom-32">ML/AI Project Steps</h1>
              <p1 className="left-40 relative bottom-20 w-[312px] text-neutral-900 text-[10px] font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p1>

              <button className="relative h-[42px] w-[80px] left-[320px] bottom-20 border pl-5 bg-indigo-500 rounded-md
              text-4xl text-white">
                <BiSolidDownload/>
              </button>
              </div>  
        </div>

      <div  className=" flex justify-center py-12">
              <div className="w-[764px] h-[150px] pl-4 py-3 mx-auto  bg-white-100 rounded-2xl hover:border-2 hover:border-indigo-400 bg-white shadow-2xl rounded-2 box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);">
              <img src={pic2} alt="Your Image" className="w-[114px] h-[114]px  py-2 pl-2 rounded-full shadow" />
              <h1 className=" left-40 md:text-xl text-sm  font-bold  relative bottom-32">Face Machine using Python</h1>
              <p1 className="left-40 relative bottom-20 w-[312px] text-neutral-900 text-[10px] font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p1>

              <button className="relative h-[42px] w-[80px] left-[320px] bottom-20 border pl-5 bg-indigo-500 rounded-md
              text-4xl text-white">
                <BiSolidDownload/>
              </button>
              </div>  
        </div>
      <div className="flex justify-center py-4">
        <button className="border w-[157px] h-14 bg-red-500 text-white text-2xl rounded-2xl pr-2 pl-2">
          Show more
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
