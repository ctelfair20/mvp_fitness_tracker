import React from 'react';

function History({ workouts }) {

  const historyMapper = function (arr) {
    return arr.map((obj) => {
      return (
        <div key={obj._id}>
          <>
            <h3>Exercises: {obj.exercise}</h3>
            <h3>Sets: {obj.sets}</h3>
            <h3>Repititions: {obj.repititions}</h3>
          </>
        </div>
      )
    })
  }

  return (
    <>
      {workouts.length > 0 && historyMapper(workouts)}
    </>
  );
}

export default History;

