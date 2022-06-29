import React from 'react';
import NavBar from './NavBar.jsx';
import { TextInput, Button, Group, Box } from '@mantine/core';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <NavBar />
      <div className="title">
        <h1>Stay fit with FitTrack!</h1>
      </div>
      <Box className="login-outer-box" sx={{ maxWidth: 400 }}>
        <Box className="login-box" sx={{ maxWidth: 400 }}>
          <form>
            <TextInput
              required
              label="Email"
              placeholder="abc@123.com" />
            <TextInput
              required
              label="Password"
            />
            <Group position="right" mt="md">
              <Button type="submit" variant="outline" color="dark">Submit</Button>
            </Group>
          </form>
        </Box>
      </Box>
    </div>
  )
}

export default Login;