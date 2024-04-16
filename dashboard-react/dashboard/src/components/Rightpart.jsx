import React from 'react'
import '../assets/styles/styles.css'
import Table from './Table'


const Rightpart = () => {
  return (
    <div>
       <div className="flex">
            <div>
            <p className="text-[30px] font-[600] pt-2 pl-4">Search</p>
            <p className="pl-4 found-text text-gray">Found 7,876 Users</p>
            </div>
            <div className="flex items-center ml-[500px] space-x-4 pt-3 pr-3">
            <button className="rounded-[20px] border-2 border-primary text-primary bg-white font-[600] h-[35px] w-[100px]"><span className="pr-2"><i className="fa fa-comment"></i></span>Chat</button>
            <button className="rounded-[20px] border-2 border-primary text-white  bg-primary font-[600] h-[35px] w-[100px]"><span className="pr-2"><i className="fa fa-phone"></i></span>Call</button>
            <span className="line-inner-two">|</span>
            <i className="fa fa-heart icon-right text-primary"></i>
            <i className="fa fa-rotate-right icon-right text-primary"></i>
            </div>
        </div>
        <Table/>
    </div>
  )
}

export default Rightpart
