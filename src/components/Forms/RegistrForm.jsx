import React, { useState } from 'react'
import { TextField, Grid, Button } from '@mui/material';
import axios from 'axios';

const RegistrForm = () => {
  const [formData, setFormData] = useState({
    name: '',
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

  const handleRegisterSuccess = (token) => {
    localStorage.setItem('authToken', token);
    console.log('Authentication is successful');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/users/signup',
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 201) {
        const { token } = response.data;
        handleRegisterSuccess(token);
        console.log('Registration is successful');
      }
    } catch (error) {
      if (error.response) {
        console.error('Registration error:', error.response.data.error);
      } else {
        console.error('Error during registration:', error.message);
      }
    }
  };

	 return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            variant="outlined"
             required
             value={formData.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
  label="Email"
  variant="outlined"
  type="email"
  required
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
            registration
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default RegistrForm