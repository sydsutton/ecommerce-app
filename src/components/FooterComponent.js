import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa"
const FooterComponent = () => {
    return (
        <div className="footer-container mt-5">
            <p className="my-auto text-light">&copy; Copyright 2022 SThetik</p>
            <ul className="footer-list my-auto">
                <li>
                    <a href="twitter.com">
                        <FaTwitter size={20} />
                    </a>
                </li>
                <li>
                    <a href="instagram.com">
                        <FaInstagram size={20} />
                    </a>
                </li>
                <li>
                    <a href="facebook.com">
                        <FaFacebook size={20} />
                    </a>
                </li>
                <li>
                    <a href="pintrest.com">
                        <FaPinterest size={20} />
                    </a>
                </li>
            </ul>
            <div/>
        </div>
    );
};

export default FooterComponent;