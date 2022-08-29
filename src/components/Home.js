
import React from "react"
import "./Home.css"
import JsonData from '../data/data.json';

import  Typewriter from "typewriter-effect"
import { About } from "./About"
import { Tech } from "./Tech";
import code from '../img/coding_img.png'

const Home = () => {
  return (
    <>
    
      <section className='hero' id='home'>
        <div className='container'>
        <div className='row'>
        <img className="col-sm-12 col-lg-5" src={code} alt=" " /> 
          <div className='left col-lg-5'>
            
            <h1>
              We Are
              <span>
              <Typewriter
                options={{
                autoStart: true,
                loop: true,
                delay: 40,
                cursor: "_",
                strings:[
                    "Sofware Trainers",
                    "Working Professionals",
                    "Experienced Trainers"
                    
                ],
            }} 
            />
              </span>
            </h1>

            
           

         

            
          </div>

          
          </div>
        </div>
        
      </section>
      
      <Tech />
      <About value={JsonData}/>
      
    </>
  )
}

export default Home
