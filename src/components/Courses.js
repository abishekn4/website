import React from 'react'
import "./Courses.css"

const Courses = (props) => {
  return (
	
    <div className='course-page'>
    <div className="courses-container ">
       
	<div className="course">
		<div className="course-preview">
			<h6>Course</h6>
			<h2>Core Java</h2>
			<a href="#">View all chapters <i class="fas fa-chevron-right"></i></a>
		</div>
		<div className="course-info">
			
			<h6>Trainer</h6>
			<h2>Devendra</h2>
			<h5>Weekday Offline</h5>
			<h6>starts from </h6>
			
		</div>
	</div>
    
	
    </div>
    
   
    
   
</div>

  )
}

export default Courses