/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React, { useEffect, useRef } from 'react'

// import slideImgOne from '../../assets/images/slide-img-1.jpg'
// import bannerWithBorderA from '../../assets/images/banner-with-border-a.png'
// import flBg from '../../assets/images/fl-bg.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllPlaces } from '../../redux/actions/places'
import { Link, useNavigate } from 'react-router-dom'

function Places() {
  const topOfPageRef = useRef(null)
  useEffect(() => {
    if (topOfPageRef.current) {
      topOfPageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    }
  }, [])
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllPlaces(1, 12))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const places = useSelector(state => state.places)

  // eslint-disable-next-line no-unused-vars
  const { listOfPlaces, next, currentPage, getPlaces } = places

  
  const nextPagination = () => {
    const nextPage = next
    console.log("Next Page: " + nextPage);
    if(nextPage) dispatch(fetchAllPlaces(nextPage % listOfPlaces.length, 12));
  };

  const prevPagination = (e) => {
    const prevPage = currentPage - 1;
    console.log("Prev Page: " + prevPage);
    if(prevPage) dispatch(fetchAllPlaces(prevPage % listOfPlaces.length, 12))
  };


  return (
    <main>
      <div ref={topOfPageRef}></div>
      <h2 className="aios-starter-theme-hide-title">Main Content</h2>
      {/* <!-- ip banner goes here --> */}
      <div className="textwidget custom-html-widget">
        {/* <!--<div className="ip-banner" data-type="page" data-id="35"><canvas width="1600" height="350" style="background-image: url(https://serioestates.com/wp-content/uploads/2023/01/slide-img-1.jpg)"></canvas></div>
    --> */}
        {/* <div className="custom-ip-banner">
          <canvas width="1530" height="568" style={{backgroundImage: `url(images/banner-meet.jpg)`}}></canvas>
          <div className="custom-ip-tagline">
            <div className="container">Respected. Loyal. Relentless. Discreet.</div>
          </div>
        </div> */}
      </div>
      {/* <!-- ip banner goes here --> */}
      <div id="inner-page-wrapper">
        <div className="container">
          <div id="ip-communities">
            <div className="ip-comm-container">
              {/* <div className="ip-comm-section">
                <div id="ip-comm-banner" className="custom-ip-banner aios-scroll-section" data-aios-scroll-title="Banner">
                  <canvas width="1530" height="581" style={{backgroundImage: `url(images/banner-with-border-a.png)`}}></canvas>
                  <div className="custom-ip-tagline">
                    <div className="container">Respected. Loyal. Relentless. Discreet.</div>
                  </div>
                </div>
              </div> */}
              <div className="ip-comm-section">
                <div id="ip-comm-content" className="ip-comm-content-container aios-scroll-section" data-aios-scroll-title="Communities">
                  <div className="ip-comm-bg attachment-fixed">
                    <canvas width="1600" height="1068" style={{backgroundImage: `url('images/fl-bg.jpg')`}}></canvas>
                  </div>
                  <div className="custom-breadcrumbs">
                    <div className="container">
                      <p id="breadcrumbs">
                        <span>
                          <span property="itemListElement" typeof="ListItem">
                            <a property="item" typeof="WebPage" href="https://serioestates.com/">
                              <span property="name">Home</span>
                            </a>
                            <meta property="position" content="1"/>
                          </span> » <span className="breadcrumb_last" property="itemListElement" typeof="ListItem">
                            <span property="name">Areas of Expertise</span>
                            <meta property="position" content="2"/>
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="ip-comm-content-main">
                    <div className="custom-container">
                      <div className="global-title is-centered">
                        <h2>
                          <small>
                            <em className="global-logo-icon">
                              <i className="global-outline"></i>
                            </em>Areas of </small>
                          <span>Expertise</span>
                        </h2>
                      </div>
                      <div className="ip-comm-content-caption">
                        <p>Looking for a modern home in Kigali's upscale neighborhoods like Nyarutarama, a serene mid-century residence in Gacuriro, a luxurious villa in Kiyovu, or a charming, beachfront-inspired property by Lake Kivu? We’ve got you covered!</p>
                        <p>Whether you're looking to buy or sell, we’re here to expertly navigate the diverse range of communities and properties throughout Rwanda to help you find your dream home or effectively market your current one. Here are just a few of the areas we serve.</p>
                      </div>
                      <div className="ip-comm-content-row">
                        {/* <!--<div className="ip-comm-item" data-aos-once="true" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300"><a href="https://serioestates.com/community/bel-air/"><div className="ip-comm-img site-img"><canvas width="488" height="484"></canvas><img src="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/communities/comm-img-1.png" alt="Communities" width="488" height="484"></div><div className="ip-comm-title"><span><em className="ai-icon-logo"></em>Bel Air</span></div><div className="ip-comm-hover-title"><div className="ip-comm-hover-main-title"><span>Bel Air</span></div><div className="ip-comm-hover-btn"><span className="global-btn">Explore Area</span></div></div></a></div>--> */}
                        
                        {
                          places && listOfPlaces ? listOfPlaces.map((item, index) => {
                            return (
                              <div key={index} className="ip-comm-item comm-121">
                                <Link to={`/places/${item.id}`}>
                                  <div className="ip-comm-img site-img">
                                    <canvas width="488" height="484"></canvas>
                                    <img src={item.url} width="488" height="484"/>
                                  </div>
                                  <div className="ip-comm-title">
                                    <span>
                                      <em className="ai-icon-logo"></em>{item.knownName} </span>
                                  </div>
                                  <div className="ip-comm-hover-title">
                                    <div className="ip-comm-hover-main-title">
                                      <span>{item.knownName}</span>
                                    </div>
                                    <div className="ip-comm-hover-btn">
                                      <span className="global-btn">Explore Area</span>
                                    </div>
                                  </div>
                                </Link>
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
                      <div className="ip-comm-content-more-btn hidden">
                        <a className="global-btn" href="#">Load More</a>
                      </div>
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

export default Places