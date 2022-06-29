import React from 'react';

function SortBox({ workouts }) {
  if (workouts.length !== 0) {
    return (
      <div className="sort-box-container">
        <span>Sort By:</span>
        <button>Set</button>
        <button>Rep</button>
      </div>
    )
  }
}

export default SortBox;
