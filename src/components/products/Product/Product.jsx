import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  CardActions,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

function Product({ product }) {
  return (
    <Card className="max-w-md overflow-hidden">
      <CardMedia
        className="h-0 p-16"
        image={product.image}
        title={product.name}
      />

      <CardContent>
        <div className="flex justify-between over">
          <Typography gutterBottom variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">{product.price}</Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>

      <CardActions disableSpacing className="flex justify-end">
        <IconButton aria-label="add to shopping cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Product;
