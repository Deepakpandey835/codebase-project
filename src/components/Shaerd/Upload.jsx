
import React from 'react'
import upload from "../../assets/image/upload.png"

function Upload() {
  return (
        <div className='flex justify-center '>
       <div class="flex relative mt-24 mb-10 justify-center items-center w-[583px] h-[583px] bg-white rounded-full shadow-2xl hover:border-2 hover:border-indigo-400 border border-white backdrop-blur-sm">
       <div class="w-[484px] h-[484px] bg-white rounded-full shadow-2xl hover:border-2 hover:border-indigo-400">
      <div className="relative justify-center text-center h-screen ">
      <img src={upload} alt="Your Image" className=" relative top-[140px] left-[120px]  " />
        <p className='relative  p-4 justify-text-center top-[160px] '>Upload</p>
        <p className='relative  justify-text-center top-[150px] '>Max 20 MB</p>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Upload
