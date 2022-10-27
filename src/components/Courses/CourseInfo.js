import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from './CourseSummary';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Course from './Course';
import { FaStar } from 'react-icons/fa';

const CourseInfo = () => {
   const courses=useLoaderData()
    // const [courses,setCourse]=useState([])
    console.log(courses)

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/course/01`)
    //     .then(res=>res.json())
    //     .then(data=>setCourse(data))
    // },[])
    return (
        <div>{
            courses.map(course=>
                <Card style={{ width: '25rem' }}>
                <Card.Header><p>{course.title}</p></Card.Header>
              <Card.Img variant="top" src={course.img}/>
              <Card.Body>
                <Card.Title>{course.name}</Card.Title>
                <Card.Text>
           {course.details}
                </Card.Text>
                <div>
                    <p>Views:{course.total_view}</p>
                    <p>Rating:<FaStar className='text-warning '/><FaStar className='text-warning '/><FaStar className='text-warning '/>{course.rating.number} </p>
                </div>
                <Button variant="primary">Get Premium Access </Button>
              </Card.Body>
            </Card>
            )}
            
                   
                    
            
        </div>
        
            
    );
};

export default CourseInfo;