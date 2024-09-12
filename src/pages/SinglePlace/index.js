/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPlaceAction } from '../../redux/actions/place'


function SinglePlace() {
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(fetchPlaceAction(id))
  }, [dispatch, id])

  const data = useSelector(state => state.place)

  // eslint-disable-next-line no-unused-vars
  const { loading, place, getPlace, message } = data

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
  {/* <div className="textwidget custom-html-widget">
    <div className="ip-banner" data-type="aios-communities" data-id="84">
      <canvas width="1600" height="350" style={{backgroundImage: `url(${require('../../assets/images/slide-img-1.jpg')})`}}></canvas>
    </div>
  </div> */}
  {/* <!-- ip banner goes here --> */}
  <div id="inner-page-wrapper">
    <div style={{padding: 0, margin: 0}} className="container-fluid">
      <div id="ip-community-details">
        <div className="ip-cd-container">
          <div className="ip-cd-section">
            <div id="ip-hero" className="ip-cd-hero-container aios-scroll-section">
              <div className="ip-cd-hero-slide">
                <div className="ip-cd-hero-slide-item">
                  <div className="ip-cd-hero-img site-img">
                    <canvas width="1600" height="800"></canvas>
                    <img src={place && place.url} alt="Beverly Hills"/>
                  </div>
                </div>
                {/* <!-- <div className="ip-cd-hero-slide-item"><div className="ip-cd-hero-img site-img"><canvas width="1600" height="800"></canvas><img src="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/community-details/hero-img-2.jpg" alt="Hero"></div></div> --> */}
              </div>
              <div className="ip-cd-hero-content ">
                <div className="container">
                  <div className="ip-cd-hero-content-inner">
                    <div className="ip-cd-hero-title">
                      <h2>{place.knownName}</h2>
                    </div>
                    <div className="ip-cd-hero-controls hide">
                      <button className="ip-cd-hero-prev" aria-label="Prev">
                        <em className="ai-icon-prev"></em>
                      </button>
                      <button className="ip-cd-hero-next" aria-label="Next">
                        <em className="ai-icon-next"></em>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ip-cd-section">
            <div id="ip-content" className="ip-cd-content-main-container aios-scroll-section" data-aios-scroll-title="Communities">
              <div className="ip-cd-bg">
                <canvas width="1600" height="928" style={{backgroundImage: `url(${require('../../assets/images/ld-bg.png')})`}}></canvas>
              </div>
              <div className="custom-breadcrumbs">
                <div className="container">
                  <p id="breadcrumbs">
                    <span>
                      <span property="itemListElement" typeof="ListItem">
                        <Link to='/' property="item" typeof="WebPage">
                          <span property="name">Home</span>
                        </Link>
                        <meta property="position" content="1"/>
                      </span> » <span property="itemListElement" typeof="ListItem">
                        <Link to='/places' property="item" typeof="WebPage">
                          <span property="name">Areas of Expertise</span>
                        </Link>
                        <meta property="position" content="2"/>
                      </span> » <span className="breadcrumb_last" property="itemListElement" typeof="ListItem">
                        <span property="name">{place.knownName}</span>
                        <meta property="position" content="3"/>
                      </span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="ip-cd-content-main">
                <div className="container">
                  <div className="ip-cd-content-row">
                    <div className="ip-cd-content-col">
                      <div className="ip-cd-content-container">
                        <div className="global-title">
                          <h2>
                            <span>
                              <em className="global-logo-icon">
                                <i className="global-outline"></i>
                              </em>{place.knownName} </span>
                          </h2>
                        </div>
                        <div className="ip-cd-content">
                          <p>{place.description}<br /> Reach out to us at <a href="tel:+250788501505" className="aios-ai-phone " aria-label="+250788501505">250788501505</a> or email us at <a className="asis-mailto-obfuscated-email-hidden asis-mailto-obfuscated-email " aria-label="info@kigaluxe.estate" data-value="info@kigaluxe.estate">info@kigaluxe.estate</a> to get started. </p>
                        </div>
                      </div>
                    </div>
                    <div className="ip-cd-content-col hidden">
                      <div className="ip-cd-gallery-container">
                        <div className="ip-cd-gallery-row">
                          <div className="ip-cd-gallery-col">
                            <a href="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/community-details/popup-img-1.jpg" className="ip-cd-gallery-popup">
                              <div className="ip-cd-gallery-img site-img">
                                <canvas width="355" height="465"></canvas>
                                <img src={require('../../assets/images/popup-img-1.jpg')} alt="Gallery Image"/>
                              </div>
                            </a>
                          </div>
                          <div className="ip-cd-gallery-col"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ip-cd-content-info">
                    <ul>
                      <li>$29,750,000</li>
                      <li>3,250 TOTAL ACRES</li>
                      <li>BEVERLY HILLS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ip-fl-listing-main">
            <div className="custom-container">
              <div className="ip-fl-listing-row">
                <div className="ip-fl-listing-item">
                  <a href="https://serioestates.com/homes-for-sale-details/9505-GLOAMING-BEVERLY-HILLS-CA-90210/23321859/306/">
                    <div className="ip-fl-listing-img-holder">
                      <div className="ip-fl-listing-img site-img">
                        <canvas width="488" height="484"></canvas>
                        {/* <!-- <img src="https://imageproxy.agentimage.com/488x484/https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1046941072/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcxNjA1NDQ4MA/fCT7QnIizeaevAYzyD02rcvs2bKkYSZshaeU624W01I" alt="Featured Listings" width="488" height="484"> --> */}
                        <img src={require('../../assets/images/1AMalibu_edit_1867828433520196.jpg')} alt="Featured Listings" width="488" height="484"/>
                      </div>
                      <div className="mls-logo-overlay">
                        <img src="images/mls-logo.png" alt="Featured Listings" width="170" height="101"/>
                      </div>
                      <div className="ip-fl-listing-hover">
                        <div className="ip-fl-listing-price">
                          <span>$126,000,000</span>
                        </div>
                        <div className="ip-fl-listing-hover-address">
                          <span>9505 Gloaming <br /> Beverly Hills, CA 90210 </span>
                        </div>
                        <div className="ip-fl-listing-info">
                          <span>8 Beds <em className="ai-icon-bed"></em>
                          </span>
                          <span>20 Baths <em className="ai-icon-bath"></em>
                          </span>
                          <span> 30,610 Sq.ft. <em className="ai-icon-sqft"></em>
                          </span>
                        </div>
                        <div className="ip-fl-listing-hover-btn">
                          <span className="global-btn">Read More</span>
                        </div>
                      </div>
                    </div>
                    <div className="ip-fl-listing-address">
                      <span>9505 Gloaming <br /> Beverly Hills, CA 90210 </span>
                    </div>
                  </a>
                </div>
                <div className="ip-fl-listing-item">
                  <a href="https://serioestates.com/homes-for-sale-details/73-BEVERLY-PARK-LANE-BEVERLY-HILLS-CA-90210/24388903/306/">
                    <div className="ip-fl-listing-img-holder">
                      <div className="ip-fl-listing-img site-img">
                        <canvas width="488" height="484"></canvas>
                        {/* {/* <!-- <img src="https://imageproxy.agentimage.com/488x484/https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1074997584/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcxNTIwNTgzNw/GWKijs-_oLceepZYVRD2PivttTAWys0RWa81CJGh81k" alt="Featured Listings" width="488" height="484"> --> */}
                        <img src="https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1074997584/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcxNTIwNTgzNw/GWKijs-_oLceepZYVRD2PivttTAWys0RWa81CJGh81k" alt="Featured Listings" width="488" height="484"/>
                      </div>
                      <div className="mls-logo-overlay">
                        <img src="images/mls-logo.png" alt="Featured Listings" width="170" height="101"/>
                      </div>
                      <div className="ip-fl-listing-hover">
                        <div className="ip-fl-listing-price">
                          <span>$89,900,000</span>
                        </div>
                        <div className="ip-fl-listing-hover-address">
                          <span>73 Beverly Park Lane <br /> Beverly Hills, CA 90210 </span>
                        </div>
                        <div className="ip-fl-listing-info">
                          <span>9 Beds <em className="ai-icon-bed"></em>
                          </span>
                          <span>12 | 10 Baths <em className="ai-icon-bath"></em>
                          </span>
                          <span> 28,500 Sq.ft. <em className="ai-icon-sqft"></em>
                          </span>
                        </div>
                        <div className="ip-fl-listing-hover-btn">
                          <span className="global-btn">Read More</span>
                        </div>
                      </div>
                    </div>
                    <div className="ip-fl-listing-address">
                      <span>73 Beverly Park Lane <br /> Beverly Hills, CA 90210 </span>
                    </div>
                  </a>
                </div>
                <div className="ip-fl-listing-item">
                  <a href="https://serioestates.com/homes-for-sale-details/9904-KIP-DRIVE-BEVERLY-HILLS-CA-90210/24387189/306/">
                    <div className="ip-fl-listing-img-holder">
                      <div className="ip-fl-listing-img site-img">
                        <canvas width="488" height="484"></canvas>
                        {/* <!-- <img src="https://imageproxy.agentimage.com/488x484/https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1073293106/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcxNjA3MDMzMQ/Vsls0Z27ELSBAPJ2WlGW7PAJus4_VhjLsv_0noGOiXY" alt="Featured Listings" width="488" height="484"> --> */}
                        <img src="https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1073293106/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcxNjA3MDMzMQ/Vsls0Z27ELSBAPJ2WlGW7PAJus4_VhjLsv_0noGOiXY" alt="Featured Listings" width="488" height="484"/>
                      </div>
                      <div className="mls-logo-overlay">
                        <img src="images/mls-logo.png" alt="Featured Listings" width="170" height="101"/>
                      </div>
                      <div className="ip-fl-listing-hover">
                        <div className="ip-fl-listing-price">
                          <span>$88,000,000</span>
                        </div>
                        <div className="ip-fl-listing-hover-address">
                          <span>9904 Kip Drive <br /> Beverly Hills, CA 90210 </span>
                        </div>
                        <div className="ip-fl-listing-info">
                          <span>10 Beds <em className="ai-icon-bed"></em>
                          </span>
                          <span>22 Baths <em className="ai-icon-bath"></em>
                          </span>
                          <span> 24,757 Sq.ft. <em className="ai-icon-sqft"></em>
                          </span>
                        </div>
                        <div className="ip-fl-listing-hover-btn">
                          <span className="global-btn">Read More</span>
                        </div>
                      </div>
                    </div>
                    <div className="ip-fl-listing-address">
                      <span>9904 Kip Drive <br /> Beverly Hills, CA 90210 </span>
                    </div>
                  </a>
                </div>
                {/* <div className="ip-fl-listing-item" data-aos-once="true" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                  <a href="https://serioestates.com/homes-for-sale-details/1420-DAVIES-DRIVE-BEVERLY-HILLS-CA-90210/24412907/306/">
                    <div className="ip-fl-listing-img-holder">
                      <div className="ip-fl-listing-img site-img">
                        <canvas width="488" height="484"></canvas>
                        <!-- <img src="https://imageproxy.agentimage.com/488x484/https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1077489832/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcyMTA2MTQ1Ng/xKu-Fc7VQEUJkarQwaTMZ6EDRLrKhF0RANrTFiNebqg" alt="Featured Listings" width="488" height="484"> -->
                        <img src="https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1077489832/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcyMTA2MTQ1Ng/xKu-Fc7VQEUJkarQwaTMZ6EDRLrKhF0RANrTFiNebqg" alt="Featured Listings" width="488" height="484">
                      </div>
                      <div className="mls-logo-overlay">
                        <img src="images/mls-logo.png" alt="Featured Listings" width="170" height="101">
                      </div>
                      <div className="ip-fl-listing-hover">
                        <div className="ip-fl-listing-price">
                          <span>$87,000,000</span>
                        </div>
                        <div className="ip-fl-listing-hover-address">
                          <span>1420 Davies Drive <br /> Beverly Hills, CA 90210 </span>
                        </div>
                        <div className="ip-fl-listing-info">
                          <span>8 Beds <em className="ai-icon-bed"></em>
                          </span>
                          <span>14 Baths <em className="ai-icon-bath"></em>
                          </span>
                          <span> 21,800 Sq.ft. <em className="ai-icon-sqft"></em>
                          </span>
                        </div>
                        <div className="ip-fl-listing-hover-btn">
                          <span className="global-btn">Read More</span>
                        </div>
                      </div>
                    </div>
                    <div className="ip-fl-listing-address">
                      <span>1420 Davies Drive <br /> Beverly Hills, CA 90210 </span>
                    </div>
                  </a>
                </div>
                <div className="ip-fl-listing-item" data-aos-once="true" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                  <a href="https://serioestates.com/homes-for-sale-details/1499-BLUERIDGE-DRIVE-BEVERLY-HILLS-CA-90210/24369077/306/">
                    <div className="ip-fl-listing-img-holder">
                      <div className="ip-fl-listing-img site-img">
                        <canvas width="488" height="484"></canvas>
                        <!-- <img src="https://imageproxy.agentimage.com/488x484/https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1063414667/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcyNDEwOTI0Mg/9DbmoVRJ6XhT9-eND5b4tlveAs2yfrt6q2fxdlRiMsw" alt="Featured Listings" width="488" height="484"> -->
                        <img src="https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1063414667/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcyNDEwOTI0Mg/9DbmoVRJ6XhT9-eND5b4tlveAs2yfrt6q2fxdlRiMsw" alt="Featured Listings" width="488" height="484">
                      </div>
                      <div className="mls-logo-overlay">
                        <img src="images/mls-logo.png" alt="Featured Listings" width="170" height="101">
                      </div>
                      <div className="ip-fl-listing-hover">
                        <div className="ip-fl-listing-price">
                          <span>$85,000,000</span>
                        </div>
                        <div className="ip-fl-listing-hover-address">
                          <span>1499 Blueridge Drive <br /> Beverly Hills, CA 90210 </span>
                        </div>
                        <div className="ip-fl-listing-info">
                          <span>13 Beds <em className="ai-icon-bed"></em>
                          </span>
                          <span>16 Baths <em className="ai-icon-bath"></em>
                          </span>
                          <span> 28,000 Sq.ft. <em className="ai-icon-sqft"></em>
                          </span>
                        </div>
                        <div className="ip-fl-listing-hover-btn">
                          <span className="global-btn">Read More</span>
                        </div>
                      </div>
                    </div>
                    <div className="ip-fl-listing-address">
                      <span>1499 Blueridge Drive <br /> Beverly Hills, CA 90210 </span>
                    </div>
                  </a>
                </div>
                <div className="ip-fl-listing-item" data-aos-once="true" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                  <a href="https://serioestates.com/homes-for-sale-details/9650-CEDARBROOK-DRIVE-BEVERLY-HILLS-CA-90210/23310237/306/">
                    <div className="ip-fl-listing-img-holder">
                      <div className="ip-fl-listing-img site-img">
                        <canvas width="488" height="484"></canvas>
                        <!-- <img src="https://imageproxy.agentimage.com/488x484/https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1045006626/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcxNjA1MjUzOA/3fwS9liaARcPrFKFPQq0LV52rOXxq27hqgKrViQ7k6Y" alt="Featured Listings" width="488" height="484"> -->
                        <img src="https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1045006626/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcxNjA1MjUzOA/3fwS9liaARcPrFKFPQq0LV52rOXxq27hqgKrViQ7k6Y" alt="Featured Listings" width="488" height="484">
                      </div>
                      <div className="mls-logo-overlay">
                        <img src="images/mls-logo.png" alt="Featured Listings" width="170" height="101">
                      </div>
                      <div className="ip-fl-listing-hover">
                        <div className="ip-fl-listing-price">
                          <span>$68,000,000</span>
                        </div>
                        <div className="ip-fl-listing-hover-address">
                          <span>9650 Cedarbrook Drive <br /> Beverly Hills, CA 90210 </span>
                        </div>
                        <div className="ip-fl-listing-info">
                          <span>19 Beds <em className="ai-icon-bed"></em>
                          </span>
                          <span>33 Baths <em className="ai-icon-bath"></em>
                          </span>
                          <span> 78,000 Sq.ft. <em className="ai-icon-sqft"></em>
                          </span>
                        </div>
                        <div className="ip-fl-listing-hover-btn">
                          <span className="global-btn">Read More</span>
                        </div>
                      </div>
                    </div>
                    <div className="ip-fl-listing-address">
                      <span>9650 Cedarbrook Drive <br /> Beverly Hills, CA 90210 </span>
                    </div>
                  </a>
                </div>
                <div className="ip-fl-listing-item" data-aos-once="true" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                  <a href="https://serioestates.com/homes-for-sale-details/2571-WALLINGFORD-DRIVE-BEVERLY-HILLS-CA-90210/24413783/306/">
                    <div className="ip-fl-listing-img-holder">
                      <div className="ip-fl-listing-img site-img">
                        <canvas width="488" height="484"></canvas>
                        <!-- <img src="https://imageproxy.agentimage.com/488x484/https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1077375256/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcyMDczMzQwNg/ip8sLquHzPXC54trTGk9biZey5TUCvd3za_EO8Ivk1A" alt="Featured Listings" width="488" height="484"> -->
                        <img src="https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1077375256/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcyMDczMzQwNg/ip8sLquHzPXC54trTGk9biZey5TUCvd3za_EO8Ivk1A" alt="Featured Listings" width="488" height="484">
                      </div>
                      <div className="mls-logo-overlay">
                        <img src="images/mls-logo.png" alt="Featured Listings" width="170" height="101">
                      </div>
                      <div className="ip-fl-listing-hover">
                        <div className="ip-fl-listing-price">
                          <span>$68,000,000</span>
                        </div>
                        <div className="ip-fl-listing-hover-address">
                          <span>2571 Wallingford Drive <br /> Beverly Hills, CA 90210 </span>
                        </div>
                        <div className="ip-fl-listing-info">
                          <span>12 Beds <em className="ai-icon-bed"></em>
                          </span>
                          <span>24 Baths <em className="ai-icon-bath"></em>
                          </span>
                          <span> 38,000 Sq.ft. <em className="ai-icon-sqft"></em>
                          </span>
                        </div>
                        <div className="ip-fl-listing-hover-btn">
                          <span className="global-btn">Read More</span>
                        </div>
                      </div>
                    </div>
                    <div className="ip-fl-listing-address">
                      <span>2571 Wallingford Drive <br /> Beverly Hills, CA 90210 </span>
                    </div>
                  </a>
                </div>
                <div className="ip-fl-listing-item" data-aos-once="true" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                  <a href="https://serioestates.com/homes-for-sale-details/410-TROUSDALE-PLACE-BEVERLY-HILLS-CA-90210/24404851/306/">
                    <div className="ip-fl-listing-img-holder">
                      <div className="ip-fl-listing-img site-img">
                        <canvas width="488" height="484"></canvas>
                        <!-- <img src="https://imageproxy.agentimage.com/488x484/https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1076554816/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcxODY2Nzk3NA/gRIG88QuG0u6hqxbEjeX2_7fo1wCJaE4WtMqg5gF9yY" alt="Featured Listings" width="488" height="484"> -->
                        <img src="https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1076554816/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcxODY2Nzk3NA/gRIG88QuG0u6hqxbEjeX2_7fo1wCJaE4WtMqg5gF9yY" alt="Featured Listings" width="488" height="484">
                      </div>
                      <div className="mls-logo-overlay">
                        <img src="images/mls-logo.png" alt="Featured Listings" width="170" height="101">
                      </div>
                      <div className="ip-fl-listing-hover">
                        <div className="ip-fl-listing-price">
                          <span>$68,000,000</span>
                        </div>
                        <div className="ip-fl-listing-hover-address">
                          <span>410 Trousdale Place <br /> Beverly Hills, CA 90210 </span>
                        </div>
                        <div className="ip-fl-listing-info">
                          <span>5 Beds <em className="ai-icon-bed"></em>
                          </span>
                          <span>10 Baths <em className="ai-icon-bath"></em>
                          </span>
                          <span> 18,000 Sq.ft. <em className="ai-icon-sqft"></em>
                          </span>
                        </div>
                        <div className="ip-fl-listing-hover-btn">
                          <span className="global-btn">Read More</span>
                        </div>
                      </div>
                    </div>
                    <div className="ip-fl-listing-address">
                      <span>410 Trousdale Place <br /> Beverly Hills, CA 90210 </span>
                    </div>
                  </a>
                </div>
                <div className="ip-fl-listing-item" data-aos-once="true" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                  <a href="https://serioestates.com/homes-for-sale-details/1005-N-ALPINE-DRIVE-BEVERLY-HILLS-CA-90210/22167741/306/">
                    <div className="ip-fl-listing-img-holder">
                      <div className="ip-fl-listing-img site-img">
                        <canvas width="488" height="484"></canvas>
                        <!-- <img src="https://imageproxy.agentimage.com/488x484/https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1023030117/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcxNTE5MzI3Mg/vyyTa4wiU6-HzuxrK6kgkO5zGhg8cr09HmniYC8wPQA" alt="Featured Listings" width="488" height="484"> -->
                        <img src="https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1023030117/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcxNTE5MzI3Mg/vyyTa4wiU6-HzuxrK6kgkO5zGhg8cr09HmniYC8wPQA" alt="Featured Listings" width="488" height="484">
                      </div>
                      <div className="mls-logo-overlay">
                        <img src="images/mls-logo.png" alt="Featured Listings" width="170" height="101">
                      </div>
                      <div className="ip-fl-listing-hover">
                        <div className="ip-fl-listing-price">
                          <span>$65,000,000</span>
                        </div>
                        <div className="ip-fl-listing-hover-address">
                          <span>1005 N Alpine Drive <br /> Beverly Hills, CA 90210 </span>
                        </div>
                        <div className="ip-fl-listing-info">
                          <span>4 Beds <em className="ai-icon-bed"></em>
                          </span>
                          <span>6 Baths <em className="ai-icon-bath"></em>
                          </span>
                          <span> 4,351 Sq.ft. <em className="ai-icon-sqft"></em>
                          </span>
                        </div>
                        <div className="ip-fl-listing-hover-btn">
                          <span className="global-btn">Read More</span>
                        </div>
                      </div>
                    </div>
                    <div className="ip-fl-listing-address">
                      <span>1005 N Alpine Drive <br /> Beverly Hills, CA 90210 </span>
                    </div>
                  </a>
                </div>
                <div className="ip-fl-listing-item" data-aos-once="true" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                  <a href="https://serioestates.com/homes-for-sale-details/912-BENEDICT-CANYON-DRIVE-BEVERLY-HILLS-CA-90210/23306545/306/">
                    <div className="ip-fl-listing-img-holder">
                      <div className="ip-fl-listing-img site-img">
                        <canvas width="488" height="484"></canvas>
                        <!-- <img src="https://imageproxy.agentimage.com/488x484/https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1044744927/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcxNjA1MjUzNw/NSHSlKGWJr_ovPq6v9PjIeb2cbw_kQCPWym-GlOyuuA" alt="Featured Listings" width="488" height="484"> -->
                        <img src="https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1044744927/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcxNjA1MjUzNw/NSHSlKGWJr_ovPq6v9PjIeb2cbw_kQCPWym-GlOyuuA" alt="Featured Listings" width="488" height="484">
                      </div>
                      <div className="mls-logo-overlay">
                        <img src="images/mls-logo.png" alt="Featured Listings" width="170" height="101">
                      </div>
                      <div className="ip-fl-listing-hover">
                        <div className="ip-fl-listing-price">
                          <span>$56,900,000</span>
                        </div>
                        <div className="ip-fl-listing-hover-address">
                          <span>912 Benedict Canyon Drive <br /> Beverly Hills, CA 90210 </span>
                        </div>
                        <div className="ip-fl-listing-info">
                          <span>7 Beds <em className="ai-icon-bed"></em>
                          </span>
                          <span>8 | 7 Baths <em className="ai-icon-bath"></em>
                          </span>
                          <span> 17,005 Sq.ft. <em className="ai-icon-sqft"></em>
                          </span>
                        </div>
                        <div className="ip-fl-listing-hover-btn">
                          <span className="global-btn">Read More</span>
                        </div>
                      </div>
                    </div>
                    <div className="ip-fl-listing-address">
                      <span>912 Benedict Canyon Drive <br /> Beverly Hills, CA 90210 </span>
                    </div>
                  </a>
                </div>
                <div className="ip-fl-listing-item" data-aos-once="true" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                  <a href="https://serioestates.com/homes-for-sale-details/1108-WALLACE-BEVERLY-HILLS-CA-90210/24412301/306/">
                    <div className="ip-fl-listing-img-holder">
                      <div className="ip-fl-listing-img site-img">
                        <canvas width="488" height="484"></canvas>
                        <!-- <img src="https://imageproxy.agentimage.com/488x484/https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1077371312/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcyMjI0MTg3MA/v1eIIm2GrumWo8-E80oggqvvAm6ShigtL5GfFoQjAiY" alt="Featured Listings" width="488" height="484"> -->
                        <img src="https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1077371312/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcyMjI0MTg3MA/v1eIIm2GrumWo8-E80oggqvvAm6ShigtL5GfFoQjAiY" alt="Featured Listings" width="488" height="484">
                      </div>
                      <div className="mls-logo-overlay">
                        <img src="images/mls-logo.png" alt="Featured Listings" width="170" height="101">
                      </div>
                      <div className="ip-fl-listing-hover">
                        <div className="ip-fl-listing-price">
                          <span>$53,000,000</span>
                        </div>
                        <div className="ip-fl-listing-hover-address">
                          <span>1108 Wallace <br /> Beverly Hills, CA 90210 </span>
                        </div>
                        <div className="ip-fl-listing-info">
                          <span>7 Beds <em className="ai-icon-bed"></em>
                          </span>
                          <span>14 Baths <em className="ai-icon-bath"></em>
                          </span>
                          <span> 18,169 Sq.ft. <em className="ai-icon-sqft"></em>
                          </span>
                        </div>
                        <div className="ip-fl-listing-hover-btn">
                          <span className="global-btn">Read More</span>
                        </div>
                      </div>
                    </div>
                    <div className="ip-fl-listing-address">
                      <span>1108 Wallace <br /> Beverly Hills, CA 90210 </span>
                    </div>
                  </a>
                </div>
                <div className="ip-fl-listing-item" data-aos-once="true" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                  <a href="https://serioestates.com/homes-for-sale-details/1310-TOWER-GROVE-DRIVE-BEVERLY-HILLS-CA-90210/24399443/306/">
                    <div className="ip-fl-listing-img-holder">
                      <div className="ip-fl-listing-img site-img">
                        <canvas width="488" height="484"></canvas>
                        <!-- <img src="https://imageproxy.agentimage.com/488x484/https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1076052875/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcxNzQ1OTkxMw/WnHgcGzGiyKMsLqGljgAJ-XmQzifl3Nbql-KGoDfIYY" alt="Featured Listings" width="488" height="484"> -->
                        <img src="https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1076052875/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcxNzQ1OTkxMw/WnHgcGzGiyKMsLqGljgAJ-XmQzifl3Nbql-KGoDfIYY" alt="Featured Listings" width="488" height="484">
                      </div>
                      <div className="mls-logo-overlay">
                        <img src="images/mls-logo.png" alt="Featured Listings" width="170" height="101">
                      </div>
                      <div className="ip-fl-listing-hover">
                        <div className="ip-fl-listing-price">
                          <span>$50,000,000</span>
                        </div>
                        <div className="ip-fl-listing-hover-address">
                          <span>1310 Tower Grove Drive <br /> Beverly Hills, CA 90210 </span>
                        </div>
                        <div className="ip-fl-listing-info">
                          <span>10 Beds <em className="ai-icon-bed"></em>
                          </span>
                          <span>13 Baths <em className="ai-icon-bath"></em>
                          </span>
                          <span> 19,000 Sq.ft. <em className="ai-icon-sqft"></em>
                          </span>
                        </div>
                        <div className="ip-fl-listing-hover-btn">
                          <span className="global-btn">Read More</span>
                        </div>
                      </div>
                    </div>
                    <div className="ip-fl-listing-address">
                      <span>1310 Tower Grove Drive <br /> Beverly Hills, CA 90210 </span>
                    </div>
                  </a>
                </div> */}
              </div>
              <div className="ip-fl-listing-more-btn">
                <a className="global-btn" id="properties-load-more" data-listing-max="13">Load More</a>
              </div>
            </div>
          </div>
          <div className="ip-lr-disclaimer">
            <div className="ihf-board-disclaimer-text">
              <img src="images/mls-logo.png" alt="Featured Listings" width="100" height="72"/>
            </div>
            <p>
              <img src="images/shim.gif"/>
            </p>
            <div className="ihf-board-disclaimer-text"> Based on information from CSMAR, CRMLS, and/or CLAW, and/or CRISNet MLS as of August 30, 2024 2:28 AM PT. The information being provided by CSMAR, CRMLS and/or CLAW and/or CRISNet MLS is for the visitor's personal, non-commercial use and may not be used for any purpose other than to identify prospective properties the visitor may be interested in purchasing. Any information relating to a property referenced on this website comes from the Internet Data Exchange ('IDX') program of CSMAR, CRMLS and/or CLAW, and/or CRISNet MLS. This website may reference real estate listing(s) held by a brokerage firm other than the broker and/or agent who owns this website. Any information relating to a property, regardless of source, including but not limited to square footage and lot sizes, is deemed reliable but not guaranteed and should be personally verified through personal inspection by and/or with the appropriate professionals. The data contained herein is copyrighted by CSMAR, CRMLS and/or CLAW, and/or CRISNet MLS and is protected by all applicable copyright laws. Any dissemination of this information is in violation of copyright laws and is strictly prohibited. <em>IDX powered by iHomefinder, Inc.</em>
            </div>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <div className="ip-cd-section">
            <div className="ip-comm-content-main">
              <div className="custom-container">
                <div className="global-title is-centered">
                  <h2>
                    <small>
                      <em className="global-logo-icon">
                        <i className="global-outline"></i>
                      </em>Similar </small>
                    <span>Communities</span>
                  </h2>
                </div>
                <div className="ip-comm-content-row" data-total="12">
                  <div className="ip-comm-item">
                    <a href="https://serioestates.com/community/bel-air/">
                      <div className="ip-comm-img site-img">
                        <canvas width="488" height="484"></canvas>
                        <img src="images/Bel-Air-Los-Angeles.jpg" alt="Bel Air" width="488" height="484"/>
                      </div>
                      <div className="ip-comm-title">
                        <span>
                          <em className="ai-icon-logo"></em>Bel Air </span>
                      </div>
                      <div className="ip-comm-hover-title">
                        <div className="ip-comm-hover-main-title">
                          <span>Bel Air</span>
                        </div>
                        <div className="ip-comm-hover-btn">
                          <span className="global-btn">Explore Area</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="ip-comm-item">
                    <a href="https://serioestates.com/community/beverly-hills-post-office/">
                      <div className="ip-comm-img site-img">
                        <canvas width="488" height="484"></canvas>
                        <img src="images/beverly-hills-1.jpg" alt="Beverly Hills Post Office" width="488" height="484"/>
                      </div>
                      <div className="ip-comm-title">
                        <span>
                          <em className="ai-icon-logo"></em>Beverly Hills Post Office </span>
                      </div>
                      <div className="ip-comm-hover-title">
                        <div className="ip-comm-hover-main-title">
                          <span>Beverly Hills Post Office</span>
                        </div>
                        <div className="ip-comm-hover-btn">
                          <span className="global-btn">Explore Area</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="ip-comm-item">
                    <a href="https://serioestates.com/community/brentwood/">
                      <div className="ip-comm-img site-img">
                        <canvas width="488" height="484"></canvas>
                        <img src="images/IMG_20240125_004451.jpg" alt="Brentwood" width="488" height="484"/>
                      </div>
                      <div className="ip-comm-title">
                        <span>
                          <em className="ai-icon-logo"></em>Brentwood </span>
                      </div>
                      <div className="ip-comm-hover-title">
                        <div className="ip-comm-hover-main-title">
                          <span>Brentwood</span>
                        </div>
                        <div className="ip-comm-hover-btn">
                          <span className="global-btn">Explore Area</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="ip-comm-item">
                    <a href="https://serioestates.com/community/encino/">
                      <div className="ip-comm-img site-img">
                        <canvas width="488" height="484"></canvas>
                        <img src="images/San-Fernando-Valley-Encino.jpg" alt="Encino" width="488" height="484"/>
                      </div>
                      <div className="ip-comm-title">
                        <span>
                          <em className="ai-icon-logo"></em>Encino </span>
                      </div>
                      <div className="ip-comm-hover-title">
                        <div className="ip-comm-hover-main-title">
                          <span>Encino</span>
                        </div>
                        <div className="ip-comm-hover-btn">
                          <span className="global-btn">Explore Area</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="ip-comm-item">
                    <a href="https://serioestates.com/community/hollywood-hills/">
                      <div className="ip-comm-img site-img">
                        <canvas width="488" height="484"></canvas>
                        <img src="images/Hollywood-Hills_Edit.jpg" alt="Hollywood Hills" width="488" height="484"/>
                      </div>
                      <div className="ip-comm-title">
                        <span>
                          <em className="ai-icon-logo"></em>Hollywood Hills </span>
                      </div>
                      <div className="ip-comm-hover-title">
                        <div className="ip-comm-hover-main-title">
                          <span>Hollywood Hills</span>
                        </div>
                        <div className="ip-comm-hover-btn">
                          <span className="global-btn">Explore Area</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="ip-comm-item">
                    <a href="https://serioestates.com/community/holmby-hills/">
                      <div className="ip-comm-img site-img">
                        <canvas width="488" height="484"></canvas>
                        <img src="images/Holmby-Hills-2.jpg" alt="Holmby Hills" width="488" height="484"/>
                      </div>
                      <div className="ip-comm-title">
                        <span>
                          <em className="ai-icon-logo"></em>Holmby Hills </span>
                      </div>
                      <div className="ip-comm-hover-title">
                        <div className="ip-comm-hover-main-title">
                          <span>Holmby Hills</span>
                        </div>
                        <div className="ip-comm-hover-btn">
                          <span className="global-btn">Explore Area</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="ip-comm-item">
                    <a href="https://serioestates.com/community/malibu/">
                      <div className="ip-comm-img site-img">
                        <canvas width="488" height="484"></canvas>
                        <img src="images/1AMalibu_edit_1867828433520196.jpg" alt="Malibu" width="488" height="484"/>
                      </div>
                      <div className="ip-comm-title">
                        <span>
                          <em className="ai-icon-logo"></em>Malibu </span>
                      </div>
                      <div className="ip-comm-hover-title">
                        <div className="ip-comm-hover-main-title">
                          <span>Malibu</span>
                        </div>
                        <div className="ip-comm-hover-btn">
                          <span className="global-btn">Explore Area</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="ip-comm-item">
                    <a href="https://serioestates.com/community/pacific-palisades/">
                      <div className="ip-comm-img site-img">
                        <canvas width="488" height="484"></canvas>
                        <img src="images/IMG_20231122_073003-1.jpg" alt="Pacific Palisades" width="488" height="484"/>
                      </div>
                      <div className="ip-comm-title">
                        <span>
                          <em className="ai-icon-logo"></em>Pacific Palisades </span>
                      </div>
                      <div className="ip-comm-hover-title">
                        <div className="ip-comm-hover-main-title">
                          <span>Pacific Palisades</span>
                        </div>
                        <div className="ip-comm-hover-btn">
                          <span className="global-btn">Explore Area</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="ip-comm-item">
                    <a href="https://serioestates.com/community/santa-monica/">
                      <div className="ip-comm-img site-img">
                        <canvas width="488" height="484"></canvas>
                        <img src="images/Sta-Monica_coastline.webp" alt="Santa Monica" width="488" height="484"/>
                      </div>
                      <div className="ip-comm-title">
                        <span>
                          <em className="ai-icon-logo"></em>Santa Monica </span>
                      </div>
                      <div className="ip-comm-hover-title">
                        <div className="ip-comm-hover-main-title">
                          <span>Santa Monica</span>
                        </div>
                        <div className="ip-comm-hover-btn">
                          <span className="global-btn">Explore Area</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="ip-comm-item">
                    <a href="https://serioestates.com/community/sherman-oaks/">
                      <div className="ip-comm-img site-img">
                        <canvas width="488" height="484"></canvas>
                        <img src="images/Sherman-Oaks-facebook_edit_2295126303417494.jpg" alt="Sherman Oaks" width="488" height="484"/>
                      </div>
                      <div className="ip-comm-title">
                        <span>
                          <em className="ai-icon-logo"></em>Sherman Oaks </span>
                      </div>
                      <div className="ip-comm-hover-title">
                        <div className="ip-comm-hover-main-title">
                          <span>Sherman Oaks</span>
                        </div>
                        <div className="ip-comm-hover-btn">
                          <span className="global-btn">Explore Area</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="ip-comm-item">
                    <a href="https://serioestates.com/community/studio-city/">
                      <div className="ip-comm-img site-img">
                        <canvas width="488" height="484"></canvas>
                        <img src="images/1700606629362_Studio-City_edit_1983963334873828-1-scaled.jpg" alt="Studio City" width="488" height="484"/>
                      </div>
                      <div className="ip-comm-title">
                        <span>
                          <em className="ai-icon-logo"></em>Studio City </span>
                      </div>
                      <div className="ip-comm-hover-title">
                        <div className="ip-comm-hover-main-title">
                          <span>Studio City</span>
                        </div>
                        <div className="ip-comm-hover-btn">
                          <span className="global-btn">Explore Area</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="ip-comm-item">
                    <a href="https://serioestates.com/community/westwood/">
                      <div className="ip-comm-img site-img">
                        <canvas width="488" height="484"></canvas>
                        <img src="images/westwood-canvas-big.jpg" alt="Westwood" width="488" height="484"/>
                      </div>
                      <div className="ip-comm-title">
                        <span>
                          <em className="ai-icon-logo"></em>Westwood </span>
                      </div>
                      <div className="ip-comm-hover-title">
                        <div className="ip-comm-hover-main-title">
                          <span>Westwood</span>
                        </div>
                        <div className="ip-comm-hover-btn">
                          <span className="global-btn">Explore Area</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="ip-comm-content-more-btn">
                  <button className="global-btn">Load More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
    {/* <!-- end of #inner-page-wrapper .inner --> */}
  </div>
  {/* <!-- end of #inner-page-wrapper --> */}
</main>
  )
}

export default SinglePlace