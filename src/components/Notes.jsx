import React, { useState, useEffect } from 'react';
import { Textarea } from '@mantine/core';
import axios from 'axios';

const Notes = ({ record }) => {

  const [oldText, setOldText] = useState('');
  const [newText, setNewText] = useState('');

  useEffect(() => {
    // onMount, i need the old text to store the text in db
    // const getText = async () => {
    //   try {
    //     const dbText = await axios.get('http://localhost:4000/')
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }

    // display old text in textarea
    // console log old text to be sure
    // getText()
    console.log('oldText', oldText);

  }, [])


  const handleOnBlur = async (id) => {
    if (oldText !== newText) {
      console.log('both text, o & n', oldText, newText);
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
      console.log('both text, o & n2', oldText, newText);
    } else {
      console.log("both are the same", oldText, newText);
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