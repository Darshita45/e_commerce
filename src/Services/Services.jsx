import React from 'react';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import NavigationIcon from '@material-ui/icons/Navigation';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import './styles.css';

const Services = () => {
    return (
    <>
     <section>
  <h3>Our Services</h3>
  <p class="section-lead">We provide Best quality products and shipping services in the town.</p>
  <div class="services-grid">
    <div class="service service1">
      <NavigationIcon style={{height: "50px"}}/>
      <h4>Top quality products</h4>
      <p>Working with valueable brands and having good relationships with them.</p>
    </div>

    <div class="service service3">
      <VerifiedUserIcon style={{height: "50px"}}/>
      <h4>Certified</h4>
      <p>Dealing with only Certified products so that consumers get get their best.</p>
    </div>

    <div class="service service2">
      <LocalShippingIcon style={{height: "50px"}}/>
      <h4>Shipment</h4>
      <p>Giving our clients the earliest delivery consistent with quality - is how we works.</p>
    </div>
     
  </div>
</section>
{/* <div>
  <h2>History</h2>
  <p>An entrepreneur at heart, Rameshbhai Ka.Patel started out in 1979 with 1 agency of Wagh bakri tea. Single handedly, he learned how business works also having tough situations in family finanicially. 
  In developemet/growth of the business late Rajeshbhai is having a huge contibution. In the earliest times from 3 kgs per month to now 10,000+ kgs per month, business increased its graph. 
  From thinking of leaving the agency in first 6 months since there was less selling to not giving up, founders had their belief in company. 
  From not having mony to take an agency to now having 25+ agencies bussiness has made its growth. Shri Rameshbhai Ka.Patel's three sons and Shri Jagdishbhai's son followed in their father's footsteps by joining the business. Also the first to introduce the top quailty brands started with Wagh bakri tea in Kapadwanj taluka.
  As time grows company included many brands and increased its value. It is a tribute to the founder and co-founder that his vision is blended with a futuristic outlook, dedication and trust built over many years.</p>
</div> */}
    </>
    )
}

export default Services
