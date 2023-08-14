import { useState } from "react";
import Card from "./Card";

const Cards = ({ TopCourses, category }) => {
  const getCourses = () => {
    if (category === "All") {
      let CourseData = [];
      TopCourses.forEach((course) => {
        course.forEach((obj) => {
          CourseData.push(obj);
        });
      });
      return CourseData;
    } else if (category === "Design") {
      return TopCourses[2];
    } else if (category === "Development") {
      return TopCourses[0];
    } else if (category === "Business") {
      return TopCourses[1];
    } else {
      return TopCourses[3];
    }
  };

  const [likedCourses, setLikedCourses] = useState([]);

  return (
    <div className="cards">
      {getCourses().map((course) => {
        return (
          <Card
            key={course.id}
            {...course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </div>
  );
};

export default Cards;
