/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-target-blank */
import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Insta() {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      const options = {
        method: 'GET',
        url: 'https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts?username_or_id_or_url=KigaluXe',
        headers: {
          'X-RapidAPI-Key': 'e004b7e5b7msh7e5785fac41c858p14ffe2jsn6dc17503a9a5',
          'X-RapidAPI-Host': 'instagram-scraper-api2.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setPosts(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
        setError('Failed to fetch Instagram posts');
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  console.log('POSTS',posts);
  return (
    <section id="social-media" className="aios-scroll-section" data-aios-scroll-title="Social Media">
            <div className="textwidget custom-html-widget">
                <div className="sm-container">
                    <div className="sm-bg attachment-fixed">
                        <canvas width="716" height="639" className="lazyload" data-bgset="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/sm-bg.jpg"></canvas>
                    </div>
                    <div className="global-accent-letter">
                        <span>S</span>
                    </div>
                    <div className="global-accent-bar attachment-fixed">
                        <canvas width="70" height="353" className="lazyload" data-bgset="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/accent-gradient.jpg"></canvas>
                    </div>
                    <div className="custom-container">
                        <div className="sm-main">
                            <div className="global-title is-centered" data-aos-once="true" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                                <h2>
                                    <small>
                                        <em className="global-logo-icon">
                                            <i className="global-extra-line"></i>
                                            <i className="global-outline"></i>
                                        </em>Follow Us On </small>
                                    <span>Social Media</span>
                                </h2>
                            </div>
                            <div className="sm-caption" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                <p>Follow us on social media for the most exclusive real estate news and <br/> photos from our amazing listings with updates and more. </p>
                            </div>
                            <div className="sm-label-holder" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                <div className="sm-follow-holder">
                                    <div className="sm-follow-img">
                                        <canvas width="96" height="96" className="lazyload" data-bgset="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/ig_serioteam.jpg"></canvas>
                                    </div>
                                    <div className="sm-follow-btn">
                                        <span>@{posts && posts.user && posts.user.username}</span>
                                        <a href={`https://www.instagram.com/${posts && posts.user && posts.user.username}/`} className="global-btn" target="_blank" rel="noopener">Follow <em className="ai-font-instagram"></em>
                                        </a>
                                    </div>
                                </div>
                                <div className="sm-follow-smi-holder">
                                    <span>Check Us Out On Other Social Media Platforms:</span>
                                    <div className="sm-follow-smi">
                                        <a href="https://www.instagram.com/kigaluxe/" target="_blank" rel="noopener">
                                            <span className="ai-font-instagram">
                                                <em className="hidden">Instagram</em>
                                            </span>
                                        </a>
                                        <a href="https://www.facebook.com/Kigaluxe/" target="_blank" rel="noopener">
                                            <span className="ai-font-facebook">
                                                <em className="hidden">Facebook</em>
                                            </span>
                                        </a>
                                        <a href="https://www.tiktok.com/@kigaluxe" target="_blank" rel="noopener">
                                            <span className="ai-font-tiktok">
                                                <em className="hidden">tiktok</em>
                                            </span>
                                        </a>
                                        <a href="https://www.linkedin.com/company/" target="_blank" rel="noopener">
                                            <span className="ai-font-linkedin">
                                                <em className="hidden">Linkedin</em>
                                            </span>
                                        </a>
                                        <a href="https://www.youtube.com/@kigaluxe" target="_blank" rel="noopener">
                                            <span className="ai-font-youtube">
                                                <em className="hidden">youtube</em>
                                            </span>
                                        </a>
                                        <a href="https://twitter.com/KigaluXe" target="_blank" rel="noopener">
                                            <span className="ai-font-twitter">
                                                <em className="hidden">twitter</em>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="sm-list">
                              {
                                posts && posts.items.slice(0, 6).map((post)=> (
                                    <div key={post.code} className="sm-item" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                                        <a href={`https://www.instagram.com/p/${post.code}/`} target="_blank" rel="noopener">
                                            <div className="sm-img site-img">
                                                <canvas width="219" height="235"></canvas>
                                                <img className="lazyload" src={post.image_versions[0]} alt="Instagram Photo" width="219" height="235"/>
                                            </div>
                                            <div className="sm-hover-details">
                                                <span>
                                                    <em className="ai-icon-heart"></em>
                                                </span>
                                                <span>
                                                    <em className="ai-icon-comment"></em>
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                ))
                              }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Insta