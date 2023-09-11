import React, { useState } from 'react'
import { TextField, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLoginSuccess = async (token) => {
    localStorage.setItem('authToken', token);
    console.log('Authentication is successful');
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    navigate('/contacts');

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/users/login',
        {
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        handleLoginSuccess(response.data.token);
      }
    } catch (error) {
      if (error.response) {
        console.error('Authentication failed:', error.response.data.error);
      } else {
        console.error('An error occurred during authentication:', error.message);
      }
    }
  };
	return (
		<form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            
            label="Email"
            variant="outlined"
            type="email"
            required
            name="email"
            value={formData.email}
          onChange={handleChange}
            
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            
            label="Password"
            variant="outlined"
            type="password"
            required
            name="password"
           value={formData.password}
          onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            
          >
            log in
          </Button>
        </Grid>
      </Grid>
    </form>
	)
}

export default LoginForm