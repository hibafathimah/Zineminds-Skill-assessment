import React from 'react';
import user from '../UserData/User.json';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import mark from '../assets/images/cross-circle.png';
import clock from '../assets/images/clock-three.png';
import minus from '../assets/images/minus-circle.png';
import circle from '../assets/images/circle.png';
import checkcircle from '../assets/images/check-circle.png'

const Table = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(user.user);
  const [fav, setFav] = useState(false);
  const [viewall, setViewall] = useState(false);
  const datasPage = 5;
  const lastIndex = page * datasPage;
  const firstIndex = lastIndex - datasPage;
  const totalpage = Math.ceil(user.user.length / datasPage);
  const datas = viewall ? data : data.slice(firstIndex, lastIndex);
  const num = [...Array(totalpage + 1).keys()].slice(1);

  const previouspage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };
  const nextPage = () => {
    if (page !== totalpage) {
      setPage(page + 1);
    }
  };
  const nextcomponent = (id) => {
    setPage(id);
  };
  const onFavourite = (e) => {
    const userToUpdate = user.user.find((u) => u.id == e);
    userToUpdate.favourite = !userToUpdate.favourite;
    setFav({...userToUpdate});
  };

  const handleSearch = (e) => {
    let searchUser;
    if (e.target.value !== "") {
      searchUser = user.user.filter((number) =>
        number.name.toLowerCase().includes(e.target.value.trim().toLowerCase())
      );
    } else {
      searchUser = user.user;
    }
    setData(searchUser);
    console.log(searchUser);
  };


  return (
    <>
    {/* search bar section */}
    <div className="ml-3  mt-4">
      <div className="flex justify-between items-center">
        <div className="w-[300px] h-[35px] rounded-[8px] border-1 focus:border-primary focus:rounded-[8px] border-gray hover:border-primary hover:border-2 shadow-ip">
          <div className="relative">
            <input type="text" onChange={handleSearch} className="w-full rounded-[8px]  pl-12 pt-2" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <i className="fas fa-search pt-2 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray"></i>
          </div>
        </div>
        <div className="num-slider flex items-center">
          <button className="fa fa-chevron-left cursor-pointer" onClick={previouspage}></button >
          {/* <button className="num-btn px-3">1</button>
          <button className="num-btn px-3">2</button>
          <button className="num-btn px-3">3</button>
          <button className="num-btn px-3">4</button>
          <button className="num-btn px-3">5</button> */}
          {num.map((n, i) => (
            <button
              className={`page-item ${page === n ? "active" : ""}`}
              key={i}
            >
              <Link to="#" onClick={() => nextcomponent(n)} className="pl-5 pr-3">
                {n}
              </Link>
            </button>
          ))}
          <button className="fa fa-chevron-right pl-3 cursor-pointer" onClick={nextPage}></button>
          <div className="line-inner-two pl-3">|</div>
          <div><i className="fa fa-gear pl-3 pr-3 cursor-pointer"></i></div>
        </div>
      </div>
    </div>

    {/* table section */}
    <div className='mt-5 ml-[30px] h-[65%]'>
          <table className='w-[100%]' >
          <thead>
            <tr className="border-b-lightgray border-b">
              <th>
                <label >
                  <input type="radio" name="radio" />
                  <span className="mt-4"></span>
                  <span className="line-inner-two pl-2 pr-3">|</span>
                </label>
              </th>
              <th className="mr-3">Name{" "}
                <i className="fa fa-caret-down pl-[40px]"></i>
                <span className="line-inner-two pl-2 pr-3">|</span>
              </th>
              <th className="mr-3">Status{" "}
                <i className="fa fa-caret-down pl-[40px]"></i>
                <span className="line-inner-two pl-2 pr-3">|</span>
              </th>
              <th className="mr-3 ">Phone Number{" "}
                <i className="fa fa-caret-down pl-[40px]"></i>
                <span className="line-inner-two pl-2 pr-3">|</span>
              </th>
              <th className="mr-3">Email Id{" "}
                <i className="fa fa-caret-down pl-[40px]"></i>
                <span className="line-inner-two pl-2 pr-3">|</span>
              </th>
              <th className="mr-3">Favorite{" "}
                <i className="fa fa-caret-down pl-[40px]"></i>
                <span className="line-inner-two pl-2 pr-3">|</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {datas.map((user, index) => (
              <tr key={index}>
              <td className='text-[16px] text-left pt-[15px]'>
                <label>
                  <input type="radio" className="mr-4 bg-primary" />
                  <span className='w-4 h-4 bg-primary'></span>
                </label>
              </td>
              <td className='text-[16px] text-left pt-[15px] '>{user.name}</td>
              <td className="text-[16px] text-left pt-[15px] pr-5 w-[180px] flex">
              {user.status === "Available" ? (
                        <span>
                          <img src={checkcircle}  alt="" className='mt-[1px] mr-2 '/>
                        </span>
                      ) : user.status === "Appear offline" ? (
                        <span>
                          <img src={mark} alt="" className='mr-2 mt-1'/>
                        </span>
                      ) : user.status === "Be right back" ? (
                        <span>
                          <img src={clock} alt="" className='mr-2 mt-1' />
                        </span>
                      ) : user.status === "Do not disturb" ? (
                        <span>
                          <img src={minus} alt="" className='mr-2 mt-1'/>
                        </span>
                      ) : user.status === "Appear away" ? (
                        <span>
                          <img src={clock} alt="" className='mr-2 mt-1'/>
                        </span>
                      ) : user.status === "Busy" ? (
                        <span>
                        <img src={circle} alt="" className='mr-2 mt-1' />
                        </span>
                      ) : null}
                      {user.status}
              </td>
              <td className='text-[16px] text-left pt-[15px]'>{user.phone}</td>
              <td className='text-[16px] text-left pt-[15px]'>{user.email}</td>
              <td className='text-[16px] text-left pt-[15px]'>
              <button
                        className="toggle-fav"
                        onClick={() => onFavourite(user.id)}
                      >
                        <i className={user.favourite ? "fa fa-solid fa-heart text-primary" : "fa fa-regular fa-heart text-primary"} />
                      </button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
    </div>
    
    {/* table footer */}
    <div class="text-center font-[600] text-[16px] border-t border-lightgray ml-[35px] ">
            <span class="text-primary ">{viewall ? (
            <button
              className="viewall"
              onClick={() => setViewall((prev) => !prev)}
            >
              View Less
            </button>
          ) : (
            <button
              className="viewall"
              onClick={() => setViewall((prev) => !prev)}
            >
              View All
            </button>
          )}</span>
    </div>
    </>
  );
};

export default Table;