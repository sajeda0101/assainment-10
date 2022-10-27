import React from 'react';

const CourseSummary = ({course}) => {
    const {name}=course;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default CourseSummary;