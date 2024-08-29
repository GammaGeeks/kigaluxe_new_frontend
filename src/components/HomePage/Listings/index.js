import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllProperties } from '../../../redux/actions/properties'
// import { Link } from 'react-router-dom'

function Listings() {
    
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllProperties(1, 12))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const properties = useSelector(state => state.properties)

  // eslint-disable-next-line no-unused-vars
  const { listOfProperties, Next, Prev, getProperties } = properties
  return (
    <section id="featured-listings" className="aios-scroll-section" data-aios-scroll-title="Featured Listings">
            <div className="textwidget custom-html-widget">
                <div className="fl-container active">
                    <div className="global-accent-bar attachment-fixed">
                        <canvas width="70" height="936" className="lazyload" data-bgset="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/accent-gradient.jpg"></canvas>
                    </div>
                    <div className="global-accent-letter inline">
                        <span>L</span>
                    </div>
                    <div className="fl-bg attachment-fixed">
                        <canvas width="1600" height="963" className="lazyload" data-bgset="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/ld-bg.jpg"></canvas>
                    </div>
                    <div className="custom-container">
                        <div className="fl-main">
                            <div className="fl-title-holder inline">
                                <div className="global-title">
                                    <h2>
                                        <small>
                                            <em className="global-logo-icon">
                                                <i className="global-outline"></i>
                                            </em>Featured </small>
                                        <span>Listings</span>
                                    </h2>
                                </div>
                                <div className="fl-btn-controls">
                                    <button className="fl-prev ai-icon-prev" aria-label="Prev">
                                        <i className="ai-outline"></i>
                                    </button>
                                    <div className="fl-more-btn">
                                        <a href="/featured-listings/" className="global-btn">See More</a>
                                    </div>
                                    <button className="fl-next ai-icon-next" aria-label="Next">
                                        <i className="ai-outline"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="fl-slide-holder">
                                <div className="global-accent-letter alter">
                                    <span>L</span>
                                </div>
                                <div className="fl-title-holder alter">
                                    <div className="global-title">
                                        <h2>
                                            <small>
                                                <em className="global-logo-icon">
                                                    <i className="global-outline"></i>
                                                </em>Latest </small>
                                            <span>Listings</span>
                                        </h2>
                                    </div>
                                    <div className="fl-more-btn">
                                        <a href="/listings" className="global-btn">See More</a>
                                    </div>
                                </div>
                                <div className="fl-slide">
                                    {
                                        properties && listOfProperties ? listOfProperties.map((item, index) => {
                                            return (
                                                <div key={index} className="fl-item">
                                                    <a href={item.url}>
                                                        <div className="fl-img site-img">
                                                            <canvas width="488" height="484"></canvas>
                                                            <img className="lazyload" src={item.imageUrl[0]} alt={item.title}/>
                                                        </div>
                                                        <div className="fl-price">
                                                            <span>RWF {item.price}</span>
                                                        </div>
                                                        <div className="fl-details">
                                                            <span>{item.title} <br/> {item.location} </span>
                                                        </div>
                                                    </a>
                                                </div>
                                            )
                                        }) : ''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Listings