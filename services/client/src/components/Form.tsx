import { Button, FormGroup, TextField } from '@material-ui/core';
import React from 'react';

export const Form: React.FC = () => {
  return (
    <FormGroup row className='form'>
      <TextField
        className='text-field'
        id='firstName'
        label='Vardas'
        variant='outlined'
        size='small'
      />

      <TextField
        className='text-field'
        id='email'
        type='email'
        label='El. paštas'
        variant='outlined'
        size='small'
      />

      <Button className='button' variant='contained' color='primary'>
        Prenumeruoti
      </Button>
    </FormGroup>
  );
};
