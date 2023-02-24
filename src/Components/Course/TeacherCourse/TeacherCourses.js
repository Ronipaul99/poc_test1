import React from "react";
import TeacherCourse from "./TeacherCourse";
import JsonData from "../TeacherProfileData/TeacherCourse.json"
import Carousel from "react-grid-carousel";



const TeacherCourses = () => {
  return (
  
      <Carousel cols={4}>
        {JsonData.map((course, index) => (
          <Carousel.Item key={index}>
            <TeacherCourse
              id={course.id}
              CourseName={course.CourseName}
              imgURL={course.imgURL}
              price={course.price}
              teacherName={course.teacherName}
              details={course.details}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    
  );
};

export default TeacherCourses;
