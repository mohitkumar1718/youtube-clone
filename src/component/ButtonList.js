import React from 'react'
import Button from './Button'
const ButtonList = () => {
  const buttonList=['All','Popular','Kids','Music','React','JavaScript'];
  return (
    <div className='my-2 px-2 pl-4  '>
     {buttonList.map((name)=><Button key={name} name={name}/>)}
      
    </div>
  )
}

export default ButtonList