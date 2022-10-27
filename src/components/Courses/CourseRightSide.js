import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CourseRightSide = () => {
  const [courses, setCourse] = useState([]);
  console.log(courses);
  useEffect(() => {
    fetch("http://localhost:5000/courses-categories")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
        {courses.map((course) => {
          return (
            <div className="col" key={course.id}>
              <div className="card h-100">
                <img
                  src={course.img}
                  className="w-full h-50 card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center mt-2">{course.name}</h5>
                </div>
                <Link to={`/courses/${course.id}`}>
                  {" "}
                  <button className="btn btn-primary w-75 ms-4 mb-3">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseRightSide;
