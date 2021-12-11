import React, { useState } from 'react';
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  //   Button,
  Typography,
  //   CircularProgress,
  //   Divider,
} from '@material-ui/core';
import useStyles from './checkoutStyles';
import PaymentDetails from '../PaymentDetails';
import AddressForm from '../AddressForm';

const steps = ['Shipping address', 'Payment details'];

const CheckOut = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const Confirmation = () => <div>Confirmation</div>;

  const Form = () => (activeStep === 0 ? <AddressForm /> : <PaymentDetails />);
  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </>
  );
};

export default CheckOut;
