import React from 'react';

const CourseSummary = ({course}) => {
    return (
        <div>
            <p className=' fs-5 border border-primary rounded p-2 text-center'>{course.name}</p>
        </div>
    );
};

export default CourseSummary;