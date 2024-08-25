/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

function SocialMedia() {
  return (
    <div id="scroll-down">
        <ul className="aios-section-nav"></ul>
        <div className="textwidget custom-html-widget">
            <div id="fixed-smi">
                <div className="fixed-smi-holder">
                    <ul>
                        <li>
                            <a href="https://instagram.com/seriogroup" target="_blank" rel="noopener">
                                <span className="ai-font-instagram">
                                    <em className="hidden">Instagram</em>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/SerioEstates/" target="_blank" rel="noopener">
                                <span className="ai-font-facebook">
                                    <em className="hidden">Facebook</em>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.tiktok.com/@seriogroup" target="_blank" rel="noopener">
                                <span className="ai-font-tiktok">
                                    <em className="hidden">tiktok</em>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/serio-estates-group?trk=public_profile_topcard-current-company" target="_blank" rel="noopener">
                                <span className="ai-font-linkedin">
                                    <em className="hidden">Linkedin</em>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@seriogroup" target="_blank" rel="noopener">
                                <span className="ai-font-youtube">
                                    <em className="hidden">youtube</em>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="fixed-smi-label">
                    <span>Follow Us</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SocialMedia