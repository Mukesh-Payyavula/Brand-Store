import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>Learn more about our Store.</p>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Products</h4>
                    <ul>
                        <li><Link to="/products">Products</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Customer Service</h4>
                    <ul>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/shipping">Shipping Info</Link></li>
                        <li><Link to="/returns">Returns</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <ul>
                        <li><Link to="/contact">Contact Page</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <ul className="social-media">
                        <li><Link to="/facebook">Facebook</Link></li>
                        <li><Link to="/twitter">Twitter</Link></li>
                        <li><Link to="/instagram">Instagram</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Fashion House. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
