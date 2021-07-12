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
        <option name="education" value={"Wagh Bakri"}>{"Gujarat Tea Processors & Packers LTD"}</option>
        <option name="education" value={"Ramdev"}>{"Ramdev Food Products Private Limited"}</option>
        <option name="education" value={"Samrat"}>{"Samrat Namkeen Private LImited"}</option>
        <option name="education" value={"Marico"}>{"Marico"}</option>
        <option name="education" value={"Eagle"}>{"M.P Food Products"}</option>
        <option name="education" value={"Maniarr's"}>{"HSM Foods International Private Limited"}</option>
        <option name="education" value={"Yogi"}>{"Yogi Foods"}</option>
        <option name="education" value={"Masum"}>{"Verona Products Private Limited"}</option>
        <option name="education" value={"Dwarkesh"}>{"Dwarkesh Products"}</option>
        <option name="education" value={"Oshon"}>{"Dolphin Foods India Limited"}</option>
        <option name="education" value={"Tiger Khichiya"}>{"Freshc Food World Private Limited"}</option>
        <option name="education" value={"Bisleri"}>{"Bisleri International Private Limited"}</option>
        <option name="education" value={"Fevi kwik"}>{"Pidilite Industrial Limited"}</option>
        <option name="education" value={"Cintu"}>{"Prayagh Nutri Products Private Limited"}</option>
        <option name="education" value={"Charbhuja"}>{"Charbhuja Foods Industries"}</option>
        <option name="education" value={"Zayco"}>{"Roble Agro Food Private Limited"}</option>

        <option name="education" value={"Genius"}>{"Genius"}</option>
        <option name="education" value={"Vicks"}>{"Vicks"}</option>
        <option name="education" value={"Mahadev"}>{"Mahadev"}</option>
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