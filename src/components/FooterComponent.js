import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa"
const FooterComponent = () => {
    return (
        <div className="footer-container">
            <div className="row w-100">
                <div className="col social-container">
                    <p className="my-auto text-light">&copy; Copyright 2022 SThetik</p>
                    <ul className="footer-list my-auto">
                        <li>
                            <a href="#" onClick={() => window.open('http://www.twitter.com', '_blank')}>
                                <FaTwitter size={20} />
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={() => window.open('http://www.instagram.com', '_blank')}>
                                <FaInstagram size={20} />
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={() => window.open('http://www.facebook.com', '_blank')}>
                                <FaFacebook size={20} />
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={() => window.open('http://www.pinterest.com', '_blank')}>
                                <FaPinterest size={20} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FooterComponent;