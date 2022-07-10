import React from 'react';
import { Text } from '@mantine/core';

function SortBox({ workouts }) {
  if (workouts.length !== 0) {
    return (
      <div className="sort-box-container">
        <Text>Sort By:</Text>
        <button>SET</button>
        <button>REP</button>
      </div>
    )
  }
}

export default SortBox;
