import React from 'react'
import Sidebar from '../components/Sidebar'
import {Outlet} from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='w-screen absolute  flex '>
      <Sidebar className=' w-2/6  '/>
      <Outlet className=' w-4/6'/>
    </div>
  )
}

export default Dashboard