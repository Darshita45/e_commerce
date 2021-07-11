import React from 'react';
import './styles.scss';
import Services from '../Services/Services';
import About from '../About/About';
import Gallery from '../Gallery/Gallery';
import Footer from '../Footer/Footer';
import Team from '../Team/Team';
import History from '../History/History';
import Values from '../Values/Values';

const Header = () => {
  return (
    <>
      <div className="container-wrapper">
        <div className="hero-img">
        </div>
        <div className="hero-content">
          <h1>Our shop</h1>
          <h2>Ramesh Brothers</h2>
          <p>❝ The love and faith of consumers is what we have earn. ❞</p>
          <ul className="social-media">
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          </ul>
        </div>
      </div>
      <Services/>
      <History/>
      <Values/>
      <About/>
      <Gallery />
      <Team/>
      <Footer />
    </>
  )
};

export default Header;