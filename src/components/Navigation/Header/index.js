/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import logo1 from '../../../assets/logo/k_201x69.png'
import logo2 from '../../../assets/logo/k_87x87.png'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({setIsAsideActive}) {
  return (
    <header className="header-wrapper">
        <div style={{padding: '0 30px', margin: 0}} className="container-fluid">
            <div className="header-wrap">
                <div className="logo">
                    {/* <div className="desktop hidden-sm hidden-xs">
                        <div className="textwidget custom-html-widget">
                            <a href="https://serioestates.com/">
                                <img className="skip-lazyload" src={logo2} alt="Serio Group" width="87" height="87"/>
                            </a>
                        </div>
                    </div> */}
                    <div className="mob-logo visible-sm visible-xs">
                        <div className="textwidget custom-html-widget">
                            <Link to='/'>
                                <img className="skip-lazyload" src={logo1} alt="Serio Group" width="201" height="69"/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="header-nav hidden-sm hidden-xs">
                    <Navbar className="navigation justify-content-between">
                        <Container style={{padding: 0, margin: 0}} className="menu-primary-menu-container" fluid>
                            <Nav className="main-nav mt-3">
                                <li className="gradient-fix menu-item menu-item-type-post_type menu-item-object-page menu-item-71">
                                    <Link to='/listings' data-title="Featured Listings">Featured Listings</Link>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-46">
                                    <Link to="/services" data-title="Services">Services</Link>
                                    {/* <ul className="sub-menu">
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-116">
                                            <a href="https://serioestates.com/meet-ron-serio/" data-title="Meet Ron Serio">Meet Ron Serio</a>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-115">
                                            <a href="https://serioestates.com/meet-waruka-serio/" data-title="Meet Waruka Serio">Meet Waruka Serio</a>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25888">
                                            <a href="https://serioestates.com/social-media/" data-title="Social Media Wall">Social Media Wall</a>
                                        </li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-207">
                                            <a href="/category/blog/" data-title="Blog">Blog</a>
                                        </li>
                                    </ul> */}
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-233">
                                    <Link to="/animation" data-title="Sell Your Property">Sell Your Property</Link>
                                    {/* <ul className="sub-menu">
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1194">
                                            <a href="https://serioestates.com/interactive-map/" data-title="Interactive Map">Interactive Map</a>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-128">
                                            <a href="https://serioestates.com/community/bel-air/" data-title="Bel Air">Bel Air</a>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-129">
                                            <a href="https://serioestates.com/community/beverly-hills/" data-title="Beverly Hills">Beverly Hills</a>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-130">
                                            <a href="https://serioestates.com/community/beverly-hills-post-office/" data-title="Beverly Hills 
																																																																										
																	<br/> Post Office">Beverly Hills <br/> Post Office </a>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-131">
                                            <a href="https://serioestates.com/community/brentwood/" data-title="Brentwood">Brentwood</a>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-132">
                                            <a href="https://serioestates.com/community/encino/" data-title="Encino">Encino</a>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-133">
                                            <a href="https://serioestates.com/community/hollywood-hills/" data-title="Hollywood Hills">Hollywood Hills</a>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-134">
                                            <a href="https://serioestates.com/community/holmby-hills/" data-title="Holmby Hills">Holmby Hills</a>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-135">
                                            <a href="https://serioestates.com/community/malibu/" data-title="Malibu">Malibu</a>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-7424">
                                            <a href="https://serioestates.com/community/pacific-palisades/" data-title="Pacific Palisades">Pacific Palisades</a>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-136">
                                            <a href="https://serioestates.com/community/santa-monica/" data-title="Santa Monica">Santa Monica</a>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-7423">
                                            <a href="https://serioestates.com/community/sherman-oaks/" data-title="Sherman Oaks">Sherman Oaks</a>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-7422">
                                            <a href="https://serioestates.com/community/studio-city/" data-title="Studio City">Studio City</a>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-137">
                                            <a href="https://serioestates.com/community/westwood/" data-title="Westwood">Westwood</a>
                                        </li>
                                    </ul> */}
                                </li>
                            </Nav>
                            <Nav>
                                <Navbar.Brand className='hidden-sm hidden-xs' style={{paddingTop: 0, paddingBottom: 20}}>
                                    <Link to="/">
                                        <img
                                        src={logo2}
                                        width="87"
                                        height="87"
                                        className='img-fluid'
                                        alt="React Bootstrap logo"
                                        />
                                    </Link>
                                </Navbar.Brand>
                            </Nav>
                            <Nav className="main-nav">
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-43">
                                    <a href="#" data-title="Buyers">Buyers</a>
                                    {/* <ul className="sub-menu">
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-42">
                                            <a href="https://serioestates.com/property-search/" data-title="Property Search">Property Search</a>
                                        </li>
                                    </ul> */}
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-41">
                                    <Link to="/about_us"data-title=">About Us">About Us</Link>
                                    {/* <ul className="sub-menu">
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-40">
                                            <a href="https://serioestates.com/home-valuation/" data-title="Home Valuation">Home Valuation</a>
                                        </li>
                                    </ul> */}
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-47">
                                    <Link to='/blog' data-title="Blog">Blog</Link>
                                </li>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
                <div className="header-content-holder">
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
    </header>
  )
}

export default Header