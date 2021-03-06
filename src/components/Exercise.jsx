import React from 'react';
import axios from 'axios';
import { TextInput, NumberInput, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

// The form should clear after submit
// It should auto fill the date field with today's date

function Exercise() {
  const form = useForm({
    initialValues: {
      date: '',
      exercise: '',
      sets: '',
      repititions: ''
    },
    validate: {
      date: (value) => (
        /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/.test(value) ? null : 'Please use mm/dd/yyyy format'
      ),
    },
  });

  function handleSubmit(values) {
    console.log(values);
    axios({
      url: 'http://localhost:4000/workout',
      method: 'post',
      data: {
        date: form.values.date,
        exercise: form.values.exercise,
        sets: form.values.sets,
        repititions: form.values.repititions
      },
      header: { 'content-type': 'application/json' }
    })
      .then((data) => {
        console.log('doc saved!')
      })
      .catch((err) => {
        console.log('ERROR!!!', err)
      })
  }

  return (
    <Box sx={{ maxWidth: 300 }}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          required
          label="Date"
          placeholder="05/16/2022"
          {...form.getInputProps('date')}
        />
        <TextInput
          required
          label="Exercise"
          placeholder="Sit-ups"
          {...form.getInputProps('exercise')}
        />
        <NumberInput
          label="Sets"
          placeholder="2"
          {...form.getInputProps('sets')}
        />
        <NumberInput
          label="Repititions"
          placeholder="10"
          {...form.getInputProps('repititions')}
        />
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  )
}

export default Exercise;
