import React from 'react'
import posterImage from '../../../assets/home.jpg';

function Hero() {
  return (
    <section className="aios-scroll-section" data-aios-scroll-title="Slider">
            <h2 className="hidden">HP Slideshow</h2>
            <div className="slideshow-container">
                <div className="slideshow-wrapper">
                    <div className="cycloneslider cycloneslider-template-video cycloneslider-width-full" id="cycloneslider-hp-video-1">
                        <canvas width="1600" height="819" className="canvas-holder"></canvas>
                        <div className="cycloneslider-slides" data-cycle-allow-wrap="true" data-cycle-dynamic-height="off" data-cycle-auto-height="1600:819" data-cycle-auto-height-easing="null" data-cycle-auto-height-speed="250" data-cycle-delay="0" data-cycle-easing="" data-cycle-fx="fade" data-cycle-hide-non-active="true" data-cycle-log="false" data-cycle-next="#cycloneslider-hp-video-1 .cycloneslider-next" data-cycle-pager="#cycloneslider-hp-video-1 .cycloneslider-pager" data-cycle-pause-on-hover="false" data-cycle-prev="#cycloneslider-hp-video-1 .cycloneslider-prev" data-cycle-slides="> div" data-cycle-speed="1000" data-cycle-swipe="1" data-cycle-tile-count="7" data-cycle-tile-delay="100" data-cycle-tile-vertical="true" data-cycle-timeout="4000">
                            <div className="cycloneslider-slide cycloneslider-slide-custom">
                                <video id="slide-video" preload="none" poster={posterImage} style={{ width: '100%', height: 'auto' }} autoPlay muted playsInline loop onContextMenu={() => false} className="hp-vid">
                                    <source src='https://d3mpuupcc30lzt.cloudfront.net/fronts/welcome.mp4' type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slideshow-tagline">
                    <div className="textwidget custom-html-widget">
                        <div className="slideshow-tagline-slide">
                            <div className="slideshow-tagline-item">
                                <div className="slideshow-tagline-text is-sm">
                                    <span className="tagline-sm-1">Respected.</span>
                                    <span className="tagline-sm-2">Loyal.</span>
                                    <span className="tagline-sm-3">Relentless.</span>
                                    <span className="tagline-sm-4">Discreet.</span>
                                </div>
                            </div>
                            <div className="slideshow-tagline-item">
                                <div className="slideshow-tagline-text is-lg">
                                    <span className="tagline-sm-lg">Live your best life!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Hero