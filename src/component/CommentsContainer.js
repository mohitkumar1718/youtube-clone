import React from 'react'
import CommentsList from './CommentsList'

const CommentsData=[
    {
        name:"Mohit",
        comment:"this is the comments",
        reply :[
            {
                name:"Mohit",
                comment:"this is the comments",
                reply :[
                    {
                        name:"Mohit",
                        comment:"this is the comments",
                        reply :[
                            {
                                name:"Mohit",
                                comment:"this is the comments",
                                reply :[
                                    
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                name:"Mohit",
                comment:"this is the comments",
                reply :[
                    
                ]
            },

        ]
    },
    {
        name:"Mohit",
        comment:"this is the comments",
        reply :[
            {
                name:"Mohit",
                comment:"this is the comments",
                reply :[
                    {
                        name:"Mohit",
                        comment:"this is the comments",
                        reply :[
                            
                        ]
                    },
                ]
            },
            {
                name:"Mohit",
                comment:"this is the comments",
                reply :[
                    {
                        name:"Mohit",
                        comment:"this is the comments",
                        reply :[
                            
                        ]
                    },
                ]
            },
        ]
    },
    {
        name:"Mohit",
        comment:"this is the comments",
        reply :[
            
        ]
    },
    {
        name:"Mohit",
        comment:"this is the comments",
        reply :[
            
        ]
    },
]

const CommentsContainer = () => {
  return (
    <div className=' hidden sm:block py-8 w-full max-w-[900px] lg:min-w[600px] '>
    <h1 className='font-bold'>Comments:</h1>
    <CommentsList data={CommentsData}/>
    </div>
  )
}

export default CommentsContainer