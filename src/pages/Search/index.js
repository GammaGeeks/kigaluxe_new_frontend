import React from 'react'

function Search() {
  return (
<main>
  <h2 className="aios-starter-theme-hide-title">Main Content</h2>
  {/* <!-- ip banner goes here --> */}
  <div className="textwidget custom-html-widget">
    <div className="ip-banner" data-type="page" data-id="37">
      <canvas width="1600" height="350" style={{backgroundImage: "url(images/slide-img-1.jpg)"}}></canvas>
    </div>
  </div>
  {/* <!-- ip banner goes here --> */}
  <div id="inner-page-wrapper">
    <div className="container">
      <div id="content-full">
        <article id="content" className="hfeed">
          <p id="breadcrumbs">
            <span>
              <span property="itemListElement" typeof="ListItem">
                <a property="item" typeof="WebPage" href="https://serioestates.com/">
                  <span property="name">Home</span>
                </a>
                <meta property="position" content="1" />
              </span> » <span className="breadcrumb_last" property="itemListElement" typeof="ListItem">
                <span property="name">Property Search</span>
                <meta property="position" content="2" />
              </span>
            </span>
          </p>
          <div id="post-37" className="post-37 page type-page status-publish hentry">
            <h1 className="entry-title ">Property Search</h1>
            <div className="entry entry-content">
              <div style={{display: "inline"}} data-ihf-client-id="172562">
                <div>
                  <div id="ihf-main-container" className="ihf-container ihf-color-scheme-gray">
                    <div className="ihf-advanced-property-search">
                      <form id="ihf-main-search-form" className="form-inline" action="https://serioestates.com/homes-for-sale-results/" method="GET" target="_self">
                        <input id="boardId" name="boardId" type="hidden" value="306"/>
                        <fieldset>
                          <div className="row">
                            <div className="col-xs-12" id="ihf-search-tabs">
                              <ul className="nav nav-tabs" id="ihf-search-location-tabs">
                                <li className=" active ">
                                  <a id="ihf-location-tab" href="#ihf-search-location-tab" data-toggle="tab" data-ihf-search-tab="location"> Location </a>
                                </li>
                                <li className=" ">
                                  <a id="ihf-polygon-tab" href="#ihf-search-polygon-tab" data-toggle="tab" data-ihf-search-tab="polygon"> Draw on Map </a>
                                </li>
                              </ul>
                              <div className="tab-content">
                                <div id="ihf-search-location-tab" className=" tab-pane active ">
                                  <div>
                                    <div className="row mt-10" id="areaPickerContainer">
                                      <div className="col-xs-12">
                                        <div className="input-group">
                                          <span className="input-group-addon" style={{margin: "2px"}}>
                                            <span className="fs-12 hidden-xs areaPickerExpandAllButtonClass"> View All </span>
                                            <span className="glyphicon glyphicon-align-justify fs-12 hidden-xs areaPickerExpandAllButtonClass"></span>
                                          </span>
                                          <div className="form-control" id="areaPickerInputWrapper">
                                            <span id="ihf-selectedAreas" style={{float: "left"}}></span>
                                            <span style={{float: "left"}}>
                                              <input name="location" id="areaPicker" type="text" size="30" placeholder=""/>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-xs-12">
                                        <span id="ihf-selectedAreasLabel" style={{display: "none"}}></span>
                                        <div id="autocompleteMatch">
                                          <div id="autocompleteMatchValues"></div>
                                          <div className="areaPickerExpandAllButtonClass">
                                            <button type="button" className="btn-link"> View All </button>
                                          </div>
                                        </div>
                                        <div id="areaPickerExpandAll">
                                          <div className="areaPickerExpandAllTopBar btn-primary">
                                            <div id="areaPickerCustomListToggle" style={{cursor: "pointer"}}></div>
                                            <div id="areaPickerClearAll" style={{cursor: "pointer"}}>
                                              <span className="glyphicon glyphicon-remove-circle" style={{fontSize: "12px", color: "#999"}}></span> Clear
                                            </div>
                                            <div id="areaPickerExpandAllCloseButton" className="areaPickerExpandAllButtonClass">
                                              <span className="badge"> Close </span>
                                            </div>
                                          </div>
                                          <div id="areaPickerExpandAllContainer"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div id="ihf-search-polygon-tab" className=" tab-pane ">
                                  <div className="row mb-10">
                                    <div className="col-xs-12 mt-10"> Click or tap on the map to begin. To edit your completed polygon, drag any point to a new location. </div>
                                    <div className="col-xs-12">
                                      <div id="ihf-map-canvas" style={{height: "400px", width: "100%"}}></div>
                                    </div>
                                  </div>
                                  <input id="ihf-boundary" name="boundaryWKT" type="hidden" value=""/>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-25">
                            <div className="col-xs-12 col-sm-6 mb-10">
                              <label for="ihf-select-property-type" className="field-label ihf-select-property-type-label"> Property Type </label>
                              <select id="ihf-select-property-type" name="propertyType" className="form-control ihf-chosen-select-width">
                                <option value="SFR,CND">House / Condo</option>
                                <option value="SFR">House</option>
                                <option value="CND">Condo</option>
                              </select>
                            </div>
                            <div className="col-xs-12 col-sm-6 pt-5 mb-10">
                              <span id="ihf-status-fields">
                                <label for="ihf-status" className="field-label ihf-status-label"> Status </label>
                                <div>
                                  <label className="radio-inline">
                                    <input className="radio" name="status" value="active" type="radio" checked="checked"/> For Sale </label>
                                  <label className="radio-inline">
                                    <input className="radio" name="status" value="pending" type="radio"/> Pending </label>
                                  <label className="radio-inline">
                                    <input className="radio" name="status" value="sold" type="radio"/> Sold </label>
                                </div>
                              </span>
                            </div>
                          </div>
                          <div id="ihf-house-condo-search-fields" className="hide">
                            <div className="row mt-25 ihf-home-search-fields">
                              <div className="col-xs-12 col-sm-3">
                                <label for="ihf-minprice-homes" className="field-label ihf-minprice-label"> Min. Price </label>
                                <div className="" style={{position: "relative"}}>
                                  <div className="ihf-label-overlay-money"> $ </div>
                                  <input id="ihf-minprice-homes" name="minListPrice" placeholder="No min" type="text" className="form-control ihf-search-form-input" aria-label="Min Price " value=""/>
                                </div>
                                <label className="error" for="ihf-minprice-homes" style={{display: "none"}}></label>
                              </div>
                              <div className="col-xs-12 col-sm-3">
                                <label for="ihf-maxprice-homes" className="field-label ihf-maxprice-label"> Max. Price </label>
                                <div className="" style={{position: "relative"}}>
                                  <div className="ihf-label-overlay-money"> $ </div>
                                  <input id="ihf-maxprice-homes" name="maxListPrice" placeholder="No max" type="text" className="form-control ihf-search-form-input" aria-label="Max Price" value=""/>
                                </div>
                                <label className="error" for="ihf-maxprice-homes" style={{display: "none"}}></label>
                              </div>
                              <div className="col-xs-12 col-sm-2">
                                <label for="ihf-sqft-homes" className="field-label ihf-sqft-label"> Min. SqFt. </label>
                                <input id="ihf-sqft-homes" name="squareFeet" placeholder="Any" type="text" className="form-control ihf-search-form-input" aria-label="Square Feet" value=""/>
                                <label className="error" for="ihf-sqft-homes" style={{display: "none"}}></label>
                              </div>
                              <div className="col-xs-12 col-sm-2">
                                <label for="ihf-select-bedrooms-homes" className="field-label ihf-select-bedrooms-label"> Beds </label>
                                <select id="ihf-select-bedrooms-homes" name="bedrooms" className="form-control ihf-chosen-select-width">
                                  <option value="0">Any</option>
                                  <option value="1">1+</option>
                                  <option value="2">2+</option>
                                  <option value="3">3+</option>
                                  <option value="4">4+</option>
                                  <option value="5">5+</option>
                                </select>
                              </div>
                              <div className="col-xs-12 col-sm-2">
                                <label for="ihf-select-baths-homes" className="field-label ihf-select-baths-label"> Baths </label>
                                <select id="ihf-select-baths-homes" name="bathCount" className="form-control ihf-chosen-select-width">
                                  <option value="0">Any</option>
                                  <option value="1">1+</option>
                                  <option value="2">2+</option>
                                  <option value="3">3+</option>
                                  <option value="4">4+</option>
                                  <option value="5">5+</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-10">
                            <div className="col-xs-12 mb-10"></div>
                          </div>
                          <div className="row mt-10">
                            <div className="col-xs-8">
                              <div className="checkbox">
                                <label className="field-label ihf-open-homes-only-label">
                                  <input id="ihf-open-homes-only" name="openHomesOnlyYn" type="checkbox" value="true"/>
                                  <input type="hidden" name="_openHomesOnlyYn" value="on"/> Open Homes </label>
                              </div>
                              <div style={{ clear: "both"}}></div>
                              <div className="checkbox">
                                <label className="field-label ihf-date-range-label">
                                  <input id="ihf-date-range" name="dateRange" type="checkbox" value="7"/>
                                  <input type="hidden" name="_dateRange" value="on"/> New (Within 7 Days) </label>
                              </div>
                              <div className="clearfix"></div>
                              <div className="checkbox">
                                <label className="field-label ihf-open-homes-only-label">
                                  <input id="ihf-open-homes-only" name="virtualTourYn" type="checkbox" value="true"/>
                                  <input type="hidden" name="_virtualTourYn" value="on"/> Virtual Tour Available </label>
                              </div>
                            </div>
                            <div className="col-xs-4" style={{textAlign: "right"}}>
                              <button type="submit" className="btn btn-lg btn-block btn-primary btn-form-submit" id="ihf-search-adv-submit"> Search </button>
                            </div>
                          </div>
                          <div className="row mt-25" id="ihf-advsearch-features">
                            <div className="col-xs-12">
                              <label className="field-label ihf-required-features-label"> Required Features </label>
                            </div>
                            <div id="ihf-misc7Yn-container" className="col-xs-6 col-sm-4">
                              <div className="checkbox">
                                <label for="ihf-misc7Yn" className="field-label ihf-misc7Yn-label">
                                  <input id="ihf-misc7Yn" name="misc7Yn" className="checkbox" type="checkbox" value="true"/>
                                  <input type="hidden" name="_misc7Yn" value="on"/> Accessory Dwelling Unit </label>
                              </div>
                            </div>
                            <div id="ihf-agedCommunityYn-container" className="col-xs-6 col-sm-4">
                              <div className="checkbox">
                                <label for="ihf-agedCommunityYn" className="field-label ihf-agedCommunityYn-label">
                                  <input id="ihf-agedCommunityYn" name="agedCommunityYn" className="checkbox" type="checkbox" value="true"/>
                                  <input type="hidden" name="_agedCommunityYn" value="on"/> Aged Community </label>
                              </div>
                            </div>
                            <div id="ihf-reoyn-container" className="col-xs-6 col-sm-4">
                              <div className="checkbox">
                                <label for="ihf-reoyn" className="field-label ihf-reoyn-label">
                                  <input id="ihf-reoyn" name="reoyn" className="checkbox" type="checkbox" value="true"/>
                                  <input type="hidden" name="_reoyn" value="on"/> Auction </label>
                              </div>
                            </div>
                            <div id="ihf-shortSaleYn-container" className="col-xs-6 col-sm-4">
                              <div className="checkbox">
                                <label for="ihf-shortSaleYn" className="field-label ihf-shortSaleYn-label">
                                  <input id="ihf-shortSaleYn" name="shortSaleYn" className="checkbox" type="checkbox" value="true"/>
                                  <input type="hidden" name="_shortSaleYn" value="on"/> Coming Soon </label>
                              </div>
                            </div>
                            <div id="ihf-misc6Yn-container" className="col-xs-6 col-sm-4">
                              <div className="checkbox">
                                <label for="ihf-misc6Yn" className="field-label ihf-misc6Yn-label">
                                  <input id="ihf-misc6Yn" name="misc6Yn" className="checkbox" type="checkbox" value="true"/>
                                  <input type="hidden" name="_misc6Yn" value="on"/> Court Confirmation </label>
                              </div>
                            </div>
                            <div id="ihf-misc3Yn-container" className="col-xs-6 col-sm-4">
                              <div className="checkbox">
                                <label for="ihf-misc3Yn" className="field-label ihf-misc3Yn-label">
                                  <input id="ihf-misc3Yn" name="misc3Yn" className="checkbox" type="checkbox" value="true"/>
                                  <input type="hidden" name="_misc3Yn" value="on"/> Deck </label>
                              </div>
                            </div>
                            <div id="ihf-diningRoomYn-container" className="col-xs-6 col-sm-4">
                              <div className="checkbox">
                                <label for="ihf-diningRoomYn" className="field-label ihf-diningRoomYn-label">
                                  <input id="ihf-diningRoomYn" name="diningRoomYn" className="checkbox" type="checkbox" value="true"/>
                                  <input type="hidden" name="_diningRoomYn" value="on"/> Dining Room </label>
                              </div>
                            </div>
                            <div id="ihf-misc1Yn-container" className="col-xs-6 col-sm-4">
                              <div className="checkbox">
                                <label for="ihf-misc1Yn" className="field-label ihf-misc1Yn-label">
                                  <input id="ihf-misc1Yn" name="misc1Yn" className="checkbox" type="checkbox" value="true"/>
                                  <input type="hidden" name="_misc1Yn" value="on"/> Dock </label>
                              </div>
                            </div>
                            <div id="ihf-familyRoomYn-container" className="col-xs-6 col-sm-4">
                              <div className="checkbox">
                                <label for="ihf-familyRoomYn" className="field-label ihf-familyRoomYn-label">
                                  <input id="ihf-familyRoomYn" name="familyRoomYn" className="checkbox" type="checkbox" value="true"/>
                                  <input type="hidden" name="_familyRoomYn" value="on"/> Family Room </label>
                              </div>
                            </div>
                            <div id="ihf-fireplaceYn-container" className="col-xs-6 col-sm-4">
                              <div className="checkbox">
                                <label for="ihf-fireplaceYn" className="field-label ihf-fireplaceYn-label">
                                  <input id="ihf-fireplaceYn" name="fireplaceYn" className="checkbox" type="checkbox" value="true"/>
                                  <input type="hidden" name="_fireplaceYn" value="on"/> Fireplace </label>
                              </div>
                            </div>
                            <div id="ihf-garYn-container" className="col-xs-6 col-sm-4">
                              <div className="checkbox">
                                <label for="ihf-garYn" className="field-label ihf-garYn-label">
                                  <input id="ihf-garYn" name="garYn" className="checkbox" type="checkbox" value="true"/>
                                  <input type="hidden" name="_garYn" value="on"/> Garage </label>
                              </div>
                            </div>
                            <div id="ihf-miscInt6-container" className="col-xs-6 col-sm-4">
                              <div className="checkbox">
                                <label for="ihf-miscInt6" className="field-label ihf-miscInt6-label">
                                  <input id="ihf-miscInt6" name="miscInt6" className="checkbox" type="checkbox" value="1"/>
                                  <input type="hidden" name="_miscInt6" value="on"/> Gated Community </label>
                              </div>
                            </div>
                            <div id="ihf-golfCourseYn-container" className="col-xs-6 col-sm-4">
                              <div className="checkbox">
                                <label for="ihf-golfCourseYn" className="field-label ihf-golfCourseYn-label">
                                  <input id="ihf-golfCourseYn" name="golfCourseYn" className="checkbox" type="checkbox" value="true"/>
                                  <input type="hidden" name="_golfCourseYn" value="on"/> Golf Course </label>
                              </div>
                            </div>
                            <div id="ihf-misc4Yn-container" className="col-xs-6 col-sm-4">
                              <div className="checkbox">
                                <label for="ihf-misc4Yn" className="field-label ihf-misc4Yn-label">
                                  <input id="ihf-misc4Yn" name="misc4Yn" className="checkbox" type="checkbox" value="true"/>
                                  <input type="hidden" name="_misc4Yn" value="on"/> Guest House/Quarters </label>
                              </div>
                            </div>
                            <div id="ihf-miscInt5-container" className="col-xs-6 col-sm-4">
                              <div className="checkbox">
                                <label for="ihf-miscInt5" className="field-label ihf-miscInt5-label">
                                  <input id="ihf-miscInt5" name="miscInt5" className="checkbox" type="checkbox" value="1"/>
                                  <input type="hidden" name="_miscInt5" value="on"/> HUD/Gov. Owned </label>
                              </div>
                            </div>
                            <div id="ihf-horsePropertyYn-container" className="col-xs-6 col-sm-4">
                              <div className="checkbox">
                                <label for="ihf-horsePropertyYn" className="field-label ihf-horsePropertyYn-label">
                                  <input id="ihf-horsePropertyYn" name="horsePropertyYn" className="checkbox" type="checkbox" value="true"/>
                                  <input type="hidden" name="_horsePropertyYn" value="on"/> Horse Property </label>
                              </div>
                            </div>
                            <div id="ihf-misc5Yn-container" className="col-xs-6 col-sm-4">
                              <div className="checkbox">
                                <label for="ihf-misc5Yn" className="field-label ihf-misc5Yn-label">
                                  <input id="ihf-misc5Yn" name="misc5Yn" className="checkbox" type="checkbox" value="true"/>
                                  <input type="hidden" name="_misc5Yn" value="on"/> Lake Front </label>
                              </div>
                            </div>
                            <div id="ihf-newConstructionYn-container" className="col-xs-6 col-sm-4">
                              <div className="checkbox">
                                <label for="ihf-newConstructionYn" className="field-label ihf-newConstructionYn-label">
                                  <input id="ihf-newConstructionYn" name="newConstructionYn" className="checkbox" type="checkbox" value="true"/>
                                  <input type="hidden" name="_newConstructionYn" value="on"/> New Construction </label>
                              </div>
                            </div>
                            <div id="ihf-miscInt7-container" className="col-xs-6 col-sm-4">
                              <div className="checkbox">
                                <label for="ihf-miscInt7" className="field-label ihf-miscInt7-label">
                                  <input id="ihf-miscInt7" name="miscInt7" className="checkbox" type="checkbox" value="1"/>
                                  <input type="hidden" name="_miscInt7" value="on"/> No HOA Fees </label>
                              </div>
                            </div>
                            <div id="ihf-miscInt4-container" className="col-xs-6 col-sm-4">
                              <div className="checkbox">
                                <label for="ihf-miscInt4" className="field-label ihf-miscInt4-label">
                                  <input id="ihf-miscInt4" name="miscInt4" className="checkbox" type="checkbox" value="1"/>
                                  <input type="hidden" name="_miscInt4" value="on"/> No Pool </label>
                              </div>
                            </div>
                            <div id="ihf-foreclosureYn-container" className="col-xs-6 col-sm-4">
                              <div className="checkbox">
                                <label for="ihf-foreclosureYn" className="field-label ihf-foreclosureYn-label">
                                  <input id="ihf-foreclosureYn" name="foreclosureYn" className="checkbox" type="checkbox" value="true"/>
                                  <input type="hidden" name="_foreclosureYn" value="on"/> Not Age Restricted </label>
                              </div>
                            </div>
                            <div id="ihf-misc2Yn-container" className="col-xs-6 col-sm-4">
                              <div className="checkbox">
                                <label for="ihf-misc2Yn" className="field-label ihf-misc2Yn-label">
                                  <input id="ihf-misc2Yn" name="misc2Yn" className="checkbox" type="checkbox" value="true"/>
                                  <input type="hidden" name="_misc2Yn" value="on"/> Ocean View </label>
                              </div>
                            </div>
                            <div id="ihf-waterFrontYn-container" className="col-xs-6 col-sm-4">
                              <div className="checkbox">
                                <label for="ihf-waterFrontYn" className="field-label ihf-waterFrontYn-label">
                                  <input id="ihf-waterFrontYn" name="waterFrontYn" className="checkbox" type="checkbox" value="true"/>
                                  <input type="hidden" name="_waterFrontYn" value="on"/> Ocean/Beach Front </label>
                              </div>
                            </div>
                            <div id="ihf-oneStoryYn-container" className="col-xs-6 col-sm-4">
                              <div className="checkbox">
                                <label for="ihf-oneStoryYn" className="field-label ihf-oneStoryYn-label">
                                  <input id="ihf-oneStoryYn" name="oneStoryYn" className="checkbox" type="checkbox" value="true"/>
                                  <input type="hidden" name="_oneStoryYn" value="on"/> One Story </label>
                              </div>
                            </div>
                            <div id="ihf-poolYn-container" className="col-xs-6 col-sm-4">
                              <div className="checkbox">
                                <label for="ihf-poolYn" className="field-label ihf-poolYn-label">
                                  <input id="ihf-poolYn" name="poolYn" className="checkbox" type="checkbox" value="true"/>
                                  <input type="hidden" name="_poolYn" value="on"/> Pool </label>
                              </div>
                            </div>
                            <div id="ihf-miscInt9-container" className="col-xs-6 col-sm-4">
                              <div className="checkbox">
                                <label for="ihf-miscInt9" className="field-label ihf-miscInt9-label">
                                  <input id="ihf-miscInt9" name="miscInt9" className="checkbox" type="checkbox" value="1"/>
                                  <input type="hidden" name="_miscInt9" value="on"/> Private Pool </label>
                              </div>
                            </div>
                            <div id="ihf-miscInt3-container" className="col-xs-6 col-sm-4">
                              <div className="checkbox">
                                <label for="ihf-miscInt3" className="field-label ihf-miscInt3-label">
                                  <input id="ihf-miscInt3" name="miscInt3" className="checkbox" type="checkbox" value="1"/>
                                  <input type="hidden" name="_miscInt3" value="on"/> Probate Property </label>
                              </div>
                            </div>
                            <div id="ihf-misc9Yn-container" className="col-xs-6 col-sm-4">
                              <div className="checkbox">
                                <label for="ihf-misc9Yn" className="field-label ihf-misc9Yn-label">
                                  <input id="ihf-misc9Yn" name="misc9Yn" className="checkbox" type="checkbox" value="true"/>
                                  <input type="hidden" name="_misc9Yn" value="on"/> Trust Property </label>
                              </div>
                            </div>
                            <div id="ihf-misc8Yn-container" className="col-xs-6 col-sm-4">
                              <div className="checkbox">
                                <label for="ihf-misc8Yn" className="field-label ihf-misc8Yn-label">
                                  <input id="ihf-misc8Yn" name="misc8Yn" className="checkbox" type="checkbox" value="true"/>
                                  <input type="hidden" name="_misc8Yn" value="on"/> Two on a Lot </label>
                              </div>
                            </div>
                            <div id="ihf-viewYn-container" className="col-xs-6 col-sm-4">
                              <div className="checkbox">
                                <label for="ihf-viewYn" className="field-label ihf-viewYn-label">
                                  <input id="ihf-viewYn" name="viewYn" className="checkbox" type="checkbox" value="true"/>
                                  <input type="hidden" name="_viewYn" value="on"/> View </label>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-10">
                            <div id="ihf-region-container" className="col-xs-12 col-sm-6 mt-10">
                              <label for="ihf-region" className="field-label ihf-region-label">APN (leading 6 digits):</label>
                              <div className="clearfix"></div>
                              <input id="ihf-region" name="region" className="form-control" placeholder="Comma separated list" aria-label="APN (leading 6 digits)" type="text" value=""/>
                            </div>
                            <div id="ihf-lotSqFt-container" className="col-xs-12 col-sm-6 mt-10">
                              <label for="ihf-lotSqFt" className="field-label ihf-lotSqFt-label">Min. Lot SqFt:</label>
                              <div className="clearfix"></div>
                              <input id="ihf-lotSqFt" name="lotSqFt" className="form-control" aria-label="Min. Lot SqFt" type="text" value=""/>
                            </div>
                            <div id="ihf-miscInt1-container" className="col-xs-12 col-sm-6 mt-10">
                              <label for="ihf-miscInt1" className="field-label ihf-miscInt1-label">Max. Year Built:</label>
                              <div className="clearfix"></div>
                              <input id="ihf-miscInt1" name="miscInt1" className="form-control" aria-label="Max. Year Built" type="text" value=""/>
                            </div>
                            <div id="ihf-yearBuilt-container" className="col-xs-12 col-sm-6 mt-10">
                              <label for="ihf-yearBuilt" className="field-label ihf-yearBuilt-label">Min. Year Built:</label>
                              <div className="clearfix"></div>
                              <input id="ihf-yearBuilt" name="yearBuilt" className="form-control" aria-label="Min. Year Built" type="text" value=""/>
                            </div>
                            <div id="ihf-lotAcres-container" className="col-xs-12 col-sm-6 mt-10">
                              <label for="ihf-lotAcres" className="field-label ihf-lotAcres-label">Min. Lot Acres:</label>
                              <div className="clearfix"></div>
                              <input id="ihf-lotAcres" name="lotAcres" className="form-control" aria-label="Min. Lot Acres" type="text" value=""/>
                            </div>
                            <div id="ihf-geographicLike-container" className="col-xs-12 col-sm-6 mt-10" data-ihf-geographic-field="true">
                              <label for="ihf-geographicLike" className="field-label ihf-geographicLike-label"> Builder Tract (Subdivision) Name: <br/> (Enter one value. For more results, use only the first few letters.) </label>
                              <div className="clearfix"></div>
                              <input id="ihf-geographicLike" name="geographicLike" className="form-control" aria-label="Builder Tract (Subdivision) Name" type="text" value=""/>
                            </div>
                            <div id="ihf-garageSpaces-container" className="col-xs-12 col-sm-6 mt-10">
                              <label for="ihf-garageSpaces" className="field-label ihf-garageSpaces-label">Min. Garage Spaces:</label>
                              <div className="clearfix"></div>
                              <select id="ihf-garageSpaces" name="garageSpaces" className="form-control ihf-chosen-select-width">
                                <option value="" selected="selected">Any</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div id="ihf-miscString2-container" className="col-xs-12 col-sm-6 mt-10">
                              <label for="ihf-miscString2" className="field-label ihf-miscString2-label">Terms:</label>
                              <div className="clearfix"></div>
                              <select id="ihf-miscString2" name="miscString2[]" className="form-control ihf-chosen-select-width" data-ihf-lazy-load="true" data-ihf-field-name="miscString2">
                                <option value="">Any</option>
                              </select>
                            </div>
                            <div id="ihf-miscString4-container" className="col-xs-12 col-sm-6 mt-10">
                              <label for="ihf-miscString4" className="field-label ihf-miscString4-label">View:</label>
                              <div className="clearfix"></div>
                              <select id="ihf-miscString4" name="miscString4[]" className="form-control ihf-chosen-select-width" data-ihf-lazy-load="true" data-ihf-field-name="miscString4">
                                <option value="">Any</option>
                              </select>
                            </div>
                            <div id="ihf-styleLike-container" className="col-xs-12 col-sm-6 mt-10">
                              <label for="ihf-styleLike" className="field-label ihf-styleLike-label">Style:</label>
                              <div className="clearfix"></div>
                              <select id="ihf-styleLike" name="styleLike[]" className="form-control ihf-chosen-select-width" data-ihf-lazy-load="true" data-ihf-field-name="styleLike">
                                <option value="">Any</option>
                              </select>
                            </div>
                          </div>
                          <div className="row mt-10">
                            <div className="col-xs-12 col-sm-6" data-ihf-geographic-field="true">
                              <label for="ihf-neighborhood" className="field-label ihf-neighborhood-label">Builder Tract (Subdivision) List:</label>
                              <div className="clearfix"></div>
                              <select id="ihf-neighborhood" name="neighborhood[]" className="form-control ihf-chosen-select-width ihf-multi-select" multiple="multiple" size="4" data-ihf-lazy-load="true" data-ihf-field-name="neighborhood"></select>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                              <label for="ihf-miscString1" className="field-label ihf-miscString1-label">Condition:</label>
                              <div className="clearfix"></div>
                              <select id="ihf-miscString1" name="miscString1[]" className="form-control ihf-chosen-select-width ihf-multi-select" multiple="multiple" size="4" data-ihf-lazy-load="true" data-ihf-field-name="miscString1"></select>
                            </div>
                          </div>
                          <div className="row mt-10">
                            <div className="col-xs-12 col-sm-6" data-ihf-geographic-field="true">
                              <label for="ihf-propertyLocation" className="field-label ihf-propertyLocation-label">County:</label>
                              <div className="clearfix"></div>
                              <select id="ihf-propertyLocation" name="propertyLocation[]" className="form-control ihf-chosen-select-width ihf-multi-select" multiple="multiple" size="4" data-ihf-lazy-load="true" data-ihf-field-name="propertyLocation"></select>
                            </div>
                            <div className="col-xs-12 col-sm-6" data-ihf-geographic-field="true">
                              <label for="ihf-mlsarea" className="field-label ihf-mlsarea-label">MLS Area(s):</label>
                              <div className="clearfix"></div>
                              <select id="ihf-mlsarea" name="mlsarea[]" className="form-control ihf-chosen-select-width ihf-multi-select" multiple="multiple" size="4" data-ihf-lazy-load="true" data-ihf-field-name="mlsarea"></select>
                            </div>
                          </div>
                          <div className="row mt-10">
                            <div className="col-xs-12 col-sm-6" data-ihf-geographic-field="true">
                              <label for="ihf-highSch" className="field-label ihf-highSch-label">High School(s):</label>
                              <div className="clearfix"></div>
                              <select id="ihf-highSch" name="highSch[]" className="form-control ihf-chosen-select-width ihf-multi-select" multiple="multiple" size="4" data-ihf-lazy-load="true" data-ihf-field-name="highSch"></select>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                              <label for="ihf-propertySubType" className="field-label ihf-propertySubType-label">Property Subtype:</label>
                              <div className="clearfix"></div>
                              <select id="ihf-propertySubType" name="propertySubType[]" className="form-control ihf-chosen-select-width ihf-multi-select" multiple="multiple" size="4" data-ihf-lazy-load="true" data-ihf-field-name="propertySubType"></select>
                            </div>
                          </div>
                          <div className="row mt-10">
                            <div className="col-xs-12 col-sm-6">
                              <label for="ihf-miscString3" className="field-label ihf-miscString3-label">Land Fee/Lease:</label>
                              <div className="clearfix"></div>
                              <select id="ihf-miscString3" name="miscString3[]" className="form-control ihf-chosen-select-width ihf-multi-select" multiple="multiple" size="4" data-ihf-lazy-load="true" data-ihf-field-name="miscString3"></select>
                            </div>
                            <div className="col-xs-12 col-sm-6" data-ihf-geographic-field="true">
                              <label for="ihf-schoolDistrict" className="field-label ihf-schoolDistrict-label">School District(s):</label>
                              <div className="clearfix"></div>
                              <select id="ihf-schoolDistrict" name="schoolDistrict[]" className="form-control ihf-chosen-select-width ihf-multi-select" multiple="multiple" size="4" data-ihf-lazy-load="true" data-ihf-field-name="schoolDistrict"></select>
                            </div>
                          </div>
                          <div id="hideOnMobileDevices" className="hidden-xs col-sm-6 col-md-6 col-lg-6"></div>
                          <div className="row mt-25" data-ihf-geographic-field="true">
                            <div className="col-xs-12">
                              <div className="checkbox">
                                <label className="field-label ihf-area-inclusion-label">
                                  <input id="areaAndSearch1" name="areaAndSearch" type="checkbox" value="true"/>
                                  <input type="hidden" name="_areaAndSearch" value="on"/> Show only listings that meet <strong>all</strong> of the geographic search criteria (e.g., zip code AND city AND neighborhood)</label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xs-6 col-xs-offset-6 col-sm-4 col-sm-offset-8"><button type="submit" className="btn btn-lg btn-block btn-primary btn-form-submit" id="ihf-search-adv2-submit"> Search </button>
                            </div>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="row mt-60">
                      <div className="col-12 col-lg-12 col-sm-12 fs-11">
                        <div id="ihf-board-disclaimers" className="mt-60 fs-11">
                          <div className="ihf-board-disclaimer-text"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div className="ihf-link-back ihf-powered-by">
                  <a href="http://www.ihomefinder.com">Real Estate IDX</a> Powered by iHomefinder
                </div>
              </div>
            </div>
            <div className="comments-template"></div>
          </div>
        </article>
        {/* <!-- end #content --> */}
      </div>
      {/* <!-- end #content-sidebar --> */}
      <div className="clearfix"></div>
    </div>
    {/* <!-- end of #inner-page-wrapper .inner --> */}
  </div>
  {/* <!-- end of #inner-page-wrapper --> */}
</main>
  )
}

export default Search