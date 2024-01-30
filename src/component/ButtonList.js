import React from 'react'
import Button from './Button'
const ButtonList = () => {
  const buttonList=['All','Popular','Kids','Music','React','JavaScript'];
  return (
    <div className='my-2 w-screen px-2 pl-4 sm:justify-center flex overflow-hidden overflow-x-scroll no-scrollbar'>
     {buttonList.map((name)=><Button key={name} name={name}/>)}
      
    </div>
  )
}

export default ButtonList