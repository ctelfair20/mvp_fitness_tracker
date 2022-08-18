import React, { useState } from 'react';
import { Textarea } from '@mantine/core';
import axios from 'axios';

const Notes = ({ record }) => {

  const [text, setText] = useState('');

  const handleOnBlur = async (id) => {
    try {
      const postResponse = await axios({
        url: `http://localhost:4000/${id}`,
        method: 'patch',
        data: {
          notes: text,
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <td>
      <Textarea
        onBlur={(e) => { handleOnBlur(record._id) }}
        className="notes-container"
        value={text ? text : ''}
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