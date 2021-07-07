import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Dropdown, Selection } from 'react-dropdown-now';
import Product from './Product/Product';
import useStyles from './styles';
import { render } from '@testing-library/react';

const Products = ({ products, onAddToCart }) => {
  const startPrice = 100000;
  const [pr, sp] = useState(startPrice);
  const [search, updateSearch] = useState("");
  const classes = useStyles();

  //  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {/* <div>{pr}</div> */}
      {/* <Dropdown
          placeholder="Select an option"
          className="my-className"
          options={[10, 55, 100]}
          value="one"
          onChange={(value) => {
            console.log("starting price " + pr)
            console.log('change!', value)
            sp(value.value);
            console.log("updated price " + pr)
          }}
          onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
          onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
          onOpen={() => console.log('open!')}
        /> */}
      <div>search: {search}</div>
      <input

        type="text"
        className={classes.input_container}
        name="title"
        required
        onChange={(e) => {
          console.log("before: " + search)
          console.log(e.target.value)
          updateSearch(e.target.value)
          console.log("after: " + search)
        }}
      />
      <select
        className={classes.select}
        onChange={(e) => {
          // console.log("starting price " + pr)
          // console.log('change!', e.target.value)
          sp(e.target.value);
          //console.log("updated price " + pr)
        }}
        value={pr}
      >
        <option value="10000" name="education" selected>
          All Products
        </option>
        <option name="education" value={10}>{"<" + 10 + "₹"}</option>
        <option name="education" value={55}>{"<" + 55 + "₹"}</option>
        <option name="education" value={100}>{"<" + 100 + "₹"}</option>
      </select>

      <Grid container justify="center" spacing={4}>
        {products.map((product) => {
          if (product.price.raw < pr)
            if (search == "") {
              return (<Grid key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} onAddToCart={onAddToCart} />
              </Grid>)
            } else {
              console.log(product.name+" "+search+" "+product.name.includes(search))
              if (product.name.toUpperCase().includes(search.toUpperCase())) {
                return (<Grid key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} onAddToCart={onAddToCart} />
                </Grid>)
              }
            }

        })}
      </Grid>
    </main>
  );

};

export default Products;