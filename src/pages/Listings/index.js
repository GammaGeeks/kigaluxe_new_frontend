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
import { fetchAllProperties, searchProperties } from '../../redux/actions/properties'
import { fetchAllCategories } from '../../redux/actions/categories'
import { useNavigate } from 'react-router-dom'
import PriceRangeSlider from '../../components/Listings/PriceRangeSlider'
import SizeRangeSlider from '../../components/Listings/SizeRangeSlider'

function Listings() {
  const [formData, setFormData] = useState({
    location: '',
    propertyType: '',
    priceRange: {
      min: 0,
      max: 1000000
    },
    propertySize: {
      min: 0,
      max: 10000
    },
    propertyCategories: [],
    listingType: [],
  });

  const buildQuery = (formData) => {
    const queryParts = [];
  
    if (formData.location) {
      queryParts.push(`location=${encodeURIComponent(formData.location)}`);
    }
  
    if (formData.propertyType) {
      queryParts.push(`property_type=${encodeURIComponent(formData.propertyType)}`);
    }
  
    if (formData.propertySize && (formData.propertySize.min !== 0 || formData.propertySize.max !== 10000)) {
      queryParts.push(`property_size=[${formData.propertySize.min},${formData.propertySize.max}]`);
    }
  
    if (formData.priceRange && (formData.priceRange.min !== 0 || formData.priceRange.max !== 2000000000)) {
      queryParts.push(`price=[${formData.priceRange.min},${formData.priceRange.max}]`);
    }
  
    if (formData.propertyCategories && formData.propertyCategories.length > 0) {
      queryParts.push(`property_categories='${formData.propertyCategories.join(',')}'`);
    }
  
    if (formData.listingType && formData.listingType.length > 0) {
      queryParts.push(`listing_type=${formData.listingType.join(',')}`);
    }
  
    return queryParts.join('&');
  };
  
  const query = buildQuery(formData);

  const handleSubmit = () => {
    dispatch(searchProperties(query))
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData(prevState => {
      if (type === 'checkbox') {
        if (name === 'propertyCategories' || name === 'listingType') {
          return {
            ...prevState,
            [name]: checked 
              ? [...prevState[name], value]
              : prevState[name].filter(item => item !== value)
          };
        }
      } else {
        return {
          ...prevState,
          [name]: value
        };
      }
    });
  };

  const handleRangeChange = (name, values) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: {
        min: values.min,
        max: values.max
      }
    }));
  };

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
                        value={formData.location} 
                        onChange={handleInputChange} 
                        placeholder='City, Province'
                      />
                    </div>
                    <div className="col-md-3">
                      <label style={{fontSize: '16px', marginBottom: '0.35rem'}} htmlFor="inputType" className="form-label">Property Type</label>
                      <select
                        id="inputType"
                        className="form-select"
                        name='propertyType'
                        value={formData.propertyType} 
                        onChange={handleInputChange}
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
                    </div>
                    <div className="col-md-3">
                      <label style={{fontSize: '16px', marginBottom: '1.2rem'}} htmlFor="inputEmail4" className="form-label">Price Range</label>
                      <PriceRangeSlider
                        onChange={(newValue) => handleRangeChange('priceRange', newValue)}
                        value={formData.priceRange}
                      />
                    </div>
                    <div className="col-md-3">
                      <label style={{fontSize: '16px', marginBottom: '1.2rem'}} htmlFor="inputPassword4" className="form-label">Property Size</label>
                      <SizeRangeSlider 
                       onChange={(newValue) => handleRangeChange('propertySize', newValue)}
                       value={formData.propertySize}
                      />
                    </div>
                    <h2 className='fs-6'>
                      <span style={{fontSize: '0.1em !important'}}>Would you like more filters </span>
                    </h2>
                    {/* <div className="col-12">
                      <label style={{fontSize: '16px'}} htmlFor="inputAddress" className="form-label">Address</label>
                      <input style={{fontSize: '16px'}}  type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                    <div className="col-12">
                      <label style={{fontSize: '16px'}} htmlFor="inputAddress2" className="form-label">Address 2</label>
                      <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                    </div> */}
                    <div className="col-md-4">
                      {/* <label style={{fontSize: '16px'}} htmlFor="inputCity" className="form-label">City</label>
                      <input type="text" className="form-control" id="inputCity"/> */}
                      <div className="d-flex flex-wrap gap-2">
                        <div style={{fontSize: '16px'}} className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                            name="propertyCategories" 
                            value="residentialHouse" 
                            checked={formData.propertyCategories.includes('residentialHouse')} 
                            onChange={handleInputChange} 
                          />
                          <label style={{paddingTop: '3px'}} className="form-check-label" htmlFor="gridCheck">
                            Residential House
                          </label>
                        </div>
                        <div style={{fontSize: '16px'}} className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                            name="propertyCategories" 
                            value="commercial" 
                            checked={formData.propertyCategories.includes('commercial')} 
                            onChange={handleInputChange} 
                          />
                          <label style={{paddingTop: '3px'}} className="form-check-label" htmlFor="gridCheck">
                            Commercial
                          </label>
                        </div>
                        <div style={{fontSize: '16px'}} className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                            name="propertyCategories" 
                            value="office" 
                            checked={formData.propertyCategories.includes('office')} 
                            onChange={handleInputChange} 
                          />
                          <label style={{paddingTop: '3px'}} className="form-check-label" htmlFor="gridCheck">
                            Office
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-wrap gap-2">
                        <div style={{fontSize: '16px'}} className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                            name="propertyCategories" 
                            value="cottage" 
                            checked={formData.propertyCategories.includes('cottage')} 
                            onChange={handleInputChange} 
                          />
                          <label style={{paddingTop: '3px'}} className="form-check-label" htmlFor="gridCheck">
                            Cottage
                          </label>
                        </div>
                        <div style={{fontSize: '16px'}} className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                            name="propertyCategories" 
                            value="pentHouse" 
                            checked={formData.propertyCategories.includes('pentHouse')} 
                            onChange={handleInputChange} 
                          />
                          <label style={{paddingTop: '3px'}} className="form-check-label" htmlFor="gridCheck">
                            Pent House
                          </label>
                        </div>
                        <div style={{fontSize: '16px'}} className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                            name="propertyCategories" 
                            value="land" 
                            checked={formData.propertyCategories.includes('land')} 
                            onChange={handleInputChange} 
                          />
                          <label style={{paddingTop: '3px'}} className="form-check-label" htmlFor="gridCheck">
                            Land
                          </label>
                        </div>
                        <div style={{fontSize: '16px'}} className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                            name="propertyCategories" 
                            value="appartment" 
                            checked={formData.propertyCategories.includes('appartment')} 
                            onChange={handleInputChange} 
                          />
                          <label style={{paddingTop: '3px'}} className="form-check-label" htmlFor="gridCheck">
                            Appartment
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className="d-flex flex-wrap gap-2">
                        <div style={{fontSize: '16px'}} className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                            name="listingType" 
                            value="forRent" 
                            checked={formData.listingType.includes('forRent')} 
                            onChange={handleInputChange} 
                          />
                          <label style={{paddingTop: '3px'}} className="form-check-label" htmlFor="gridCheck">
                            For Rent
                          </label>
                        </div>
                        <div style={{fontSize: '16px'}} className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                            name="listingType" 
                            value="forSale" 
                            checked={formData.listingType.includes('forSale')} 
                            onChange={handleInputChange} 
                          />
                          <label style={{paddingTop: '3px'}} className="form-check-label" htmlFor="gridCheck">
                            For Sale
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <button
                        type="button"
                        className="btn btn-lg btn-block btn-primary btn-form-submit"
                        id="ihf-search-adv-submit"
                        style={{
                          backgroundColor: '#031B28dc',
                          borderColor: '#031B28dc',
                          color: 'white'
                        }}
                        onClick={handleSubmit}
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
                    }) : <div className="ip-fl-listing-pagination" style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: '30px'
                    }}>
                      <div className="ip-ld-hero-controls">
                        <h2 className='fs-4'>No properties found!!!</h2>
                      </div>
                    </div>
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