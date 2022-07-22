import React from 'react'

export const About = (props) => {
  return (
   
    <div className='about-container'>
       <h1 className='about'>{props.value.Components[0].name}</h1>
       <p className='about-content'>{props.value.Components[0].content}</p>
    </div>
   
  )
}
