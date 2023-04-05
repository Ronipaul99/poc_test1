import React from "react";
import Class from "./Class";
import data from "../CreatedCourseData/data.json"
import Carousel from "react-grid-carousel";



const Classes = () => {
    return (

        <Carousel cols={4}>
            {data.map((course, index) => (
                <Carousel.Item key={index}>
                    <Class
                        id={course.id}
                        StartTime={course.StartTime}
                        imgURL={course.imgURL}
                        price={course.price}
                        Title={course.Title}
                    />
                </Carousel.Item>
            ))}
        </Carousel>

    );
};

export default Classes;
