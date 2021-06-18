import React, { useState, useEffect } from 'react';
import { Navbar, Products, Cart, Checkout } from '../components';
import { commerce } from '../lib/commerce';
import {ShoppingCart} from '@material-ui/icons';
import ShopIcon from '@material-ui/icons/Shop';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';

import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import logo from '../../assets/commerce.jpg';

import { Link, useLocation } from 'react-router-dom';
import useStyles from './styles';

const Shop = (totalItems) => {
    const classes = useStyles();
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
    return(
        <>
        <div style={{ display: 'flex' }}>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/website address here" variant="h6" className={classes.title} color="inherit">
                        {/* <img src={} alt="Commerce.js" height="65px" className={classes.image}/> */}
                        Ramesh Brothers
                    </Typography>
                    <div className={classes.grow}/>
                    {/*<div>
                        <IconButton component={Link} to="/home" color="inherit">
                            <Badge color="secondary">
                                <HomeIcon/>
                            </Badge>
                        </IconButton>
                    </div>
                    <div>
                        <IconButton component={Link} to="/contact" color="inherit">
                            <Badge color="secondary">
                                <MessageIcon/>
                            </Badge>
                        </IconButton>
                    </div>
                    <div>
                        <IconButton component={Link} to="/team" color="inherit">
                            <Badge color="secondary">
                                <GroupIcon/>
                            </Badge>
                        </IconButton>
                    </div>
                    <div>
                        <IconButton component={Link} to="/aboutus" color="inherit">
                            <Badge color="secondary">
                                <InfoIcon/>
                            </Badge>
                        </IconButton>
                    </div>*/}
                    <div>
                        <IconButton component={Link} to="/shop" color="inherit">
                            <Badge color="secondary">
                                <ShopIcon/>
                            </Badge>
                        </IconButton>
                    </div>
                    {location.pathname === '/' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                    )}
                </Toolbar>
            </AppBar>
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
          </Route>
          <Route path="/checkout" exact>
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
          </Route>
        </Switch>
      </div>
        </>
    )
}

export default Shop;