import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>Learn more about our mission and values.</p>
                </div>
                <div className="footer-section">
                    <h4>Customer Service</h4>
                    <ul>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#shipping">Shipping Info</a></li>
                        <li><a href="#returns">Returns</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <ul className="social-media">
                        <li><a href="#facebook">Facebook</a></li>
                        <li><a href="#twitter">Twitter</a></li>
                        <li><a href="#instagram">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
