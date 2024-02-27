import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function HomeLayOut() {
  return (
   
       
    <main>
         <Navbar/>
         <Outlet/>
    </main>
  )
}

export default HomeLayOut