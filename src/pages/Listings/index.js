/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React, { useEffect, useRef } from 'react'

// import slideImgOne from '../../assets/images/slide-img-1.jpg'
// import bannerWithBorderA from '../../assets/images/banner-with-border-a.png'
import flBg from '../../assets/images/fl-bg.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllProperties } from '../../redux/actions/properties'
import { useNavigate } from 'react-router-dom'

function Listings() {

  const topOfPageRef = useRef(null)
  useEffect(() => {
    if (topOfPageRef.current) {
      topOfPageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    }
  }, [])

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const properties = useSelector(state => state.properties)
  useEffect(() => {
    dispatch(fetchAllProperties(1, 12))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  })

  // eslint-disable-next-line no-unused-vars
  const { listOfProperties = [], next, currentPage, getProperties } = properties || {}

  
  const nextPagination = () => {
    const nextPage = next
    console.log("Next Page: " + nextPage);
    if(nextPage) dispatch(fetchAllProperties(nextPage % listOfProperties.length, 12));
  };

  const prevPagination = (e) => {
    const prevPage = currentPage - 1;
    console.log("Prev Page: " + prevPage);
    if(prevPage) dispatch(fetchAllProperties(prevPage % listOfProperties.length, 12))
  };


  return (
    <main>
      <div ref={topOfPageRef}></div>
  {/* <!-- ip banner goes here --> */}
  {/* <div className="textwidget custom-html-widget">
    <div className="ip-banner" data-type="page" data-id="54">
      <canvas width="1600" height="350" style={{ backgroundImage: `url(${slideImgOne})` }}></canvas>
    </div>
  </div> */}
  {/* <!-- ip banner goes here --> */}
  <div id="inner-page-wrapper">
    <div style={{padding: 0, margin: 0}} className="container-fluid">
      <div id="ip-featured-listings">
        <div className="ip-fl-container">
          {/* <div className="ip-fl-section">
            <div id="ip-comm-banner" className="custom-ip-banner aios-scroll-section">
              <canvas width="1530" height="581" style={{ backgroundImage: `url(${bannerWithBorderA})` }}></canvas>
              <div className="custom-ip-tagline">
                <div className="container">Respected. Loyal. Relentless. Discreet.</div>
              </div>
            </div>
          </div> */}
          <div className="ip-fl-section">
            <div id="ip-comm-content" className="ip-fl-listing-container aios-scroll-section">
              <div className="ip-fl-bg attachment-fixed">
                <canvas width="1600" height="1068" style={{backgroundImage: `url(${flBg})`}}></canvas>
              </div>
              <div className="custom-breadcrumbs">
                <div className="container">
                  <p id="breadcrumbs">
                    <span>
                      <span property="itemListElement" typeof="ListItem">
                        <a property="item" typeof="WebPage" href="https://serioestates.com/">
                          <span property="name">Home</span>
                        </a>
                        <meta property="position" content="1" />
                      </span> » <span className="breadcrumb_last" property="itemListElement" typeof="ListItem">
                        <span property="name">Featured Listings</span>
                        <meta property="position" content="2" />
                      </span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="ip-fl-listing-main">
                <div className="custom-container">
                  <div style={{opacity: 1, marginTop: '-30px'}} className="global-title is-centered">
                    <h2>
                      <small>
                        <em className="global-logo-icon">
                          <i className="global-outline"></i>
                        </em>Latest </small>
                      <span>Listings </span>
                    </h2>
                  </div>
                  <div className="ip-fl-listing-caption">
                    <p>These are the finest homes currently available on the market. Contact us to schedule a private showing.</p>
                  </div>
                  <div className="ip-fl-listing-row">
                  {
                    (!properties || properties.listOfProperties.length === 0) || listOfProperties ? listOfProperties.map((item, index) => {
                      return (
                        <div key={index} className="ip-fl-listing-item">
                          <a href="#">
                            <div className="ip-fl-listing-img-holder">
                              <div className="ip-fl-listing-img site-img">
                                <canvas width="488" height="484"></canvas>
                                <img src={item && item.imageUrl && item.imageUrl[0]} alt="Featured Listings" width="488" height="484" id="24386575" />
                                {/* <!-- <img src="https://imageproxy.agentimage.com/488x484/https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1073249848/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcxNjA3MDMyOQ/ko-C9oWmTFpGo0aAiWal2LYmZoOdVEe01d3lW5x1XV0" alt="Featured Listings" width="488" height="484"> --> */}
                              </div>
                              <div className="mls-logo-overlay">
                                <img src={require('../../assets/logo/k_87x87.png')} alt="Featured Listings" width="170" height="101" />
                              </div>
                              <div className="ip-fl-listing-hover">
                                <div className="ip-fl-listing-price">
                                  <span>RWF {item.price}</span>
                                </div>
                                <div className="ip-fl-listing-hover-address">
                                  <span>{item.title} <br /> {item.location} </span>
                                </div>
                                <div className="ip-fl-listing-info">
                                  <span>{item.bedrooms} Beds <em className="ai-icon-bed"></em>
                                  </span>
                                  <span>
                                    <span>{item.bathrooms} Baths <em className="ai-icon-bath"></em>
                                    </span>
                                    <span> {item.property_size} Sq.m. <em className="ai-icon-sqft"></em>
                                    </span>
                                  </span>
                                </div>
                                <div className="ip-fl-listing-hover-btn">
                                  <span className="global-btn" onClick={() => navigate(`/property/${item.id}`)}>Read More</span>
                                </div>
                              </div>
                            </div>
                            <div className="ip-fl-listing-address">
                              <span>{item.title} <br /> {item.location} </span>
                            </div>
                          </a>
                        </div>
                      )
                    }) : ''
                  }
                  <div className="ip-fl-listing-pagination" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '30px'
                  }}>
                    <div className="ip-ld-hero-controls">
                      <button onClick={prevPagination} className="ip-ld-hero-prev" aria-label="Prev"><em className="ai-icon-prev"></em></button>
                      <button onClick={nextPagination} className="ip-ld-hero-next" aria-label="Next"><em className="ai-icon-next"></em></button>
                    </div>
                  </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><div className="clearfix"></div>
    </div>
</main>
  )
}

export default Listings