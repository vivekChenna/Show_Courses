import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import { apiUrl } from "./data";
import Loader from "./components/Loader";
import Cards from "./components/Cards";

function App() {
  const [courses, setCourses] = useState([]);

  const getCoursesData = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const FinalData = Object.values(data?.data);
    setCourses(FinalData);
  };

  useEffect(() => {
    getCoursesData();
  }, []);

  // const getDevelopmentData = () => {
  //   setCourses(res[0]);
  // };

  return (
    <div className="App">
      <Navbar />
      <Filter />
      {courses.length === 0 ? <Loader /> : <Cards TopCourses={courses} />}
    </div>
  );
}

export default App;
