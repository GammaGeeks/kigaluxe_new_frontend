/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllPlaces } from '../../../redux/actions/places'

function Places() {
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
  return (
    <section id="area-of-expertise" className="aios-scroll-section" data-aios-scroll-title="Area of Expertise">
            <div className="textwidget custom-html-widget">
                <div className="aoe-container">
                    <div className="aoe-bg attachment-fixed">
                        <canvas width="1600" height="1077" className="lazyload" data-bgset={`${require('../../../assets/images/darkbluebackground.png')}`}></canvas>
                    </div>
                    <div className="global-accent-letter">
                        <span>K</span>
                    </div>
                    <div className="custom-container">
                        <div className="aoe-main">
                            <div className="global-title is-centered is-white" data-aos-once="true" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                                <h2>
                                    <em className="global-logo-icon">
                                        <i className="global-outline"></i>
                                        <span className="global-extra-line"></span>
                                    </em>
                                    <span>Areas of Expertise</span>
                                </h2>
                            </div>
                            <div className="aoe-list">
                            {
                                places && listOfPlaces ? listOfPlaces.map((item, index) => (
                                    <div key={index} className="aoe-item">
                                        <Link to={`/places/${item.id}`}>
                                            <div className="aoe-img site-img">
                                                <canvas width="360" height="277"></canvas>
                                                <img className="lazyload" src={item.url} alt="Areas of Expertise" width="360" height="277"/>
                                            </div>
                                            <div className="aoe-title">
                                                <span>
                                                    <em className="ai-icon-logo-sm"></em>{item.knownName} </span>
                                            </div>
                                            <div className="aoe-hover-img">
                                            <img className="lazyload" src={require('../../../assets/logo/k_294x296_2.png')} alt="Serio Group Logo" width="195" height="197"/>
                                            </div>
                                        </Link>
                                    </div>)) : ''
                            }
                                {/* <div className="aoe-item">
                                    <a href="https://serioestates.com/community/beverly-hills">
                                        <div className="aoe-img site-img">
                                            <canvas width="360" height="277"></canvas>
                                            <img className="lazyload"  src={require('../../../assets/nu/popular_places/rebero.jpg')} alt="Areas of Expertise" width="360" height="277"/>
                                        </div>
                                        <div className="aoe-title">
                                            <span>
                                                <em className="ai-icon-logo-sm"></em>Rebero </span>
                                        </div>
                                        <div className="aoe-hover-img">
                                        <img className="lazyload" src={require('../../../assets/logo/k_294x296_2.png')} alt="Serio Group Logo" width="195" height="197"/>
                                        </div>
                                    </a>
                                </div>
                                <div className="aoe-item">
                                    <a href="https://serioestates.com/community/beverly-hills-post-office/">
                                        <div className="aoe-img site-img">
                                            <canvas width="360" height="277"></canvas>
                                            <img className="lazyload" src={require('../../../assets/nu/popular_places/nyarutarama.jpg')} alt="Areas of Expertise" width="360" height="277"/>
                                        </div>
                                        <div className="aoe-title">
                                            <span>
                                                <em className="ai-icon-logo-sm"></em>Nyarutarama </span>
                                        </div>
                                        <div className="aoe-hover-img">
                                        <img className="lazyload" src={require('../../../assets/logo/k_294x296_2.png')} alt="Serio Group Logo" width="195" height="197"/>
                                        </div>
                                    </a>
                                </div>
                                <div className="aoe-item">
                                    <a href="https://serioestates.com/community/brentwood">
                                        <div className="aoe-img site-img">
                                            <canvas width="360" height="277"></canvas>
                                            <img className="lazyload"  src={require('../../../assets/nu/popular_places/gacuriro1.jpg')} alt="Areas of Expertise" width="360" height="277"/>
                                        </div>
                                        <div className="aoe-title">
                                            <span>
                                                <em className="ai-icon-logo-sm"></em>Gacuriro </span>
                                        </div>
                                        <div className="aoe-hover-img">
                                        <img className="lazyload" src={require('../../../assets/logo/k_294x296_2.png')} alt="Serio Group Logo" width="195" height="197"/>
                                        </div>
                                    </a>
                                </div>
                                <div className="aoe-item">
                                    <a href="https://serioestates.com/community/hollywood-hills">
                                        <div className="aoe-img site-img">
                                            <canvas width="360" height="277"></canvas>
                                            <img className="lazyload"  src={require('../../../assets/nu/popular_places/kacyiru1.jpg')} alt="Areas of Expertise" width="360" height="277"/>
                                        </div>
                                        <div className="aoe-title">
                                            <span>
                                                <em className="ai-icon-logo-sm"></em>Kacyiru </span>
                                        </div>
                                        <div className="aoe-hover-img">
                                        <img className="lazyload" src={require('../../../assets/logo/k_294x296_2.png')} alt="Serio Group Logo" width="195" height="197"/>
                                        </div>
                                    </a>
                                </div>
                                <div className="aoe-item">
                                    <a href="https://serioestates.com/community/holmby-hills">
                                        <div className="aoe-img site-img">
                                            <canvas width="360" height="277"></canvas>
                                            <img className="lazyload"  src={require('../../../assets/nu/popular_places/kibagabaga.jpg')} alt="Areas of Expertise" width="360" height="277"/>
                                        </div>
                                        <div className="aoe-title">
                                            <span>
                                                <em className="ai-icon-logo-sm"></em>Kibagabaga </span>
                                        </div>
                                        <div className="aoe-hover-img">
                                            <img className="lazyload" src={require('../../../assets/logo/k_294x296_2.png')} alt="Serio Group Logo" width="195" height="197"/>
                                        </div>
                                    </a>
                                </div> */}
                            </div>
                            <div className="aoe-more-btn" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                <Link to='/places' className="global-btn is-white">See More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Places