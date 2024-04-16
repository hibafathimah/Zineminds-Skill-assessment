import React from 'react'
import '../assets/styles/styles.css'
import { Link } from 'react-router-dom'
const Topbar = () => {
  return (
    <>
        <div className="flex items-center justify-start mt-3 mx-auto h-[60px] w-[95%] shadow-md">
        <span className="fa fa-home animate__animated animate__zoomIn animate__delay-1s pl-3 pt-4 text-blue" ></span>
        <span className="line-inner pl-3">|</span>
        <Link to='/profile'>
          <div className=" flex items-center animate__animated animate__zoomIn animate__delay-1s">
            <span className="fa-regular fa-user pl-3 pt-4  text-blue" ></span>
            <span className="pl-3 pt-[15px] ">Customer profile</span>
        </div>
        </Link>

        <span className="line-inner pl-4">|</span>
        <Link to='/case'>
        <div className=" flex items-center animate__animated animate__zoomIn animate__delay-1s"> 
            <span className="fa-solid fa-briefcase pl-3 pt-4 text-blue" ></span>
            <span className="pl-3 pt-[15px] ">Case</span>
        </div>
        </Link>
        <span className="line-inner pl-3">|</span>
        <Link to='/team'>
        <div className=" flex items-center animate__animated animate__zoomIn animate__delay-1s"> 
            <span className="fa-solid fa-users pl-3 pt-4 text-blue" ></span>
            <span className="pl-3 pt-[15px] ">Teams</span>
        </div>
        </Link>
        <span className="line-inner pl-3">|</span>
        </div>
    </>
  )
}

export default Topbar
