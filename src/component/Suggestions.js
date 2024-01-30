import React from 'react'
import { Link } from 'react-router-dom'

export const Suggestions = ({data}) => {
    // console.log(data);
  return (
    
    <div className='pt-8 md:pl-16 w-full lg:min-w-[250px] lg:max-w-[500px] h-[1000px] overflow-hidden overflow-y-scroll'>
    {data.map((data)=>
        <Link to={"/watch?v="+data.id.videoId} key={data.id.videoId}>
        <div  className=' p-1 flex mb-2 flex-col sm:flex-row'>
        <img className=' sm:w-[200px] rounded-lg' src={data?.snippet?.thumbnails?.medium?.url} alt="" />
        <div>
            <p className='text-sm font-semibold line-clamp-2 overflow-hidden text-ellipsis'>{data.snippet.title}</p>
            <p className='text-xs  line-clamp-2 overflow-hidden text-ellipsis pt-1'>{data.snippet.channelTitle}</p>
        </div>
    </div>
    </Link>
    )}
    
    
    </div>
  )
}
