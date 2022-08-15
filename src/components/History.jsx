import React from 'react';
import { Table, Box, Button, Group, Textarea } from '@mantine/core';
// import axios from 'axios';

function History({ workouts }) {
  console.log("huh???", workouts)
  // handleDeleteClick needs to be fleshed out

  const handleDeleteClick = function () {
    console.log('delete was clicked!')
  }

  const rows = workouts.map((history) => (
    <tr key={history._id}>
      <td>{history.exercise}</td>
      <td>{history.sets}</td>
      <td>{history.repititions}</td>

      {/* I'm will work on the Notes and Delete button in the next iteration. The value of this textarea needs to be stored in the database when enter is pressed or
      when the user clickes away from it (when the focus changes?) */}
      {/* <td>
        <Textarea
          placeholder="How do you feel?"
          autosize
          minRows={1}
        />
      </td> */}
      <td>
        <Group position="left" mt="sx">
          <Button onClick={handleDeleteClick}>Delete!</Button>
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
            {/* notes need to be added to the databse schema */}
            {/* <th>Notes</th> */}
            {/* <th id='delete-heading'>Made a mistake?</th> */}
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