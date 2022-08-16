import React, { useState } from 'react';
import { Textarea } from '@mantine/core';

const Notes = ({ id }) => {

  const [text, setText] = useState('');

  return (
    <td>
      <Textarea
        className="notes-container"
        value={text}
        onChange={(e) => {
          setText(e.currentTarget.value);
        }}
        aria-label="Notes Post exercise"
        placeholder="How do you feel?"
        autosize
        minRows={1}
      />
    </td>
  );
}

export default Notes;