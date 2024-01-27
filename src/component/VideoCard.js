import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    if(!info) return null;
    const {snippet,statistics}=info;
    const {title,thumbnails,channelTitle}=snippet;
  return (
    <div className='p-2 rounded-lg w-80 '>
        <img className=' h-52 rounded-lg m-2' src={thumbnails.high.url} alt="thumbnail" />
        <ul>
            <li className='font-bold p-1 '>{title}</li>
            <li className='pl-1'>{channelTitle}</li>
            <li className='pl-1'>{statistics.viewCount} Views</li>

        </ul>
    </div>
  )
}

export default VideoCard