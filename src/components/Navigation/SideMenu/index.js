/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import backgroundImage from '../../../assets/images/side-menu-bg.jpg'
import { Link } from 'react-router-dom'
function SideMenu({isAsideActive, setIsAsideActive}) {
  return (
    <div id="side-menu" className={`side-menu ${isAsideActive? 'active': ''}`}>
        <div className="side-menu-overlay" data-side-menu="close"></div>
        <div className="side-menu-bg">
            <div className="side-menu-bg-holder">
                <div className="textwidget custom-html-widget">
                    <canvas width="1600" height="819" style={{backgroundImage: `url(${backgroundImage})`}}></canvas>
                </div>
            </div>
            <div className="side-menu-bar">
                <div className="side-menu-container">
                    <div className="side-menu-wrapper">
                        <button onClick={() => setIsAsideActive(false)} className="side-menu-close ai-font-close-b" aria-label="Close" data-side-menu="close"></button>
                        <div className="side-menu-logo">
                            <div className="textwidget custom-html-widget">
                                <Link onClick={() => setIsAsideActive(false)} to="/">
                                    <img data-src={require('../../../assets/logo/k_201x69.png')} className="lazyload" alt="Serio Group" width="263" height="106"/>
                                </Link>
                            </div>
                        </div>
                        <div className="side-menu-nav">
                            <div className="menu-side-menu-container">
                                <ul id="sidemenu-nav" className="sidemenu-nav">
                                    <li id="menu-item-24908" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-24908">
                                        <Link onClick={() => setIsAsideActive(false)} to='/services' data-title="Services">Services</Link>
                                        <ul className="sub-menu">
                                            <li id="menu-item-24909" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24909">
                                                <a data-title="Property Listings">Property Listings</a>
                                            </li>
                                            <li id="menu-item-24910" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24910">
                                                <a data-title="Property Management">Property Management</a>
                                            </li>
                                            <li id="menu-item-25887" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25887">
                                                <a data-title="Land Partitioning">Land Partitioning</a>
                                            </li>
                                            <li id="menu-item-24911" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-24911">
                                                <a data-title="House Renovation">House Renovation</a>
                                            </li>
                                            <li id="menu-item-25887" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25887">
                                                <a data-title="Interior Design">Interior Design</a>
                                            </li>
                                            <li id="menu-item-24911" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-24911">
                                                <a data-title="Property Evaluation">Property Evaluation</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-24912" className="gradient-fix menu-item menu-item-type-post_type menu-item-object-page menu-item-24912">
                                        <Link onClick={() => setIsAsideActive(false)} to='/listings' data-title="Featured Listings">Featured Listings</Link>
                                    </li>
                                    <li id="menu-item-24913" className="inline-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24913">
                                        <a href="/communities/" data-title="Communities">Communities</a>
                                        {/* <ul className="sub-menu">
                                            <li id="menu-item-24914" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24914">
                                                <a href="#" data-title="Interactive Map">Interactive Map</a>
                                            </li>
                                            <li id="menu-item-24915" className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-24915">
                                                <a href="https://serioestates.com/community/bel-air/" data-title="Bel Air">Bel Air</a>
                                            </li>
                                            <li id="menu-item-24916" className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-24916">
                                                <a href="https://serioestates.com/community/beverly-hills/" data-title="Beverly Hills">Beverly Hills</a>
                                            </li>
                                            <li id="menu-item-24917" className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-24917">
                                                <a href="https://serioestates.com/community/beverly-hills-post-office/" data-title="Beverly Hills 
																																																																														
																					<br/> Post Office">Beverly Hills <br/> Post Office </a>
                                            </li>
                                            <li id="menu-item-24918" className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-24918">
                                                <a href="https://serioestates.com/community/brentwood/" data-title="Brentwood">Brentwood</a>
                                            </li>
                                            <li id="menu-item-24919" className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-24919">
                                                <a href="https://serioestates.com/community/encino/" data-title="Encino">Encino</a>
                                            </li>
                                            <li id="menu-item-24920" className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-24920">
                                                <a href="https://serioestates.com/community/hollywood-hills/" data-title="Hollywood Hills">Hollywood Hills</a>
                                            </li>
                                            <li id="menu-item-24921" className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-24921">
                                                <a href="https://serioestates.com/community/holmby-hills/" data-title="Holmby Hills">Holmby Hills</a>
                                            </li>
                                            <li id="menu-item-24922" className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-24922">
                                                <a href="https://serioestates.com/community/malibu/" data-title="Malibu">Malibu</a>
                                            </li>
                                            <li id="menu-item-24923" className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-24923">
                                                <a href="https://serioestates.com/community/pacific-palisades/" data-title="Pacific Palisades">Pacific Palisades</a>
                                            </li>
                                            <li id="menu-item-24924" className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-24924">
                                                <a href="https://serioestates.com/community/santa-monica/" data-title="Santa Monica">Santa Monica</a>
                                            </li>
                                            <li id="menu-item-24925" className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-24925">
                                                <a href="https://serioestates.com/community/sherman-oaks/" data-title="Sherman Oaks">Sherman Oaks</a>
                                            </li>
                                            <li id="menu-item-24926" className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-24926">
                                                <a href="https://serioestates.com/community/studio-city/" data-title="Studio City">Studio City</a>
                                            </li>
                                            <li id="menu-item-24927" className="menu-item menu-item-type-post_type menu-item-object-aios-communities menu-item-24927">
                                                <a href="https://serioestates.com/community/westwood/" data-title="Westwood">Westwood</a>
                                            </li>
                                        </ul> */}
                                    </li>
                                    <li id="menu-item-24928" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24928">
                                        <Link onClick={() => setIsAsideActive(false)} to="/about_us" data-title="About Us">About Us</Link>
                                    </li>
                                    <li id="menu-item-24929" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-24929">
                                        <a href="#" data-title="Buyers">Buyers</a>
                                        {/* <ul className="sub-menu">
                                            <li id="menu-item-24930" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24930">
                                                <a href="https://serioestates.com/property-search/" data-title="Property Search">Property Search</a>
                                            </li>
                                        </ul> */}
                                    </li>
                                    <li id="menu-item-24931" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-24931">
                                        <a href="https://serioestates.com/sellers/" data-title="Sellers">Sellers</a>
                                        <ul className="sub-menu">
                                            <li id="menu-item-24932" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24932">
                                                <a href="https://serioestates.com/home-valuation/" data-title="Home Valuation">Home Valuation</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-24933" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24933">
                                        <Link to='/about_us' data-title="About Us">About Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideMenu