import React from 'react'
import Comment from './Comment'

const CommentsList = ({data}) => {
  // console.log(data);
  return (
    <div>
     {data.map((data ,index)=>
     <div key={index}>
     <Comment  comment={data}/>
     <div className='pl-2 ml-2 border border-l-black'>
     <CommentsList data={data.reply}/>
     </div>
     </div>
     )} 
     
    </div>
  )
}

export default CommentsList