import React from 'react'
import Dashboard from './components/Dashboard'
import Case from './components/dummy/Case'
import { Route, Routes } from 'react-router-dom'
import Customerprofile from './components/dummy/Customerprofile'
import Teams from './components/dummy/Teams'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/teams' element={<Teams/>}/>
      <Route path='/case' element={<Case/>}/>
      <Route path='/profile' element={<Customerprofile/>}/>
    </Routes>
      
    </>
  )
}

export default App
