import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from '../Product/Product';

const products = [
  { id: 1, name: 'Product 1', price: '$100', description: 'nike' },
  { id: 2, name: 'Product 2', price: '$200', description: 'nike' },
  { id: 3, name: 'Product 3', price: '$300', description: 'nike' },
];

function Products() {
  return (
    <main>
      <Grid container spacing={4} justify="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;
