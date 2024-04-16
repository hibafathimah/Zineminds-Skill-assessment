import React from 'react';

const Leftpart = () => {
  return (
    <div className=" w-[6%] h-full border-tl-[18px] border-bl-[18px] shadow-ip rounded-bl-[20px] rounded-tl-[20px]">
      <div className="flex flex-col gap-6 items-start pl-3 pt-3 pr-4 text-blue">
        <div className="p-3 mb-3 border-2 border-blue rounded-[50%] hover:border-primary">
          <i className="fa fa-bars"></i>
        </div>
        <div className="pl-3 hover:text-primary">
          <i className="fa fa-search"></i>
        </div>
        <div className="pl-3  hover:text-primary">
          <i className="fa fa-regular fa-user"></i>
        </div>
        <div className="pl-3 hover:text-primary">
          <i className="fa fa-gear"></i>
        </div>
      </div>
    </div>
  );
};

export default Leftpart;
