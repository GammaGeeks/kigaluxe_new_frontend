/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React, { useEffect, useRef, useState } from 'react'
import '../../styles/custom-checkboxes.css';
// import slideImgOne from '../../assets/images/slide-img-1.jpg'
import bannerWithBorderA from '../../assets/images/banner-with-border-a.png'
import flBg from '../../assets/images/fl-bg.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllProperties } from '../../redux/actions/properties'
import { fetchAllCategories } from '../../redux/actions/categories'
import { useNavigate } from 'react-router-dom'
import PriceRangeSlider from '../../components/Listings/PriceRangeSlider'
import SizeRangeSlider from '../../components/Listings/SizeRangeSlider'

function Listings() {
  const [page, setPage] = useState(1);
  const topOfPageRef = useRef(null)
  useEffect(() => {
    if (topOfPageRef.current) {
      topOfPageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    }
  }, [])

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const properties = useSelector(state => state.properties)
  const categories = useSelector(state => state.categories)

  useEffect(() => {
    dispatch(fetchAllProperties(1, 6))
    dispatch(fetchAllCategories())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // eslint-disable-next-line no-unused-vars
  const { listOfProperties = [], next, currentPage, getProperties = {} } = properties || {}
  const { loading } = getProperties
  
  // eslint-disable-next-line no-unused-vars
  const { listOfCategories = [], getCategories = {} } = categories || {}

  const nextPagination = () => {
    const nextPage = next
    console.log("Next Page: " + nextPage);
    if(nextPage) dispatch(fetchAllProperties(nextPage % listOfProperties.length, 6));
    if (topOfPageRef.current) {
      topOfPageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    }
  };

  const prevPagination = (e) => {
    const prevPage = currentPage - 1;
    console.log("Prev Page: " + prevPage);
    if(prevPage) dispatch(fetchAllProperties(prevPage % listOfProperties.length, 6))
    if (topOfPageRef.current) {
      topOfPageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    }
  };


  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight
    ) {
      if (next && !loading) {
        setPage(prevPage => prevPage + 1);
        dispatch(fetchAllProperties(page + 1, 6, true));
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [next, loading]);


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
            
          </div> */}
          <div className="ip-fl-section">
            {/* <div id="ip-comm-banner" className="custom-ip-banner aios-scroll-section">
              <canvas width="1530" height="581"></canvas>
              <div style={{marginTop: 400}} className="custom-ip-tagline">
                <div className="container">
                  <form className="row g-3">
                    <div className="col-md-6">
                      <label style={{fontSize: '16px'}} for="inputEmail4" className="form-label">Email</label>
                      <input type="email" className="form-control" id="inputEmail4"/>
                    </div>
                    <div className="col-md-6">
                      <label style={{fontSize: '16px'}} for="inputPassword4" className="form-label">Password</label>
                      <input type="password" className="form-control" id="inputPassword4"/>
                    </div>
                    <div className="col-12">
                      <label style={{fontSize: '16px'}} for="inputAddress" className="form-label">Address</label>
                      <input style={{fontSize: '16px'}}  type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                    <div className="col-12">
                      <label style={{fontSize: '16px'}} for="inputAddress2" className="form-label">Address 2</label>
                      <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                    </div>
                    <div className="col-md-6">
                      <label style={{fontSize: '16px'}} for="inputCity" className="form-label">City</label>
                      <input type="text" className="form-control" id="inputCity"/>
                    </div>
                    <div className="col-md-4">
                      <label for="inputState" className="form-label">State</label>
                      <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="col-md-2">
                      <label style={{fontSize: '16px'}} for="inputZip" className="form-label">Zip</label>
                      <input type="text" className="form-control" id="inputZip"/>
                    </div>
                    <div className="col-12">
                      <div style={{fontSize: '16px'}} className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                        <label className="form-check-label" for="gridCheck">
                          Check me out
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                  </form>
                </div>
              </div>
            </div> */}
            <div id="ip-comm-content" className="ip-fl-listing-container aios-scroll-section">
              <div className="ip-fl-bg attachment-fixed">
                <canvas width="1600" height="1068" style={{backgroundImage: `url(${flBg})`}}></canvas>
              </div>
              {/* <div className="custom-breadcrumbs">
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
              </div> */}
              <div className="ip-fl-listing-main">
                <div className="custom-container px-5">
                  <div style={{opacity: 1}} className="global-title is-centered">
                    {/* <h2 style={{fontSize: '0.2em !important'}}>
                      <span>Listings </span>
                    </h2> */}
                  </div>
                  <form className="row mt-5 g-3">
                    <h2 className='fs-4'>
                      <span>Advanced Search </span>
                    </h2>
                    <div className="col-md-3">
                      <label style={{fontSize: '16px'}} htmlFor="inputLocation" className="form-label">Location</label>
                      <input
                        style={{
                          border: 'none',
                          borderBottom: '1px solid #000',
                          borderRadius: '0',
                          padding: '0.375rem 0.75rem',
                          backgroundColor: '#dedede',
                          outline: 'none'
                        }}
                        type="text"
                        className="form-control"
                        id="inputLocation"
                        name='location'
                        placeholder='City, Province'
                      />
                    </div>
                    <div className="col-md-3">
                      <label style={{fontSize: '16px', marginBottom: '0.35rem'}} htmlFor="inputType" className="form-label">Property Type</label>
                      <select
                        id="inputType"
                        className="form-select"
                        style={{
                          border: 'none',
                          borderBottom: '1px solid #000',
                          borderRadius: '0',
                          padding: '0.375rem 0.75rem',
                          backgroundColor: '#dedede',
                          outline: 'none'
                        }}
                      >
                        <option selected>Choose...</option>
                        {
                          (!categories || categories.listOfCategories.length === 0) || listOfCategories ? listOfCategories.map((item, index) => (
                            <option key={index}>{item.name}</option>
                          )) : <option>...</option>
                        }
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label style={{fontSize: '16px', marginBottom: '1.2rem'}} for="inputEmail4" className="form-label">Price Range</label>
                      <PriceRangeSlider />
                    </div>
                    <div className="col-md-3">
                      <label style={{fontSize: '16px', marginBottom: '1.2rem'}} for="inputPassword4" className="form-label">Property Size</label>
                      <SizeRangeSlider />
                    </div>
                    <h2 className='fs-6'>
                      <span style={{fontSize: '0.1em !important'}}>Would you like more filters </span>
                    </h2>
                    {/* <div className="col-12">
                      <label style={{fontSize: '16px'}} for="inputAddress" className="form-label">Address</label>
                      <input style={{fontSize: '16px'}}  type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                    <div className="col-12">
                      <label style={{fontSize: '16px'}} for="inputAddress2" className="form-label">Address 2</label>
                      <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                    </div> */}
                    <div className="col-md-4">
                      {/* <label style={{fontSize: '16px'}} for="inputCity" className="form-label">City</label>
                      <input type="text" className="form-control" id="inputCity"/> */}
                      <div className="d-flex flex-wrap gap-2">
                        <div style={{fontSize: '16px'}} className="form-check">
                          <input className="form-check-input" type="checkbox" id="gridCheck"/>
                          <label style={{paddingTop: '3px'}} className="form-check-label" for="gridCheck">
                            Residential House
                          </label>
                        </div>
                        <div style={{fontSize: '16px'}} className="form-check">
                          <input className="form-check-input" type="checkbox" id="gridCheck"/>
                          <label style={{paddingTop: '3px'}} className="form-check-label" for="gridCheck">
                            Commercial
                          </label>
                        </div>
                        <div style={{fontSize: '16px'}} className="form-check">
                          <input className="form-check-input" type="checkbox" id="gridCheck"/>
                          <label style={{paddingTop: '3px'}} className="form-check-label" for="gridCheck">
                            Office
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-wrap gap-2">
                        <div style={{fontSize: '16px'}} className="form-check">
                          <input className="form-check-input" type="checkbox" id="gridCheck"/>
                          <label style={{paddingTop: '3px'}} className="form-check-label" for="gridCheck">
                            Cottage
                          </label>
                        </div>
                        <div style={{fontSize: '16px'}} className="form-check">
                          <input className="form-check-input" type="checkbox" id="gridCheck"/>
                          <label style={{paddingTop: '3px'}} className="form-check-label" for="gridCheck">
                            Pent House
                          </label>
                        </div>
                        <div style={{fontSize: '16px'}} className="form-check">
                          <input className="form-check-input" type="checkbox" id="gridCheck"/>
                          <label style={{paddingTop: '3px'}} className="form-check-label" for="gridCheck">
                            Land
                          </label>
                        </div>
                        <div style={{fontSize: '16px'}} className="form-check">
                          <input className="form-check-input" type="checkbox" id="gridCheck"/>
                          <label style={{paddingTop: '3px'}} className="form-check-label" for="gridCheck">
                            Appartment
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className="d-flex flex-wrap gap-2">
                        <div style={{fontSize: '16px'}} className="form-check">
                          <input className="form-check-input" type="checkbox" id="gridCheck"/>
                          <label style={{paddingTop: '3px'}} className="form-check-label" for="gridCheck">
                            For Rent
                          </label>
                        </div>
                        <div style={{fontSize: '16px'}} className="form-check">
                          <input className="form-check-input" type="checkbox" id="gridCheck"/>
                          <label style={{paddingTop: '3px'}} className="form-check-label" for="gridCheck">
                            For Sale
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <button
                        type="submit"
                        className="btn btn-lg btn-block btn-primary btn-form-submit"
                        id="ihf-search-adv-submit"
                        style={{
                          backgroundColor: '#031B28dc',
                          borderColor: '#031B28dc',
                          color: 'white'
                        }}
                      > Search </button>
                    </div>
                  </form>
                </div>
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
                  {loading && <div className="ip-fl-listing-item">Loading more properties...</div>}
                  {/* <div className="ip-fl-listing-pagination" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '30px'
                  }}>
                    <div className="ip-ld-hero-controls">
                      <button onClick={prevPagination} className="ip-ld-hero-prev" aria-label="Prev"><em className="ai-icon-prev"></em></button>
                      <button onClick={nextPagination} className="ip-ld-hero-next" aria-label="Next"><em className="ai-icon-next"></em></button>
                    </div>
                  </div> */}
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