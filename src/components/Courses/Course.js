import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CourseLeftSide from './CourseLeftSide';
import CourseRightSide from './CourseRightSide';

const Course = () => {

  
    return (
        <Container>
        <Row>
          <Col lg="4"><CourseLeftSide/></Col>
          <Col lg="8"><CourseRightSide/></Col>
        </Row>
      </Container>
    );
};

export default Course;