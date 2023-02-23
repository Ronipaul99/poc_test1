import { Box, Card } from "@mui/material";
import React from "react";
import TeacherCourse from "./TeacherCourse";
import JsonData from "../TeacherProfileData/TeacherCourse.json"



const TeacherCourses = () => {
  return (
    <Card sx={{display:"flex",width:"100%"}}>
    <Box sx={{
      display: "flex",
      flexDirection:"row",
      flexWrap: 'wrap',
      justifyContent: "space-between",
      alignContent: "center"
    }}>
      {JsonData.map((course, index) => (
        <Box sx={{p:1}} key={index}>
          <TeacherCourse
            id={course.id}
            name={course.name}
            imgURL={course.imgURL}
            price={course.price}
            details={course.details}
          />
        </Box>
      ))}
    </Box>
    </Card>
  );
};

export default TeacherCourses;
