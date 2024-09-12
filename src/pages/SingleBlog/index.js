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
      <div ref={topOfPageRef}></div>
  <h2 className="aios-starter-theme-hide-title">Main Content</h2>
  {/* <!-- ip banner goes here --> */}
  <div className="textwidget custom-html-widget">
    <div className="ip-banner">
      <canvas width="1600" height="350" style={{backgroundImage: `url(${require('../../assets/images/slide-img-1.jpg')})`}}></canvas>
    </div>
  </div>
  {/* <!-- ip banner goes here --> */}
  <div style={{marginTop: 50}} id="inner-page-wrapper">
    <div className="container">
      <div id="content-full">
        <article id="content" className="hfeed">
          <p id="breadcrumbs">
            <span>
              <span property="itemListElement" typeof="ListItem">
                <a property="item" typeof="WebPage" href="https://serioestates.com/">
                  <span property="name">Home</span>
                </a>
                <meta property="position" content="1"/>
              </span> » <span className="breadcrumb_last" property="itemListElement" typeof="ListItem">
                <span property="name">Remodeling Projects That Will Boost Your Home’s Value</span>
                <meta property="position" content="2"/>
              </span>
            </span>
          </p>
          <div id="post-204" className="post-204 post type-post status-publish format-standard has-post-thumbnail hentry category-blog">
            <h1 className="entry-title">Remodeling Projects That Will Boost Your Home’s Value</h1>
            <div className="entry-thumbnail">
              <img width="1254" height="836" src={require('../../assets/images/demo-blog-3-1024x683.jpg')} className="attachment-full size-full wp-post-image" alt=""/>
            </div>
            <div className="entry entry-content">
              <p>There are two ways to think about remodeling projects that will boost your home’s value; you can get one or two major remodels done or opt for a bunch of small fixes. Depending on your budget and your timetable, one approach may be better for you than the other.</p>
              <p>For instance, if you have an unfinished basement, maybe your dream when you first moved into your home was to refinish it. It never happened. But now that you are thinking about selling your home, you feel that a prospective buyer would really appreciate a full finished basement. Is that the remodeling project that you should do before selling?</p>
              <p>On the other hand, you want to spend as little as possible to squeeze as much value out of your home. Maybe you would prefer to just spruce up the kitchen cabinets or repaint the house. Whichever camp you fall into here are some remodeling project ideas that usually add at least a few thousand dollars to the value of your home.</p>
              <p>
                <strong>Interior Improvements</strong>
              </p>
              <p>Depending on where you live, some remodeling projects bring in more dollars on resale than others. Here are some of the interior remodeling projects that can help boost your home’s value:</p>
              <p>
                <strong>Kitchen Upgrades:</strong>�&nbsp;Potential buyers these days want spacious, modern kitchens. Simple upgrades like adding new appliances, granite countertops, or new cabinets can pull in the big bucks. Some big-ticket improvements that usually add value include:
              </p>
              <ul>
                <li>Adding an island</li>
                <li>Adding a breakfast nook</li>
                <li>Adding new ceramic flooring</li>
                <li>Adding accent lighting</li>
              </ul>
              <p>
                <strong>Removing Walls:</strong>�&nbsp;The style right now is open concept kitchens and living rooms. If you have an older home, you could knock down a wall or two to really open up more interior space. If they’re load-bearing walls, removing them will usually push the price tag up. But non-load-bearing walls are easy to take out to add a pass-through window or a bigger entryway. Use a professional contractor to make sure the job is done right.
              </p>
              <p>
                <strong>Room Additions:</strong>�&nbsp;Believe it or not, adding a new room to your home is not as expensive as you might think and can greatly increase your home’s value. Think about converting your attic into a spare room or building a new room addition onto your house. The added space increases the overall square footage of your property and will push your asking price up.
              </p>
              <p>
                <strong>Exterior Improvements</strong>
              </p>
              <p>They are often overlooked when making improvements to your home, but there are a number of exterior projects that can boost your home’s value. Here are just a few ideas for exterior improvements:</p>
              <ul>
                <li>
                  <strong>Outdoor Living Space:</strong>�&nbsp;Especially in warm weather climates, buyers want a home with comfortable outdoor living spaces. That could mean adding in a slate patio or a wooden deck. Make your outdoor living space an oasis by adding in path lights, pathways, plants, shrubs, and trees.
                </li>
                <li>
                  <strong>Siding Upgrades:</strong>�&nbsp;If you are making simple upgrades on the cheap just to spiff up your home exterior, a good paint job will do. To really boost your home’s value try adding new siding. If you replace portions of your siding with stone veneers, it will greatly improve curb appeal and your home’s value.
                </li>
                <li>
                  <strong>Driveways/Garages:</strong>�&nbsp;If you haven’t paved your driveway in a while, new paving is an excellent exterior improvement that makes a good impression as soon as buyers pull up to your home. Your garage doors and exterior also make a good or bad impression. Even if you do not make any changes to your garage, you should clean it out and organize its contents for resale. Replace broken windows and locks and give it a good paint job.
                </li>
              </ul>
              <p>A qualified agent with years of experience in the real estate market can help you determine the best improvements to make based on your particular market. When you’re ready to learn more, connect with us today. We’re happy to help!</p>
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