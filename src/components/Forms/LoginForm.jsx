import React, { useState } from 'react'
import { TextField, Grid, Button} from '@mui/material';

const LoginForm = ({ login }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		login({ email, password })
	}

	return (
		<form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            
            label="Email"
            variant="outlined"
            type="email"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            
            label="Password"
            variant="outlined"
            type="password"
            required
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