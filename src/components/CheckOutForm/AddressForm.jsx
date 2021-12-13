import React, { useState, useEffect } from 'react';
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './FormInput';
import { commerce } from '../../lib/commerce';

const AddressForm = ({ checkoutToken }) => {
  const [isCountries, setCountries] = useState([]);
  const [isOption, setOpition] = useState([]);
  const [isSub, setSub] = useState([]);

  const [isCountry, setCountry] = useState('');
  const [isSubChoose, setSubChoose] = useState('');
  const [isOpitonChoose, setOptionChoose] = useState('');
  const methods = useForm();

  const fetchCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    console.log(countries);
    setCountries(countries);
  };

  useEffect(() => {
    fetchCountries(checkoutToken);
  }, []);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>

      <FormProvider {...methods}>
        <form onSubmit="">
          <Grid container spacing={3}>
            <FormInput required name="firstname" label="First Name" />
            <FormInput required name="lastname" label="Last Name" />
            <FormInput required name="address" label="Address" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="City" label="City" />
            <FormInput required name="zip" label="ZIP" />
          </Grid>
          {/* 
            <Grid item xs={12} sm={6}>
              <InputLabel>Country</InputLabel>
              <Select value={} fullWidth onChange="">
                <MenuItem key={} value={}>
                  Select Country
                  </MenuItem>
              </Select>
          </Grid>

          <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select value={} fullWidth onChange="">
                <MenuItem key={} value={}>
                  Select Country
                  </MenuItem>
              </Select>
          </Grid>

          <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={} fullWidth onChange="">
                <MenuItem key={} value={}>
                  Select Country
                  </MenuItem>
              </Select>
          </Grid> */}
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
