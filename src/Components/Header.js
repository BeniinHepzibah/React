import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

import logo from './images/logo.jpg';
import img10 from './images/cart.png';
import img11 from './images/whatsap.png';
import img12 from './images/password.png';
import img13 from './images/Burj.png';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div> {/* Wrap everything within a parent div */}
      <nav>
        <div className="logo">
          <Navbar.Brand as={Link} to="/">
            <div className="logo-container" >
              <img src={logo} alt="Logo" className="logo-image" />
            </div>
          </Navbar.Brand> 
        </div>
        <div className="navbar-menu">
          <ul>
            <li>
              <Nav.Link href="#Home">Home</Nav.Link>
            </li>
            <li>
              <Nav.Link as={Link} to="/tours">Tours</Nav.Link>
            </li>
            <li>
              <Nav.Link as={Link} to="/travel">Travel</Nav.Link>
            </li>
            <li>
              <Nav.Link as={Link} to="/afghan">Visa</Nav.Link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="home">
        <div class="content">
            <h5>Welcome To UAE</h5>
            <h1>Visit <span class="changecontent"></span></h1>
            <p>Dubai city tour </p>
            <a href="#book">Book Now</a>
        </div>
    </div>
      <section className="packages" id="packages">
      <div className="container">
        <div className="main-txt">
          <h1><span>P</span>ACKAGES</h1>
        </div>

        <div className="row" style={{ marginTop: '30px' }}>
          {/* United Kingdom */}
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src={img13} alt="" className="row "/>
              <div className="card-body">
                <h3>Burj Khalifa, Dubai</h3>
                <p>Duration 01:45 Hrs</p>
                <div className="start">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star "></i>
                </div>
                <h6>AED <strong>169</strong></h6>
                <a href="#book">Book Now</a>
              </div>
            </div>
          </div>
          {/* Other cards go here */}
          <div className="row" style={{ marginTop: '30px' }}>
          {/* United Kingdom */}
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src={img13} alt="" className="row "/>
              <div className="card-body">
                <h3>Burj Khalifa, Dubai</h3>
                <p>Duration 01:45 Hrs</p>
                <div className="start">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star "></i>
                </div>
                <h6>AED <strong>169</strong></h6>
                <a href="#book">Book Now</a>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: '30px' }}>
          {/* United Kingdom */}
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src={img13} alt="" className=""/>
              <div className="card-body">
                <h3>Burj Khalifa, Dubai</h3>
                <p>Duration 01:45 Hrs</p>
                <div className="start">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star "></i>
                </div>
                <h6>AED <strong>169</strong></h6>
                <a href="#book">Book Now</a>
              </div>
            </div>
          </div>
        </div>

        </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Header;
