import { Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import CourseLeftSide from "./CourseLeftSide";
import CourseRightSide from "./CourseRightSide";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CourseInfo from "./CourseInfo";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <Container className="mt-5">
      <Row>
        <Col lg="4" className="bg-light mt-5 pt-3 ">
          <h3 className="text-center mb-4">Our Top Courses</h3>

          {courses.map((course) => (
            <p
              key={course.id}
              className=" fs-5 border border-primary rounded p-2 text-center"
            >
              <Link to={`/course/courseinfo/${course.id}`}>{course.name}</Link>
            </p>
          ))}
        </Col>
        <Col lg="8">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {courses.map((course) => (
              <div class="col">
                <div class="card h-100">
                  <img src={course.img} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{course.name}</h5>
                  </div>
                  
                  <Link to={`/course/courseinfo/${course.id}`}>
                    <button
                      type="button"
                      class="btn btn-primary text-white w-75 py-2 mb-3"
                      style={{ marginLeft: "30px" }}
                    >
                      Details
                    </button></Link>
                  
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
