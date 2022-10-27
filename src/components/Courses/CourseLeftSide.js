import React from 'react';
import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CourseInfo from './CourseInfo';


const CourseLeftSide = () => {
    const[courses,setCourse]=useState([])
    console.log(courses)
    useEffect(()=>{
        fetch('http://localhost:5000/courses-categories')
        .then(res=>res.json())
        .then(data=>setCourse(data))
        
        
    },[])

  
    return (
        <div className='text-center mt-5'>
          {
            courses.map(course=><div  key={course.id}>
              {/* <CourseInfo key={course.id} course={course}></CourseInfo> */}
              <Link to={`/courses/${course.id}`} course={course}> <p className='fs-4 border border-primary rounded py-1'>{course.name}</p></Link> 
            </div>)
          }
        </div>
    );
};

export default CourseLeftSide;