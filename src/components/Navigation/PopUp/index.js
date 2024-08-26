/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import popUp from '../../../assets/images/popup-bg.jpg'

function PopUp() {
  return (
    <div id="join-our-mailing-list" className="site-popup-container">
        <div className="site-popup-wrapper">
            <div className="site-popup-main">
                <button className="site-popup-close ai-font-close-b" aria-label="Close"></button>
                <div className="textwidget custom-html-widget">
                    <div className="site-popup-row">
                        <div className="site-popup-col">
                            <div className="site-popup-content-container">
                                <div className="site-popup-bg">
                                    <canvas width="468" height="433" style={{backgroundImage: `url(${popUp})`}}></canvas>
                                </div>
                                <div className="global-title is-centered is-white">
                                    <img src="images/accent-logo-b.png" alt="Serio Group Logo" width="68" height="68"/>
                                    <h2>
                                        <small>Join Our</small>
                                        <span>Vip Mailing List</span>
                                    </h2>
                                </div>
                                <div className="site-popup-caption">
                                    <p>Be the first to receive exclusive <br/> listings and market updates. </p>
                                </div>
                                <div className="site-popup-form-widget">
                                    <div className="wpcf7 no-js" id="wpcf7-f23-o1" lang="en-US" dir="ltr">
                                        <div className="screen-reader-response">
                                            <p role="status" aria-live="polite" aria-atomic="true"></p>
                                            <ul></ul>
                                        </div>
                                        <form action="/#wpcf7-f23-o1" method="post" className="wpcf7-form init use-floating-validation-tip" aria-label="Contact form" noValidate="noValidate" data-status="init">
                                            <div style={{display: 'none'}}>
                                                <input type="hidden" name="_wpcf7" defaultValue="23" onChange={() => {}}/>
                                                <input type="hidden" name="_wpcf7_version" defaultValue="5.9.8" onChange={() => {}}/>
                                                <input type="hidden" name="_wpcf7_locale" defaultValue="en_US" onChange={() => {}}/>
                                                <input type="hidden" name="_wpcf7_unit_tag" defaultValue="wpcf7-f23-o1" onChange={() => {}}/>
                                                <input type="hidden" name="_wpcf7_container_post" defaultValue="0" onChange={() => {}}/>
                                                <input type="hidden" name="_wpcf7_posted_data_hash" defaultValue="" onChange={() => {}}/>
                                            </div>
                                            <div id="wpcf7-66c195ec08999" style={{display: 'none !important', visibility:'hidden !important'}}>
                                                <input type="hidden" name="form-page-source" className="form-page-source" defaultValue="https://serioestates.com/" onChange={() => {}}/>
                                                <input type="hidden" name="queen-bee-id" defaultValue="wpcf7-66c195ec08999"/>
                                                <input type="hidden" name="wpcf7-66c195ec08999-website-remote-address" defaultValue="127.0.0.1" onChange={() => {}}/>
                                                <input type="hidden" name="wpcf7-66c195ec08999-website-time-start" defaultValue="1723962860" onChange={() => {}}/>
                                                <input type="hidden" name="wpcf7-66c195ec08999-website-time-check" defaultValue="5" onChange={() => {}}/>
                                                <label htmlFor="wpcf7-66c195ec08999-website" className="hp-message">Choose Side:</label>
                                                <input type="text" name="wpcf7-66c195ec08999-website" id="wpcf7-66c195ec08999-website" tabIndex="-1" autoComplete="off"/>
                                            </div>
                                            <div id="wpcf7-66c195ec08993" style={{display: 'none !important', visibility:'hidden !important'}}>
                                                <input type="hidden" name="queen-bee-id" defaultValue="wpcf7-66c195ec08993" onChange={() => {}}/>
                                                <input type="hidden" name="wpcf7-66c195ec08993-website-remote-address" defaultValue="127.0.0.1" onChange={() => {}}/>
                                                <input type="hidden" name="wpcf7-66c195ec08993-website-time-start" defaultValue="1723962860" onChange={() => {}}/>
                                                <input type="hidden" name="wpcf7-66c195ec08993-website-time-check" defaultValue="5" onChange={() => {}}/>
                                                <label htmlFor="wpcf7-66c195ec08993-website" className="hp-message">Choose Side:</label>
                                                <input type="text" name="wpcf7-66c195ec08993-website" id="wpcf7-66c195ec08993-website" tabIndex="-1" autoComplete="false"/>
                                            </div>
                                            <div className="site-popup-form">
                                                <div className="site-popup-field">
                                                    <label className="hidden" htmlFor="popup-email">Email Address</label>
                                                    <span className="wpcf7-form-control-wrap" data-name="your-email">
                                                        <input size="40" maxLength="400" className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" id="popup-email" aria-required="true" aria-invalid="false" placeholder="Email Address" defaultValue="" type="email" name="your-email"  onChange={() => {}}/>
                                                    </span>
                                                </div>
                                                <div className="site-popup-field form-submit">
                                                    <button type="submit" className="global-btn is-white">Join Us</button>
                                                    <span className="ajax-loader"></span>
                                                </div>
                                            </div>
                                            <div className="wpcf7-response-output" aria-hidden="true"></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="site-popup-col">
                            <div className="site-popup-agent-img">
                                <img src="images/team-photo-c.jpg" alt="Serio Group Photo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PopUp