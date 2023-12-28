import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [active,setActive] = useState('home')

  const handleActive=(txt)=>{
      setActive(txt)
  }
  return (
    <div className=' min-h-screen relative top-0 bottom-0 left-0 w-1/5 bg-slate-100 flex flex-col items-center  '>
      <h2 className='text-3xl font-bold sm:text-md text-blue-950 pt-5 pb-4'><span className='text-4xl font-bold text-orange-700 sm:text-md'>I</span>mage<span className='text-4xl font-bold text-orange-700 sm:text-md'>G</span>allery</h2>
      <hr  className=' w-5/6 bg-gray-700 border-2 border-gray-300 rounded-md'/>
      <div className=" flex flex-col mt-10 text-2xl text-gray-700 gap-4 items-center  ">
        <Link to='/' className={ active==="home" ?'cursor-pointer hover:text-orange-500 text-orange-700 font-semibold ' : 'cursor-pointer hover:text-orange-700 font-semibold'} onClick={()=>handleActive("home")}>Home</Link>
        <Link to='/addcard' onClick={()=>handleActive("add")} className={ active==="add" ?'cursor-pointer hover:text-orange-500 text-orange-700 font-semibold ' : 'cursor-pointer hover:text-orange-700 font-semibold'}>Add New Card</Link>
        
      </div>
    </div>
  )
}

export default Sidebar