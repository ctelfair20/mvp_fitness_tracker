import { Table } from '@mantine/core';

function History2({ workouts }) {
  console.log(workouts)
  const rows = workouts.map((history) => (
    <tr key={history._id}>
      <td>{history.exercise}</td>
      <td>{history.sets}</td>
      <td>{history.repititions}</td>
    </tr>
  ));

  if (workouts.length !== 0) {
    return (
      <Table>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Set Number</th>
            <th>Repitition Number</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    );
  } else {
    <div>
      No workouts recorded. Was this a rest day?
    </div>
  }
}

export default History2;