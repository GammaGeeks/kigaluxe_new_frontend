/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useEffect } from 'react'


function AboutUs() {
  const topOfPageRef = useRef(null)
  useEffect(() => {
    if (topOfPageRef.current) {
      topOfPageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    }
  }, [])
  return (
    <main>
      <div ref={topOfPageRef}></div>
      <h2 className="aios-starter-theme-hide-title">Main Content</h2>
      {/* <!-- ip banner goes here --> */}
      <div className="textwidget custom-html-widget">
        {/* <!--<div className="ip-banner" data-type="page" data-id="33"><canvas width="1600" height="350" style="background-image: url(https://serioestates.com/wp-content/uploads/2023/01/slide-img-1.jpg)"></canvas></div>
    --> */}
        <div className="custom-ip-banner">
          <canvas width="1530" height="568"></canvas>
          {/* <div className="custom-ip-tagline">
            <div className="container">Respected. Loyal. Relentless. Discreet.</div>
          </div> */}
        </div>
      </div>
      {/* <!-- ip banner goes here --> */}
      <div id="inner-page-wrapper">
        <div className="container">
          <div id="ai-modern-about" className="ai-modern-about">
            <div id="content-full">
              <article id="content" className="hfeed">
                {/* <p id="breadcrumbs">
                  <span>
                    <span property="itemListElement" typeof="ListItem">
                      <a property="item" typeof="WebPage" href="https://serioestates.com/">
                        <span property="name">Home</span>
                      </a>
                      <meta property="position" content="1"/>
                    </span> » <span className="breadcrumb_last" property="itemListElement" typeof="ListItem">
                      <span property="name">About Us</span>
                      <meta property="position" content="2"/>
                    </span>
                  </span>
                </p> */}
                <div id="post-33" className="post-33 page type-page status-publish hentry">
                  <h1 className="entry-title hidden">About Us</h1>
                  <div className="entry entry-content">
                    <div id="ai-modern-about" className="ai-modern-about">
                      <div className="ai-modern-about-entry">
                        <div className="container-fluid">
                          <div className="ai-modern-about-photo">
                            <canvas width="550" height="825" style={{backgroundImage: `url(${require('../../assets/images/b.jpg')})`}}></canvas>
                          </div>
                          <div className="ai-modern-about-main">
                            <div className="ai-modern-about-title">
                              <div className="global-title">
                                <h2>
                                  <small>Welcome to Kigaluxe:</small>
                                  <span>Your Gateway to Exceptional Real Estate Services</span>
                                </h2>
                              </div>
                            </div>
                            <div className="ai-modern-about-content">
                              <p>
                                At Kigaluxe, we are more than a real estate company – we are a trusted partner in facilitating, managing, and optimizing your property investments. With an in-depth understanding of Rwanda’s evolving real estate landscape, we are committed to delivering excellence across all facets of the property market.
                                <br/><br/>
                                Established with the objective of redefining the real estate experience in Kigali and beyond, Kigaluxe brings together a team of highly skilled professionals dedicated to providing comprehensive services, ranging from property sales and acquisitions to investment consulting and asset management. Whether you are a prospective homeowner or an experienced investor, we offer tailored solutions designed to meet your specific needs, ensuring a seamless and sophisticated real estate journey.
                              </p>
                            </div>
                            <div className="ai-modern-about-info">
                              <div>
                                <ul className="ai-modern-about-contact">
                                  <li>
                                    <span className="ai-font-phone-alt phone"></span>
                                    <a href="tel:+250788501505" className="aios-ai-phone " aria-label="+250788501505">+250788501505</a>
                                  </li>
                                  <li>
                                    <span className="ai-font-envelope envelope"></span>
                                    <a className="asis-mailto-obfuscated-email " data-value="musangamfuravincent@gmail.com" href="#" aria-label="musangamfuravincent@gmail.com">musangamfuravincent@gmail.com</a>
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <ul className="ai-modern-about-smi">
                                  <li>
                                    <a href="https://www.facebook.com/" target="_blank" rel="nofollow noopener" className="ai-font-facebook">
                                      <span className="hidden">facebook</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://twitter.com/" target="_blank" rel="nofollow noopener" className="ai-font-twitter">
                                      <span className="hidden">twitter</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.linkedin.com/" target="_blank" rel="nofollow noopener" className="ai-font-linkedin">
                                      <span className="hidden">linkedin</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.youtube.com/" target="_blank" rel="nofollow noopener" className="ai-font-youtube">
                                      <span className="hidden">youtube</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://instagram.com/" target="_blank" rel="nofollow noopener" className="ai-font-instagram">
                                      <span className="hidden">instagram</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="ai-template-form-wrap">
                        <div className="container">
                          <div className="ai-template-form">
                            <div className="ai-template-form-title">
                              <h2>SEND US A <strong>MESSAGE</strong>
                              </h2>
                              <p>Got any questions? Get in touch</p>
                            </div>
                            <div className="ai-template-form-container">
                              <div className="wpcf7 no-js" id="wpcf7-f73-p33-o2" lang="en-US" dir="ltr">
                                <div className="screen-reader-response">
                                  <p role="status" aria-live="polite" aria-atomic="true"></p>
                                  <ul></ul>
                                </div>
                                <form action="/about-us/#wpcf7-f73-p33-o2" method="post" className="wpcf7-form init use-floating-validation-tip" aria-label="Contact form" novalidate="novalidate" data-status="init">
                                  <div style={{display: "none"}}>
                                    <input type="hidden" name="_wpcf7" value="73"/>
                                    <input type="hidden" name="_wpcf7_version" value="5.9.8"/>
                                    <input type="hidden" name="_wpcf7_locale" value="en_US"/>
                                    <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f73-p33-o2"/>
                                    <input type="hidden" name="_wpcf7_container_post" value="33"/>
                                    <input type="hidden" name="_wpcf7_posted_data_hash" value=""/>
                                  </div>
                                  <div id="wpcf7-66de972749f2f" style={{display:"none !important", visibility:"hidden !important"}}>
                                    <input type="hidden" name="form-page-source" className="form-page-source" value="https://serioestates.com/about-us/"/>
                                    <input type="hidden" name="queen-bee-id" value="wpcf7-66de972749f2f"/>
                                    <input type="hidden" name="wpcf7-66de972749f2f-website-remote-address" value="127.0.0.1"/>
                                    <input type="hidden" name="wpcf7-66de972749f2f-website-time-start" value="1725863719"/>
                                    <input type="hidden" name="wpcf7-66de972749f2f-website-time-check" value="5"/>
                                    <label htmlFor="wpcf7-66de972749f2f-website" className="hp-message">Choose Side:</label>
                                    <input type="text" name="wpcf7-66de972749f2f-website" id="wpcf7-66de972749f2f-website" tabindex="-1" autoComplete="off"/>
                                  </div>
                                  <div id="wpcf7-66de972749f18" style={{display:"none !important", visibility:"hidden !important"}}>
                                    <input type="hidden" name="queen-bee-id" value="wpcf7-66de972749f18"/>
                                    <input type="hidden" name="wpcf7-66de972749f18-website-remote-address" value="127.0.0.1"/>
                                    <input type="hidden" name="wpcf7-66de972749f18-website-time-start" value="1725863719"/>
                                    <input type="hidden" name="wpcf7-66de972749f18-website-time-check" value="5"/>
                                    <label htmlFor="wpcf7-66de972749f18-website" className="hp-message">Choose Side:</label>
                                    <input type="text" name="wpcf7-66de972749f18-website" id="wpcf7-66de972749f18-website" tabindex="-1" autoComplete="false"/>
                                  </div>
                                  <div className="ai-template-form-row ai-template-form-col-2">
                                    <div className="ai-template-form-col">
                                      <label htmlFor="ai-form-name">Full Name</label>
                                      <span className="wpcf7-form-control-wrap" data-name="your-name">
                                        <input size="40" maxlength="400" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" id="ai-form-name" aria-required="true" aria-invalid="false" value="" type="text" name="your-name"/>
                                      </span>
                                    </div>
                                    <div className="ai-template-form-col">
                                      <label htmlFor="ai-form-email">Email</label>
                                      <span className="wpcf7-form-control-wrap" data-name="your-email">
                                        <input size="40" maxlength="400" className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" id="ai-form-email" aria-required="true" aria-invalid="false" value="" type="email" name="your-email"/>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="ai-template-form-row">
                                    <div className="ai-template-form-col">
                                      <label htmlFor="ai-form-message">Message</label>
                                      <span className="wpcf7-form-control-wrap" data-name="your-message">
                                        <textarea cols="40" rows="10" maxlength="2000" className="wpcf7-form-control wpcf7-textarea" id="ai-form-message" aria-invalid="false" name="your-message"></textarea>
                                      </span>
                                      <button type="submit" className="wpcf7-form-control has-spinner wpcf7-submit">Submit</button>
                                    </div>
                                  </div>
                                  <div className="wpcf7-response-output" aria-hidden="true"></div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <ul className="ai-modern-about-cta">
                        <li>
                          <a href="https://serioestates.com/featured-listings/">
                            <canvas width="533" height="340" style={{backgroundImage: "url('images/Luxury-Properties.jpg')"}}></canvas>
                            <div>
                              <span>View our</span>
                              <strong>Luxury Portfolio</strong>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="https://serioestates.com/home-valuation/">
                            <canvas width="533" height="340" style={{backgroundImage: "url('images/about-img-2.jpg')"}}></canvas>
                            <div>
                              <span>What Is My</span>
                              <strong>Property Value</strong>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="trigger-popup">
                            <canvas width="533" height="340" style={{backgroundImage: "url('images/about-img-3.jpg')"}}></canvas>
                            <div>
                              <span>Join Our</span>
                              <strong>VIP Mailing List</strong>
                            </div>
                          </a>
                        </li>
                      </ul>
                      {/* <div className="ai-modern-about-testi">
                        <div className="ai-modern-about-testi-slider">
                          <div className="ai-modern-about-testi-item">
                            <a href="/testimonials/">
                              <h3>Heather S.</h3>
                              <img src="images/about-modern-testimonial-quote.png" alt="Quote Icon"/>
                              <p>“We were excited to work with Ron and Weiky, and the Serio Group, who helped us find an amazing house. The experience was incredible, and flawless from start to finish! Most of all we really enjoyed working with both of them. They’re incredible people, and anyone would be lucky to work with them!”</p>
                            </a>
                          </div>
                          <div className="ai-modern-about-testi-item">
                            <a href="/testimonials/">
                              <h3>Robbie K.</h3>
                              <img src="images/about-modern-testimonial-quote.png" alt="Quote Icon"/>
                              <p>“What was a great experience! Ron and Weiky expertly helped us through the home buying process. We had a short escrow, and they were able to get everything done in a timely manner. They helped us get into a house that we really wanted, and made it happen. We’re very happy, and really enjoyed working with them!”</p>
                            </a>
                          </div>
                          <div className="ai-modern-about-testi-item">
                            <a href="/testimonials/">
                              <h3>Marc P.</h3>
                              <img src="images/about-modern-testimonial-quote.png" alt="Quote Icon"/>
                              <p>“I cannot thank you enough for your expertise and the most respectful, patient and considered way you dealt with me and my family. That is not always the case in this kind of sales job, but you were exceptional and we are most appreciative.”</p>
                            </a>
                          </div>
                          <div className="ai-modern-about-testi-item">
                            <a href="/testimonials/">
                              <h3>Kevin V.</h3>
                              <img src="images/about-modern-testimonial-quote.png" alt="Quote Icon"/>
                              <p>“I recently worked with Ron and Waruka Serio from the Serio Group for my real estate transaction and was beyond impressed. Their commitment to excellence and attention to detail were outstanding. Ron and Waruka are warm and thoughtful, always putting their clients' needs first. Their expertise and dedication to customer satisfaction truly set them apart. They demonstrated unparalleled professionalism and genuine concern for my personal and financial well-being. I highly recommend Ron and Waruka Serio to anyone looking for top-notch real estate representation.”</p>
                            </a>
                          </div>
                          <div className="ai-modern-about-testi-item">
                            <a href="/testimonials/">
                              <h3>Bella S.</h3>
                              <img src="images/about-modern-testimonial-quote.png" alt="Quote Icon"/>
                              <p>“Ron and Waruka Serio are unparalleled in their expertise and commitment to excellence, making our home search in Beverly Hills extraordinary. Their seamless process, articulate communication, and genuine care for our family's needs set them apart. They possess a deep understanding of the housing market and are invested in ensuring the real estate journey is successful and enjoyable. I wholeheartedly recommend the Serio Group for their blend of professionalism, expertise, and genuine care that creates an unparalleled experience.”</p>
                            </a>
                          </div>
                          <div className="ai-modern-about-testi-item">
                            <a href="/testimonials/">
                              <h3>Chris R.</h3>
                              <img src="images/about-modern-testimonial-quote.png" alt="Quote Icon"/>
                              <p>“I had the pleasure of working with the Serio Group for my real estate needs in Beverly Hills, and I can't stress enough their professionalism, responsiveness, and knowledge. Ron and Waruka Serio proved to be reliable and absolutely committed to their clients' best interests, making sure I was well-informed and comfortable every step of the way. Their extensive market knowledge and ethical standards set them apart, ensuring a smooth and efficient real estate experience. I highly recommend the Serio Group for any real estate needs in Beverly Hills, and I am deeply grateful for their exceptional service.”</p>
                            </a>
                          </div>
                          <div className="ai-modern-about-testi-item">
                            <a href="/testimonials/">
                              <h3>Chris D.</h3>
                              <img src="images/about-modern-testimonial-quote.png" alt="Quote Icon"/>
                              <p>“I had a seamless and stress-free experience working with Ron and Waruka Serio of the Serio Group. From the start, they demonstrated their deep knowledge and dedication to my needs, always prioritizing my best interests. Their exceptional communication kept me informed throughout every step of the process. I highly recommend Ron and Waruka to anyone needing real estate services—they truly go above and beyond for their clients.”</p>
                            </a>
                          </div>
                          <div className="ai-modern-about-testi-item">
                            <a href="/testimonials/">
                              <h3>Joshua G.</h3>
                              <img src="images/about-modern-testimonial-quote.png" alt="Quote Icon"/>
                              <p>“Working with Waruka and Ron Serio of the Serio Group at Coldwell Banker Realty in Beverly Hills was a fantastic experience. They demonstrated exceptional knowledge and professionalism, ensuring a smooth transaction from start to finish. Their attention to detail and proactive communication truly stood out, and they leveraged their extensive network to provide access to exclusive properties. I highly recommend Waruka and Ron for anyone in need of dedicated and skilled real estate professionals.”</p>
                            </a>
                          </div>
                          <div className="ai-modern-about-testi-item">
                            <a href="/testimonials/">
                              <h3>John K. &amp; Emily B.</h3>
                              <img src="images/about-modern-testimonial-quote.png" alt="Quote Icon"/>
                              <p>“Ron and Waruka surpassed our expectations. Ron’s expert negotiation skills and market knowledge secured us the best deal. They are true professionals, and their commitment to excellence is unmatched.”</p>
                            </a>
                          </div>
                          <div className="ai-modern-about-testi-item">
                            <a href="/testimonials/">
                              <h3>Jennifer C.</h3>
                              <img src="images/about-modern-testimonial-quote.png" alt="Quote Icon"/>
                              <p>“Choosing The Serio Group to sell our home was the best decision we made. Their strategic approach and attention to detail set our home apart. Their marketing prowess is evident. Trust Ron and Waruka for a seamless, top-dollar sale.”</p>
                            </a>
                          </div>
                        </div>
                        <div className="ai-modern-about-testi-controls">
                          <span className="ai-modern-about-testi-arrow ai-modern-about-testi-prev ai-font-arrow-b-p"></span>
                          <span className="ai-modern-about-testi-arrow ai-modern-about-testi-next ai-font-arrow-b-n"></span>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="comments-template"></div>
                </div>
              </article>
              {/* <!-- end #content --> */}
            </div>
            {/* <!-- end #content-full --> */}
          </div>
          {/* <!-- end #ai-modern-about --> */}
          <div className="clearfix"></div>
        </div>
        {/* <!-- end of #inner-page-wrapper .inner --> */}
      </div>
      {/* <!-- end of #inner-page-wrapper --> */}
    </main>
  )
}

export default AboutUs