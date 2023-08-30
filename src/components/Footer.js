import React from 'react';

const Footer = () => {
  return (
    <>
    <footer className=" bg-slate-900 text-white py-20 px-10 relative mt-10 w-full bottom-0">
      <div className="container static mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
            <h4 className="text-lg font-bold mb-4">{"{"}High school{"}"}
</h4>
            <p className="text-sm">With iMeet's robust collaboration features, <br/>you can easily connect with fellow developers, <br/>share code snippets, and brainstorm ideas in real-time</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-10 mb-8">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="text-sm">
              <li className='no-underline hover:underline'>Home</li>
              <li className='no-underline hover:underline'>About</li>
              <li className='no-underline hover:underline'>Term & Condition</li>
              <li className='no-underline hover:underline'>Privacy & policy</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <p className="text-sm">+91000000</p>
            <p className="text-sm">imeet@gmail.com</p>
            <p className="text-sm">Mathura utterpardesh</p>
          </div>
        </div>
        </div>
      
    </footer>
    <div className='w-full relative bottom-0 h-14  bg-[#0E2A47]  text-white-500 '>
      
    <div className='text-center items-center py-4 text-white '>
    copyright @ 2023 <strong><span>iMeet</span></strong>
    </div>
  
  </div>
  </>
  );
};

export default Footer;