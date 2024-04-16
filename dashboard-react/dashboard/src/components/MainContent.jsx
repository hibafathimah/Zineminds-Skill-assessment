import React from 'react'
import Sidebar from './Sidebar'
import Rightside from './Rightside'

const MainContent = () => {
  return (
    <>
    <div className='flex'>
        <Sidebar/> 
        <Rightside/>
    </div>
    </>
  )
}

export default MainContent
