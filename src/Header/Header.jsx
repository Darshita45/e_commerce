import React from 'react';
import './styles.scss';

//import Footer from '../Footer/Footer';

const Header = () => {
  return (
    <>
      <div class="container-wrapper">

        <div class="hero-img">

        </div>

        <div class="hero-content">
          <h1>Places</h1>
          <h2>Mountain</h2>
          <p>” THE REAL VOYAGE OF DISCOVERY CONSISTS NOT IN SEEKING NEW LANDSCAPES, BUT IN HAVING NEW EYES.” ~ MARCEL PROUST</p>
          <ul class="social-media">
            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
          </ul>
        </div>

      </div>
      {/* <Footer/> */}
    </>
  )
};

export default Header;