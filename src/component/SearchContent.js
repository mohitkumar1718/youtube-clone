import React, { useEffect } from 'react'
import SearchCards from './SearchCards'
import { YOUTUBE_VIDEO_SEARCH, options, url } from '../utils/constant'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { addtoSearchQuery } from '../utils/searchQuery'
const SearchContent = () => {
    const id=useParams();
    const dispatch=useDispatch();
    const results=useSelector(store=>store.query.results);
    // console.log(results);
    const fetchData=async()=>{
        const data =await fetch(`https://youtube-v31.p.rapidapi.com/search?q=${id.id}&part=snippet%2Cid&regionCode=IN&maxResults=10&`,options);
        const json=await data.json();
        // console.log(json.items);
        dispatch(addtoSearchQuery(json.items));
    }

    useEffect(()=>{
        fetchData();
        window.scrollTo(0, 0);
    },[id]);
    // console.log(results)
  return (
   
    <div className='lg:pl-44 pt-20'>
      {results && results.map(result=><SearchCards key={result?.id?.videoId} data={result}/>)}
    </div>
  )
}

export default SearchContent