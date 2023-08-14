import React from "react";

import { filterData } from "../data";

const Filter = ({ setCategory, category }) => {
  const FilterHandler = (title) => {
    setCategory(title);
  };

  return (
    <div className="filter">
      {filterData.map((data) => {
        return (
          <button
            onClick={() => FilterHandler(data.title)}
            className="filter-btn"
            key={data.id}
            style={
              category === data.title ? { border: "3px solid yellow" } : null
            }
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
