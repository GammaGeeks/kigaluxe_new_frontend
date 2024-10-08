/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { fetchAllCategories } from '../../redux/actions/categories'
import { useSelector, useDispatch } from 'react-redux'

function SellProperty() {
  const form = useRef();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [type, setType] = useState('')
  const categories = useSelector(state => state.categories)

  useEffect(() => {
    dispatch(fetchAllCategories())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // eslint-disable-next-line no-unused-vars
  const { listOfCategories = [], getCategories = {} } = categories || {}

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs.sendForm('service_suiqez4', 'template_2c30zan', form.current, 'sYn9j2LcraIwTuaBw')
      .then((result) => {
          console.log('SUCCESS!', result.status, result.text);
          // You can add code here to show a success message to the user
          toast('MESSAGE SENT!!!', {
            duration: 4300,
            position: 'top-center',
          
            // Styling
            style: {
              background: 'green',
              color: '#fff',
            },
            // className: '',
          
            // Custom Icon
            icon: '👏',
          
            // Change colors of success/error/loading icon
            iconTheme: {
              primary: '#000',
              secondary: '#fff',
            },
          
            // Aria
            ariaProps: {
              role: 'status',
              'aria-live': 'polite',
            },
          })

          // Navigate after a short delay to ensure the toast is visible
          setTimeout(() => {
            navigate('/confirmed');
          }, 2000);
      }, (error) => {
          console.log('FAILED...', error);
          // You can add code here to show an error message to the user
      });
  };

  const topOfPageRef = useRef(null)
  useEffect(() => {
    if (topOfPageRef.current) {
      topOfPageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    }
  }, [])

  const handleTypeChange = (event) => {
    setType(event.target.value)
  }
  return (
    <main>
      <div ref={topOfPageRef}></div>
      <Toaster />
      <h2 className="aios-starter-theme-hide-title">Main Content</h2>
      {/* <!-- ip banner goes here --> */}
      <div className="textwidget custom-html-widget">
        {/* <!--<div className="ip-banner" data-type="page" data-id="18"><canvas width="1600" height="350" style="background-image: url(https://serioestates.com/wp-content/uploads/2023/01/slide-img-1.jpg)"></canvas></div>
    --> */}
        {/* <div className="custom-ip-banner">
          <canvas width="1530" height="568" style={{backgroundImage: `url(${require('../../assets/images/banner-meet.jpg')})`}}></canvas>
          <div className="custom-ip-tagline">
            <div className="container">Respected. Loyal. Relentless. Discreet.</div>
          </div>
        </div> */}
      </div>
      {/* <!-- ip banner goes here --> */}
      <div style={{marginTop: 50}}></div>
      <div id="inner-page-wrapper">
        <div className="container">
          <div id="content-full">
            <article id="content" className="hfeed">
              <p id="breadcrumbs">
                <span>
                  <span property="itemListElement" typeof="ListItem">
                    <Link property="item" typeof="WebPage" to='/'>
                      <span property="name">Home</span>
                    </Link>
                    <meta property="position" content="1"/>
                  </span> » <span className="breadcrumb_last" property="itemListElement" typeof="ListItem">
                    <span property="name">Contact Us</span>
                    <meta property="position" content="2"/>
                  </span>
                </span>
              </p>
              <div id="post-18" className="post-18 page type-page status-publish hentry">
                <h1 className="entry-title hidden">Contact Us</h1>
                <div className="entry entry-content">
                  <div id="ai-modern-contact" className="ai-modern-contact">
                    <div className="ai-modern-contact-entry">
                      <div className="container">
                        <div className="ai-modern-contact-entry-inner">
                          <div className="ai-modern-contact-photo">
                            <span>
                              <canvas width="550" height="825" style={{backgroundImage: `url(${require('../../assets/images/contact_us.jpg')})`}}></canvas>
                            </span>
                          </div>
                          <div className="ai-modern-contact-main">
                            <div className="global-title">
                              <h2>
                                <small>Welcome to the Kigaluxe Selling Portal</small>
                                <span>Your gateway to reaching the perfect buyers.</span>
                              </h2>
                            </div>
                            {/* <ul className="ai-modern-contact-info">
                              <li>
                                <span className="ai-font-phone-alt phone"></span>
                                <a href="tel:+250788501505" className="aios-ai-phone " aria-label="+250788501505">+250788501505</a>
                              </li>
                              <li>
                                <span className="ai-font-envelope envelope"></span>
                                <a className="asis-mailto-obfuscated-email " data-value="info@kigaluxe.estate" href="#" aria-label="info@kigaluxe.estate">info@kigaluxe.estate</a>
                              </li>
                              <li>
                                <span className="ai-font-location-c pin"></span>
                                <p>Kicukiro, Kigali, Rwanda</p>
                              </li>
                            </ul> */}
                            <div className="ai-modern-contact-form">
                              <h2 className="ai-modern-contact-form-title">
                                <strong>Sell your property</strong>
                                <span style={{lineHeight: '20px'}}>
                                  Fill out the form below, and our team will handle everything from setting up your listing and advertising,
                                   to providing expert pricing guidance. With Kigaluxe,
                                    you’re one step closer to selling your property at the best price. Start today!
                                </span>
                              </h2>
                              <div className="ai-modern-contact-form-container">
                                <div className="wpcf7 no-js" id="wpcf7-f86-p18-o2" lang="en-US" dir="ltr">
                                  <div className="screen-reader-response">
                                    <p role="status" aria-live="polite" aria-atomic="true"></p>
                                    <ul></ul>
                                  </div>
                                  <form ref={form} onSubmit={sendEmail} className="wpcf7-form init use-floating-validation-tip" aria-label="Contact form">
                                    <div className="ai-modern-contact-form-field">
                                      <label for="your-fname" className="ai-modern-contact-form-label">Full Name</label>
                                      <span className="wpcf7-form-control-wrap" data-name="your-fname">
                                        <input size="40" maxlength="400" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required ai-modern-contact-form-control" id="your-fname" aria-required="true" aria-invalid="false" type="text" name="firstname" />
                                      </span>
                                    </div>
                                    <div className="ai-modern-contact-form-field">
                                      <label for="your-lname" className="ai-modern-contact-form-label">Property ADDRESS</label>
                                      <span className="wpcf7-form-control-wrap" data-name="your-lname">
                                        <input size="40" maxlength="400" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required ai-modern-contact-form-control" id="your-lname" aria-required="true" aria-invalid="false" type="text" name="lastname" />
                                      </span>
                                    </div>
                                    <div className="ai-modern-contact-form-field">
                                      <label for="your-phone" className="ai-modern-contact-form-label">Phone Number</label>
                                      <span style={{marginTop: 10}} className="wpcf7-form-control-wrap" data-name="your-phone">
                                        <input size="40" maxlength="400" className="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel ai-modern-contact-form-control" id="your-phone" aria-required="true" aria-invalid="false" type="tel" name="phone" />
                                      </span>
                                    </div>
                                    <div className="ai-modern-contact-form-field">
                                      <label for="your-email" className="ai-modern-contact-form-label">PROPERTY TYPE</label>
                                      <span className="wpcf7-form-control-wrap" data-name="your-email">
                                        <select
                                          id="inputType"
                                          className="form-select"
                                          name='propertyType'
                                          value={type} 
                                          onChange={handleTypeChange}
                                          style={{
                                            border: 'none',
                                            borderBottom: '1px solid #000',
                                            borderRadius: '0',
                                            padding: '0.375rem 0.75rem',
                                            backgroundColor: '#dedede',
                                            outline: 'none'
                                          }}
                                        >
                                          <option value='' defaultValue={true}>Choose...</option>
                                          {
                                            (!categories || categories.listOfCategories.length === 0) || listOfCategories ? listOfCategories.map((item, index) => (
                                              <option key={index} value={item.id}>{item.name}</option>
                                            )) : <option>...</option>
                                          }
                                        </select>
                                      </span>
                                    </div>
                                    <div className="ai-modern-contact-form-field lg">
                                      <label for="your-email" className="ai-modern-contact-form-label">Email Address</label>
                                      <span className="wpcf7-form-control-wrap" data-name="your-email">
                                        <input size="40" maxlength="400" className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email ai-modern-contact-form-control" id="your-email" aria-required="true" aria-invalid="false" type="email" name="email" />
                                      </span>
                                      {/* <label for="your-message" className="ai-modern-contact-form-label">Message</label>
                                      <span className="wpcf7-form-control-wrap" data-name="your-message">
                                        <textarea cols="40" rows="10" maxlength="2000" className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required ai-modern-contact-form-control" id="your-message" aria-required="true" aria-invalid="false" name="message"></textarea>
                                      </span> */}
                                      <button aria-label="Send Me A Message" type="submit" className="ai-modern-contact-form-submit wpcf7-form-control has-spinner wpcf7-submit">
                                        <i className="ai-font-paper-airplane-alt" aria-hidden="true"></i>
                                      </button>
                                    </div>
                                    <div className="wpcf7-response-output" aria-hidden="true"></div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="ai-modern-contact-map" data-aos="fade-up">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211469.09442852973!2d-118.612546!3d34.0898987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaf204d967f3babf7%3A0x8ed479f7871fe87b!2sSerio%20Group!5e0!3m2!1sen!2sph!4v1680573923808!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div> */}
                  </div>
                </div>
                <div className="comments-template"></div>
              </div>
            </article>
            {/* <!-- end #content --> */}
          </div>
          {/* <!-- end #content-full --> */}
          <div className="clearfix"></div>
        </div>
        {/* <!-- end of #inner-page-wrapper .inner --> */}
      </div>
      {/* <!-- end of #inner-page-wrapper --> */}
    </main>
  )
}

export default SellProperty