import React, { useState } from 'react';
import { TextInput, NumberInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

function MantineE() {
  // const [reps, setReps] = useState(0);
  // const [sets, setSets] = useState(0);
  const form = useForm({
    initialValues: {
      date: '',
      exercise: '',
      sets: '',
      repititions: ''
    },

    validate: {
      // date: (value) => (value.length < 2 ? 'name-error' : null),
      // exercise: (value) => (value < 18 ? 'age-error' : null),
    },
  })

  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <Box sx={{ maxWidth: 300 }}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          required
          label="Date"
          placeholder="05/16/2022"
          onChange={(event) => form.setFieldValue('date', event.currentTarget.value)}
        // {...form.getInputProps('email')}
        />
        <TextInput
          required
          label="Exercise"
          placeholder="Sit-ups"
          //THIS DOESN'T SEEM TO BE NEEDED IN TEXT INPUTS
          // value={form.values.exercise}
          onChange={(event) => form.setFieldValue('exercise', event.currentTarget.value)}
        // {...form.getInputProps('email')}
        />
        <NumberInput
          label="Sets"
          placeholder="2"
          // value={sets}
          // onChange={(val) => setSets(val)}
          // this seems required for number inputs
          {...form.getInputProps('sets')}
        />
        <NumberInput
          label="Repititions"
          placeholder="10"
          // value={reps}
          // onChange={(val) => setReps(val)}
          // this seems required for number inputs
          {...form.getInputProps('repititions')}
        />
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  )
}

export default MantineE;