import React from 'react';
import { Text, Select } from '@mantine/core';

function SortBox({ workouts }) {
  if (workouts.length !== 0) {
    return (
      <Select
        className="sort-box-container"
        clearable
        label="Sort by"
        placeholder="Pick one"
        data={[
          { value: 'rep', label: 'Repititions' },
          { value: 'set', label: 'Sets' },
          { value: 'none', label: 'None' },
        ]}
      />
    );
  }
}

export default SortBox;
