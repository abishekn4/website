import React from 'react'

import "./Abt.css"
import { Team } from './Team'



export const About = (props) => {
  return (
   
      
    <div className='about-page'>
    
      <div className="header">
        
      </div>
      <div className="row1-container">
        <div className="box box-down cyan">
          <h2>Student Guidance</h2>
          <p>We make sure every Student is guided towards their future carrer</p>
          <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
        </div>

        <div className="box red">
          <h2>Best Trainers</h2>
          <p>We have the best trainers to teach you the best tech</p>
          <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />
        </div>

        <div className="box box-down blue">
          <h2>Best Skills</h2>
          <p>We make sure that every students are skilled </p>
          <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" />
        </div>
      </div>
      <div className="row2-container">
        <div className="box orange">
          <h2>Landing Dream Job</h2>
          <p>Get into your dream job with all the skilset needed </p>
          <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
        </div>
      </div>
      <div className='team-component'>
      <Team value={props.value.Components[1]}/>
      </div>

    </div>
    



  )
}
