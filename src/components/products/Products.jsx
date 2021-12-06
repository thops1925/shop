import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles.js';

function Products({ products, addToCart }) {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container spacing={4} justifyContent="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Product product={product} onAddToCart={addToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;
