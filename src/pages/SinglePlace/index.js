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
                { place && place.properties.map(property => (
                  <div key={property.id} className="ip-fl-listing-item">
                    <Link to={`/property/${property.id}`}>
                      <div className="ip-fl-listing-img-holder">
                        <div className="ip-fl-listing-img site-img">
                          <canvas width="488" height="484"></canvas>
                          {/* <!-- <img src="https://imageproxy.agentimage.com/488x484/https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1046941072/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcxNjA1NDQ4MA/fCT7QnIizeaevAYzyD02rcvs2bKkYSZshaeU624W01I" alt="Featured Listings" width="488" height="484"> --> */}
                          <img src={`https://d3mpuupcc30lzt.cloudfront.net/${property.imageIds[0]}`} alt="Featured Listings" width="488" height="484"/>
                        </div>
                        <div className="mls-logo-overlay">
                          <img src="images/mls-logo.png" alt="Featured Listings" width="170" height="101"/>
                        </div>
                        <div className="ip-fl-listing-hover">
                          <div className="ip-fl-listing-price">
                            <span>RWF{property.price}</span>
                          </div>
                          <div className="ip-fl-listing-hover-address">
                            <span>{property.title} <br /> {property.location} </span>
                          </div>
                          <div className="ip-fl-listing-info">
                            <span>{property.bedrooms} Beds <em className="ai-icon-bed"></em>
                            </span>
                            <span>{property.bathrooms} Baths <em className="ai-icon-bath"></em>
                            </span>
                            <span> {property.property_size} Sq.ft. <em className="ai-icon-sqft"></em>
                            </span>
                          </div>
                          <div className="ip-fl-listing-hover-btn">
                            <span className="global-btn">Read More</span>
                          </div>
                        </div>
                      </div>
                      <div className="ip-fl-listing-address">
                        <span>{property.title} <br /> {property.location} </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="ip-fl-listing-more-btn">
                <Link to='/listings' className="global-btn" id="properties-load-more" data-listing-max="13">Load More</Link>
              </div>
            </div>
          </div>
          <div className="ip-cd-section">
            <div className="ip-comm-content-main">
              <div className="custom-container">
                {/* <div className="global-title is-centered">
                  <h2>
                    <small>
                      <em className="global-logo-icon">
                        <i className="global-outline"></i>
                      </em>Similar </small>
                    <span>Communities</span>
                  </h2>
                </div> */}
                {/* <div className="ip-comm-content-row" data-total="12">
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
                </div> */}
                {/* <div className="ip-comm-content-more-btn">
                  <button className="global-btn">Load More</button>
                </div> */}
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