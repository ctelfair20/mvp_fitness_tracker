import React from 'react';
import { TextInput, Box, Button } from '@mantine/core';
import { Search } from 'tabler-icons-react';
import './SearchBar.css'

function SearchBar({ workouts }) {

  function handleSearchClick() {
    const filtered = workouts.filter((workout) => {
      return workout.exercise === 'sit-ups';
    });
    console.log(filtered);
  }
  if (workouts.length !== 0) {
    return (
      <Box className="search-box-container">
        <TextInput
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