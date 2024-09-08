/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
// import { useSpring, animated } from '@react-spring/web'

import bg1 from '../../assets/images/accent-gradient.jpg'
import bg2 from '../../assets/images/sm-bg.jpg'
// import bg3 from '../../assets/images/banner-meet.jpg'

function Services() {
  // const springs = useSpring({
  //   from: { x: 0 },
  //   to: { x: 800 },
  // })

  // const [springs, api] = useSpring(() => ({
  //   from: { x: 0 },
  // }))

  // const handleClick = () => {
  //   api.start({
  //     from: {
  //       x: 0,
  //     },
  //     to: {
  //       x: 100,
  //     },
  //   })
  // }




  return (
    <main>
  {/* <h2 class="aios-starter-theme-hide-title">Main Content</h2>
  <div class="textwidget custom-html-widget">
    <div class="ip-banner" data-type="page" data-id="94"><canvas width="1600" height="350" style={{backgroundImage: 'url(https://serioestates.com/wp-content/uploads/2023/01/slide-img-1.jpg)'}}></canvas></div>
    <div class="custom-ip-banner">
      <canvas width="1530" height="568" style={{backgroundImage: `url(${bg3})`}}></canvas>
      <div class="custom-ip-tagline">
        <div class="container">Your Gatewaye To Luxury Real Estate</div>
      </div>
    </div>
  </div> */}
  {/* <!-- ip banner goes here --> */}
  <div id="inner-page-wrapper">
    <div class="container">
      {/* <div class="custom-ip-banner">
        <canvas width="1530" height="568" style={{backgroundImage: 'url(images/banner-meet.jpg)'}}></canvas>
        <div class="custom-ip-tagline">
          <div class="container">Respected. Loyal. Relentless. Discreet.</div>
        </div>
      </div> */}
      <div id="ip-social-feed">
        <div class="ip-sf-container">
          <div class="custom-container">
            <div class="ip-sf-main">
              <div class="ip-sf-header">
                <div style={{marginTop: 60}} class="ip-sf-main-title">
                  <h1>Our Services</h1>
                </div>
                {/* <div class="ip-sf-icon-list">
                  <div class="ip-sf-icon-item">
                    <a href="https://instagram.com/seriogroup" target="_blank">
                      <span>
                        <em class="ai-font-instagram"></em>45.3K </span>
                    </a>
                  </div>
                  <div class="ip-sf-icon-item">
                    <a href="https://www.facebook.com/SerioEstates/" target="_blank">
                      <span>
                        <em class="ai-font-facebook"></em>25.5K </span>
                    </a>
                  </div>
                  <div class="ip-sf-icon-item">
                    <a href="https://www.tiktok.com/@seriogroup" target="_blank">
                      <span>
                        <em class="ai-font-tiktok"></em>2.6K </span>
                    </a>
                  </div>
                  <div class="ip-sf-icon-item">
                    <a href="https://www.linkedin.com/company/serio-estates-group?trk=public_profile_topcard-current-company" target="_blank">
                      <span>
                        <em class="ai-font-linkedin"></em>77K </span>
                    </a>
                  </div>
                </div> */}

                {/* <div class="ip-sf-filter">
                  <div class="ip-sf-filter-list">
                    <a href="#" class="ip-sf-filter-option active" data-filter="All">All</a>
                    <a href="#" class="ip-sf-filter-option" data-filter="Instagram">Instagram</a>
                    <a href="#" class="ip-sf-filter-option" data-filter="Facebook">Facebook</a>
                    <a href="#" class="ip-sf-filter-option" data-filter="Tiktok">Tiktok</a>
                    <a href="#" class="ip-sf-filter-option" data-filter="Linkedin">Linkedin</a>
                  </div>
                </div> */}
              </div>
              <div class="ip-sf-group">
                <div class="ip-sf-group-holder active" data-filter="All">
                  <div class="ip-sf-group-item">
                    <div class="ip-sf-group-container">
                      <div class="ip-sf-group-gradient attachment-fixed">
                        <canvas width="475" height="655" style={{backgroundImage: `url(${bg1})`}}></canvas>
                      </div>
                      <div class="ip-sf-group-bg attachment-fixed">
                        <canvas width="745" height="865" style={{backgroundImage: `url(${bg2})`}}></canvas>
                      </div>
                      <div class="ip-sf-group-row">
                        <div class="ip-sf-group-col">
                          <div class="ip-sf-group-gallery">
                            <div class="ip-sf-group-gallery-item">
                              <a href="#" target="_blank">
                                <div class="ip-sf-group-img site-img">
                                  <canvas width="253" height="253"></canvas>
                                  <img src={require('../../assets/images/ig-img-3.jpg')} alt="Social Media" width="253" height="253"/>
                                </div>
                              </a>
                            </div>
                            <div class="ip-sf-group-gallery-item">
                              <a href="#" target="_blank">
                                <div class="ip-sf-group-img site-img">
                                  <canvas width="253" height="253"></canvas>
                                  <img src={require('../../assets/images/ig-img-2.jpg')} alt="Social Media" width="253" height="253"/>
                                </div>
                              </a>
                            </div>
                            <div class="ip-sf-group-gallery-item">
                              <a href="#" target="_blank">
                                <div class="ip-sf-group-img site-img">
                                  <canvas width="253" height="253"></canvas>
                                  <img src={require('../../assets/images/ig-img-1.jpg')} alt="Social Media" width="253" height="253"/>
                                </div>
                              </a>
                            </div>
                            <div class="ip-sf-group-gallery-item">
                              <a href="#" target="_blank">
                                <div class="ip-sf-group-img site-img">
                                  <canvas width="253" height="253"></canvas>
                                  <img src={require('../../assets/images/ig-img-4.jpg')} alt="Social Media" width="253" height="253"/>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="ip-sf-group-col">
                          <div class="ip-sf-group-content-container">
                            <div class="ip-sf-group-content">
                              <p>
                                <b>1. Property Listings: </b><br />Embark on your real estate journey with Kigaluxe. Our comprehensive property listings showcase a diverse range of residential and commercial spaces, ensuring that you find the perfect property to suit your needs. Whether you're looking to buy, sell, or rent, our team is dedicated to connecting you with opportunities that align with your vision and aspirations.<br /><br />
                                <b>2. Property Management: </b><br />Entrust the management of your property to the experts at Kigaluxe. Our property management services are designed to maximize the value of your investment while providing you with peace of mind. From tenant relations to maintenance, we handle every aspect of property management with a commitment to transparency, efficiency, and excellence.
                              </p>
                            </div>
                            {/* <div class="ip-sf-group-content-btn">
                              <a href="https://instagram.com/seriogroup" target="_blank">
                                <em class="ai-font-instagram"></em>Follow </a>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="ip-sf-group-item">
                    <div class="ip-sf-group-container">
                      <div class="ip-sf-group-gradient attachment-fixed">
                        <canvas width="475" height="655" style={{backgroundImage: `url(${bg1})`}}></canvas>
                      </div>
                      <div class="ip-sf-group-bg attachment-fixed">
                        <canvas width="745" height="865" style={{backgroundImage: `url(${bg2})`}}></canvas>
                      </div>
                      <div class="ip-sf-group-row">
                        <div class="ip-sf-group-col">
                          <div class="ip-sf-group-gallery">
                            <div class="ip-sf-group-gallery-item">
                              <a href="#" target="_blank">
                                <div class="ip-sf-group-img site-img">
                                  <canvas width="253" height="253"></canvas>
                                  <img src={require('../../assets/images/ig-img-7.jpg')} alt="Social Media" width="253" height="253"/>
                                </div>
                              </a>
                            </div>
                            <div class="ip-sf-group-gallery-item">
                              <a href="#" target="_blank">
                                <div class="ip-sf-group-img site-img">
                                  <canvas width="253" height="253"></canvas>
                                  <img src={require('../../assets/images/ig-img-5.jpg')} alt="Social Media" width="253" height="253"/>
                                </div>
                              </a>
                            </div>
                            <div class="ip-sf-group-gallery-item">
                              <a href="#" target="_blank">
                                <div class="ip-sf-group-img site-img">
                                  <canvas width="253" height="253"></canvas>
                                  <img src={require('../../assets/images/ig-img-6.jpg')} alt="Social Media" width="253" height="253"/>
                                </div>
                              </a>
                            </div>
                            <div class="ip-sf-group-gallery-item">
                              <a href="#" target="_blank">
                                <div class="ip-sf-group-img site-img">
                                  <canvas width="253" height="253"></canvas>
                                  <img src={require('../../assets/images/ig-img-8.jpg')} alt="Social Media" width="253" height="253"/>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="ip-sf-group-col">
                          <div class="ip-sf-group-content-container">
                            <div class="ip-sf-group-content">
                              <p>
                                <b>3. Land Partitioning: </b><br />Unlock the full potential of your land with Kigaluxe's professional land partitioning services. Our experts work diligently to ensure that your land is optimized for the highest and best use, whether it involves subdivision for development or strategic partitioning to enhance its overall value.<br /><br />
                                <b>4. House Renovation: </b><br />Transform your existing property into a modern masterpiece with Kigaluxe's house renovation services. Our skilled team of architects, designers, and craftsmen collaborate to breathe new life into your space, creating a home that reflects your style and meets your evolving needs.

                              </p>
                            </div>
                            {/* <div class="ip-sf-group-content-btn">
                              <a href="https://www.instagram.com/warukaserio/" target="_blank">
                                <em class="ai-font-instagram"></em>Follow </a>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="ip-sf-group-item">
                    <div class="ip-sf-group-container">
                      <div class="ip-sf-group-gradient attachment-fixed">
                        <canvas width="475" height="655" style={{backgroundImage: `url(${bg1})`}}></canvas>
                      </div>
                      <div class="ip-sf-group-bg attachment-fixed">
                        <canvas width="745" height="865" style={{backgroundImage: `url(${bg2})`}}></canvas>
                      </div>
                      <div class="ip-sf-group-row">
                        <div class="ip-sf-group-col">
                          <div class="ip-sf-group-gallery">
                            <div class="ip-sf-group-gallery-item">
                              <a href="#" target="_blank">
                                <div class="ip-sf-group-img site-img">
                                  <canvas width="253" height="253"></canvas>
                                  <img src={require('../../assets/images/ig-img-9.jpg')} alt="Social Media" width="253" height="253"/>
                                </div>
                              </a>
                            </div>
                            <div class="ip-sf-group-gallery-item">
                              <a href="#" target="_blank">
                                <div class="ip-sf-group-img site-img">
                                  <canvas width="253" height="253"></canvas>
                                  <img src={require('../../assets/images/ig-img-10.jpg')} alt="Social Media" width="253" height="253"/>
                                </div>
                              </a>
                            </div>
                            <div class="ip-sf-group-gallery-item">
                              <a href="#" target="_blank">
                                <div class="ip-sf-group-img site-img">
                                  <canvas width="253" height="253"></canvas>
                                  <img src={require('../../assets/images/ig-img-11.jpg')} alt="Social Media" width="253" height="253"/>
                                </div>
                              </a>
                            </div>
                            <div class="ip-sf-group-gallery-item">
                              <a href="#" target="_blank">
                                <div class="ip-sf-group-img site-img">
                                  <canvas width="253" height="253"></canvas>
                                  <img src={require('../../assets/images/ig-img-12.jpg')} alt="Social Media" width="253" height="253"/>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="ip-sf-group-col">
                          <div class="ip-sf-group-content-container">
                            <div class="ip-sf-group-content">
                              <p>
                                <b>5. Interior Design: </b><br />Elevate the aesthetics and functionality of your property with Kigaluxe's bespoke interior design services. Our experienced designers curate personalized solutions that harmonize with your lifestyle, infusing every space with a unique blend of elegance and functionality.<br /><br />
                                <b>6. Property Valuation: </b><br />Gain valuable insights into the worth of your property with Kigaluxe's professional property valuation services. Our certified appraisers employ industry-leading methodologies to provide accurate and reliable valuations, empowering you to make informed decisions about your real estate portfolio.

                              </p>
                            </div>
                            {/* <div class="ip-sf-group-content-btn">
                              <a href="https://www.facebook.com/SerioEstates/" target="_blank">
                                <em class="ai-font-facebook"></em>Follow </a>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</main>
  )
}

export default Services