/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

// import logo1 from '../../../assets/images/site-logo-b.png'
import logo2 from '../../../assets/images/site-logo.png'
import { Navbar, Container, Nav } from 'react-bootstrap'

function Header() {
  return (
    <header className="header-wrapper">
        <div className="container">
            <div className="header-wrap">
                <div className="logo">
                    {/* <div className="desktop hidden-sm hidden-xs">
                        <div className="textwidget custom-html-widget">
                            <a href="https://serioestates.com/">
                                <img className="skip-lazyload" src={logo2} alt="Serio Group" width="87" height="87"/>
                            </a>
                        </div>
                    </div> */}
                    {/* <div className="mob-logo visible-sm visible-xs">
                        <div className="textwidget custom-html-widget">
                            <a href="https://serioestates.com">
                                <img className="skip-lazyload" src={logo1} alt="Serio Group" width="201" height="69"/>
                            </a>
                        </div>
                    </div> */}
                </div>
                <div className="header-nav">
                    <Navbar className="navigation justify-content-between">
                        <Container className="menu-primary-menu-container">
                            <Nav id="main-nav" className="main-nav mt-3">
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-46">
                                    <a href="https://serioestates.com/about-us/" data-title="About Us">About Us</a>
                                    <ul className="sub-menu">
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
                                    </ul>
                                </li>
                                <li className="gradient-fix menu-item menu-item-type-post_type menu-item-object-page menu-item-71">
                                    <a href="https://serioestates.com/featured-listings/" data-title="Featured Listings">Featured Listings</a>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-233">
                                    <a href="/communities/" data-title="Communities">Communities</a>
                                    <ul className="sub-menu">
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
                                    </ul>
                                </li>
                            </Nav>
                            <Navbar.Brand style={{padding: 0}} href="#home">
                                <img
                                src={logo2}
                                width="87"
                                height="87"
                                className="d-inline-block align-top mb-4"
                                alt="React Bootstrap logo"
                                />
                            </Navbar.Brand>
                            <Nav className="main-nav">
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-43">
                                    <a href="https://serioestates.com/buyers/" data-title="Buyers">Buyers</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-42">
                                            <a href="https://serioestates.com/property-search/" data-title="Property Search">Property Search</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-41">
                                    <a href="https://serioestates.com/sellers/" data-title="Sellers">Sellers</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-40">
                                            <a href="https://serioestates.com/home-valuation/" data-title="Home Valuation">Home Valuation</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-47">
                                    <a href="https://serioestates.com/contact-us/" data-title="Contact Us">Contact Us</a>
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
                                    <a href="tel:+1.310.975.9172" className="aios-ai-phone " aria-label="+1.310.975.9172">
                                        <em className="ai-font-phone">
                                            <i className="hidden">310.975.9172</i>
                                        </em>
                                    </a>
                                </em>
                            </span>
                            <span>
                                <a className="asis-mailto-obfuscated-email-hidden asis-mailto-obfuscated-email " aria-label="info(at)serioestates(dotted)com" data-value="info(at)serioestates(dotted)com">
                                    <em className="ai-font-envelope-f">
                                        <i className="hidden">info(at)serioestates(dotted)com</i>
                                    </em>
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="burger-menu-wrap">
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