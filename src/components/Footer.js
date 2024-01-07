import { ReactDOM } from "react";
import React from "react";
import './Footer.css'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import logo from './Assets/logo2_footer.png.webp';

function Footer(){

    return(

        <div className="container-footer">
        <div className="footer">
            <div className="logo-footer"><a href="#"><img src={logo} alt="logo" className="logo"/></a></div>
            <div className="footer-head">
                <h2>Quick Links</h2>
                <a href="#">Work</a>
                <a href="#">Services</a>
                <a href="#">Products</a>
                <a href="#">Tips & Tricks</a>
            </div>

            <div className="footer-head">
                <h2>Programs</h2>
                <a href="#">Air Freight</a>
                <a href="#">Ocean Freight</a>
                <a href="#">Large Projects</a>
            </div>

            <div className="footer-head">
                <h2>Resources</h2>
                <a href="#">FAQ</a>
                <a href="#">Submit Ticket</a>
                <a href="#">Contact Us</a>
            </div>

            <div className="newsletter">
                <div className="newsletter-title">
                    <h2>Newsletter</h2>
                <p>Subscribe newsletter to get updates</p>
                </div>

                <div className="news-mail-box">
                <input class="mail" type="email" placeholder="Enter your email" id="footer-email"/>
                <input type="submit" value="signup" id="email-btn"/>
                </div>

                <div className="social">
                <a href="#"><FaFacebook className="soc-icon"/></a>
                <a href="#"><FaInstagram className="soc-icon"/></a>
                <a href="#"><FaLinkedinIn className="soc-icon"/></a>
                <a href="#"><FaYoutube className="soc-icon"/></a>
                </div>
            </div>  
        </div>
       
        <div className="copyright">
            <p>Copyright &copy; 2023 All rights Reserved | manzir</p>
            </div>
    </div>


    ); 


}
export default Footer;