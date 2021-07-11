import React from 'react';
import './styles.css';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FlagIcon from '@material-ui/icons/Flag';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AdjustIcon from '@material-ui/icons/Adjust';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

const Values = () => {
    return (
        <>
            {/* <div id="about" className="container-fluid">
            <div className="row">
                <div className="col-sm-8">
                <h2>Our Values</h2>    
                <p>The name 'Ramesh Brothers' symbolizes the co-existence of one and all creating long lasting relationships in society by dissolving differnces over a good cup of tea.
				We serve the best quality of products like tea, namkeen, spices, etc. consistently throughout the year to one and all. In other words, Ramesh Brothers firm stands for relationships and harmony.</p>
                <h4>Mission</h4>
				<p>Dealing with Indian companies and adding sweetness to relationships by serving the best quality products in every corner we can through retail and quick service.</p>
                <h4>Vision</h4>
                <p>Serving India based reputed brands and delivering superior value to all its stakeholders.</p>
                </div>
                <div className="col-sm-4">
                <span className="glyphicon glyphicon-signal logo"></span>
                </div>
            </div>
            </div> */}
            <div className="info-circle">
    <h1 style={{font: "32pt Arial", textAlign: "center", fontWeight: "normal", marginBottom: "48px"}}>Our Values</h1>

    <div className="outer-circle">
        <div className="inner-circle">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxnbLXyQeqUP_kFrLre4orNjTkqhnIJYLj1Q&usqp=CAU" className="image" />
        </div>
    </div>

    <div className="info-blocks">
        <div className="info-block clearfix">
            <div className="info-icon">
                <EqualizerIcon/>
            </div>
            <div className="info-text">
                <h5 className="title text-upper">Core Values</h5>
                <p className="text">The name 'Ramesh Brothers' symbolizes the co-existence of one and all creating long lasting relationships in society by dissolving differnces over a good cup of tea.</p>
            </div>
        </div>

        <div className="info-block clearfix">
            <div className="info-icon">
                <AdjustIcon style={{marginTop: "-50px"}}/>
            </div>
            <div className="info-text">
                <h5 className="title text-upper">Objective</h5>
                <p className="text">We serve the best quality of products like tea, namkeen, spices, etc. consistently throughout the year to one and all.</p>
            </div>
        </div>

        <div className="info-block clearfix">
            <div className="info-icon">
            <VisibilityIcon/>
            </div>
            <div className="info-text">
                <h5 className="title">Vision</h5>
                <p className="text">Serving India based reputed brands and delivering superior value to all its stakeholders.</p>
            </div>
        </div>

        <div className="info-block clearfix">
            <div className="info-icon">
                <FlagIcon/> 
            </div>
            <div className="info-text">
                <h5 className="title">Mission</h5>
                <p className="text">Dealing with Indian companies and adding sweetness to relationships by serving the best quality products in every corner we can through retail and quick service.</p>
            </div>
        </div>

        <div className="info-block clearfix">
            <div className="info-icon">
                <FavoriteIcon/>
            </div>
            <div className="info-text title-only">
                <h5 className="title text-upper">In other words, Ramesh Brothers firm stands for relationships and harmony.</h5>
            </div>
        </div>

        <div className="info-block clearfix">
            <div className="info-icon">
                <LoyaltyIcon/>
            </div>
            <div className="info-text title-only">
                <h5 className="title">Respect for all.</h5>
            </div>
        </div>
    </div>
</div>

        </>
    )
}

export default Values
