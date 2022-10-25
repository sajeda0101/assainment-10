import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses=useLoaderData();
    console.log(courses)
    return (
      <Container>
        <Row>
            <Col lg="4" className="bg-light ">
                <h3 className='text-center mb-4'>Our Top Courses</h3>
            {
                courses.map(course=><p className=' fs-5 border border-primary rounded p-2 text-center'>{course.name}</p>)
            }
            </Col>
            <Col lg="8">
            <h1 className='bg-primary'>hi</h1>
            </Col>
        </Row>

      </Container>
    );
};

export default Courses;