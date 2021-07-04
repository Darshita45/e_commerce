import React from 'react';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import BarChartIcon from '@material-ui/icons/BarChart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import './styles.css';

const Services = () => {
    return (
    <>
     <section>
  <h3>Our Services</h3>
  <p class="section-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <div class="services-grid">
    <div class="service service1">
      <BarChartIcon style={{height: "50px"}}/>
      <h4>Wealth Management</h4>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>

    <div class="service service2">
      <EmojiObjectsIcon style={{height: "50px"}}/>
      <h4>Financial Planning</h4>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>

    <div class="service service3">
      <AttachMoneyIcon style={{height: "50px"}}/>
      <h4>Investment Banking</h4>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
</section>
    </>
    )
}

export default Services
