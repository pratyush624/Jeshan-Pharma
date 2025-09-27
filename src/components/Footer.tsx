import React from 'react';
import './components.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div>
                    <h3>Jeshan Pharma</h3>
                    <p>Your trusted pharmaceutical partner</p>
                </div>
                <div>
                    <h4>Contact</h4>
                    <p>Email: info@jeshanpharma.com</p>
                    <p>Phone: +1 234 567 890</p>
                </div>
                <div>
                    <h4>Address</h4>
                    <p>Jeshan Pharma Private Limited</p>
                    <p>Patna, Bihar, India</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;