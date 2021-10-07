import React from "react";

const Categories = ({ cat, filter }) => {
  return (
    <div className="btn-container">
      {cat.map((selection, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filter(selection)}
          >
            {selection}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
