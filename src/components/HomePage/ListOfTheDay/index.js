/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTransition, useSpring, animated } from '@react-spring/web'
import { fetchPropertyAction } from '../../../redux/actions/property'
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

function ListingOfTheDay() {
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPropertyAction(1))
  }, [dispatch])

  const data = useSelector(state => state.property)

  const { loading, property, getProperty, message } = data

  const imgs = property && property.urls ? property.urls : []

  

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex((active) => (active + 1) % imgs.length)
  //   }, 5000)

  //   return () => clearInterval(interval)
  // }, [])

  const transitions = useTransition([activeIndex], {
    from: { opacity: 0, transform: 'scale(0)', display: 'none' },
    enter: { opacity: 1, transform: 'scale(1)', display: 'block' },
    leave: { opacity: 0, transform: 'scale(0)', display: 'none' },
  })

  const [springs, api] = useSpring(() => ({
    from: { opacity: 1 },
    config: { duration: 1000 }
  }))

  const handleClick = (index) => {
    setActiveIndex(index)
  }

  const handleMouseEnter = () => {
    api.start({
      from: { opacity: 1 },
      to: { opacity: .65 }
    })
  }

  const handleMouseLeave = () => {
    api.start({
      from: { opacity: .65 },
      to: { opacity: 1 }
    })
  }
  

  return (
    <section id="listing-of-the-day" className="aios-scroll-section" data-aios-scroll-title="Listing of the Day">
            <div className="textwidget custom-html-widget">
                <div className="ld-container">
                    <div className="global-accent-bar attachment-fixed">
                        <canvas width="70" height="768" className="lazyload" data-bgset="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/accent-gradient.jpg"></canvas>
                    </div>
                    <div className="global-accent-letter">
                        <span>L</span>
                    </div>
                    <div className="ld-bg attachment-fixed">
                        <canvas width="1600" height="1165" className="lazyload" data-bgset="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/ld-bg.jpg"></canvas>
                    </div>
                    <div className="custom-container">
                        <div className="ld-main">
                            <div className="global-title is-centered" data-aos-once="true" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                                <h2>
                                    <em className="global-logo-icon">
                                        <i className="global-outline"></i>
                                    </em>
                                    <span>Listing Of the Day</span>
                                </h2>
                            </div>
                            <div className="ld-list">
                                <div className="ld-list-item" id="listing-24404087">
                                    <div className="ld-list-title">
                                        <span>{property.title} - {property.location}</span>
                                    </div>
                                    <div className="ld-list-details">
                                        <div className="ld-list-info">
                                            <span>
                                                <em className="ai-icon-bed-w"></em>{property.bedrooms} <i>Beds</i>
                                            </span>
                                            <span>
                                                <em className="ai-icon-bath-w"></em>{property.bathrooms} <i>Baths</i>
                                            </span>
                                            <span>
                                                <em className="ai-icon-sqft-w"></em>{property.property_size} <i>Sq.m.</i>
                                            </span>
                                            {/* <span>
                                                <em className="ai-icon-acres"></em>1.79 <i>Acres</i>
                                            </span> */}
                                        </div>
                                        <div className="ld-list-btn">
                                            <Link to='/listings' className="global-btn">See More</Link>
                                        </div>
                                    </div>
                                    <Row className="ld-grid-row" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                        {
                                          transitions((styles, item) => (
                                            <animated.div style={{...styles}}>
                                              <Col xs={12} sm={6} md='8'>
                                              <Link className="ld-grid-main">
                                                <div style={{
                                                  width: '750px',
                                                  height: '652px',
                                                  position: 'relative',
                                                  overflow: 'hidden'
                                                }}>
                                                  <canvas style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    width: '750px',
                                                    height: '652px',
                                                  }} width="750" height="652"></canvas>
                                                  <animated.img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  style={{position: 'absolute', borderRadius: '20px', ...springs}} className="lazyload main-img" src={imgs && imgs[item]} alt="Listing Image" width="750" height="652"/>
                                                </div>
                                                <div className="ld-grid-price">
                                                    <span>RWF {property.price}</span>
                                                </div>
                                              </Link>
                                              </Col>
                                            </animated.div>
                                          ))
                                        }
                                        {/* <div className="ld-grid-col">
                                            <Link className="ld-grid-main">
                                              {
                                                transitions((styles, item) => (
                                                  <animated.div style={styles}>
                                                    <canvas width="750" height="652"></canvas>
                                                    <img className="lazyload" src={imgs && imgs[item]} alt="Listing Image" width="750" height="652"/>
                                                  </animated.div>
                                                ))
                                              }
                                                <div className="ld-grid-price">
                                                    <span>RWF {property.price}</span>
                                                </div>
                                            </Link>
                                        </div> */}
                                        <Col xs={12} sm={6} md='4' className="ld-ajax-images" data-url="https://serioestates.com/homes-for-sale-details/3268-SERRA-ROAD-MALIBU-CA-90265/24404087/306/">
                                            {
                                              property && property.urls.map((img, index) => {
                                                console.log('Image: ' + img);
                                                console.log('Index: ' + index);
                                                return (
                                                <a key={img || index} className="ld-grid-thumb">
                                                    <div onClick={() => handleClick(index)} className="ld-grid-img site-img">
                                                        <canvas width="360" height="197"></canvas>
                                                        <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src={img} alt="Listing Image" width="360" height="197"/>
                                                    </div>
                                                </a>
                                              )})
                                            }
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default ListingOfTheDay