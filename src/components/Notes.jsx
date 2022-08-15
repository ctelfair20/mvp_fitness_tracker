import React from 'react';
import { Textarea } from '@mantine/core';

const Notes = () => {
  return (
    <td>
      <Textarea
        aria-label="Notes Post exercise"
        placeholder="How do you feel?"
        autosize
        minRows={1}
      />
    </td>
  );
}

export default Notes;