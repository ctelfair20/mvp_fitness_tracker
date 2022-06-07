import { Table, Box, Button, Group, Textarea } from '@mantine/core';

function History2({ workouts }) {

  const handleClick = function () {
    console.log('edit was clicked!')
  }
  const rows = workouts.map((history) => (
    <tr key={history._id}>
      <td>{history.exercise}</td>
      <td>{history.sets}</td>
      <td>{history.repititions}</td>
      {/* the value of this textarea needs to be stored in the database when enter is pressed or
      when the user clickes away from it (when the focus changes?)  */}
      <td>
        <Textarea
          placeholder="How do you feel?"
          autosize
          minRows={1}
        />
      </td>
      <td>
        <Group position="center" mt="sx">
          <Button onClick={handleClick}>Edit!</Button>
        </Group>
      </td>
    </tr>
  ));

  if (workouts.length !== 0) {
    return (
      <Table striped highlightOnHover>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Set Number</th>
            <th>Repitition Number</th>
            <th>Notes</th>
            <th></th>
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

export default History2;