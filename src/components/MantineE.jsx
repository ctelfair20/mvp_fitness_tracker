import React from 'react';
import { TextInput, NumberInput, Checkbox, Button, Group, Box } from '@mantine/core';
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
    initialErrors: {
      date: 'Must be in mm/dd/yyyy format', exercise: 'Must be a number', sets: 'Must be a number', repititions: 'Must be a number'
    },
  })
  return (
    <Box sx={{ maxWidth: 300 }}>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          required
          label="Date"
          placeholder="05/16/2022"
        // {...form.getInputProps('email')}
        />
        <TextInput
          required
          label="Exercise"
          placeholder="Sit-ups"
        // value={form.values.exercise}
        // onChange={(event) => form.setFieldValue('exercise', event.currentTarget.value)}
        // {...form.getInputProps('email')}
        />
        <NumberInput
          label="Sets"
          placeholder="2"
        // {...form.getInputProps('email')}
        />
        <NumberInput
          label="Repititions"
          placeholder="10"
        // {...form.getInputProps('email')}
        />
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  )
}

export default MantineE;