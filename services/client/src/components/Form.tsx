import { Button, Snackbar, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import axios from 'axios';
import React, { FormEvent, useState } from 'react';

interface FormData {
  name: string;
  email: string;
}

export const Form: React.FC = () => {
  const initialFormValue: FormData = { name: '', email: '' };
  const [formData, setFormData] = useState(initialFormValue);
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios.post(`/api/users`, formData).then(() => {
      setSnackbarOpen(true);
      setFormData(initialFormValue);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <TextField
          id='name'
          label='Vardas'
          variant='outlined'
          className='text-field'
          size='small'
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <TextField
          id='email'
          label='El. paštas'
          variant='outlined'
          className='text-field'
          size='small'
          type='email'
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Button
          variant='contained'
          color='primary'
          type='submit'
          className='button'
        >
          Prenumeruoti
        </Button>
      </form>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={isSnackbarOpen}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert variant='filled'>Prenumeracija baigta!</Alert>
      </Snackbar>
    </>
  );
};
