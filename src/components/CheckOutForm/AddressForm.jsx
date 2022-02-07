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
import { Link } from 'react-router-dom';

const AddressForm = ({ checkoutToken, next }) => {
  const methods = useForm();

  const [isCountries, setCountries] = useState([]);
  const [isCountry, setCountry] = useState('');

  const [isSub, setSub] = useState([]);
  const [isSubChoose, setSubChoose] = useState('');

  const [isOption, setOpition] = useState([]);
  const [isOpitonChoose, setOptionChoose] = useState('');

  const country = Object.entries(isCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));
  const subShipping = Object.entries(isSub).map(([code, name]) => ({
    id: code,
    label: name,
  }));

  const optionShipping = isOption.map((sO) => ({
    id: sO.id,
    label: `${sO.description}-(${sO.price.formatted_with_symbol})`,
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

  const fetchOption = async (checkoutTokenId, country, region = null) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      {
        country,
        region,
      }
    );
    setOpition(options);
    setOptionChoose(options[0].id);
  };

  useEffect(() => {
    fetchCountries(checkoutToken.id);
  }, []);

  useEffect(() => {
    if (isCountry) fetchSub(isCountry);
  }, [isCountry]);

  useEffect(() => {
    if (isSubChoose) fetchOption(checkoutToken.id, isCountry, isSubChoose);
  }, [isSubChoose]);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            next({ ...data, isCountry, isOpitonChoose, isSubChoose })
          )}
        >
          <Grid container spacing={3}>
            <FormInput name="firstname" label="First Name" />
            <FormInput name="lastname" label="Last Name" />
            <FormInput name="address" label="Address" />
            <FormInput name="email" label="Email" />
            <FormInput name="City" label="City" />
            <FormInput name="zip" label="ZIP" />

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

            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select
                value={isOpitonChoose}
                fullWidth
                onChange={(e) => setOptionChoose(e.target.value)}
              >
                {optionShipping.map((sub) => (
                  <MenuItem key={sub.id} value={sub.id}>
                    {sub.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
        </form>
        <br />
        <div className="flex justify-between">
          <Button
            component={Link}
            to="/cart"
            variant="outlined"
            color="primary"
          >
            Back
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Continue to Payment
          </Button>
        </div>
      </FormProvider>
    </>
  );
};

export default AddressForm;
