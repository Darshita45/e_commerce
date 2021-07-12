import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import GroupIcon from '@material-ui/icons/Group';
import MessageIcon from '@material-ui/icons/Message';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import ShopIcon from '@material-ui/icons/Shop';
import { Link, useLocation } from 'react-router-dom';
import cls from './navbar.module.css'

import logo from '../../assets/commerce.jpg';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="65px" className={classes.image} />
                        <div className = {cls.rb}> Ramesh Brothers</div>
                    </Typography>
                    <div className={classes.grow} />
                    <div>
                        <IconButton component={Link} to="/" color="inherit">
                            <Badge color="secondary">
                                <HomeIcon />
                            </Badge>
                        </IconButton>
                    </div>
                    {/* <div>
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
                                <ShopIcon />
                            </Badge>
                        </IconButton>
                    </div>
                    {/*{location.pathname === '/' && (*/}
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                    <div className={classes.button}>
                        <IconButton component={Link} to="/contact" color="inherit">
                            <Badge color="secondary">
                                <PermContactCalendarIcon />
                            </Badge>
                        </IconButton>
                    </div>
                    {/*)}*/}
                </Toolbar>
            </AppBar>
           
        </>
    )
}

export default Navbar