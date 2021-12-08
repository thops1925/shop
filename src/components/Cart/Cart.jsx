import React from 'react';
import { Container, Typography, Grid, Button } from '@material-ui/core';
import useStyles from './cartStyles';
import CardItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';
function Cart({
  item,
  handleEmptyCart,
  handleRemoveFromCart,
  handleUpdateCart,
}) {
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      <Link
        to="/"
        className="flex justify-center items-center text-green-500 text-xl"
      >
        Empty Cart Start Shopping Now
      </Link>
    </Typography>
  );
  const CartItems = () => (
    <>
      <Grid container spacing={3}>
        {item.line_items.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <CardItem
              item={item}
              update={handleUpdateCart}
              onRemove={handleRemoveFromCart}
            />
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
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            component={Link}
            to="/checkout"
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

  if (!item.line_items) return 'loading...';

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h4">
        Your Shopping Cart
      </Typography>
      {!item.line_items.length ? <EmptyCart /> : <CartItems />}
    </Container>
  );
}

export default Cart;
