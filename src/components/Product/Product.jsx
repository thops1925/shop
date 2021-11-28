import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  CardActions,
} from '@material-ui/core';
import { addShoppingCart } from '@material-ui/icons';

function Product({ product }) {
  return (
    <Card className="max-w-md">
      <CardMedia className="h-0 p-16" image="" title={product.name} />

      <CardContent>
        <div className="flex justify-between">
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>{' '}
          <Typography variant="body2" color="textSecondary" component="p">
            {product.price}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export default Product;
