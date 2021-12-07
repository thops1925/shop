import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  MenuItem,
  Menu,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/thops1.png';
import useStyles from './navbarStyles';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ totalItems }) {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Link to="/">
            <Typography variant="h6" className={classes.title} color="inherit">
              <img src={logo} alt="Thops" className={classes.image} />
              Thopz Imagery
            </Typography>
          </Link>
          <div className={classes.grow} />
          <div className={classes.button}>
            {location.pathname === '/' && (
              <Link to="/cart">
                <IconButton aria-label="show cart items" color="inherit">
                  <Badge badgeContent={totalItems} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </Link>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
