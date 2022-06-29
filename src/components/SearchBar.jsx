import React from 'react';
import { TextInput, Box, Button } from '@mantine/core';
import { Search } from 'tabler-icons-react';
import './SearchBar.css'

function SearchBar({ workouts }) {
  if (workouts.length !== 0) {
    return (
      <Box className="search-box-container">
        <TextInput
          label="Search by Exercise"
          placeholder="sit-ups"
        />
        <Button
          className="search-button"
          size="mt"
        >
          <Search
            size={20}
            strokeWidth={3}
          />
        </Button>
      </Box>
    )
  }
}

export default SearchBar;