import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

function FormInput({ name, label, required }) {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextField
            label={label}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            required={required}
            fullWidth
          />
        )}
      />
    </Grid>
  );
}

export default FormInput;
