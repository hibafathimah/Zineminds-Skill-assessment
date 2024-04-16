import React from 'react'
import img2 from '../assets/images/message-icon.png'
const Sidebar = () => {
  return (
    <>
        <div className="bg-blue sidebar h-screen w-[23%] border-r-[8px] border-gray">
        <div className="sb-top h-[40%] border-b-[8px] border-gray">
        </div>
        <div className="bg-blue">
            <h6 className="text-center pt-4 mt-3 text-white">Welcome Nikki Wolf!</h6>
            <img src={img2} alt="" className="w-[38%] ml-[100px] mt-3" />
            <button className="w-[250px] h-[35px] mx-[40px] rounded-[20px] border-2 mb-[10px] text-primary font-600 border-primary bg-white mt-4"><span><i className="fa fa-user mr-3"></i></span>Quick connect</button>
            <button className="w-[250px] h-[35px] mx-[40px] rounded-[20px] border-2 mb-[10px] text-primary font-600 border-primary bg-white mt-4"><span><i className="fa fa-braille mr-3"></i></span>Quick connect</button>
            <button className="w-[250px] h-[35px] mx-[40px] rounded-[20px] border-2 mb-[10px] text-primary font-600 border-primary bg-white mt-4"><span><i className="fa fa-check task mr-3"></i></span>Create task</button>
            <button className="w-[250px] h-[35px] mx-[40px] rounded-[20px] border-2 mb-[10px] text-primary font-600 border-primary bg-white mt-4"><span><i className="fa fa-envelope mr-3"></i></span>Compose email</button>
        </div>
        </div>

    </>
  )
}

export default Sidebar
