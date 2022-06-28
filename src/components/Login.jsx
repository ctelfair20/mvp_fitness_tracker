import React from 'react';
import { TextInput, Button, Group, Box } from '@mantine/core';

function Login() {
  <Box className="login-box" sx={{ maxWidth: 300 }}>
    <form>
      <TextInput
        required
        label="Email"
        placeholder="abc@123.com" />
      <TextInput
        required
        label="Password"
      />
      <Group position="center" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  </Box>
}

export default Login;