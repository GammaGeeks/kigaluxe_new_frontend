/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlogAction } from '../../redux/actions/blog'

function SingleBlog() {
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(fetchBlogAction(id))
  }, [dispatch, id])

  const data = useSelector(state => state.blog)

  // eslint-disable-next-line no-unused-vars
  const { loading, blog, getBlog, message } = data

  const topOfPageRef = useRef(null)
  useEffect(() => {
    if (topOfPageRef.current) {
      topOfPageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    }
  }, [])

  return (
    <main>
      <div style={{
    marginTop: '200px !important',
    padding: '15px 15px !important'
  }} ref={topOfPageRef}></div>
  <h2 className="aios-starter-theme-hide-title">Main Content</h2>
  {/* <!-- ip banner goes here --> */}
  <div className="textwidget custom-html-widget">
    <div className="ip-banner">
      <canvas width="1600" height="350" style={{backgroundImage: `url('${require('../../assets/images/slide-img-1.jpg')}')`}}></canvas>
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
                <a property="item" typeof="WebPage" href="#">
                  <span property="name">Home</span>
                </a>
                <meta property="position" content="1"/>
              </span> » <span className="breadcrumb_last" property="itemListElement" typeof="ListItem">
                <span property="name">{blog && blog.title}</span>
                <meta property="position" content="2"/>
              </span>
            </span>
          </p>
          <div id="post-204" className="post-204 post type-post status-publish format-standard has-post-thumbnail hentry category-blog">
            <h1 className="entry-title">{blog && blog.title}</h1>
            <div className="entry-thumbnail">
              <img width="1254" height="836" src={blog && blog.url} className="attachment-full size-full wp-post-image" alt=""/>
            </div>
            <div className="entry entry-content">
              <p>{blog && blog.content}</p>
            </div>
            <div className="comments-template"></div>
          </div>
          <div className="back-to-link">
            <Link to='/blog' className="global-btn">Back To Blog</Link>
          </div>
          <div className="navigation"></div>
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

export default SingleBlog