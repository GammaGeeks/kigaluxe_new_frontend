/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

function GetInTouch() {
  return (
    
    <div id="get-in-touch" className="aios-scroll-section">
        <div className="textwidget custom-html-widget">
        <div className="git-container">
            <div className="git-bg attachment-fixed">
            <canvas width="1600" height="841" className="lazyload" data-bgset={require('../../../assets/logo/getInTouchBg.jpg')}></canvas>
            </div>
            <div className="custom-container">
            <div className="git-main">
                <div className="git-row">
                <div className="git-col">
                    <div className="git-content-container">
                    <div className="global-title is-centered">
                        <h2>
                        <small>
                            <em className="global-logo-icon">
                            <i className="global-outline"></i>
                            </em>Get In Touch </small>
                        <span>With Us</span>
                        </h2>
                    </div>
                    <div className="git-caption">
                        <p>To inquire about a property or event, <br /> please fill out the form below. </p>
                    </div>
                    <div className="git-form-widget">
                        <div className="wpcf7 no-js" id="wpcf7-f21-o2" lang="en-US" dir="ltr">
                        <div className="screen-reader-response">
                            <p role="status" aria-live="polite" aria-atomic="true"></p>
                            <ul></ul>
                        </div>
                        <form action="/#wpcf7-f21-o2" method="post" className="wpcf7-form init use-floating-validation-tip" aria-label="Contact form" noValidate="noValidate" data-status="init">
                            <div className="git-form">
                            <div className="git-form-row">
                                <div className="git-form-col">
                                <label className="hidden" htmlFor="git-fname">First Name</label>
                                <span className="wpcf7-form-control-wrap" data-name="fname">
                                    <input size="40" maxLength="400" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" id="git-fname" aria-required="true" aria-invalid="false" placeholder="First Name" defaultValue="" type="text" name="fname" onChange={() => {}} />
                                </span>
                                </div>
                                <div className="git-form-col">
                                <label className="hidden" htmlFor="git-lname">Last Name</label>
                                <span className="wpcf7-form-control-wrap" data-name="lname">
                                    <input size="40" maxLength="400" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" id="git-lname" aria-required="true" aria-invalid="false" placeholder="Last Name" defaultValue="" type="text" name="lname" onChange={() => {}} />
                                </span>
                                </div>
                            </div>
                            <div className="git-form-row">
                                <div className="git-form-col">
                                <label className="hidden" htmlFor="git-phone">Phone Number</label>
                                <span className="wpcf7-form-control-wrap" data-name="your-phone">
                                    <input size="40" maxLength="400" className="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel" id="git-phone" aria-required="true" aria-invalid="false" placeholder="Phone Number" defaultValue="" type="tel" name="your-phone"  onChange={() => {}}/>
                                </span>
                                </div>
                                <div className="git-form-col">
                                <label className="hidden" htmlFor="git-email">Email Address</label>
                                <span className="wpcf7-form-control-wrap" data-name="your-email">
                                    <input size="40" maxLength="400" className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" id="git-email" aria-required="true" aria-invalid="false" placeholder="Email Address" defaultValue="" type="email" name="your-email"  onChange={() => {}}/>
                                </span>
                                </div>
                            </div>
                            <div className="git-form-row full">
                                <div className="git-form-col">
                                <label className="hidden" htmlFor="git-message">Message</label>
                                <span className="wpcf7-form-control-wrap" data-name="your-message">
                                    <textarea cols="40" rows="10" maxLength="2000" className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required" id="git-message" aria-required="true" aria-invalid="false" placeholder="Message" name="your-message"></textarea>
                                </span>
                                </div>
                                <div className="git-form-col form-submit">
                                <button type="submit" className="global-btn">Submit</button>
                                </div>
                            </div>
                            </div>
                            <div className="wpcf7-response-output" aria-hidden="true"></div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="git-col">
                    <div className="git-team-photo">
                    <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src={require('../../../assets/logo/couple.jpg')} alt="Agent Photo" width="583" height="705"/>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default GetInTouch