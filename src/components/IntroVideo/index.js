import React from 'react'

import intro from '../../assets/98c38821-98e2f416.mp4'

function IntroVideo() {
  return (
    <div className="intro-video">
        <div className="intro-inner">
            <div className="textwidget custom-html-widget">
                <video preload="none" autoPlay muted playsInline>
                    <source src={intro} type="video/mp4"/>
                </video>
            </div>
        </div>
    </div>
  )
}

export default IntroVideo