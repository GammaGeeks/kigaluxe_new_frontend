import React, { useEffect, useRef } from 'react'
import img1 from '../../assets/images/demo-blog-1.jpg'
import img2 from '../../assets/images/demo-blog-2.jpg'
import img3 from '../../assets/images/demo-blog-3.jpg'
import { Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllBlogs } from '../../redux/actions/blogs'
import { Link } from 'react-router-dom'

function Blogs() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllBlogs(1, 12))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const blogs = useSelector(state => state.blogs)

  // eslint-disable-next-line no-unused-vars
  const { listOfBlogs, next, currentPage, getBlogs } = blogs
  console.log(listOfBlogs);

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
      <div style={{marginTop: '50px'}}></div>
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
              {
                listOfBlogs.length > 0 ? (
              <div className="row archive-list">
                <article id="post-204" className="col-md-12 article-long post-204 post type-post status-publish format-standard has-post-thumbnail hentry category-blog" data-aios-reveal="true" data-aios-animation="fadeIn" data-aios-animation-delay="0s" data-aios-animation-reset="false" data-aios-animation-offset="0.3">
                  <div className="entry">
                    <div className="archive-thumbnail">
                      <Link to={`/blogs/${listOfBlogs ? listOfBlogs[0].id : ''}`}>
                        <canvas width="540" height="360" style={{backgroundImage: `url(${listOfBlogs ? listOfBlogs[0].url : img3})`}}></canvas>
                      </Link>
                    </div>
                    <div className="archive-content archive-has-thumbnail">
                      <h2 className="archive-subtitle">
                        <Link to={`/blogs/${listOfBlogs && listOfBlogs[0].id}`}>{listOfBlogs && listOfBlogs[0].title}</Link>
                      </h2>
                      <p>{listOfBlogs && listOfBlogs[0].content.slice(0, 400)}...</p>
                      <p>
                        <Link className="archive-more" to={`/blogs/${listOfBlogs && listOfBlogs[0].id}`}>Read more</Link>
                      </p>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </article>
                <article id="post-201" className="col-md-6 post-201 post type-post status-publish format-standard has-post-thumbnail hentry category-blog" data-aios-reveal="true" data-aios-animation="fadeIn" data-aios-animation-delay="0.2s" data-aios-animation-reset="false" data-aios-animation-offset="0.3">
                  <div className="entry">
                    <div className="archive-thumbnail">
                      <Link to={`/blogs/${listOfBlogs && listOfBlogs[1].id}`}>
                        <canvas width="540" height="360" style={{backgroundImage: `url(${listOfBlogs ? listOfBlogs[1].url : img1})`}}></canvas>
                      </Link>
                    </div>
                    <div className="archive-content archive-has-thumbnail">
                      <h2 className="archive-subtitle">
                        <Link to={`/blogs/${listOfBlogs && listOfBlogs[1].id}`}>{listOfBlogs && listOfBlogs[1].title}</Link>
                      </h2>
                      <p>{listOfBlogs && listOfBlogs[1].content.slice(0, 400)}...</p>
                      <p>
                        <Link className="archive-more"  to={`/blogs/${listOfBlogs && listOfBlogs[1].id}`}>Read more</Link>
                      </p>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </article>
                <article id="post-198" className="col-md-6 post-198 post type-post status-publish format-standard has-post-thumbnail hentry category-blog" data-aios-reveal="true" data-aios-animation="fadeIn" data-aios-animation-delay="0.2s" data-aios-animation-reset="false" data-aios-animation-offset="0.3">
                  <div className="entry">
                    <div className="archive-thumbnail">
                      <Link to={`/blogs/${listOfBlogs && listOfBlogs[2].id}`}>
                        <canvas width="540" height="360" style={{backgroundImage: `url(${listOfBlogs ? listOfBlogs[2].url : img2})`}}></canvas>
                      </Link>
                    </div>
                    <div className="archive-content archive-has-thumbnail">
                      <h2 className="archive-subtitle">
                        <Link to={`/blogs/${listOfBlogs && listOfBlogs[2].id}`}>{listOfBlogs && listOfBlogs[2].title}</Link>
                      </h2>
                      <p>{listOfBlogs && listOfBlogs[2].content.slice(0, 400)}...</p>
                      <p>
                        <Link className="archive-more" to={`/blogs/${listOfBlogs && listOfBlogs[2].id}`}>Read more</Link>
                      </p>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </article>
              </div>
                ) : ''
              }
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