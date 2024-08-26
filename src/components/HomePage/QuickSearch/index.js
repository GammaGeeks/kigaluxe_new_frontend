import React from 'react'

function QuickSearch() {
  return (
    <section id="quicksearch" className="aios-scroll-section" data-aios-scroll-title="Quick Search">
            <div id="content"></div>
            <div className="textwidget custom-html-widget">
                <div className="qs-container">
                    <div className="qs-bg attachment-fixed">
                        <canvas width="1340" height="320" className="lazyload" data-bgset="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/qs-bg.jpg"></canvas>
                    </div>
                    <div className="custom-container">
                        <div className="global-accent-letter">
                            <span>S</span>
                        </div>
                        <div className="global-title is-centered" data-aos-once="true" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                            <h2>
                                <small>
                                    <em className="global-logo-icon">
                                        <i className="global-outline"></i>
                                    </em>Quick </small>
                                <span>Search</span>
                            </h2>
                        </div>
                        <div className="qs-main" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                            <div className="qs-form-bg attachment-fixed">
                                <canvas width="1340" height="320" className="lazyload" data-bgset="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/qs-bg.jpg"></canvas>
                            </div>
                            <form className="qs-form" action="https://serioestates.com/homes-for-sale-results/" method="GET">
                                <div className="qs-field long">
                                    <span className="qs-label">Property Type</span>
                                    <div className="qs-field-holder">
                                        <select aria-label="Property Type" name="propertyType" onChange={() => {}}>
                                            <option defaultValue="">Property Type</option>
                                            <option defaultValue="1">House / Condo</option>
                                            <option defaultValue="2">Condo Only</option>
                                            <option defaultValue="3">Lots / Land</option>
                                            <option defaultValue="4">Multi-Unit Residential</option>
                                            <option defaultValue="5">Rental</option>
                                            <option defaultValue="6">Commercial</option>
                                        </select>
                                        <span className="qs-icon ai-icon-pin"></span>
                                    </div>
                                </div>
                                <div className="qs-field mlong">
                                    <span className="qs-label">Select a City</span>
                                    <div className="qs-field-holder">
                                        {/* <!-- <select aria-label="Select a City" name="cityZip"><option defaultValue="0"></option></select> --> */}
                                        <select name="cityzip" id="cityzip" data-type="cityzip" className="qs-select " multiple="" title="Select a City" aria-labelledby="cityzip"></select>
                                        <span className="qs-icon ai-icon-city"></span>
                                    </div>
                                </div>
                                <div className="qs-field short-b">
                                    <span className="qs-label">Beds</span>
                                    <div className="qs-field-holder">
                                        <select aria-label="Beds" name="bedrooms" onChange={() => {}}>
                                            <option defaultValue="">Beds</option>
                                            <option defaultValue="1">1</option>
                                            <option defaultValue="2">2</option>
                                            <option defaultValue="3">3</option>
                                            <option defaultValue="4">4</option>
                                            <option defaultValue="5">5</option>
                                        </select>
                                        <span className="qs-icon ai-icon-bed"></span>
                                    </div>
                                </div>
                                <div className="qs-field short-b fl-r">
                                    <span className="qs-label">Baths</span>
                                    <div className="qs-field-holder">
                                        <select aria-label="Baths" name="bathCount" onChange={() => {}}>
                                            <option defaultValue="">Baths</option>
                                            <option defaultValue="1">1</option>
                                            <option defaultValue="2">2</option>
                                            <option defaultValue="3">3</option>
                                            <option defaultValue="4">4</option>
                                            <option defaultValue="5">5</option>
                                        </select>
                                        <span className="qs-icon ai-icon-bath"></span>
                                    </div>
                                </div>
                                <div className="qs-field short-i">
                                    <span className="qs-label">Min. $</span>
                                    <div className="qs-field-holder">
                                        <input aria-label="Min Price" type="text" id="minprice" name="minListPrice" placeholder="Min Price"/>
                                        <span className="qs-icon ai-icon-dollar"></span>
                                    </div>
                                </div>
                                <div className="qs-field short-i fl-r">
                                    <span className="qs-label">Max. $</span>
                                    <div className="qs-field-holder">
                                        <input aria-label="Max Price" type="text" id="maxprice" name="maxListPrice" placeholder="Max Price"/>
                                        <span className="qs-icon ai-icon-dollar"></span>
                                    </div>
                                </div>
                                <div className="qs-field submit">
                                    <button className="global-btn">Search</button>
                                </div>
                            </form>
                            <div className="qs-disclaimer">
                                <span>Real Estate IDX Powered By IhomeFinder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default QuickSearch