/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useRef } from 'react'
// import { useSpring, animated } from '@react-spring/web'

import bg1 from '../../assets/images/accent-gradient.jpg'
import bg2 from '../../assets/images/sm-bg.jpg'
// import bg3 from '../../assets/images/banner-meet.jpg'

function Services() {
  const topOfPageRef = useRef(null)
  useEffect(() => {
    if (topOfPageRef.current) {
      topOfPageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    }
  }, [])
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
      <div ref={topOfPageRef}></div>
  {/* <h2 className="aios-starter-theme-hide-title">Main Content</h2>
  <div className="textwidget custom-html-widget">
    <div className="ip-banner" data-type="page" data-id="94"><canvas width="1600" height="350" style={{backgroundImage: 'url(https://serioestates.com/wp-content/uploads/2023/01/slide-img-1.jpg)'}}></canvas></div>
    <div className="custom-ip-banner">
      <canvas width="1530" height="568" style={{backgroundImage: `url(${bg3})`}}></canvas>
      <div className="custom-ip-tagline">
        <div className="container">Your Gatewaye To Luxury Real Estate</div>
      </div>
    </div>
  </div> */}
  {/* <!-- ip banner goes here --> */}
  <div id="inner-page-wrapper">
    <div className="container">
      {/* <div className="custom-ip-banner">
        <canvas width="1530" height="568" style={{backgroundImage: 'url(images/banner-meet.jpg)'}}></canvas>
        <div className="custom-ip-tagline">
          <div className="container">Respected. Loyal. Relentless. Discreet.</div>
        </div>
      </div> */}
      <div id="ip-social-feed">
        <div className="ip-sf-container">
          <div className="custom-container">
            <div className="ip-sf-main">
              <div className="ip-sf-header">
                <div style={{marginTop: 60}} className="ip-sf-main-title">
                  <h1>Our Services</h1>
                </div>
                {/* <div className="ip-sf-icon-list">
                  <div className="ip-sf-icon-item">
                    <a href="https://instagram.com/seriogroup" target="_blank">
                      <span>
                        <em className="ai-font-instagram"></em>45.3K </span>
                    </a>
                  </div>
                  <div className="ip-sf-icon-item">
                    <a href="https://www.facebook.com/SerioEstates/" target="_blank">
                      <span>
                        <em className="ai-font-facebook"></em>25.5K </span>
                    </a>
                  </div>
                  <div className="ip-sf-icon-item">
                    <a href="https://www.tiktok.com/@seriogroup" target="_blank">
                      <span>
                        <em className="ai-font-tiktok"></em>2.6K </span>
                    </a>
                  </div>
                  <div className="ip-sf-icon-item">
                    <a href="https://www.linkedin.com/company/serio-estates-group?trk=public_profile_topcard-current-company" target="_blank">
                      <span>
                        <em className="ai-font-linkedin"></em>77K </span>
                    </a>
                  </div>
                </div> */}

                {/* <div className="ip-sf-filter">
                  <div className="ip-sf-filter-list">
                    <a href="#" className="ip-sf-filter-option active" data-filter="All">All</a>
                    <a href="#" className="ip-sf-filter-option" data-filter="Instagram">Instagram</a>
                    <a href="#" className="ip-sf-filter-option" data-filter="Facebook">Facebook</a>
                    <a href="#" className="ip-sf-filter-option" data-filter="Tiktok">Tiktok</a>
                    <a href="#" className="ip-sf-filter-option" data-filter="Linkedin">Linkedin</a>
                  </div>
                </div> */}
              </div>
              <div className="ip-sf-group">
                <div className="ip-sf-group-holder active" data-filter="All">
                  <div className="ip-sf-group-item">
                    <div className="ip-sf-group-container">
                      <div className="ip-sf-group-gradient attachment-fixed">
                        <canvas width="475" height="655" style={{backgroundImage: `url(${bg1})`}}></canvas>
                      </div>
                      <div className="ip-sf-group-bg attachment-fixed">
                        <canvas width="745" height="865" style={{backgroundImage: `url(${bg2})`}}></canvas>
                      </div>
                      <div className="ip-sf-group-row">
                        <div className="ip-sf-group-col">
                          <div className="ip-sf-group-gallery">
                            <div className="ip-sf-group-gallery-item">
                              <a href="#" target="_blank">
                                <div className="ip-sf-group-img site-img">
                                  <canvas width="253" height="253"></canvas>
                                  <img src={require('../../assets/images/about/img9.jpg')} alt="Social Media" width="253" height="253"/>
                                </div>
                              </a>
                            </div>
                            <div className="ip-sf-group-gallery-item">
                              <a href="#" target="_blank">
                                <div className="ip-sf-group-img site-img">
                                  <canvas width="253" height="253"></canvas>
                                  <img src={require('../../assets/images/about/img10.jpg')} alt="Social Media" width="253" height="253"/>
                                </div>
                              </a>
                            </div>
                            <div className="ip-sf-group-gallery-item">
                              <a href="#" target="_blank">
                                <div className="ip-sf-group-img site-img">
                                  <canvas width="253" height="253"></canvas>
                                  <img src={require('../../assets/images/about/img11.jpg')} alt="Social Media" width="253" height="253"/>
                                </div>
                              </a>
                            </div>
                            <div className="ip-sf-group-gallery-item">
                              <a href="#" target="_blank">
                                <div className="ip-sf-group-img site-img">
                                  <canvas width="253" height="253"></canvas>
                                  <img src={require('../../assets/images/about/img12.jpg')} alt="Social Media" width="253" height="253"/>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="ip-sf-group-col">
                          <div className="ip-sf-group-content-container">
                            <div className="ip-sf-group-content">
                              <p>
                                <b>1. Property Listings: </b><br />Embark on your real estate journey with Kigaluxe. Our comprehensive property listings showcase a diverse range of residential and commercial spaces, ensuring that you find the perfect property to suit your needs. Whether you're looking to buy, sell, or rent, our team is dedicated to connecting you with opportunities that align with your vision and aspirations.<br /><br />
                                <b>2. Property Management: </b><br />Entrust the management of your property to the experts at Kigaluxe. Our property management services are designed to maximize the value of your investment while providing you with peace of mind. From tenant relations to maintenance, we handle every aspect of property management with a commitment to transparency, efficiency, and excellence.
                              </p>
                            </div>
                            {/* <div className="ip-sf-group-content-btn">
                              <a href="https://instagram.com/seriogroup" target="_blank">
                                <em className="ai-font-instagram"></em>Follow </a>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ip-sf-group-item">
                    <div className="ip-sf-group-container">
                      <div className="ip-sf-group-gradient attachment-fixed">
                        <canvas width="475" height="655" style={{backgroundImage: `url(${bg1})`}}></canvas>
                      </div>
                      <div className="ip-sf-group-bg attachment-fixed">
                        <canvas width="745" height="865" style={{backgroundImage: `url(${bg2})`}}></canvas>
                      </div>
                      <div className="ip-sf-group-row">
                        <div className="ip-sf-group-col">
                        <div className="ip-sf-group-gallery">
                            <div className="ip-sf-group-gallery-item">
                              <a href="#" target="_blank">
                                <div className="ip-sf-group-img site-img">
                                  <canvas width="253" height="253"></canvas>
                                  <img src={require('../../assets/images/about/img1.jpg')} alt="Social Media" width="253" height="253"/>
                                </div>
                              </a>
                            </div>
                            <div className="ip-sf-group-gallery-item">
                              <a href="#" target="_blank">
                                <div className="ip-sf-group-img site-img">
                                  <canvas width="253" height="253"></canvas>
                                  <img src={require('../../assets/images/about/img2.jpg')} alt="Social Media" width="253" height="253"/>
                                </div>
                              </a>
                            </div>
                            <div className="ip-sf-group-gallery-item">
                              <a href="#" target="_blank">
                                <div className="ip-sf-group-img site-img">
                                  <canvas width="253" height="253"></canvas>
                                  <img src={require('../../assets/images/about/img3.jpg')} alt="Social Media" width="253" height="253"/>
                                </div>
                              </a>
                            </div>
                            <div className="ip-sf-group-gallery-item">
                              <a href="#" target="_blank">
                                <div className="ip-sf-group-img site-img">
                                  <canvas width="253" height="253"></canvas>
                                  <img src={require('../../assets/images/about/img4.jpg')} alt="Social Media" width="253" height="253"/>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="ip-sf-group-col">
                          <div className="ip-sf-group-content-container">
                            <div className="ip-sf-group-content">
                              <p>
                                <b>3. Land Partitioning: </b><br />Unlock the full potential of your land with Kigaluxe's professional land partitioning services. Our experts work diligently to ensure that your land is optimized for the highest and best use, whether it involves subdivision for development or strategic partitioning to enhance its overall value.<br /><br />
                                <b>4. House Renovation: </b><br />Transform your existing property into a modern masterpiece with Kigaluxe's house renovation services. Our skilled team of architects, designers, and craftsmen collaborate to breathe new life into your space, creating a home that reflects your style and meets your evolving needs.

                              </p>
                            </div>
                            {/* <div className="ip-sf-group-content-btn">
                              <a href="https://www.instagram.com/warukaserio/" target="_blank">
                                <em className="ai-font-instagram"></em>Follow </a>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ip-sf-group-item">
                    <div className="ip-sf-group-container">
                      <div className="ip-sf-group-gradient attachment-fixed">
                        <canvas width="475" height="655" style={{backgroundImage: `url(${bg1})`}}></canvas>
                      </div>
                      <div className="ip-sf-group-bg attachment-fixed">
                        <canvas width="745" height="865" style={{backgroundImage: `url(${bg2})`}}></canvas>
                      </div>
                      <div className="ip-sf-group-row">
                        <div className="ip-sf-group-col">
                          <div className="ip-sf-group-gallery">
                            <div className="ip-sf-group-gallery-item">
                              <a href="#" target="_blank">
                                <div className="ip-sf-group-img site-img">
                                  <canvas width="253" height="253"></canvas>
                                  <img src={require('../../assets/images/about/img5.jpg')} alt="Social Media" width="253" height="253"/>
                                </div>
                              </a>
                            </div>
                            <div className="ip-sf-group-gallery-item">
                              <a href="#" target="_blank">
                                <div className="ip-sf-group-img site-img">
                                  <canvas width="253" height="253"></canvas>
                                  <img src={require('../../assets/images/about/img6.jpg')} alt="Social Media" width="253" height="253"/>
                                </div>
                              </a>
                            </div>
                            <div className="ip-sf-group-gallery-item">
                              <a href="#" target="_blank">
                                <div className="ip-sf-group-img site-img">
                                  <canvas width="253" height="253"></canvas>
                                  <img src={require('../../assets/images/about/img7.jpg')} alt="Social Media" width="253" height="253"/>
                                </div>
                              </a>
                            </div>
                            <div className="ip-sf-group-gallery-item">
                              <a href="#" target="_blank">
                                <div className="ip-sf-group-img site-img">
                                  <canvas width="253" height="253"></canvas>
                                  <img src={require('../../assets/images/about/img8.jpg')} alt="Social Media" width="253" height="253"/>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="ip-sf-group-col">
                          <div className="ip-sf-group-content-container">
                            <div className="ip-sf-group-content">
                              <p>
                                <b>5. Interior Design: </b><br />Elevate the aesthetics and functionality of your property with Kigaluxe's bespoke interior design services. Our experienced designers curate personalized solutions that harmonize with your lifestyle, infusing every space with a unique blend of elegance and functionality.<br /><br />
                                <b>6. Property Valuation: </b><br />Gain valuable insights into the worth of your property with Kigaluxe's professional property valuation services. Our certified appraisers employ industry-leading methodologies to provide accurate and reliable valuations, empowering you to make informed decisions about your real estate portfolio.

                              </p>
                            </div>
                            {/* <div className="ip-sf-group-content-btn">
                              <a href="https://www.facebook.com/SerioEstates/" target="_blank">
                                <em className="ai-font-facebook"></em>Follow </a>
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
      <div className="clearfix"></div>
    </div>
  </div>
</main>
  )
}

export default Services