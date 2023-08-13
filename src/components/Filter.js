import React from "react";

import { filterData } from "../data";

const Filter = () => {
  return (
    <div className="filter">
      {filterData.map((data) => {
        return (
          <button
            key={data.id}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
