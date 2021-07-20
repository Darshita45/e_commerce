import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Products, Cart, Checkout } from './components';
import ContactUs from './Contact/ContactUs';
import Commerce from '@chec/commerce.js'
import { Link, useLocation } from 'react-router-dom';
import { commerce } from './lib/commerce';
import Header from './Header/Header';
import Shop from './Shop/Shop';
import Whatsapp from './components/Whatsapp/Whatsapp'

const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const co = new Commerce('pk_286536d6b0868a8cb04ce8feeed6acebc09bd534592da');

  const fetchProducts = async () => {
    var { data } = await commerce.products.list({limit:250});
    co.products.retrieve('prod_r2LM5QGdWawZV1').then((product) => {
      data = { ...data, product }
    });
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

  return (
    <>

      
      <Router>

        <CssBaseline />
        <Navbar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle} />

        {/* <div>
      <Header/>
    </div> */}

        <div>
          <Route exact path="/">
            <Header />
          </Route>
          <Route exact path="/shop">
            <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
          </Route>
          <Route path="/checkout" exact>
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
          </Route>
          <Route exact path="/contact">
            <ContactUs/>
          </Route>
          {/* <Route exact path="/shop" component={Shop}>Shop Now</Route> */}
        </div>
      </Router>
      <div>
        <Whatsapp></Whatsapp>
      </div>

    </>
  );
};

export default App;