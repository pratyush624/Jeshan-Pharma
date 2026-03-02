import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer-content">
                <div>
                    <h3>Jeshan Pharma Pvt. Ltd.</h3>
                    <p>Your trusted pharmaceutical partner</p>
                </div>
                <div>
                    <h4>Contact</h4>
                    <p>Email: info@jeshanpharma.com</p>
                    <p>Phone: +91 9608034610</p>
                </div>
                <div>
                    <h4>Address</h4>
                    <p>Jeshan Pharma Pvt. Ltd.</p>
                    <p>256, Srikrishna Nagar,</p>
                    <p>P.O.-Pravash Nagar, Hooghly,</p>
                    <p>West Bengal - 712249 (India)</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
