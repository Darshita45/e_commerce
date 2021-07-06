import React from 'react';
import './styles.scss';
import Services from '../Services/Services';
import About from '../About/About';
import Gallery from '../Gallery/Gallery';
import Footer from '../Footer/Footer';
import Team from '../Team/Team'

const Header = () => {
  return (
    <>
      <div className="container-wrapper">
        <div className="hero-img">
        </div>
        <div className="hero-content">
          <h1>Our shop</h1>
          <h2>Ramesh Brothers</h2>
          <p>THE REAL VOYAGE OF DISCOVERY CONSISTS NOT IN SEEKING NEW LANDSCAPES, BUT IN HAVING NEW EYES. ~ MARCEL PROUST</p>
          <ul className="social-media">
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          </ul>
        </div>
      </div>
      <Services/>
      <About/>
      <Gallery />
      <Team/>
      <Footer />
    </>
  )
};

export default Header;