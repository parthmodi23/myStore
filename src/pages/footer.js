import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../App.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod faucibus gravida.</p>
          </div>
          <div className="col-lg-4 col-md-6">
            <h4>Contact Us</h4>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="col-lg-4">
            <h4>Follow Us</h4>
            <ul className="social-icons">
              <li><a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
            </ul>
          </div>
        </div>
        <hr className="footer-hr" />
        <div className="row">
          <div className="col-md-6">
            <ul className="footer-links">
              <li><a href="#">Shipping & Delivery</a></li>
              <li><a href="#">Returns & Refunds</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="footer-payment">
              <li><img src="visa.png" alt="Visa" /></li>
              <li><img src="mastercard.png" alt="Mastercard" /></li>
              <li><img src="paypal.png" alt="PayPal" /></li>
            </ul>
          </div>
        </div>
        <hr className="footer-hr" />
        <p className="text-center footer-copyright">
          &copy; {new Date().getFullYear()} Your E-commerce Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
