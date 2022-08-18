import React, { useState, useEffect } from 'react';
import { Textarea } from '@mantine/core';
import axios from 'axios';

const Notes = ({ record }) => {

  const [oldText, setOldText] = useState('');
  const [newText, setNewText] = useState('');

  useEffect(() => {
    // onMount, grabs the note for this record from the db and stores it in oldText
    const getText = async () => {
      try {
        const dbText = await axios.get(`http://localhost:4000/${record._id}`);
        setOldText(dbText.data);
      } catch (err) {
        console.log('ERR: ', err);
      }
    }
    getText();
  }, [])

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
      setOldText(newText);
    }
  }

  const handleOnChange = (e) => {
    setNewText(e.currentTarget.value);
  }

  return (
    <td>
      <Textarea
        onBlur={(e) => { handleOnBlur(record._id) }}
        className="notes-container"
        value={newText ? newText : ''}
        onChange={handleOnChange}
        aria-label="Notes Post exercise"
        placeholder="How do you feel?"
        autosize
        minRows={1}
      />
    </td>
  );
}

export default Notes;