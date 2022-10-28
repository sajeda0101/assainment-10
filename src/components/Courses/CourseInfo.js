import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseSummary from "./CourseSummary";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Course from "./Course";
import { FaFileDownload,FaStar } from "react-icons/fa";
import Pdf from 'react-to-pdf'

const ref = React.createRef();
const CourseInfo = () => {
  const courses = useLoaderData();


  return (
    <div className="mt-5 fs-5" >
      <div className="text-center mb-4">
        <h1>Web Development</h1>
      <Pdf targetRef={ref} filename="code-example.pdf">
              {({toPdf})=>(
                <Button onClick={toPdf}>
                  <FaFileDownload/> Download Pdf
                </Button>
              )}

            </Pdf>
            
      </div>
      {courses.map((course) => (
        <Card style={{ width: "35rem",margin:'0 auto' }} ref={ref}>
          <Card.Header className="d-flex   justify-content-between mb-3">
            <p>{course.title}</p>
      
            {/* <button className="btn btn-secondary w-25 fs-4">Pdf</button> */}
          </Card.Header>
          <Card.Img variant="top" src={course.img}  style={{width:'500px'}} className=" m-auto rounded "/>
          <Card.Body>
            <Card.Title className="fs-3">{course.name}</Card.Title>
            <Card.Title className="fs-3">Fee:{course.price}</Card.Title>
            <Card.Text>{course.details}</Card.Text>
            <div >
              <p>Views:{course.total_view}</p>
              <p>
                Rating:
                <FaStar className="text-warning ms-1" />
                <FaStar className="text-warning " />
                <FaStar className="text-warning " />
                <FaStar className="me-2 " />
                {course.rating.number}{" "}
              </p>
            </div>
            <Link to={`/checkout/${course.id}`} >
              
              <Button variant="primary" className="px-5 py-2 mt-3" style={{marginLeft:'150px'}}>Get Premium Access </Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CourseInfo;
