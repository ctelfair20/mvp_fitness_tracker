import React from 'react';
import { Table, Box, Button, Group } from '@mantine/core';

import Notes from './Notes.jsx';
import axios from 'axios';

const History = ({ workouts, date, setterHistory }) => {

  const handleDeleteClick = function (id) {
    const removeData = async () => {
      try {
        await axios({
          url: 'http://localhost:4000/',
          method: 'delete',
          data: {
            id: id
          }
        })
        // need acces to date variable from calendar view
        const data = await axios({
          url: 'http://localhost:4000/',
          method: 'get',
          params: {
            date: date
          }
        })
        setterHistory(data.data)
      } catch (err) {
        throw err;
      }
    }
    removeData();
  }

  const rows = workouts.map((record) => (
    <tr key={record._id}>
      <td>{record.exercise}</td>
      <td>{record.sets}</td>
      <td>{record.repititions}</td>

      {/* The value of this textarea needs to be stored in the database when enter is pressed or
      when the user clickes away from it (when the focus changes?) */}
      <Notes record={record} />
      <td>
        <Group position="left" mt="sx">
          <Button onClick={() => handleDeleteClick(record._id)}>Delete!</Button>
        </Group>
      </td>
    </tr>
  ));

  if (workouts.length !== 0) {
    return (
      <Table className="history-table" horizontalSpacing="sm" striped highlightOnHover>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Set #</th>
            <th>Repitition #</th>
            <th>Notes</th>
            <th id='delete-heading'>Made a mistake?</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    );
  } else {
    return (
      <Box
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
          textAlign: 'center',
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
        })}
      >
        No workouts recorded. Was this a rest day?
      </Box>
    )
  }
}

export default History;