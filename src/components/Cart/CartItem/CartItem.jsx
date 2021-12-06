import React from 'react';
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import useStyle from './styles';

function CartItems({ item }) {
  const classes = useStyle();
  return (
    <Card>
      <CardMedia
        image={item.image.url}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small">
            -
          </Button>
          <Typography variant="h5" gutterBottom>
            {item.quantity}
          </Typography>
          <Button type="button" size="small">
            +
          </Button>
        </div>
        <Button
          type="button"
          size="small"
          variant="contained"
          color="secondary"
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default CartItems;
