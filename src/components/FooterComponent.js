import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa"
const FooterComponent = () => {
    return (
        <div className="footer-container mt-5">
            <p className="my-auto text-light">&copy; Copyright 2022 SThetik</p>
            <ul className="footer-list my-auto">
                <li>
                    <a href="twitter.com">
                        <FaTwitter size={25} />
                    </a>
                </li>
                <li>
                    <a href="instagram.com">
                        <FaInstagram size={25} />
                    </a>
                </li>
                <li>
                    <a href="facebook.com">
                        <FaFacebook size={25} />
                    </a>
                </li>
                <li>
                    <a href="pintrest.com">
                        <FaPinterest size={25} />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default FooterComponent;