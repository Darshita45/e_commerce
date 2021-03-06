import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';
import cla from './style.module.css'

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();
    // for (var x in product.price) {
    //     console.log(x)
    // }
    // console.log("Price " + product.price.raw)

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        {product.price.formatted_with_symbol}
                            <IconButton className = {classes.icon} aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                            <button className={cla.button} onClick={() => onAddToCart(product.id, 1)}><span>Add to cart </span></button>                            </IconButton>
                    </Typography>
                </div>
                <Typography dangerousSetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" />
            </CardContent>

        </Card>
    )


}

export default Product
