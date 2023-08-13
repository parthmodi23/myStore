import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaCcVisa, FaCcMastercard, FaPaypal } from 'react-icons/fa';
import "./footer.css";
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='footer1'>
          <div className="about">
            <h3>About Us</h3>
            <p>Explore myStore where style meets convenience. <br/>Shop our diverse range of products curated for you. <br/>Elevate your shopping experience today.</p>
          </div>
          <div className="contact">
            <h3>Contact Us</h3>
            <p>Email: info@myStore.com</p>
            <p>Phone: +91 9898989898</p>
          </div>
          <div className="followus">
            <h3>Follow Us</h3>
            <ul className="social-icons">
              <li><a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
            </ul>
          </div>
        
          <div className="links">
          <h3>Services</h3>

            <ul className="footer-links">
              <li><a href="#">Shipping & Delivery</a></li>
              <li><a href="#">Returns & Refunds</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="payments">
            <h3>Payment methods</h3>
            <ul className="footer-payment">
              <li><FaCcVisa size={25} alt="Visa" /></li>
              <li><FaCcMastercard size={25} alt="Mastercard" /></li>
              <li><FaPaypal size={25} alt="PayPal" /></li>
            </ul>
          </div>
        </div>
        <hr className="copyright" />
        <p className="text-center">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
    
    </footer>
  );
};

export default Footer;
