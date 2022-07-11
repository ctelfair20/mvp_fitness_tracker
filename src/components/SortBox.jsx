import React, { useState, } from 'react';
import { Select } from '@mantine/core';

function SortBox({ workouts }) {

  const [value, setValue] = useState('');

  function handleChange() {
    setValue();
    console.log(value);
  }

  if (workouts.length !== 0) {
    return (
      <Select
        className="sort-box-container"
        value={value}
        onChange={handleChange}
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
