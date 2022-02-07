import React, { useEffect, useState } from 'react';
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
import { commerce } from '../../../lib/commerce';
const steps = ['Shipping address', 'Payment details'];

const CheckOut = ({ cart }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const classes = useStyles();
  const [shippingData, setShippingData] = useState({});
  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: 'cart',
        });
        setCheckoutToken(token);
      } catch (err) {}
    };
    generateToken();
  }, [cart]);

  const nextStep = () => {
    setActiveStep((prevAcctiveStep) => prevAcctiveStep + 1);
  };

  const backStep = () => {
    setActiveStep((prevAcctiveStep) => prevAcctiveStep - 1);
  };
  const next = (data) => {
    setShippingData(data);
    nextStep();
  };

  const Confirmation = () => <div>Confirmation</div>;

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentDetails
        shippingData={shippingData}
        checkoutToken={checkoutToken}
      />
    );
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
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
};

export default CheckOut;
