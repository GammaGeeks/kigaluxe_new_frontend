import React, { useEffect, useRef } from 'react'
import img1 from '../../assets/images/demo-blog-1.jpg'
import img2 from '../../assets/images/demo-blog-2.jpg'
import img3 from '../../assets/images/demo-blog-3.jpg'
import { Container } from 'react-bootstrap'

function Blogs() {
  const topOfPageRef = useRef(null)
  useEffect(() => {
    if (topOfPageRef.current) {
      topOfPageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    }
  }, [])
  return (
    <main>
      <div ref={topOfPageRef}></div>
      <h2 className="aios-starter-theme-hide-title">Main Content</h2>
      {/* <!-- ip banner goes here --> */}
      <div className="textwidget custom-html-widget">
        <div className="ip-banner" data-type="Blog" data-id="4">
          <canvas width="1600" height="350" style={{backgroundImage: `url(images/slide-img-1.jpg)`}}></canvas>
        </div>
      </div>
      {/* <!-- ip banner goes here --> */}
      <div id="inner-page-wrapper">
        <Container>
          <div id="content-full">
            <section id="content" className="hfeed">
              <p id="breadcrumbs">
                <span>
                  <span property="itemListElement" typeof="ListItem">
                    <a property="item" typeof="WebPage" href="/">
                      <span property="name">Home</span>
                    </a>
                    <meta property="position" content="1"/>
                  </span> » <span className="breadcrumb_last" property="itemListElement" typeof="ListItem">
                    <span property="name">Blog</span>
                    <meta property="position" content="2"/>
                  </span>
                </span>
              </p>
              <h1 className="archive-title"> Blog </h1>
              <div className="row archive-list">
                <article id="post-204" className="col-md-12 article-long post-204 post type-post status-publish format-standard has-post-thumbnail hentry category-blog" data-aios-reveal="true" data-aios-animation="fadeIn" data-aios-animation-delay="0s" data-aios-animation-reset="false" data-aios-animation-offset="0.3">
                  <div className="entry">
                    <div className="archive-thumbnail">
                      <a href="https://serioestates.com/remodeling-projects-that-will-boost-your-homes-value/">
                        <canvas width="540" height="360" style={{backgroundImage: `url(${img3})`}}></canvas>
                      </a>
                    </div>
                    <div className="archive-content archive-has-thumbnail">
                      <h2 className="archive-subtitle">
                        <a href="https://serioestates.com/remodeling-projects-that-will-boost-your-homes-value/">Remodeling Projects That Will Boost Your Home’s Value</a>
                      </h2>
                      <p>There are two ways to think about remodeling projects that will boost your home’s value; you can get one or two major remodels done or opt for a bunch of small fixes. Depending on your budget and yo...</p>
                      <p>
                        <a className="archive-more" href="https://serioestates.com/remodeling-projects-that-will-boost-your-homes-value/">Read more</a>
                      </p>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </article>
                <article id="post-201" className="col-md-6 post-201 post type-post status-publish format-standard has-post-thumbnail hentry category-blog" data-aios-reveal="true" data-aios-animation="fadeIn" data-aios-animation-delay="0.2s" data-aios-animation-reset="false" data-aios-animation-offset="0.3">
                  <div className="entry">
                    <div className="archive-thumbnail">
                      <a href="https://serioestates.com/tips-for-first-time-homebuyers/">
                        <canvas width="540" height="360" style={{backgroundImage: `url(${img1})`}}></canvas>
                      </a>
                    </div>
                    <div className="archive-content archive-has-thumbnail">
                      <h2 className="archive-subtitle">
                        <a href="https://serioestates.com/tips-for-first-time-homebuyers/">Tips for First-Time Homebuyers</a>
                      </h2>
                      <p>Most homebuyers start the process anxious, excited, nervous, and some are downright terrified. It’s natural. A home is the largest and most expensive purchase that most people will make in a lifetime. It can either turn out to be a complete f...</p>
                      <p>
                        <a className="archive-more" href="https://serioestates.com/tips-for-first-time-homebuyers/">Read more</a>
                      </p>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </article>
                <article id="post-198" className="col-md-6 post-198 post type-post status-publish format-standard has-post-thumbnail hentry category-blog" data-aios-reveal="true" data-aios-animation="fadeIn" data-aios-animation-delay="0.2s" data-aios-animation-reset="false" data-aios-animation-offset="0.3">
                  <div className="entry">
                    <div className="archive-thumbnail">
                      <a href="https://serioestates.com/signs-that-now-is-the-time-to-sell-your-home/">
                        <canvas width="540" height="360" style={{backgroundImage: `url(${img2})`}}></canvas>
                      </a>
                    </div>
                    <div className="archive-content archive-has-thumbnail">
                      <h2 className="archive-subtitle">
                        <a href="https://serioestates.com/signs-that-now-is-the-time-to-sell-your-home/">Signs that Now is the Time to Sell Your Home</a>
                      </h2>
                      <p>There are many reasons why it may be time to sell your home. You may need more space to make room for a growing family or you need to downsize after your kids leave the nest. Whatever your motivations, you want to make sure that you’re timing...</p>
                      <p>
                        <a className="archive-more" href="https://serioestates.com/signs-that-now-is-the-time-to-sell-your-home/">Read more</a>
                      </p>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </article>
              </div>
              <div className="page-links"></div>
            </section>
            {/* <!-- end #content --> */}
          </div>
          {/* <!-- end #content-sidebar --> */}
          <div className="clearfix"></div>
        </Container>
        {/* <!-- end of #inner-page-wrapper .inner --> */}
      </div>
      {/* <!-- end of #inner-page-wrapper --> */}
    </main>
  )
}

export default Blogs