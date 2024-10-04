import React, {useRef, useEffect} from 'react'
// import { useSpring, animated } from '@react-spring/web'
import flBg from '../../assets/images/fl-bg.jpg'

function Spring() {
  // const springs = useSpring({
  //   from: { x: 0 },
  //   to: { x: 800 },
  // })

  // const [springs, api] = useSpring(() => ({
  //   from: { x: 0 },
  // }))

  // const handleClick = () => {
  //   api.start({
  //     from: {
  //       x: 0,
  //     },
  //     to: {
  //       x: 100,
  //     },
  //   })
  // }
  const topOfPageRef = useRef(null)
  useEffect(() => {
    if (topOfPageRef.current) {
      topOfPageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    }
  }, [])




  return (
    <main>
    <div ref={topOfPageRef}></div>
{/* <!-- ip banner goes here --> */}
{/* <div className="textwidget custom-html-widget">
  <div className="ip-banner" data-type="page" data-id="54">
    <canvas width="1600" height="350" style={{ backgroundImage: `url(${slideImgOne})` }}></canvas>
  </div>
</div> */}
{/* <!-- ip banner goes here --> */}
<div id="inner-page-wrapper">
  <div style={{padding: 0, margin: 0}} className="container-fluid">
    <div id="ip-featured-listings">
      <div className="ip-fl-container">
        {/* <div className="ip-fl-section">
          
        </div> */}
        <div className="ip-fl-section">
          <div id="ip-comm-content" className="ip-fl-listing-container aios-scroll-section">
            <div className="ip-fl-bg attachment-fixed">
              <canvas width="1600" height="1068" style={{backgroundImage: `url(${flBg})`}}></canvas>
            </div>
            {/* <div className="custom-breadcrumbs">
              <div className="container">
                <p id="breadcrumbs">
                  <span>
                    <span property="itemListElement" typeof="ListItem">
                      <a property="item" typeof="WebPage" href="https://serioestates.com/">
                        <span property="name">Home</span>
                      </a>
                      <meta property="position" content="1" />
                    </span> » <span className="breadcrumb_last" property="itemListElement" typeof="ListItem">
                      <span property="name">Featured Listings</span>
                      <meta property="position" content="2" />
                    </span>
                  </span>
                </p>
              </div>
            </div> */}
            <div className="ip-fl-listing-main">
              <div className="custom-container px-5">
                <div style={{opacity: 1}} className="global-title is-centered">
                  {/* <h2 style={{fontSize: '0.2em !important'}}>
                    <span>Listings </span>
                  </h2> */}
                </div>
              </div>
              <div className="custom-container">
                <div style={{opacity: 1, marginTop: '-30px'}} className="global-title is-centered">
                  {/* <h2>
                    <small>
                      <em className="global-logo-icon">
                        <i className="global-outline"></i>
                      </em>Latest </small>
                    <span>Listings </span>
                  </h2> */}
                </div>
                <div className="ip-fl-listing-caption">
                  <p>These are the finest homes currently available on the market. Contact us to schedule a private showing.</p>
                </div>
                <div className="ip-fl-listing-caption bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded relative" role="alert">
                  <strong className="font-bold text-lg">Thank You for Scheduling a Tour!</strong>
                  <p className="mt-2">
                    We appreciate your interest in exploring the property. Our team will be in touch shortly to confirm the details of your tour.
                  </p>
                  <p className="mt-2">
                    If you have any questions in the meantime, feel free to reach out to us at <a href="mailto:support@realestate.com" className="text-blue-600 underline">support@realestate.com</a> or call us at <span className="text-blue-600">(123) 456-7890</span>.
                  </p>
                  <p className="mt-2">
                    We look forward to helping you find your dream property!
                  </p>
                </div>
                <div className="ip-fl-listing-row">

                {/* <div className="ip-fl-listing-pagination" style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '30px'
                }}>
                  <div className="ip-ld-hero-controls">
                    <button onClick={prevPagination} className="ip-ld-hero-prev" aria-label="Prev"><em className="ai-icon-prev"></em></button>
                    <button onClick={nextPagination} className="ip-ld-hero-next" aria-label="Next"><em className="ai-icon-next"></em></button>
                  </div>
                </div> */}
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div><div className="clearfix"></div>
  </div>
</main>
  )
}

export default Spring