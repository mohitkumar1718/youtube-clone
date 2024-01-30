import React from 'react'
import {Outlet} from "react-router-dom"
import Sidebar from './Sidebar'
import Header from './Header'
const Body = () => {
  return (
    <div className='flex '>
     <Header/>
     <Sidebar/>
     <Outlet/>
    </div>
  )
}

export default Body