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
  const methods = useForm();

  const [isCountries, setCountries] = useState([]);
  const [isOption, setOpition] = useState([]);
  const [isSub, setSub] = useState([]);
  const [isCountry, setCountry] = useState('');
  const [isSubChoose, setSubChoose] = useState('');
  const [isOpitonChoose, setOptionChoose] = useState('');

  const country = Object.entries(isCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));
  const subShipping = Object.entries(isSub).map(([code, name]) => ({
    id: code,
    label: name,
  }));

  const fetchCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    setCountries(countries);
    setCountry(Object.keys(countries)[0]);
  };

  const fetchSub = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );
    setSub(subdivisions);
    setSubChoose(Object.keys(subdivisions)[0]);
  };

  useEffect(() => {
    fetchCountries(checkoutToken.id);
  }, [checkoutToken]);

  useEffect(() => {
    if (isCountry) fetchSub(isCountry);
  }, [isCountry]);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>

      <FormProvider {...methods}>
        <form>
          <Grid container spacing={3}>
            <FormInput required name="firstname" label="First Name" />
            <FormInput required name="lastname" label="Last Name" />
            <FormInput required name="address" label="Address" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="City" label="City" />
            <FormInput required name="zip" label="ZIP" />

            <Grid item xs={12} sm={6}>
              <InputLabel>Country</InputLabel>
              <Select
                value={isCountry}
                fullWidth
                onChange={(e) => setCountry(e.target.value)}
              >
                {country.map((country) => (
                  <MenuItem key={country.id} value={country.id}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select
                value={isSubChoose}
                fullWidth
                onChange={(e) => setSubChoose(e.target.value)}
              >
                {subShipping.map((sub) => (
                  <MenuItem key={sub.id} value={sub.id}>
                    {sub.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            {/* 
          <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={} fullWidth onChange="">
                <MenuItem key={} value={}>
                  Select Country
                  </MenuItem>
              </Select>
          </Grid>  */}
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
