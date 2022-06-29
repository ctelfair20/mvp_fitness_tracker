import React from 'react';
import { TextInput, Box } from '@mantine/core';

function Search({ workouts }) {
  if (workouts.length !== 0) {
    return (
      <Box className="search-box-container">
        <TextInput
          label="Search by Exercise"
          placeholder="sit-ups"
        />
      </Box>
    )
  }
}

export default Search;