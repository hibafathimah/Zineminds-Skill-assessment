import React from 'react'
import Topbar from './Topbar'
import Leftpart from './Leftpart'
import Rightpart from './Rightpart'


const Rightside = () => {
  return (
    <>
    <div className='flex flex-col w-[95%]'>
        <Topbar/>
        <div className='flex w-[95%] h-[90%] mt-5 shadow-btn mx-auto rounded-[20px] mb-5 border-gray border-1'>
            <Leftpart/>
            <Rightpart/>
        </div>
    </div>
    </>
  )
}

export default Rightside
