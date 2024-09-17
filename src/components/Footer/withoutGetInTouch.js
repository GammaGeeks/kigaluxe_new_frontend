/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import { faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Container, Row } from 'react-bootstrap'
// import moment from 'moment'

import { Link } from "react-router-dom"

// import './index.scss'

function FooterPart() {
  return (
    <footer className="footer">
    <div id="footer-main" className="aios-scroll-section" data-aios-scroll-title="Get in Touch">
            <div className="footer-container">
            <div className="footer-bg">
                <div className="textwidget custom-html-widget">
                <canvas className="bg-main lazyload" width="1600" height="637" data-bgset={require('../../assets/logo/footer.png')}></canvas>
                </div>
            </div>
            <div className="footer-main">
                <div className="footer-row">
                <div className="footer-col">
                    <div className="footer-logos">
                    <div className="textwidget custom-html-widget">
                        <div className="footer-logo">
                        <Link to='/' className="site-name">
                            <img className="lazyload" src={require(`../../assets/logo/k_109x180.png`)} alt="Serio Group" width="120" height="180"/>
                        </Link>
                        </div>
                        {/* <div className="footer-logo">
                        <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://serioestates.com/wp-content/uploads/2023/03/CB-Lux-Logo.png" alt="Coldwell Banker Logo" width="167" height="208"/>
                        </div> */}
                    </div>
                    </div>
                    <div className="footer-smi">
                    <div className="textwidget custom-html-widget">
                        <ul>
                        <li>
                            <a href="https://instagram.com/" target="_blank" rel="noopener">
                            <span className="ai-font-instagram">
                                <em className="hidden">Instagram</em>
                            </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener">
                            <span className="ai-font-facebook">
                                <em className="hidden">Facebook</em>
                            </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.tiktok.com/" target="_blank" rel="noopener">
                            <span className="ai-font-tiktok">
                                <em className="hidden">tiktok</em>
                            </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener">
                            <span className="ai-font-linkedin">
                                <em className="hidden">Linkedin</em>
                            </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/" target="_blank" rel="noopener">
                            <span className="ai-font-youtube">
                                <em className="hidden">youtube</em>
                            </span>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="footer-col">
                    <div className="footer-content-row">
                    <div className="footer-nav-wrap">
                        <div className="textwidget custom-html-widget">
                        <h2 className="footer-title">Navigate</h2>
                        </div>
                        <div className="menu-primary-menu-container">
                        <ul id="footer-nav" className="footernav">
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-46">
                                <Link to='about_us' data-title="About Us">About Us</Link>
                            </li>
                            <li className="gradient-fix menu-item menu-item-type-post_type menu-item-object-page menu-item-71">
                                <Link href='/listings' data-title="Featured Listings">Featured Listings</Link>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-233">
                                <Link to='places' data-title="Communities">Communities</Link>
                            </li>
                            {/* <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-43">
                                <a href="https://serioestates.com/buyers/" data-title="Buyers">Buyers</a>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-41">
                                <a href="https://serioestates.com/sellers/" data-title="Sellers">Sellers</a>
                            </li> */}
                            {/* <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-47">
                                <a href="https://serioestates.com/contact-us/" data-title="Contact Us">Contact Us</a>
                            </li> */}
                        </ul>
                        </div>
                    </div>
                    <div className="footer-nl-contacts-holder">
                        <div className="footer-nl-form-widget">
                        <div className="textwidget custom-html-widget">
                            <h2 className="footer-title">Join Our Vip List</h2>
                            <div className="wpcf7 no-js" id="wpcf7-f22-o3" lang="en-US" dir="ltr">
                            <div className="screen-reader-response">
                                <p role="status" aria-live="polite" aria-atomic="true"></p>
                                <ul></ul>
                            </div>
                            <form action="/#wpcf7-f22-o3" method="post" className="wpcf7-form init use-floating-validation-tip" aria-label="Contact form" noValidate="noValidate" data-status="init">
                                <div className="footer-nl-form">
                                <div className="footer-nl-form-field">
                                    <label className="hidden" htmlFor="nl-email">Email Address</label>
                                    <span className="wpcf7-form-control-wrap" data-name="your-email">
                                    <input size="40" maxLength="400" className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" id="nl-email" aria-required="true" aria-invalid="false" placeholder="Email Address" defaultValue="" type="email" name="your-email" onChange={() => {}} />
                                    </span>
                                </div>
                                <div className="footer-nl-form-field form-submit">
                                    <button type="submit" className="nl-form-submit ai-font-paper-airplane-alt" aria-label="Submit"></button>
                                    <span className="ajax-loader"></span>
                                </div>
                                </div>
                                <div className="wpcf7-response-output" aria-hidden="true"></div>
                            </form>
                            </div>
                        </div>
                        </div>
                        <div className="footer-contacts">
                        <div className="textwidget custom-html-widget">
                            <span>
                            <em className="ai-font-location-c"></em>Kigali, <br /> Rwanda </span>
                            <span>
                            <em className="ai-font-phone"></em>
                            <em className="ai-mobile-phone">
                                <a href="tel:+250788501505" className="aios-ai-phone " aria-label="+250788501505">0788501505</a>
                            </em>
                            </span>
                            <span>
                            <em className="ai-font-envelope-f"></em>
                            <a className="asis-mailto-obfuscated-email-hidden asis-mailto-obfuscated-email " aria-label="info@kigaluxe.estate" data-value="info@kigaluxe.estate">info@kigaluxe.estate</a>
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="footer-disclaimer">
                </div>
                    <div className="copyright"> Copyright © 2024 <span>KigaluXe Group</span>. All Rights Reserved. <a href="#">Privacy Policy</a>. 
                </div>
            </div>
            </div>
        </div>
</footer>
  )
}

export default FooterPart