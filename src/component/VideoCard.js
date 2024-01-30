import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    if(!info) return null;
    const {snippet,statistics}=info;
    const {title,thumbnails,channelTitle}=snippet;
  return (
    <div className=' w-full px-2 rounded-lg sm:w-80 '>
        <img className='w-full  md:h-52 rounded-lg ' src={thumbnails.high.url} alt="thumbnail" />
        <ul>
            <li className='font-bold p-1 w-80 sm:w-80 overflow-hidden  whitespace-nowrap text-ellipsis'>{title}</li>
            <li className='pl-1'>{channelTitle}</li>
            <li className='pl-1'>{statistics.viewCount} Views</li>

        </ul>
    </div>
  )
}

export default VideoCard