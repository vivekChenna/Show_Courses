import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import { apiUrl, filterData } from "./data";
import Loader from "./components/Loader";
import Cards from "./components/Cards";

function App() {
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState(filterData[0].title);

  const getCoursesData = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const FinalData = Object.values(data?.data);
    console.log(data.data);

    console.log("printing final data");
    console.log(FinalData);
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
      <Filter setCategory={setCategory} category={category} />
      {courses.length === 0 ? (
        <Loader />
      ) : (
        <Cards
          TopCourses={courses}
          category={category}
          setCategory={setCategory}
        />
      )}
    </div>
  );
}

export default App;
