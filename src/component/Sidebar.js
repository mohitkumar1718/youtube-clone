import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  const iSMenuOpen=useSelector((store)=>store.app.iSMenuOpen)
  if(!iSMenuOpen) return null;
  return (
    <div className='pt-20 fixed pl-4 bg-white  shadow-lg pt-2 pr-14 overflow-y-visible transition-all delay-150'>
      <div className='w-full'>
        <ul>
          <li className=' w-full p-1'><Link to="/">Home</Link></li>
          <li className=' w-full p-1'>Shorts</li>
          <li className=' w-full p-1'>subscription</li>
        </ul>
      </div>
      
      <div className='pt-5'>
       <h1 className='text-xl font-semibold'>You</h1>
        <ul>
          <li className=' w-full p-1'>Your Channel</li>
          <li className=' w-full p-1'>History</li>
          <li className=' w-full p-1'>Your Videos</li>
          <li className=' w-full p-1'>Watch later</li>
          <li className=' w-full p-1'>Your Clips</li>
        </ul>
      </div>

      <div className='pt-5'>
       <h1 className='text-xl font-semibold'>Explore</h1>
        <ul>
          <li className=' w-full p-1'>Trending</li>
          <li className=' w-full p-1'>Music</li>
          <li className=' w-full p-1'>Films</li>
          <li className=' w-full p-1'>Live</li>
          <li className=' w-full p-1'>Gaming</li>
          <li className=' w-full p-1'>News</li>
          <li className=' w-full p-1'>Sports</li>
          <li className=' w-full p-1'>Learning</li>
          <li className=' w-full p-1'>PoadCasts</li>
        </ul>
      </div>

    </div>
  )
}

export default Sidebar