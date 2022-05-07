import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>

            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">BikeBD.com is #1 motorcycle oriented website in Bangladesh</p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li><a href="http://scanfcode.com/category/c-language/"> Commuter Bike</a></li>
                                <li><a href="http://scanfcode.com/category/front-end-development/"> Sports Bike</a></li>
                                <li><a href="http://scanfcode.com/category/back-end-development/">Scooter bike </a></li>
                                <li><a href="http://scanfcode.com/category/java-programming-language/">Nacked Sports Bike</a></li>
                                <li><a href="http://scanfcode.com/category/android/">Cruser Bike</a></li>
                                <li><a href="http://scanfcode.com/category/templates/">Super Bike</a></li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="http://scanfcode.com/about/">About Us</a></li>
                                <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                                <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                                <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                                <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr></hr>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by
                                <a href="#"> Bike-BD</a>.
                            </p>
                        </div>

                        
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;