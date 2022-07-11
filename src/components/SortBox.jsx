import React, { useState, } from 'react';
import { Select } from '@mantine/core';

function SortBox({ workouts, setter }) {

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e);
    function compare(a, b) {
      return a[e] - b[e]
    }
    setter(workouts.sort(compare));
  }

  if (workouts.length !== 0) {
    return (
      <Select
        className="sort-box-container"
        value={value}
        onChange={(e) => handleChange(e)}
        clearable
        label="Sort by"
        placeholder="Pick one"
        data={[
          { value: 'repititions', label: 'Repititions' },
          { value: 'sets', label: 'Set' },
          { value: 'none', label: 'None' },
        ]}
      />
    );
  }
}

export default SortBox;
