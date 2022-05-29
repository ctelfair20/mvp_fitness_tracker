import React from 'react';
import { TextInput, NumberInput, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

function MantineE() {
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
        />
        <TextInput
          required
          label="Exercise"
          placeholder="Sit-ups"
          onChange={(event) => form.setFieldValue('exercise', event.currentTarget.value)}
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

export default MantineE;