import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
const VideoContainer = () => {
  const [videos,setVideos]=useState([]);
  useEffect(()=>{
    getVideos();
    window.scrollTo(0, 0);
  },[])

  const getVideos=async ()=>{
    const data=await fetch(YOUTUBE_API);
    const json =await data.json();
    // console.log(json.items);
    setVideos(json.items);
  }
  return videos && (
    <div className='lg:pt-14 flex flex-wrap justify-center  '>
    {videos.map((video)=>
    <Link  key={video.id} to={"/watch?v="+video.id}><VideoCard info={video}/></Link>)}
      
    </div>
  )
}

export default VideoContainer