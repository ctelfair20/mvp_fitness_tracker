import React, { useState, useEffect } from 'react';
import { Textarea } from '@mantine/core';
import axios from 'axios';

const Notes = ({ record }) => {

  const [oldText, setOldText] = useState(''); // stores the db value for "notes"
  const [newText, setNewText] = useState(''); // stores the users change to input value
  const [startingValue, setStartingValue] = useState(''); // stores db value and changes with user input

  useEffect(() => {
    // onMount, grabs the note for this record from the db and stores it in oldText
    const getText = async () => {
      try {
        const dbText = await axios.get(`http://localhost:4000/${record._id}`);
        setStartingValue(dbText.data);
        setOldText(dbText.data);
      } catch (err) {
        console.log('ERR: ', err);
      }
    }
    getText();
  }, [])

  // Compares db notes with current user input inorder to update the db notes ONLY when there is a change
  const handleOnBlur = async (id) => {
    if (oldText !== newText) {
      try {
        await axios({
          url: `http://localhost:4000/${id}`,
          method: 'patch',
          data: {
            notes: newText,
          }
        });
      } catch (err) {
        console.log(err);
      }
      // keeps up with what the db has for the notes value
      setOldText(newText);
    }
  }

  return (
    <td>
      <Textarea
        onBlur={(e) => { handleOnBlur(record._id) }}
        className="notes-container"
        value={startingValue}
        onChange={(e) => { setStartingValue(e.currentTarget.value); setNewText(e.currentTarget.value) }}
        aria-label="Notes Post exercise"
        placeholder="How do you feel?"
        autosize
        minRows={1}
      />
    </td>
  );
}

export default Notes;