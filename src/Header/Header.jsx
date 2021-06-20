import React from 'react';
import './styles.scss';
import About from '../About/About';

//import Footer from '../Footer/Footer';

const Header = () => {
  return (
    <>
      <div className="container-wrapper">

        <div className="hero-img">

        </div>

        <div className="hero-content">
          <h1>Places</h1>
          <h2>Mountain</h2>
          <p>” THE REAL VOYAGE OF DISCOVERY CONSISTS NOT IN SEEKING NEW LANDSCAPES, BUT IN HAVING NEW EYES.” ~ MARCEL PROUST</p>
          <ul className="social-media">
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          </ul>
        </div>

      </div>
      <About/>
      {/* <Footer/> */}
    </>
  )
};

export default Header;