import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
// import { Dropdown, Selection } from 'react-dropdown-now';
import Product from './Product/Product';
import useStyles from './styles';
import { render } from '@testing-library/react';

const Products = ({ products, onAddToCart }) => {
  const startPrice = 100000;
  const [pr, sp] = useState(startPrice);
  const [sb, ub] = useState("");
  const [search, updateSearch] = useState("");
  const classes = useStyles();

  //  if (!products.length) return <p>Loading...</p>;
  console.log("size:" + Object.keys(products).length)
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
      {/* <div>Search : {search}</div> */}
      <input

        type="text"
        placeholder="Search here..."
        className={classes.input_container}
        name="title"
        required
        onChange={(e) => {
          console.log("before: " + search)
          console.log(e.target.value)
          updateSearch(e.target.value)
          console.log("after: " + search)
        }}
      /><br></br>
      <select
        className={classes.select}
        onChange={(e) => {
          sp(e.target.value);
        }}
        value={pr}
      >
        <option value="10000" name="education" selected>
          All Products
        </option>
        <option name="education" value={10}>{"<" + 10 + "₹"}</option>
        <option name="education" value={50}>{"<" + 50 + "₹"}</option>
        <option name="education" value={100}>{"<" + 100 + "₹"}</option>
      </select>

      <select
        className={classes.select}
        onChange={(e) => {
          ub(e.target.value);
        }}
        value={sb}
      >
        <option value="" name="education" selected>
          All Brand
        </option>
        <option name="education" value={"Wagh Bakri"}>{"Wagh Bakri"}</option>
        <option name="education" value={"Bisleri"}>{"Bisleri"}</option>
        <option name="education" value={"Charbhuja"}>{"Charbhuja"}</option>
        <option name="education" value={"Cintu"}>{"Cintu"}</option>
        <option name="education" value={"Eagle"}>{"Eagle"}</option>
        <option name="education" value={"Fevi kwik"}>{"Fevi kwik"}</option>
        <option name="education" value={"Genius"}>{"Genius"}</option>
        <option name="education" value={"Maniarrs"}>{"Maniarrs"}</option>
        <option name="education" value={"Masum"}>{"Masum"}</option>
        <option name="education" value={"Oshon"}>{"Oshon"}</option>
        <option name="education" value={"Vicks"}>{"Vicks"}</option>
        <option name="education" value={"Ramdev"}>{"Ramdev"}</option>
        <option name="education" value={"Mahadev"}>{"Mahadev"}</option>
        <option name="education" value={"Samrat"}>{"Samrat"}</option>
        <option name="education" value={"Nihar"}>{"Nihar"}</option>
        <option name="education" value={"Parachute"}>{"Parachute"}</option>
        <option name="education" value={"Tiger Khichiya"}>{"Tiger Khichiya"}</option>
        <option name="education" value={"Yogi"}>{"Yogi"}</option>
        <option name="education" value={"Zayco"}>{"Zayco"}</option>
      </select>

      <Grid container justify="center" spacing={4}>
        {products.map((product) => {
          if (sb == null) {
            if (product.price.raw < pr)
              if (search == "") {
                return (<Grid key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} onAddToCart={onAddToCart} />
                </Grid>)
              } else {
                console.log(product.name + " " + search + " " + product.name.includes(search))
                if (product.name.toUpperCase().includes(search.toUpperCase())) {
                  return (<Grid key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart} />
                  </Grid>)
                }
              }
          } else {
            if (product.name.toUpperCase().includes(sb.toUpperCase())) {
              if (product.price.raw < pr)
                if (search == "") {
                  return (<Grid key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart} />
                  </Grid>)
                } else {
                  if (product.name.toUpperCase().includes(search.toUpperCase())) {
                    return (<Grid key={product.id} xs={12} sm={6} md={4} lg={3}>
                      <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>)
                  }
                }
            }
          }
        })}
      </Grid>
    </main>
  );

};

export default Products;