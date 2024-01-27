import React from 'react'
import Sidebar from './Sidebar'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
const MainContainer = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div>
     <ButtonList/>
     <VideoContainer/>
      </div>
    </div>
  )
}

export default MainContainer