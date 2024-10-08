/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'


import logo1 from '../../../assets/logo/k_201x69.png'
import { Link } from 'react-router-dom'

function FixedHeader({setIsAsideActive, navbar}) {
  return (
<div id="fixed-header" className={navbar ? 'active' : ''}>
    <div style={{padding: '0 30px', margin: 0}} className="container-fluid">
        <div className="fixed-header-wrap">
            <div className="fixed-logo">
                <div className="textwidget custom-html-widget">
                    <Link to="/">
                        <img className="skip-lazyload" src={logo1} alt="Serio Group" width="201" height="69"/>
                    </Link>
                </div>
            </div>
            <div className="fixed-header-nav">
                <nav className="navigation">
                    <div className="menu-primary-menu-container">
                        <ul id="fixed-nav" className="fixed-nav">
                            <li id="menu-item-46" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-46">
                                <Link to='/listings' data-title="Featured Listings">Featured Listings</Link>
                                {/* <ul className="sub-menu">
                                    <li id="menu-item-116" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-116">
                                        <a href="https://serioestates.com/meet-ron-serio/" data-title="Meet Ron Serio">Meet Ron Serio</a>
                                    </li>
                                    <li id="menu-item-115" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-115">
                                        <a href="https://serioestates.com/meet-waruka-serio/" data-title="Meet Waruka Serio">Meet Waruka Serio</a>
                                    </li>
                                    <li id="menu-item-25888" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25888">
                                        <a href="https://serioestates.com/social-media/" data-title="Social Media Wall">Social Media Wall</a>
                                    </li>
                                    <li id="menu-item-207" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-207">
                                        <a href="/category/blog/" data-title="Blog">Blog</a>
                                    </li>
                                </ul> */}
                            </li>
                            <li id="menu-item-71" className="gradient-fix menu-item menu-item-type-post_type menu-item-object-page menu-item-71">
                                <Link to="/services" data-title="Featured Listings">Services</Link>
                            </li>
                            <li id="menu-item-233" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-233">
                                <Link to="/sell_property" data-title="Communities">Sell Your Property</Link>
                                {/* <ul className="sub-menu">
                                    <li id="menu-item-1194" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1194">
                                        <a href="https://serioestates.com/interactive-map/" data-title="Interactive Map">Interactive Map</a>
                                    </li>
                                    <li id="menu-item-128" className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-128">
                                        <a href="https://serioestates.com/community/bel-air/" data-title="Bel Air">Bel Air</a>
                                    </li>
                                    <li id="menu-item-129" className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-129">
                                        <a href="https://serioestates.com/community/beverly-hills/" data-title="Beverly Hills">Beverly Hills</a>
                                    </li>
                                    <li id="menu-item-130" className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-130">
                                        <a href="https://serioestates.com/community/beverly-hills-post-office/" data-title="Beverly Hills 
                                                                                                                                                                                                                                                                                    
                                                <br/> Post Office">Beverly Hills <br/> Post Office </a>
                                    </li>
                                    <li id="menu-item-131" className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-131">
                                        <a href="https://serioestates.com/community/brentwood/" data-title="Brentwood">Brentwood</a>
                                    </li>
                                    <li id="menu-item-132" className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-132">
                                        <a href="https://serioestates.com/community/encino/" data-title="Encino">Encino</a>
                                    </li>
                                    <li id="menu-item-133" className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-133">
                                        <a href="https://serioestates.com/community/hollywood-hills/" data-title="Hollywood Hills">Hollywood Hills</a>
                                    </li>
                                    <li id="menu-item-134" className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-134">
                                        <a href="https://serioestates.com/community/holmby-hills/" data-title="Holmby Hills">Holmby Hills</a>
                                    </li>
                                    <li id="menu-item-135" className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-135">
                                        <a href="https://serioestates.com/community/malibu/" data-title="Malibu">Malibu</a>
                                    </li>
                                    <li id="menu-item-7424" className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-7424">
                                        <a href="https://serioestates.com/community/pacific-palisades/" data-title="Pacific Palisades">Pacific Palisades</a>
                                    </li>
                                    <li id="menu-item-136" className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-136">
                                        <a href="https://serioestates.com/community/santa-monica/" data-title="Santa Monica">Santa Monica</a>
                                    </li>
                                    <li id="menu-item-7423" className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-7423">
                                        <a href="https://serioestates.com/community/sherman-oaks/" data-title="Sherman Oaks">Sherman Oaks</a>
                                    </li>
                                    <li id="menu-item-7422" className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-7422">
                                        <a href="https://serioestates.com/community/studio-city/" data-title="Studio City">Studio City</a>
                                    </li>
                                    <li id="menu-item-137" className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-137">
                                        <a href="https://serioestates.com/community/westwood/" data-title="Westwood">Westwood</a>
                                    </li>
                                </ul> */}
                            </li>
                            <li id="menu-item-43" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-43">
                                <Link to='/buyers' data-title="Buyers">Buyers</Link>
                                {/* <ul className="sub-menu">
                                    <li id="menu-item-42" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-42">
                                        <a href="#" data-title="Property Search">Property Search</a>
                                    </li>
                                </ul> */}
                            </li>
                            <li id="menu-item-41" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-41">
                                <Link to="/about_us" data-title="Sellers">About Us</Link>
                                {/* <ul className="sub-menu">
                                    <li id="menu-item-40" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-40">
                                        <a href="https://serioestates.com/home-valuation/" data-title="Home Valuation">Home Valuation</a>
                                    </li>
                                </ul> */}
                            </li>
                            <li id="menu-item-47" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-47">
                                <Link to='/blog' data-title="Blog">Blog</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="fixed-header-content-holder">
                <div className="header-contacts">
                    <div className="textwidget custom-html-widget">
                        <span>
                            <em className="ai-mobile-phone">
                                <a href="tel:+250788501505" className="aios-ai-phone " aria-label="+250788501505">
                                    <em className="ai-font-phone">
                                        <i className="hidden">+250788501505</i>
                                    </em>
                                </a>
                            </em>
                        </span>
                        <span>
                            <a className="asis-mailto-obfuscated-email-hidden asis-mailto-obfuscated-email " aria-label="musangamfuravincent@gmail.com" data-value="musangamfuravincent@gmail.com">
                                <em className="ai-font-envelope-f">
                                    <i className="hidden">musangamfuravincent@gmail.com</i>
                                </em>
                            </a>
                        </span>
                    </div>
                </div>
                <div onClick={() => setIsAsideActive(true)} className="burger-menu-wrap">
                    <div className="burger-menu-icon" data-side-menu="open">
                        <div className="bm-lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default FixedHeader