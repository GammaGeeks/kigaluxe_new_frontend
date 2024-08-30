/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

function Welcome() {
  return (
    <section id="welcome" className="aios-scroll-section" data-aios-scroll-title="Welcome">
            <div className="textwidget custom-html-widget">
                <div className="welc-container">
                    <div className="welc-bg attachment-fixed">
                        <canvas width="1600" height="780" className="lazyload" data-bgset={require('../../../assets/logo/welcomeBg.jpg')}></canvas>
                    </div>
                    <div className="welc-main">
                        <div className="welc-row">
                            <div className="welc-col">
                                <div className="welc-content-container is-left">
                                    <div className="global-title" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                        <h2>
                                            <small>
                                                <em className="global-logo-icon">
                                                    <i className="global-outline"></i>
                                                </em>Welcome to</small>
                                            <span>Kigaluxe</span>
                                        </h2>
                                    </div>
                                    <div className="welc-content">
                                        <p>It seems that from an early age, Waruka was destined to sell luxury real estate. As a young girl in Thailand, Waruka used to accompany her mother on real estate appointments, where she would listen intently to the negotiations. She was a quick study and loved everything about the process, and soon her mom had her negotiating deals on her own! Waruka Serio became a young entrepreneur starting her own business at the age of 14, all the while working with her mom in real estate. Waruka later immigrated to the United States, eventually meeting her future husband Ron Serio. She decided to parlay her 15 years of experience, with Ron’s own expertise to form the Serio Group, specializing in luxury real estate.</p>
                                    </div>
                                    <div className="welc-content-btn" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                        <a href="/meet-waruka-serio/" className="global-btn">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="welc-col">
                                <div className="welc-img-holder">
                                    <div className="welc-img" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                                        <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/team-photo.png" alt="Serio Group Photo" width="495" height="610" />
                                    </div>
                                    <div className="welc-img-accent-bg">
                                        <canvas width="542" height="872" className="lazyload" data-bgset="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/welc-accent-logo.png"></canvas>
                                    </div>
                                </div>
                            </div>
                            <div className="welc-col">
                                <div className="welc-content-container is-right">
                                    <div className="global-title" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                        <h2>
                                            <small>
                                                <em className="global-logo-icon">
                                                    <i className="global-outline"></i>
                                                </em>Your Gateway to </small>
                                            <span>Dream Homes</span>
                                        </h2>
                                    </div>
                                    <div className="welc-content" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                        <p>Over his highly successful 35 plus year career, Ron has developed a keen acumen for sales and marketing, and is particularly skilled at complex negotiations. For the past 20 years, Ron has been an avid real estate investor, parlaying this passion to create the Serio Group with his wife Waruka Serio. His enthusiasm and energy relating to all things real estate, along with his deep commitment to his clients, are just some of the reasons Ron Serio excels at developing long-term relationships with all those that he works with. Ron also excels at helping his clients build generational wealth, through the acquisition of real estate.</p>
                                    </div>
                                    <div className="welc-content-btn" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                        <a href="/meet-ron-serio/" className="global-btn">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Welcome