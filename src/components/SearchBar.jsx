import React, { useState } from 'react';
import { TextInput, Box, Button } from '@mantine/core';
import { Search } from 'tabler-icons-react';

import './SearchBar.css'

const SearchBar = ({ workouts, setter, hasBeenClicked, searchSetter }) => {

  const [value, setValue] = useState('');

  function handleSearchClick() {
    const filtered = workouts.filter((workout) => {
      return workout.exercise.toUpperCase().includes(value.toUpperCase());
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
          id="search-box"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          label="Search by Exercise"
          description="To clear search, click on date"
          placeholder="sit-ups"
        />
        <Button
          onClick={handleSearchClick}
          className="search-button"
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