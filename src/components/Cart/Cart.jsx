import React from 'react';
import { Container, Typography, Grid, Button } from '@material-ui/core';
import useStyles from './cartStyles';

function Cart({ item }) {
  const classes = useStyles();

  const isEmpty = !item.line_items;

  const EmptyCart = () => (
    <Typography variant="subtitle1" component="h2">
      Your cart is empty
    </Typography>
  );

  const CartItems = () => (
    <>
      <Grid container spacing={3}>
        {item.line_items.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <div>{item.name}</div>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {item.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} varaint="h3">
        Your Shopping Cart
      </Typography>
      {isEmpty ? <EmptyCart /> : <CartItems />}
    </Container>
  );
}

export default Cart;
