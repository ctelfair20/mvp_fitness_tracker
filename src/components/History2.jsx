import { Table, Box, Button, Group, Textarea } from '@mantine/core';

function History2({ workouts }) {
  // this function needs to be fleshed out
  const handleEditClick = function () {
    console.log('edit was clicked!')
  }

  const sortBySet = function (history) {
    // input array of objects
    // output array of objects in proper order
    // create a result array to return
    // create a variable called lowest; set equal to first set value
    // create a variable called index; set equal to 0
    // iterate over array starting with second obj
    // check set value of each obj against lowest
    // see if set value is lower than lowest
    // set lowest to be set value
    // set index to be i
    // else, don't do anything
    // end loop
    // push obj at index to result
    // return result
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
          <Button onClick={handleEditClick}>Edit!</Button>
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
            {/* notes need to be added to the databse schema */}
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