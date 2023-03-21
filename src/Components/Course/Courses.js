import { Box, List, ListItem } from "@mui/material";
import React from "react";
import Course from "./Course";
import JsonData from "./AllCoursesData/data.json"



const Courses = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", }}>
      <List sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        flexWrap: "wrap"
      }}>
        {JsonData.map((course, index) => (
          <ListItem key={index}>
            <Course
              id={course.id}
              name={course.name}
              imgURL={course.imgURL}
              price={course.price}
              details={course.details}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Courses;
