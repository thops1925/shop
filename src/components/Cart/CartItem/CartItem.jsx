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

function CartItems({ item, onRemove, update }) {
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
          <Button
            type="button"
            size="small"
            onClick={() => update(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Typography variant="h5" gutterBottom>
            {item.quantity}
          </Typography>
          <Button
            type="button"
            size="small"
            onClick={() => update(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          type="button"
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => onRemove(item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default CartItems;
