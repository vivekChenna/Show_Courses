import Card from "./Card";

const Cards = ({ TopCourses }) => {
  let CourseData = [];

  const getCourses = () => {
    TopCourses.forEach((course) => {
      course.forEach((obj) => {
        CourseData.push(obj);
      });
    });
    return CourseData;
  };

  return (
    <div className="cards">
      {getCourses().map((course) => {
        return <Card key={course.id} {...course} />;
      })}
    </div>
  );
};

export default Cards;
