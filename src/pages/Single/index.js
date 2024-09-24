/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState, useRef } from 'react'
import { useTransition, useSpring, animated } from '@react-spring/web'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProperty } from '../../redux/actions/property'
import { searchProperties } from '../../redux/actions/properties'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Modal, Button, Collapse, Col, Row } from 'react-bootstrap'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import imageOne from '../../assets/images/ld-bg-2.png'
import moment from 'moment/moment'

function SingleProperty() {
  const navigate = useNavigate()
  const contentRef = useRef();
  const downloadPDF = () => {
    const input = contentRef.current;

    html2canvas(input, { scrollY: -window.scrollY, useCORS: true }) // Capture the full page
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210; // Width of the A4 page in mm
        const pageHeight = 295; // Height of the A4 page in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        // Add image to PDF and manage page breaks
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save('full-page.pdf');
      })
      .catch((err) => console.error(err));
  };

  const [isCollapsed, setIsCollapsed] = useState([false, false, false, false])

  const topOfPageRef = useRef(null)
  useEffect(() => {
    if (topOfPageRef.current) {
      topOfPageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    }
  }, [])

  const handleScroll = (id) => {
    navigate(`/property/${id}`)
    if (topOfPageRef.current) {
      topOfPageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    }
  }

  // Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [activeIndex, setActiveIndex] = useState(0);
  // const [activeIndex2, setActiveIndex2] = useState(0);
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(fetchProperty(id))
  }, [dispatch, id])

  const data = useSelector(state => state.property)
  const propertiesData = useSelector(state => state.properties)

  const { loading, property, getProperty, message } = data

  const query = property && property.location ? `location=${property && property.location.split(' ')[0]}` : ''

  const { listOfProperties = [], next, currentPage, getProperties } = propertiesData

  useEffect(() => {
    dispatch(searchProperties(query))
  }, [dispatch, query])

  const imgs = property && property.urls ? property.urls : []

  const transitions = useTransition([activeIndex], {
    from: { opacity: 0, display: 'none' },
    enter: { opacity: 1, display: 'block' },
    leave: { opacity: 0, display: 'none' },
    config: { duration: 1000 },
  })

  // const transitions1 = useTransition([activeIndex2], {
  //   from: { opacity: 0, display: 'none' },
  //   enter: { opacity: 1, display: 'block' },
  //   leave: { opacity: 0, display: 'none' },
  // })

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((active) => (active + 1) % imgs.length)
    }, 10000)

    // const interval2 = setInterval(() => {
    //   setActiveIndex2((active) => (active + 1) % imgs.length)
    // }, 10000)

    return () => {
      clearInterval(interval)
      // clearInterval(interval2)
    }
  }, [])

  const nextSlide = () => {
    setActiveIndex((activeIndex + 1) % imgs.length);
    if (topOfPageRef.current) {
      topOfPageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    }
  };

  const previousSlide = () => {
    setActiveIndex((activeIndex - 1 + imgs.length) % imgs.length);
    if (topOfPageRef.current) {
      topOfPageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    }
  };

  return (
    

    <>
    <main>
      <div ref={topOfPageRef}></div>
      <h2 className="aios-starter-theme-hide-title">Main Content</h2> {/*
      <!-- ip banner goes here --> */} <div className="textwidget custom-html-widget"> {/* <div className="ip-banner" data-type="page" data-id="0">
          <canvas width="1600" height="350" style="background-image: url(images/slide-img-1.jpg)"></canvas>
        </div> */} </div> {/*
      <!-- ip banner goes here --> */} <div id="inner-page-wrapper">
        <div style={{padding: 0, margin: 0}} className="container-fluid">
          <div id="ip-listing-details">
            <div className="ip-ld-container">
              <div className="ip-ld-section">
                <div id="ip-hero" className="ip-ld-hero-container aios-scroll-section">
                  <div className="ip-ld-hero-slide"> { transitions((styles, item) => ( <animated.div style={styles} className="ip-ld-hero-slide-item">
                      <div className="ip-ld-hero-img site-img">
                        <canvas width="1600" height="800"></canvas>
                        <img src={imgs && imgs[item]} alt="Hero" />
                      </div>
                    </animated.div> )) } </div>
                  <div className="ip-ld-hero-content">
                    <div className="container">
                      <div className="ip-ld-hero-content-inner">
                        <div className="ip-ld-hero-title">
                          <h2>{property.title}</h2>
                        </div>
                        <div className="ip-ld-hero-controls">
                          <button onClick={previousSlide} className="ip-ld-hero-prev" aria-label="Prev">
                            <em className="ai-icon-prev"></em>
                          </button>
                          <button onClick={nextSlide} className="ip-ld-hero-next" aria-label="Next">
                            <em className="ai-icon-next"></em>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{paddingBottom: 0}} className="ip-ld-section">
                <div ref={contentRef} id="ip-content" className="ip-ld-content-main-container aios-scroll-section" data-aios-scroll-title="Communities">
                  <div className="ip-ld-bg">
                    <canvas width="1600" height="2418" style={{ backgroundImage: `url('${imageOne}')`, width: '100%', backgroundSize: 'cover' }}></canvas>
                  </div>
                  <div className="custom-breadcrumbs">
                    <div className="container">
                      <p id="breadcrumbs">
                        <span>
                          <span property="itemListElement" typeof="ListItem">
                            <Link property="item" typeof="WebPage" to='/'>
                            <span property="name">Home</span>
                            </Link>
                          </span> » <span className="breadcrumb_last" property="itemListElement" typeof="ListItem">
                            <span property="name">{property.title}</span>
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="ip-ld-content-main">
                    <div className="container">
                      <div className="ip-ld-content-row">
                        <div className="global-title">
                          <h2>
                            <span>
                              <em className="global-logo-icon">
                                <i className="global-outline"></i>
                              </em>{property.title} </span>
                            <small>{property.location}</small>
                          </h2>
                          <div className="ip-ld-price">RWF {property.price}</div>
                        </div>
                        <div className="ip-ld-content-col idx-gallery">
                          <div className="ip-ld-gallery-container">
                            <div className="ip-ld-gallery-row">
                              {
                                property && imgs.map((item, index) => ( 
                                  <div key={index} className="ip-ld-gallery-col">
                                    <a href={item} className="ip-ld-gallery-popup">
                                      <div className="ip-ld-gallery-img site-img">
                                        <canvas width="355" height="465"></canvas>
                                        <img src={item} alt="Gallery Image" />
                                      </div>
                                    </a>
                                  </div> 
                              ))}
                            </div>
                            <div className='ip-ld-gallery-row'>
                              <div style={{width: '100%'}} className="ip-ld-btn">
                                <a className="global-btn" onClick={() => navigate('/contact_us')}>Request a Tour</a>
                              </div>
                            </div>
                            <Row className='ip-ld-gallery-row ip-ld-content'>
                              <h2 style={{
                                textAlign: 'center',
                                textTransform: 'uppercase',
                                fontSize: '28px',
                                marginBottom: '35px',
                              }}>Property details</h2>
                              <Col>
                                <p>Type: <b>{property.property_type}</b></p>
                                <p>Size: <b>{property.property_size} sqm</b></p>
                                <p>Parking: <b>{property.hasParking ? 'Available' : 'No Parking slot available'}</b></p>
                                <p>Air Conditional: <b>{property.AC ? 'Available' : 'Not available'}</b></p>
                              </Col>
                              <Col>
                                <p>Swimming pool: <b>{property.hasPool? 'Available' : 'Not avaiable'}</b></p>
                                <p>Appliances: <b>{property && property.appliances.join(', ')}</b></p>
                                <p>Year Built: <b>{moment(property.yearBuilt).year()}</b></p>
                              </Col>
                            </Row>
                          </div>
                        </div>
                        <div className="ip-ld-content-col idx-content">
                          <div className="ip-ld-content-container">
                            <div className="ip-ld-content">
                              <p>{property.details}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                      <div className="ip-ld-specs">
                        <ul>
                          <li className="specs-beds">
                            <span>{property.bedrooms}</span>
                            <small>Beds</small>
                          </li>
                          <li className="specs-baths">
                            <span> {property.bathrooms}</span>
                            <small>Baths</small>
                          </li>
                          <li className="specs-sqft">
                            <span>{property.property_size}</span>
                            <small>Sq.m.</small>
                          </li> {/* <li className="specs-acres">
                            <span>3.32</span>
                            <small>Acres</small>
                          </li> */}
                        </ul>
                      </div>
                      <div className="ip-ld-btn">
                        <a className="global-btn" onClick={downloadPDF}>Download PDF</a>
                      </div>
                      <div className="ip-ld-share">
                        <h3>Share Listing</h3>
                        <div className="share-icons">
                          <a href="//www.facebook.com/" data-title="729 Bel Air Road, Los Angeles, CA 90077" target="_blank">
                            <span className="ai-font-facebook"></span>
                            <span className="tooltips">facebook</span>
                          </a>
                          <a href="#" target="_blank">
                            <span className="ai-font-instagram"></span>
                            <span className="tooltips">instagram</span>
                          </a>
                          <a href="#" target="_blank">
                            <span className="ai-font-youtube"></span>
                            <span className="tooltips">youtube</span>
                          </a>
                          <a href="//www.linkedin.com/sharing/share-offsite/" data-title="729 Bel Air Road, Los Angeles, CA 90077" target="_blank">
                            <span className="ai-font-linkedin"></span>
                            <span className="tooltips">linkedin</span>
                          </a>
                          <a href="#" target="_blank">
                            <span className="ai-font-tiktok"></span>
                            <span className="tooltips">tiktok</span>
                          </a>
                          <a href="//twitter.com/intent/tweet?" data-title="729 Bel Air Road, Los Angeles, CA 90077" target="_blank">
                            <span className="ai-font-twitter"></span>
                            <span className="tooltips">twitter</span>
                          </a>
                          <a href="/cdn-cgi/l/email-protection#645b1711060e0107105953565d4426010844250d1644360b05004844280b1744250a030108011748442725445d5454535342060b001d592c011d4544270c01070f440b111044100c0510443136285e444154204154250c101014175e4b4b1701160d0b011710051001174a070b094b0c0b09011749020b16491705080149000110050d08174b53565d4926212849252d3649362b252049282b3749252a2321282137492725495d545453534b5650575c525153514b5754524b" data-title="729 Bel Air Road, Los Angeles, CA 90077" target="_blank">
                            <span className="ai-font-envelope" style={{fontSize: '19px !important'}}></span>
                            <span className="tooltips">Email</span>
                          </a>
                        </div>
                      </div>
                      {/* <div className="ip-ld-accordion panel-group" id="ip-ld-accordion-1" role="tablist" aria-multiselectable="true">
                        <h2>Property details</h2>
                        <div className="row">
                          <div className="col-md-6" data-key="0">
                            <div className="panel panel-default">
                              <div className="panel-heading">
                                <h4 className="panel-title">
                                  <a role="button" data-toggle="collapse" href="#locationinformation"> Location Information</a>
                                </h4>
                              </div>
                              <Collapse in={isCollapsed[0]} id="locationinformation" className="panel-collapse collapse">
                                <div className="panel-body">
                                  <ul>
                                    <li>
                                      <strong> County</strong>: Los Angeles
                                    </li>
                                    <li>
                                      <strong>MLS Area</strong>: Bel Air - Holmby Hills
                                    </li>
                                    <li>
                                      <strong> Community</strong>: Gated
                                    </li>
                                    <li>
                                      <strong>Latitude</strong>: 34.085851
                                    </li>
                                    <li>
                                      <strong> Longitude</strong>: -118.443047
                                    </li>
                                    <li>
                                      <strong>Directions</strong>: North of Sunset on Bel Air Road
                                    </li>
                                  </ul>
                                </div>
                              </Collapse>
                            </div>
                            <div className="panel panel-default" data-key="0">
                              <div className="panel-heading">
                                <h4 className="panel-title">
                                  <a role="button" data-toggle="collapse" href="#interiorfeatures"> Interior Features</a>
                                </h4>
                              </div>
                              <div id="interiorfeatures" className="panel-collapse collapse">
                                <div className="panel-body">
                                  <ul>
                                    <li>
                                      <strong> Common Walls</strong>: No Common Walls
                                    </li>
                                    <li>
                                      <strong>Interior</strong>: Attic, Wine Cellar, Walk-In Closet(s)
                                    </li>
                                    <li>
                                      <strong> Full Baths</strong>: 12
                                    </li>
                                    <li>
                                      <strong>1/2 Baths</strong>: 8
                                    </li>
                                    <li>
                                      <strong> Spa</strong>: None
                                    </li>
                                    <li>
                                      <strong>Has Family Room</strong>: Yes
                                    </li>
                                  </ul>
                                  <ul>
                                    <li>
                                      <strong> Has Fireplace</strong>: Yes
                                    </li>
                                    <li>
                                      <strong>Fireplace Description</strong>: Guest Accommodations, Library, Living Room, Primary Bedroom
                                    </li>
                                    <li>
                                      <strong> Heating</strong>: Central
                                    </li>
                                    <li>
                                      <strong>Cooling</strong>: Central Air
                                    </li>
                                    <li>
                                      <strong> Floors</strong>: Stone, Wood
                                    </li>
                                    <li>
                                      <strong>Laundry</strong>: Inside, Laundry Room
                                    </li>
                                  </ul>
                                  <ul>
                                    <li>
                                      <strong> Appliances</strong>: Dishwasher, Disposal, Refrigerator, Dryer, Washer
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6" data-key="1">
                            <div className="panel panel-default" data-key="1">
                              <div className="panel-heading">
                                <h4 className="panel-title">
                                  <a role="button" data-toggle="collapse" href="#exteriorfeatures"> Exterior Features</a>
                                </h4>
                              </div>
                              <div id="exteriorfeatures" className="panel-collapse collapse">
                                <div className="panel-body">
                                  <ul>
                                    <li>
                                      <strong> Stories</strong>: Three Or More
                                    </li>
                                    <li>
                                      <strong>Is New Construction</strong>: No
                                    </li>
                                    <li>
                                      <strong> Roof</strong>: Tile
                                    </li>
                                    <li>
                                      <strong>Security Features</strong>: Gated Community
                                    </li>
                                    <li>
                                      <strong> Parking Description</strong>: Concrete, Covered, Door-Multi, Driveway, Underground, Garage, Gated, Private, Side By Side
                                    </li>
                                    <li>
                                      <strong>Has Garage</strong>: Yes
                                    </li>
                                  </ul>
                                  <ul>
                                    <li>
                                      <strong> Parking Spaces</strong>: 26
                                    </li>
                                    <li>
                                      <strong>Has a Pool</strong>: Yes
                                    </li>
                                    <li>
                                      <strong> Pool Description</strong>: Heated, In Ground
                                    </li>
                                    <li>
                                      <strong>Other Structures</strong>: Guest House, Greenhouse
                                    </li>
                                    <li>
                                      <strong> Lot Size in Acres</strong>: 3.324
                                    </li>
                                    <li>
                                      <strong>Approximate Size (Sq. Ft.)</strong>: 18,784
                                    </li>
                                  </ul>
                                  <ul>
                                    <li>
                                      <strong> Lot Size in Sq. Ft.</strong>: 144,785
                                    </li>
                                    <li>
                                      <strong>Zoning</strong>: LARE20
                                    </li>
                                    <li>
                                      <strong> Has View</strong>: Yes
                                    </li>
                                    <li>
                                      <strong>View Description</strong>: City Lights, Canyon, Ocean, Panoramic
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="panel panel-default" data-key="3">
                              <div className="panel-heading">
                                <h4 className="panel-title">
                                  <a role="button" data-toggle="collapse" href="#additionalinformation"> Additional Information</a>
                                </h4>
                              </div>
                              <div id="additionalinformation" className="panel-collapse collapse">
                                <div className="panel-body">
                                  <ul>
                                    <li>
                                      <strong> Property Type</strong>: SFR
                                    </li>
                                    <li>
                                      <strong>Property SubType</strong>: Single Family Residence
                                    </li>
                                    <li>
                                      <strong> Year Built</strong>: 1972
                                    </li>
                                    <li>
                                      <strong>APN</strong>: 4362015030
                                    </li>
                                    <li>
                                      <strong> Status</strong>: Active
                                    </li>
                                    <li>
                                      <strong>Is Aged Restricted</strong>: No
                                    </li>
                                  </ul>
                                  <ul>
                                    <li>
                                      <strong> HOA Fee</strong>: $0
                                    </li>
                                    <li>
                                      <strong>Lot Square Feet Source</strong>: Assessor
                                    </li>
                                    <li>
                                      <strong> Listing Agent CA DRE #</strong>: 0475038
                                    </li>
                                    <li>
                                      <strong>Co-Listing Agt CA DRE #</strong>: 1317962
                                    </li>
                                    <li>
                                      <strong> List Date</strong>: 05/02/2024
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>  */}
                      {/* <div className="ip-ld-map">
                        <div className="map-holder">
                          <iframe title="Description of content in iframe 1" style={{height:'400px',width:'100%',border:0,filter: 'grayscale(1)'}} width="1140" height="400" src="https://www.google.com/maps/embed/v1/place?q=729 Bel Air Road, Los Angeles, CA 90077&amp;key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                        </div>
                      </div>
                      <div className="ip-ld-disclaimer">
                        <h4>DISCLAIMER</h4>
                        <p> Based on information from CSMAR, CRMLS, and/or CLAW, and/or CRISNet MLS as of August 29, 2024 9:28 PM PT. The information being provided by CSMAR, CRMLS and/or CLAW and/or CRISNet MLS is for the visitor's personal, non-commercial use and may not be used for any purpose other than to identify prospective properties the visitor may be interested in purchasing. Any information relating to a property referenced on this website comes from the Internet Data Exchange ('IDX') program of CSMAR, CRMLS and/or CLAW, and/or CRISNet MLS. This website may reference real estate listing(s) held by a brokerage firm other than the broker and/or agent who owns this website. Any information relating to a property, regardless of source, including but not limited to square footage and lot sizes, is deemed reliable but not guaranteed and should be personally verified through personal inspection by and/or with the appropriate professionals. The data contained herein is copyrighted by CSMAR, CRMLS and/or CLAW, and/or CRISNet MLS and is protected by all applicable copyright laws. Any dissemination of this information is in violation of copyright laws and is strictly prohibited. </p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div> {/* <div className="ip-ld-section">
                <div id="ip-get-in-touch" className="aios-scroll-section" data-aios-scroll-title="Footer Form">
                  <div className="git-container">
                    <div className="git-bg attachment-fixed">
                      <canvas width="1600" height="841" style={{backgroundImage: `url('images/git-bg.jpg')`}}></canvas>
                    </div>
                    <div className="custom-container">
                      <div className="git-main">
                        <div className="git-row">
                          <div className="git-col">
                            <div className="git-content-container">
                              <div className="global-title is-centered">
                                <h2>
                                  <small>
                                    <em className="global-logo-icon"></em>Interested In </small>
                                  <span>729 Bel Air Road</span>
                                </h2>
                              </div>
                              <div className="git-caption">
                                <p>To inquire about a property, <br /> please fill out the form below. </p>
                              </div>
                              <div className="git-form-widget">
                                <div className="wpcf7 no-js" id="wpcf7-f239-o2" lang="en-US" dir="ltr">
                                  <div className="screen-reader-response">
                                    <p role="status" aria-live="polite" aria-atomic="true"></p>
                                    <ul></ul>
                                  </div>
                                  <form action="/homes-for-sale-details/729-BEL-AIR-ROAD-LOS-ANGELES-CA-90077/24386575/306/#wpcf7-f239-o2" method="post" className="wpcf7-form init use-floating-validation-tip" aria-label="Contact form" novalidate="novalidate" data-status="init">
                                    <div style={{display: 'none'}}>
                                      <input type="hidden" name="_wpcf7" value="239" />
                                      <input type="hidden" name="_wpcf7_version" value="5.9.8" />
                                      <input type="hidden" name="_wpcf7_locale" value="en_US" />
                                      <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f239-o2" />
                                      <input type="hidden" name="_wpcf7_container_post" value="0" />
                                      <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                                    </div>
                                    <div id="wpcf7-66d2b960984ed" style={{display:'none !important', visibility:'hidden !important'}}>
                                      <input type="hidden" name="form-page-source" className="form-page-source" value="https://serioestates.com/homes-for-sale-details/729-BEL-AIR-ROAD-LOS-ANGELES-CA-90077/24386575/306/" />
                                      <input type="hidden" name="queen-bee-id" value="wpcf7-66d2b960984ed" />
                                      <input type="hidden" name="wpcf7-66d2b960984ed-website-remote-address" value="127.0.0.1" />
                                      <input type="hidden" name="wpcf7-66d2b960984ed-website-time-start" value="1725086048" />
                                      <input type="hidden" name="wpcf7-66d2b960984ed-website-time-check" value="5" />
                                      <label htmlFor="wpcf7-66d2b960984ed-website" className="hp-message">Choose Side:</label>
                                      <input type="text" name="wpcf7-66d2b960984ed-website" id="wpcf7-66d2b960984ed-website" tabindex="-1" autoComplete="off" />
                                    </div>
                                    <div id="wpcf7-66d2b960984e7" style={{display:'none !important', visibility:'hidden !important'}}>
                                      <input type="hidden" name="queen-bee-id" value="wpcf7-66d2b960984e7" />
                                      <input type="hidden" name="wpcf7-66d2b960984e7-website-remote-address" value="127.0.0.1" />
                                      <input type="hidden" name="wpcf7-66d2b960984e7-website-time-start" value="1725086048" />
                                      <input type="hidden" name="wpcf7-66d2b960984e7-website-time-check" value="5" />
                                      <label htmlFor="wpcf7-66d2b960984e7-website" className="hp-message">Choose Side:</label>
                                      <input type="text" name="wpcf7-66d2b960984e7-website" id="wpcf7-66d2b960984e7-website" tabindex="-1" autoComplete="false" />
                                    </div>
                                    <div className="git-form">
                                      <div className="col-md-12 listings-field hidden">
                                        <input className="wpcf7-form-control wpcf7-hidden" id="listings-address" value="" type="hidden" name="listings-address" />
                                      </div>
                                      <div className="git-form-row">
                                        <div className="git-form-col">
                                          <label className="hidden" htmlFor="git-fname">First Name</label>
                                          <span className="wpcf7-form-control-wrap" data-name="fname">
                                            <input size="40" maxlength="400" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" id="git-fname" aria-required="true" aria-invalid="false" placeholder="First Name" value="" type="text" name="fname" />
                                          </span>
                                        </div>
                                        <div className="git-form-col">
                                          <label className="hidden" htmlFor="git-lname">Last Name</label>
                                          <span className="wpcf7-form-control-wrap" data-name="lname">
                                            <input size="40" maxlength="400" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" id="git-lname" aria-required="true" aria-invalid="false" placeholder="Last Name" value="" type="text" name="lname" />
                                          </span>
                                        </div>
                                      </div>
                                      <div className="git-form-row">
                                        <div className="git-form-col">
                                          <label className="hidden" htmlFor="git-phone">Phone Number</label>
                                          <span className="wpcf7-form-control-wrap" data-name="your-phone">
                                            <input size="40" maxlength="400" className="wpcf7-form-control wpcf7-tel wpcf7-text wpcf7-validates-as-tel" id="git-phone" aria-invalid="false" placeholder="Phone Number" value="" type="tel" name="your-phone" />
                                          </span>
                                        </div>
                                        <div className="git-form-col">
                                          <label className="hidden" htmlFor="git-email">Email Address</label>
                                          <span className="wpcf7-form-control-wrap" data-name="your-email">
                                            <input size="40" maxlength="400" className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" id="git-email" aria-required="true" aria-invalid="false" placeholder="Email Address" value="" type="email" name="your-email" />
                                          </span>
                                        </div>
                                      </div>
                                      <div className="git-form-row full">
                                        <div className="git-form-col">
                                          <label className="hidden" htmlFor="git-message">Message</label>
                                          <span className="wpcf7-form-control-wrap" data-name="your-message">
                                            <textarea cols="40" rows="10" maxlength="2000" className="wpcf7-form-control wpcf7-textarea" id="git-message" aria-invalid="false" placeholder="Message" name="your-message"></textarea>
                                          </span>
                                        </div>
                                        <div className="git-form-col form-submit">
                                          <button type="submit" className="global-btn">Submit</button>
                                          <span className="ajax-loader"></span>
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
                              <img src="images/team-photo-b.png" alt="Agent Photo" width="583" height="705" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="ip-ld-section">
                <div style={{paddingTop: 0}} className="ip-fl-listing-main">
                  <div className="custom-container" style={{marginBottom: '55px'}}>
                    <div className="global-title is-centered">
                      <h2>
                        <small>
                          <em className="global-logo-icon">
                            <i className="global-outline"></i>
                          </em>Similar </small>
                        <span>Properties</span>
                      </h2>
                    </div>
                    <div className="ip-fl-listing-row">
                      { propertiesData && listOfProperties ? listOfProperties.map(item => (
                        <div key={item.id} className="ip-fl-listing-item">
                          <Link to={`/property/${item.id}`}>
                            <div className="ip-fl-listing-img-holder">
                              <div className="ip-fl-listing-img site-img">
                                <canvas width="488" height="484"></canvas>
                                <img src={`https://d3mpuupcc30lzt.cloudfront.net/${item && item.imageIds[0]}`} alt="10644 Bellagio Road" width="488" height="484" />
                              </div>
                              <div className="ip-fl-listing-hover">
                                <div className="ip-fl-listing-price">
                                  <span>RWF {item.price}</span>
                                </div>
                                <div className="ip-fl-listing-hover-address">
                                  <span>{item.title}</span>
                                </div>
                                <div className="ip-fl-listing-hover-address">
                                  <span>{item.location}</span>
                                </div>
                                <div className="ip-fl-listing-info">
                                  <span>{item.bedrooms} Beds <em className="ai-icon-bed"></em>
                                  </span>
                                  <span>{item.bathrooms} Baths <em className="ai-icon-bath"></em>
                                  </span>
                                  <span>{item.property_size} Sqm <em className="ai-icon-sqft"></em>
                                  </span>
                                </div>
                                <div className="ip-fl-listing-hover-btn">
                                  <span onClick={() => handleScroll(item.id)} className="global-btn">Read More</span>
                                </div>
                              </div>
                            </div>
                            <div className="ip-fl-listing-address">
                              <span>{item.location}</span>
                            </div>
                          </Link>
                        </div>
                      )) : ''}
                    </div>
                    <div className="ip-fl-listing-more-btn">
                      <Link className="global-btn" to='/listings/'>Load More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="ihf-main-container" className="ihf-modal-container">
            <div id="ihfScheduleShowing" className="modal" aria-hidden="true" style={{display: 'none', zIndex: 9999}}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <div className="modal-title">Schedule Showing </div>
                    <button type="button" className="close" data-dismiss="modal"> × </button>
                  </div>
                  <div className="modal-body">
                    <div className="ihf-schedule-replace" data-ihf-remote-submit="true">
                      <div className="row mt-10 hidden-xs">
                        <div className="col-xs-12">
                          <strong></strong>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <form id="ihf-schedule-showing-request-form" className="form-inline" data-ihf-event="schedule-showing-form-submit" action="https://serioestates.com/wp-admin/admin-ajax.php?action=ihf_schedule_showing" method="GET">
                            <div className="JKGH00920" style={{position: 'absolute', top: '-2000px', left: '-2000px'}}>
                              <label> Message <textarea name="JKGH00920" placeholder="Enter your message" autoComplete="off"></textarea>
                              </label>
                            </div> {/* <input name="actionType" value="create" type="hidden" />
                            <input id="listingNumber" name="listingNumber" type="hidden" value="24386575" />
                            <input id="boardId" name="boardId" type="hidden" value="306" />
                            <input id="clientPropertyId" name="clientPropertyId" type="hidden" value="" />
                            <input id="sold" name="sold" type="hidden" value="false" />
                            <input type="hidden" name="contactType" value="scheduleShowing" /> */} <div className="row mt-10">
                              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="form-group">
                                  <label htmlFor="ihf_inforeq_firstname"> First Name* </label>
                                  <input id="ihf_inforeq_firstname" name="firstName" className="form-control" required="required" type="text" value="" />
                                </div>
                              </div>
                              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="form-group">
                                  <label htmlFor="ihf_inforeq_lastName"> Last Name* </label>
                                  <input id="ihf_inforeq_lastName" name="lastName" className="form-control" required="required" type="text" value="" />
                                </div>
                              </div>
                            </div>
                            <div className="row mt-10">
                              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="form-group">
                                  <label htmlFor="ihf_inforeq_email"> Email* </label>
                                  <input id="ihf_inforeq_email" name="newEmail" type="email" className="form-control" required="required" value="" />
                                </div>
                              </div>
                              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="form-group">
                                  <label htmlFor="ihf_inforeq_phone"> Phone </label>
                                  <input id="ihf_inforeq_phone" name="phone" type="tel" className="form-control" value="" autoComplete="off" />
                                </div>
                              </div>
                            </div>
                            <div className="row mt-10">
                              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="form-group">
                                  <label htmlFor="ihf_schedshow_pref_date"> Preferred Time and Date* </label>
                                  <div className="row">
                                    <div className="col-xs-6">
                                      <select id="ihf_schedshow_pref_time" name="prefTime" className="form-control">
                                        <option value="8:00 AM">8:00 AM</option>
                                        <option value="8:30 AM">8:30 AM</option>
                                        <option value="9:00 AM">9:00 AM</option>
                                        <option value="9:30 AM">9:30 AM</option>
                                        <option value="10:00 AM">10:00 AM</option>
                                        <option value="10:30 AM">10:30 AM</option>
                                        <option value="11:00 AM">11:00 AM</option>
                                        <option value="11:30 AM">11:30 AM</option>
                                        <option value="12:00 PM">12:00 PM</option>
                                        <option value="12:30 PM">12:30 PM</option>
                                        <option value="1:00 PM">1:00 PM</option>
                                        <option value="1:30 PM">1:30 PM</option>
                                        <option value="2:00 PM">2:00 PM</option>
                                        <option value="2:30 PM">2:30 PM</option>
                                        <option value="3:00 PM">3:00 PM</option>
                                        <option value="3:30 PM">3:30 PM</option>
                                        <option value="4:00 PM">4:00 PM</option>
                                        <option value="4:30 PM">4:30 PM</option>
                                        <option value="5:00 PM">5:00 PM</option>
                                        <option value="5:30 PM">5:30 PM</option>
                                        <option value="6:00 PM">6:00 PM</option>
                                        <option value="6:30 PM">6:30 PM</option>
                                        <option value="7:00 PM">7:00 PM</option>
                                        <option value="7:30 PM">7:30 PM</option>
                                        <option value="8:00 PM">8:00 PM</option>
                                        <option value="8:30 PM">8:30 PM</option>
                                      </select>
                                    </div>
                                    <div className="col-xs-6">
                                      <input id="ihf_schedshow_pref_date" name="prefDate" className="date form-control default-cursor" required="required" readOnly="readOnly" type="text" value="" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="form-group">
                                  <label htmlFor="ihf_schedshow_alt_date"> Alternate Time and Date* </label>
                                  <div className="row">
                                    <div className="col-xs-6">
                                      <select id="ihf_schedshow_alt_time" name="altTime" className="form-control">
                                        <option value="8:00 AM">8:00 AM</option>
                                        <option value="8:30 AM">8:30 AM</option>
                                        <option value="9:00 AM">9:00 AM</option>
                                        <option value="9:30 AM">9:30 AM</option>
                                        <option value="10:00 AM">10:00 AM</option>
                                        <option value="10:30 AM">10:30 AM</option>
                                        <option value="11:00 AM">11:00 AM</option>
                                        <option value="11:30 AM">11:30 AM</option>
                                        <option value="12:00 PM">12:00 PM</option>
                                        <option value="12:30 PM">12:30 PM</option>
                                        <option value="1:00 PM">1:00 PM</option>
                                        <option value="1:30 PM">1:30 PM</option>
                                        <option value="2:00 PM">2:00 PM</option>
                                        <option value="2:30 PM">2:30 PM</option>
                                        <option value="3:00 PM">3:00 PM</option>
                                        <option value="3:30 PM">3:30 PM</option>
                                        <option value="4:00 PM">4:00 PM</option>
                                        <option value="4:30 PM">4:30 PM</option>
                                        <option value="5:00 PM">5:00 PM</option>
                                        <option value="5:30 PM">5:30 PM</option>
                                        <option value="6:00 PM">6:00 PM</option>
                                        <option value="6:30 PM">6:30 PM</option>
                                        <option value="7:00 PM">7:00 PM</option>
                                        <option value="7:30 PM">7:30 PM</option>
                                        <option value="8:00 PM">8:00 PM</option>
                                        <option value="8:30 PM">8:30 PM</option>
                                      </select>
                                    </div>
                                    <div className="col-xs-6">
                                      <input id="ihf_schedshow_alt_date" name="altDate" className="date form-control default-cursor" required="required" readOnly="readOnly" type="text" value="" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-10">
                              <div className="col-xs-12">
                                <label htmlFor="ihf_schedshow_comments"> Message </label>
                                <textarea id="ihf_schedshow_comments" name="message" style={{height:'100px', width:'100%'}} className="form-control" rows="5"></textarea>
                              </div>
                            </div>
                            <div className="row mt-10">
                              <div className="col-xs-12 ihf-modal-form-captcha">
                                <div className="form-group">
                                  <div className="ihf-captcha">
                                    <div>
                                      <div className="g-recaptcha" data-sitekey="6LeGYU4UAAAAAPvNZspOUi2Q2R9exszBJdQurmoc"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-10">
                              <div className="col-xs-12 ihf-modal-form-disclaimer"> *Your name, phone number, and email address are required so that we may contact you to schedule an appointment. <br />
                                <br />By submitting this form with your telephone number you are consenting for Coldwell Banker Realty and authorized representatives to contact you even if your name is on the Federal "Do-not-call List."
                              </div>
                            </div>
                            <button type="submit" className="btn btn-primary mt-10 ihf-schedule-showing-submit">Send</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-link" data-dismiss="modal"> Close </button>
                  </div>
                </div>
              </div>
            </div>
            <div id="ihfMoreInfo" className="modal" aria-hidden="true" style={{display: 'none'}}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <div className="modal-title">More Info </div>
                    <button type="button" className="close" data-dismiss="modal"> × </button>
                  </div>
                  <div className="modal-body">
                    <div className="ihf-modal-more-info-replace" data-ihf-remote-submit="true">
                      <div className="row mt-10 hidden-xs">
                        <div className="col-xs-12">
                          <strong></strong>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <form id="ihf-more-info-request-form" className="form-inline" data-ihf-event="more-info-request-form-submit" action="https://serioestates.com/wp-admin/admin-ajax.php?action=ihf_more_info_request" method="GET">
                            <div className="JKGH00920" style={{position: 'absolute', top: '-2000px', left: '-2000px'}}>
                              <label> Message <textarea name="JKGH00920" placeholder="Enter your message" autoComplete="off"></textarea>
                              </label>
                            </div>
                            <input name="actionType" value="create" type="hidden" />
                            <input id="listingNumber" name="listingNumber" type="hidden" value="24386575" />
                            <input id="boardId" name="boardId" type="hidden" value="306" />
                            <input id="clientPropertyId" name="clientPropertyId" type="hidden" value="" />
                            <input id="sold" name="sold" type="hidden" value="false" />
                            <input type="hidden" name="contactType" value="moreInfo" />
                            <div className="row mt-10">
                              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="form-group">
                                  <label htmlFor="ihf_inforeq_firstname"> First Name* </label>
                                  <input id="ihf_inforeq_firstname" name="firstName" className="form-control" required="required" type="text" value="" />
                                </div>
                              </div>
                              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="form-group">
                                  <label htmlFor="ihf_inforeq_lastName"> Last Name* </label>
                                  <input id="ihf_inforeq_lastName" name="lastName" className="form-control" required="required" type="text" value="" />
                                </div>
                              </div>
                            </div>
                            <div className="row mt-10">
                              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="form-group">
                                  <label htmlFor="ihf_inforeq_email"> Email* </label>
                                  <input id="ihf_inforeq_email" name="newEmail" type="email" className="form-control" required="required" value="" />
                                </div>
                              </div>
                              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="form-group">
                                  <label htmlFor="ihf_inforeq_phone"> Phone </label>
                                  <input id="ihf_inforeq_phone" name="phone" type="tel" className="form-control" value="" autoComplete="off" />
                                </div>
                              </div>
                            </div>
                            <div className="row mt-10">
                              <div className="col-xs-12">
                                <label htmlFor="ihf_schedshow_comments"> Message </label>
                                <textarea id="ihf_schedshow_comments" name="message" style={{height:'100px', width:'100%'}} className="form-control" rows="5"></textarea>
                              </div>
                            </div>
                            <div className="row mt-10">
                              <div className="col-xs-12 ihf-modal-form-captcha">
                                <div className="form-group">
                                  <div className="ihf-captcha">
                                    <div>
                                      <div className="g-recaptcha" data-sitekey="6LeGYU4UAAAAAPvNZspOUi2Q2R9exszBJdQurmoc"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-10">
                              <div className="col-xs-12 ihf-modal-form-disclaimer"> *Required fields. Your personal information is strictly confidential and will not be shared with any outside organizations. <br />
                                <br />By submitting this form with your telephone number you are consenting for Coldwell Banker Realty and authorized representatives to contact you even if your name is on the Federal "Do-not-call List."
                              </div>
                            </div>
                            <button type="submit" className="btn btn-primary mt-10 ihf-more-info-submit">Send</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-link" data-dismiss="modal"> Close </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> {/* <script data-cfasync="false" src="js/email-decode.min.js"></script>
        <script type="text/javascript">
          jQuery(window).on('load', function() {
            jQuery('#ihf-main-container').appendTo(jQuery('body'));
            jQuery('#ihfMoreInfo').css('z-index', '9999');
            jQuery('.ld-info-cta').click(function() {
              jQuery('#popup-body').css('display', 'block');
            });
          });
        </script> */} <div className="clearfix"></div>
      </div> {/* <Button variant="primary" onClick={handleShow}> Launch demo modal </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}> Close </Button>
          <Button variant="primary" onClick={handleClose}> Save Changes </Button>
        </Modal.Footer>
      </Modal> */}
    </main>undefined
  </>
  )
}

export default SingleProperty