/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'

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
                                        <p>Welcome to Kigaluxe, your gateway to luxury real estate in the heart of Africa. Whether you're looking for a stunning residential property, a premium commercial space, or expansive land, Kigaluxe combines the vibrant allure of Kigali with the finest in upscale living. We are dedicated to offering exclusive properties that exemplify elegance, comfort, and modernity, ensuring that you experience the pinnacle of luxury in every transaction. Experience the Kigaluxe difference – where your real estate aspirations become reality. Contact us today to embark on a journey of exceptional service, unwavering commitment, and transformative results.</p>
                                    </div>
                                    <div className="welc-content-btn" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                        <Link to="/listings" className="global-btn">Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="welc-col">
                                <div className="welc-img-holder">
                                    <div className="welc-img" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                                        <img className="lazyload" src={require('../../../assets/images/welcomImg.png')} alt="Serio Group Photo" width="495" height="610" />
                                    </div>
                                    <div className="welc-img-accent-bg">
                                        <canvas width="542" height="872" className="lazyload" data-bgset={require('../../../assets/k_transparent1.png')}></canvas>
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
                                                </em>Why Choose Us </small>
                                            <span>KigaluXe</span>
                                        </h2>
                                    </div>
                                    <div className="welc-content" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                        <p><b>Free Property Visits:</b> Book in advance, and enjoy complimentary visits to your preferred properties, ensuring you make an informed decision. In Kigali we arrange free ride if the client finds it difficult to reach to the site.</p>
                                        <p><b>Direct Seller Interaction:</b> We connect you directly with property sellers, allowing for transparent and efficient negotiations without intermediaries.</p>
                                        <p><b>Exclusive Listings:</b> Gain access to some of the most sought-after luxury residential and commercial properties in Kigali and beyond.</p>
                                        <p><b>Personalized Service:</b> Our team provides tailored assistance, ensuring every client finds the perfect match for their real estate needs.</p>
                                        <p><b>Commitment to Quality:</b> Every property in our portfolio meets the highest standards of luxury, comfort, and modern living.</p>
                                    </div>
                                    <div className="welc-content-btn" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                        <Link to="/listings" className="global-btn">Read More</Link>
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