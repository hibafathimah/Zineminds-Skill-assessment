import React from 'react';
import img1 from '../assets/images/logo1 withoutbg.png'
import '../assets/styles/styles.css'
const Navbar = () => {
  return (
    <>
        <div className='max-w-screen justify-between  h-[50px] bg-blue flex items-center shadow-btn'>
            <div className='flex items-center'>
                <img src={img1} alt="" className=" ml-[15px] animate__animated animate__zoomIn animate__delay-1s" />
                <button className="mt-2 animate__animated animate__zoomIn animate__delay-1s ml-1 w-[150px] h-[33px] rounded-[20px] border-2 mb-[10px] text-primary font-600 border-primary">
                    <span>On Teams</span>
                    <span className="fa-solid fa-caret-down pl-3" style={{ color: '#2caeff' }}></span>
                </button>
                <div className="flex mb-[10px]">
                    <span className="fa fa-solid fa-plus animate__animated animate__zoomIn animate__delay-1s pl-3 pt-5 text-white"></span>
                    <span className="line pl-4 mt-3">|</span>
                    <span className="fa-solid fa-gear animate__animated animate__zoomIn animate__delay-1s pl-4 pt-5 text-white"></span>
                    <span className="line pl-4 mt-3">|</span>
                    <span className="fa-solid fa-align-left animate__animated animate__zoomIn animate__delay-1s pl-4 pt-5 text-white"></span>
                </div>
            </div>

            <div className="flex mr-[30px]">
                <div className="relative">
                    <input type="text"
                    className="pl-10 pr-4 py-2 w-full h-[30px] border border-gray rounded-md placeholder-gray text-gray focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i className="fas fa-search text-gray"></i>
                    </div>
                </div>
            </div>

        
        </div>
    </>
  );
};

export default Navbar;

