import React from 'react';
import service from "../images/service.jpg"

const ContactComponent = () => {
    return (
        <div className="container">
            <div className="row bg-light my-5 p-2 rounded">
                <div className="col-lg-6 p-2">
                    <img src={service} alt="customer service" className="service-image rounded"/>
                </div>
                <div className="col-lg-6 p-2">
                    <h1>We'd love to hear from you</h1>
                    <ul className="list-unstyled">
                        <li><strong>CHAT WITH US</strong></li>
                        <li>You can chat with our Virtual assistant 24/7 for answers to frequently asked questions, and be put through to a live agent if you need more help.</li>
                    </ul>
                    <ul className="list-unstyled">
                        <li><strong>CALL US</strong></li>
                        <li>855-S-THETIK</li>
                        <li>855-555-7467 (Toll-free)</li>
                    </ul>
                    <ul className="list-unstyled">
                        <li><strong>OPENING HOURS</strong></li>
                        <li>We offer 24/7 customer service</li>
                        <li>Atención al Cliente en español de lunes a domingo de 7 AM a 10 PM Centro</li>
                    </ul>
                    <ul className="list-unstyled">
                        <li><strong>LET'S CONNECT ON SOCIAL MEDIA</strong></li>
                        <li>
                            <a className="text-dark" href="#" onClick={() => window.open('http://www.twitter.com', '_blank')}>
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a className="text-dark" href="#" onClick={() => window.open('http://www.instagram.com', '_blank')}>
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a className="text-dark" href="#" onClick={() => window.open('http://www.facebook.com', '_blank')}>
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a className="text-dark" href="#" onClick={() => window.open('http://www.pinterest.com', '_blank')}>
                                Pinterest
                            </a>
                        </li>
                    </ul>
                    <p>If you have any questions regarding your payment, please contact <a href="#" className="text-dark" onClick={() => window.open("https://www.klarna.com/us/customer-service/", "_blank")}>Klarna</a> customer service.</p>
                    <p>When you contact Customer Service your personal data will be processed in accordance with our <a href="#" className="text-dark">Privacy Notice</a>.</p>
                </div>
            </div>
        </div>
    );
};

export default ContactComponent;