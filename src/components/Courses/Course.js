import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CourseLeftSide from './CourseLeftSide';
import CourseRightSide from './CourseRightSide';
import { useLoaderData } from 'react-router-dom';
import CourseInfo from './CourseInfo';
import CourseSummary from './CourseSummary';

const Course = () => {
    const course=useLoaderData()

  
    return (
        <Container>
          {/* <CourseInfo key={course.id} course={course}/> */}
        <Row>
          <Col lg="4"><CourseLeftSide/></Col>
          <Col lg="8"><CourseRightSide/></Col>
        </Row>
      </Container>
    );
};

export default Course;