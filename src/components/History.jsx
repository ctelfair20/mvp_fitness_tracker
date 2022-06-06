import React from 'react';
import { Button, Group, Box } from '@mantine/core';

function History({ workouts }) {

  const historyMapper = function (arr) {
    return arr.map((obj) => {
      return (
        <Box
          key={obj._id}
          sx={(theme) => ({
            color: theme.colors.blue[4],
            borderTop: 'black 2px solid',
            margin: '15px',
            padding: '5px',
            maxWidth: 300,

            '&:hover': {
              color: theme.colors.blue[8],
            },
          })}>

          <h3>Exercises: {obj.exercise}</h3>
          <h3>Sets: {obj.sets}</h3>
          <h3>Repititions: {obj.repititions}</h3>
          <Group position="right" mt="md">
            <Button>Edit!</Button>
          </Group>
        </Box>
      )
    })
  }

  return (
    <>
      {workouts.length > 0 && historyMapper(workouts)}
      HIIIIIIII
    </>
  );
}

export default History;

