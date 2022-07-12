import React, { useState } from 'react';
import { TextInput, Box, Button } from '@mantine/core';
import { Search } from 'tabler-icons-react';

import './SearchBar.css'

function SearchBar({ workouts, setter, hasBeenClicked, searchSetter }) {

  const [value, setValue] = useState('');

  function handleSearchClick() {
    const filtered = workouts.filter((workout) => {
      return workout.exercise.includes(value);
    });

    hasBeenClicked(true);
    if (filtered.length !== 0) {
      setter(filtered);
      searchSetter(filtered);
    }
    searchSetter(filtered);
  }

  if (workouts.length !== 0) {
    return (
      <Box className="search-box-container">
        <TextInput
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          label="Search by Exercise"
          placeholder="sit-ups"
        />
        <Button
          onClick={handleSearchClick}
          className="search-button"
          size="18px"
        >
          <Search
            size={18}
            strokeWidth={3}
          />
        </Button>
      </Box>
    )
  }
}

export default SearchBar;