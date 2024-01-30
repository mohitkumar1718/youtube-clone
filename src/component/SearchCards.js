import React from 'react'
import { Link } from 'react-router-dom';
const SearchCards = ({data}) => {
    const id=data.id.videoId;
    // console.log(data);
    const snippet=data?.snippet;
    const thumbnails=snippet?.thumbnails;
    
  return (
    
    <Link   to={"/watch?v="+id}><div className=' w-[90%] md:w-full mx-auto md:mx-0 flex flex-col sm:flex-row sm:h-72 p-2 hover:bg-slate-50 rounded-2xl'>
        <img className='w-full h-[250px]  sm:w-[400px] md:w-[400px] rounded-lg' src={thumbnails?.high?.url} alt="img" />
        <div className='pl-2 pt-2 md:w-[600px]'>
            <h1 className=' line-clamp-2 overflow-hidden text-ellipsis font-bold text-xl '>{snippet?.title}</h1>
            <p className='font-semibold text-lg p-2'>{snippet?.channelTitle}</p>
            <p className='pl-2 hidden'>{"Publish at: " + snippet?.publishedAt?.slice(0,10)}</p>
            <p className='p-2  hidden sm:block'>{snippet?.description}</p>
        </div>
    </div>
    </Link>
  )
}

export default SearchCards