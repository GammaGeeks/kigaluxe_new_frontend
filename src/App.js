/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from './logo.svg';
// import './styles/App.scss';
import React, { useEffect, useRef } from 'react'
import $ from 'jquery'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { setLocaleData } from '@wordpress/i18n';
// import popUp from './assets/images/popup-bg.jpg'
// import logo1 from './assets/images/site-logo.png'
// import logo2 from './assets/images/site-logo.png'
import FixedHeader from './components/Navigation/FixedHeader';
import Header from './components/Navigation/Header';
import SideMenu from './components/Navigation/SideMenu';
import SocialMedia from './components/Navigation/SocialMedia';
import FooterPart from './components/Footer';
import Testimonials from './components/HomePage/Testimonials';
import Places from './components/HomePage/Places';
// import Waypoint from 'waypoints/lib/noframework.waypoints';

// import './assets/js/hooks.min.js'
// import './assets/js/side-navigation.js'
// import './assets/js/scripts_2.js'
// import './assets/js/bundle.min.js'

// Make sure to include jQuery plugin code here or import it if it's in a separate file
(function($) {
  $.fn.splitNav = function(options) {
    return $(this).each(function() {
      options = $.extend({
        navClasses: "",
        logo: "",
        logoClasses: "",
        bootstrap: "",
        roundoff: "",
        splitCount: 0,
        splitCountEqual: true
      }, options);

      const id = $(this).attr("id");
      let a = ".aios-split-nav";
      if (id !== "") a = "." + id;

      const cloned = $(this).clone();
      const items = cloned.children("li");
      let r = 1;
      let splitCount = options.splitCount;

      if (options.roundoff === 1 || (options.roundoff === "" && options.splitCount === 0)) {
        splitCount = Math.ceil(items.length / 2);
      }
      if (options.roundoff === 0 && options.splitCount === 0) {
        splitCount = items.length / 2;
      }

      for (let i = 0; i < items.length; i += splitCount) {
        const end = (options.splitCount !== 0 && options.splitCountEqual === false && r === 2) ? 99 : i + splitCount;
        items.slice(i, end).wrapAll(`<ul class="aios-split-nav ${id} ${options.navClasses}"></ul>`);
        if (options.splitCount !== 0 && options.splitCountEqual === false && r === 2) break;
        r++;
      }

      $(this).replaceWith(cloned.find(a));
      if ($(options.logo).length > 0) {
        $(options.logo).eq(0).insertAfter(`${a}:first`);
        $(options.logo).addClass(options.logoClasses);
      }
      if (options.bootstrap === 1) $(a).parent().addClass("row");
    });
  };
})($);

function App() {
  const navRef = useRef(null);

  useEffect(() => {
    $(navRef.current).splitNav({
      navClasses: 'custom-nav-class',
      logo: '.logo',
      logoClasses: 'logo-class',
      bootstrap: 1,
      roundoff: 1
    });
  }, []);

  useEffect(() => {
    const script = `
      (function() {
        "use strict";
        const e = window.wp.i18n,
              t = e => Math.abs(parseInt(e, 10)),
              a = (e, t, a) => {
                const n = new CustomEvent(\`wpcf7\${t}\`, {
                  bubbles: !0,
                  detail: a
                });
                "string" == typeof e && (e = document.querySelector(e)),
                e.dispatchEvent(n)
              },
              n = (e, t) => {
                const n = new Map([["init", "init"], ["validation_failed", "invalid"], ["acceptance_missing", "unaccepted"], ["spam", "spam"], ["aborted", "aborted"], ["mail_sent", "sent"], ["mail_failed", "failed"], ["submitting", "submitting"], ["resetting", "resetting"], ["validating", "validating"], ["payment_required", "payment-required"]]);
                n.has(t) && (t = n.get(t)),
                Array.from(n.values()).includes(t) || (t = \`custom-\${t = (t = t.replace(/[^0-9a-z]+/i, " ").trim()).replace(/\\s+/, "-")}\`);
                const r = e.getAttribute("data-status");
                if (e.wpcf7.status = t,
                e.setAttribute("data-status", t),
                e.classList.add(t),
                r && r !== t) {
                  e.classList.remove(r);
                  const t = {
                    contactFormId: e.wpcf7.id,
                    pluginVersion: e.wpcf7.pluginVersion,
                    contactFormLocale: e.wpcf7.locale,
                    unitTag: e.wpcf7.unitTag,
                    containerPostId: e.wpcf7.containerPost,
                    status: e.wpcf7.status,
                    prevStatus: r
                  };
                  a(e, "statuschanged", t)
                }
                return t
              },
              r = e => {
                const { root: t, namespace: a = "contact-form-7/v1" } = wpcf7.api;
                return o.reduceRight(((e, t) => a => t(a, e)), (e => {
                  let n, r, { url: o, path: c, endpoint: s, headers: i, body: l, data: p, ...d } = e;
                  "string" == typeof s && (n = a.replace(/^\\/|\\/$/, ""),
                  r = s.replace(/^\\/+/, ""),
                  c = r ? n + "/" + r : n),
                  "string" == typeof c && (-1 !== t.indexOf("?") && (c = c.replace("?", "&")),
                  c = c.replace(/^\\/+/, ""),
                  o = t + c),
                  i = {
                    Accept: "application/json, */*;q=0.1",
                    ...i
                  },
                  delete i["X-WP-Nonce"],
                  p && (l = JSON.stringify(p),
                  i["Content-Type"] = "application/json");
                  const f = {
                    code: "fetch_error",
                    message: "You are probably offline."
                  },
                        u = {
                    code: "invalid_json",
                    message: "The response is not a valid JSON response."
                  };
                  return window.fetch(o || c || window.location.href, {
                    ...d,
                    headers: i,
                    body: l
                  }).then(e => Promise.resolve(e).then(e => {
                    if (e.status >= 200 && e.status < 300)
                      return e;
                    throw e
                  })).then(e => {
                    if (204 === e.status)
                      return null;
                    if (e && e.json)
                      return e.json().catch(() => {
                        throw u
                      });
                    throw u
                  }), () => {
                    throw f
                  }
                }))(e)
              },
              o = [];
        function c(e, t = {}) {
          const { target: a, scope: r = e, ...o } = t;
          if (void 0 === e.wpcf7?.schema)
            return;
          const c = {
            ...e.wpcf7.schema
          };
          if (void 0 !== a) {
            if (!e.contains(a))
              return;
            if (!a.closest(".wpcf7-form-control-wrap[data-name]"))
              return;
            if (a.closest(".novalidate"))
              return
          }
          const p = r.querySelectorAll(".wpcf7-form-control-wrap");
const d = Array.from(p).reduce((e, t) => {
  if (t.closest(".novalidate")) return e;
  t.querySelectorAll(":where(input, textarea, select):enabled").forEach(t => {
    if (t.name) {
      switch (t.type) {
        case "button":
        case "image":
        case "reset":
        case "submit":
          break;
        case "checkbox":
        case "radio":
          if (t.checked) e.append(t.name, t.value);
          break;
        case "select-multiple":
          for (const a of t.selectedOptions) {
            e.append(t.name, a.value);
          }
          break;
        case "file":
          for (const a of t.files) {
            e.append(t.name, a);
          }
          break;
        default:
          e.append(t.name, t.value);
      }
    }
  });
  return e;
}, new FormData()),
                f = e.getAttribute("data-status");
          Promise.resolve(n(e, "validating")).then(n => {
            if (void 0 !== swv) {
              const n = swv.validate(c, d, t);
              for (const t of p) {
                if (void 0 === t.dataset.name)
                  continue;
                const o = t.dataset.name;
                if (n.has(o)) {
                  const { error: t, validInputs: a } = n.get(o);
                  i(e, o),
                  void 0 !== t && s(e, o, t, {
                    scope: r
                  }),
                  l(e, o, null != a ? a : [])
                }
                if (t.contains(a))
                  break
              }
            }
          }).finally(() => {
            n(e, f)
          })
        }
        r.use = e => {
          o.unshift(e)
        };
        const s = (e, t, a, n) => {
          const { scope: r = e, ...o } = null != n ? n : {},
                c = \`\${e.wpcf7?.unitTag}-ve-\${t}\`.replaceAll(/[^0-9a-z_-]+/gi, ""),
                s = e.querySelector(\`.wpcf7-form-control-wrap[data-name="\${t}"] .wpcf7-form-control\`);
          (() => {
            const t = document.createElement("li");
            t.setAttribute("id", c),
            s && s.id ? t.insertAdjacentHTML("beforeend", \`<a href="#\${s.id}">\${a}</a>\`) : t.insertAdjacentText("beforeend", a),
            e.wpcf7.parent.querySelector(".screen-reader-response ul").appendChild(t)
          })(),
          r.querySelectorAll(\`.wpcf7-form-control-wrap[data-name="\${t}"]\`).forEach(e => {
            const t = document.createElement("span");
            t.classList.add("wpcf7-not-valid-tip"),
            t.setAttribute("aria-hidden", "true"),
            t.insertAdjacentText("beforeend", a),
            e.appendChild(t),
            e.querySelectorAll("[aria-invalid]").forEach(e => {
              e.setAttribute("aria-invalid", "true")
            }),
            e.querySelectorAll(".wpcf7-form-control").forEach(e => {
              e.classList.add("wpcf7-not-valid"),
              e.setAttribute("aria-describedby", c),
              "function" == typeof e.setCustomValidity && e.setCustomValidity(a),
              e.closest(".use-floating-validation-tip") && (e.addEventListener("focus", e => {
                t.setAttribute("style", "display: none")
              }), t.addEventListener("click", e => {
                t.setAttribute("style", "display: none")
              }))
            })
          })
        },
        i = (e, t) => {
          const a = \`\${e.wpcf7?.unitTag}-ve-\${t}\`.replaceAll(/[^0-9a-z_-]+/gi, "");
          e.wpcf7.parent.querySelector(\`#\${a}\`)?.remove(),
          e.querySelectorAll(\`.wpcf7-form-control-wrap[data-name="\${t}"] .wpcf7-not-valid-tip\`).forEach(e => {
            e.remove(),
            e.closest(".wpcf7-form-control")?.removeAttribute("aria-invalid"),
            e.closest(".wpcf7-form-control")?.removeAttribute("aria-describedby"),
            e.closest(".wpcf7-form-control")?.classList.remove("wpcf7-not-valid")
          })
        },
        l = (e, t, a) => {
          const n = e.querySelectorAll(\`.wpcf7-form-control-wrap[data-name="\${t}"] .wpcf7-form-control\`);
          for (const e of n) {
            e.classList.remove("wpcf7-not-valid"),
            e.removeAttribute("aria-invalid"),
            e.removeAttribute("aria-describedby"),
            "function" == typeof e.setCustomValidity && e.setCustomValidity("")
          }
          if (a.length) {
            const t = e.querySelector(\`.wpcf7-form-control-wrap[data-name="\${t}"]\`);
            if (t) {
              const e = document.createElement("span");
              e.classList.add("wpcf7-valid-tip"),
              e.setAttribute("aria-hidden", "true"),
              e.insertAdjacentText("beforeend", "\${a.join(", ")}"),
              t.appendChild(e),
              t.querySelectorAll(".wpcf7-form-control").forEach(e => {
                e.setAttribute("aria-describedby", \`\${e.wpcf7?.unitTag}-ve-\${t}\`),
                e.closest(".use-floating-validation-tip") && (e.addEventListener("focus", e => {
                  e.target.closest(".wpcf7-form-control-wrap").querySelector(".wpcf7-valid-tip")?.setAttribute("style", "display: none")
                }), e.addEventListener("click", e => {
                  e.target.closest(".wpcf7-form-control-wrap").querySelector(".wpcf7-valid-tip")?.setAttribute("style", "display: none")
                }))
              })
            }
          }
        },
        u = (e, t, a) => {
          const { scope: n = e, ...r } = a;
          return e.wpcf7.status !== "init" && void 0 !== t ? (c(e, t),
          void 0 !== t.message && (e.classList.add("wpcf7-not-valid"),
          e.setAttribute("aria-invalid", "true"),
          e.setAttribute("aria-describedby", \`\${e.wpcf7.unitTag}-ve-\${t.message.replace(/[^0-9a-z]+/i, " ").trim().replace(/\\s+/, "-")}\`))) : (e.classList.remove("wpcf7-not-valid"),
          e.removeAttribute("aria-invalid"),
          e.removeAttribute("aria-describedby")),
          Promise.resolve(r)
        };
        window.wpcf7 = { r, c, n, s, i, l, u, a, o, "contact-form-7": window.wpcf7 }
      })();
    `;
    const scriptElement = document.createElement('script');
    scriptElement.type = 'text/javascript';
    scriptElement.text = script;
    document.body.appendChild(scriptElement);
  }, []);

  useEffect(() => {
    /*** Referrer Check and Body Class Manipulation ***/
    const docRef = document.referrer || '';
    if (
      docRef.indexOf('https://serioestates.com') !== -1 &&
      !document.body.classList.contains('user-navigated-from-a-page-on-the-site')
    ) {
      document.body.classList.add('user-navigated-from-a-page-on-the-site');
    }

    /*** WP i18n Locale Data Initialization ***/
    setLocaleData({ 'text direction\u0004ltr': ['ltr'] });

    /*** Contact Form 7 Configuration ***/
    window.wpcf7 = {
      api: {
        root: 'https://serioestates.com/wp-json/',
        namespace: 'contact-form-7/v1',
      },
    };

    /*** jQuery Ready Function ***/
    $(document).ready(function () {
      $("a[href='#']").each(function (i, v) {
        $(v).addClass('aios-initial-setup-dead-link');
      });

      $("a[href='#']").on('click', function (e) {
        e.preventDefault();
      });
    });

    /*** Initialize AOS (Animate On Scroll) ***/
    AOS.init({ disable: 'mobile' });

    /*** Set Form Page Source URL ***/
    const formPageSources = document.querySelectorAll('.form-page-source');
    formPageSources.forEach((field) => {
      field.defaultValue = window.location.href;
    });

    /*** Additional Scripts Initialization ***/
    // For other scripts like Splide, LazyLoad, etc.,
    // consider using their respective npm packages and initializing them here.

  }, []); // Reference to the main element

  // useEffect(() => {
  //   // Ensure the element exists before running the script
  //   if (navRef.current) {
  //     $(navRef.current).sideNavigation({
  //       // Your options here
  //       sectionClass: "aios-scroll-section",
  //       sectionAttrTitle: "data-aios-scroll-title",
  //       skipSectionId: "",
  //       navSectionClass: "aios-section-nav",
  //       navSectionAppend: '<li class="{{scroll-id}}"><span class="scroll-section-title">{{scroll-title}}</span><a href="{{scroll-id}}" class="scroll-section-dot"><em style="font-size: 0 !important;">{{scroll-title}}</em></a></li>',
  //       navLinkId: "aios-scroll-id-",
  //       navArrow: false,
  //       scrollSpeed: 1500,
  //       // other options...
  //     });
  //   }
  // }, [navRef]);

  return (
  <div id="main-wrapper">
    <FixedHeader />
    <Header />
    <SideMenu />
    <SocialMedia />
    {/* <div id="join-our-mailing-list" className="site-popup-container">
        <div className="site-popup-wrapper">
            <div className="site-popup-main">
                <button className="site-popup-close ai-font-close-b" aria-label="Close"></button>
                <div className="textwidget custom-html-widget">
                    <div className="site-popup-row">
                        <div className="site-popup-col">
                            <div className="site-popup-content-container">
                                <div className="site-popup-bg">
                                    <canvas width="468" height="433" style={{backgroundImage: `url(${popUp})`}}></canvas>
                                </div>
                                <div className="global-title is-centered is-white">
                                    <img src="images/accent-logo-b.png" alt="Serio Group Logo" width="68" height="68"/>
                                    <h2>
                                        <small>Join Our</small>
                                        <span>Vip Mailing List</span>
                                    </h2>
                                </div>
                                <div className="site-popup-caption">
                                    <p>Be the first to receive exclusive <br/> listings and market updates. </p>
                                </div>
                                <div className="site-popup-form-widget">
                                    <div className="wpcf7 no-js" id="wpcf7-f23-o1" lang="en-US" dir="ltr">
                                        <div className="screen-reader-response">
                                            <p role="status" aria-live="polite" aria-atomic="true"></p>
                                            <ul></ul>
                                        </div>
                                        <form action="/#wpcf7-f23-o1" method="post" className="wpcf7-form init use-floating-validation-tip" aria-label="Contact form" noValidate="noValidate" data-status="init">
                                            <div style={{display: 'none'}}>
                                                <input type="hidden" name="_wpcf7" defaultValue="23" onChange={() => {}}/>
                                                <input type="hidden" name="_wpcf7_version" defaultValue="5.9.8" onChange={() => {}}/>
                                                <input type="hidden" name="_wpcf7_locale" defaultValue="en_US" onChange={() => {}}/>
                                                <input type="hidden" name="_wpcf7_unit_tag" defaultValue="wpcf7-f23-o1" onChange={() => {}}/>
                                                <input type="hidden" name="_wpcf7_container_post" defaultValue="0" onChange={() => {}}/>
                                                <input type="hidden" name="_wpcf7_posted_data_hash" defaultValue="" onChange={() => {}}/>
                                            </div>
                                            <div id="wpcf7-66c195ec08999" style={{display: 'none !important', visibility:'hidden !important'}}>
                                                <input type="hidden" name="form-page-source" className="form-page-source" defaultValue="https://serioestates.com/" onChange={() => {}}/>
                                                <input type="hidden" name="queen-bee-id" defaultValue="wpcf7-66c195ec08999"/>
                                                <input type="hidden" name="wpcf7-66c195ec08999-website-remote-address" defaultValue="127.0.0.1" onChange={() => {}}/>
                                                <input type="hidden" name="wpcf7-66c195ec08999-website-time-start" defaultValue="1723962860" onChange={() => {}}/>
                                                <input type="hidden" name="wpcf7-66c195ec08999-website-time-check" defaultValue="5" onChange={() => {}}/>
                                                <label htmlFor="wpcf7-66c195ec08999-website" className="hp-message">Choose Side:</label>
                                                <input type="text" name="wpcf7-66c195ec08999-website" id="wpcf7-66c195ec08999-website" tabIndex="-1" autoComplete="off"/>
                                            </div>
                                            <div id="wpcf7-66c195ec08993" style={{display: 'none !important', visibility:'hidden !important'}}>
                                                <input type="hidden" name="queen-bee-id" defaultValue="wpcf7-66c195ec08993" onChange={() => {}}/>
                                                <input type="hidden" name="wpcf7-66c195ec08993-website-remote-address" defaultValue="127.0.0.1" onChange={() => {}}/>
                                                <input type="hidden" name="wpcf7-66c195ec08993-website-time-start" defaultValue="1723962860" onChange={() => {}}/>
                                                <input type="hidden" name="wpcf7-66c195ec08993-website-time-check" defaultValue="5" onChange={() => {}}/>
                                                <label htmlFor="wpcf7-66c195ec08993-website" className="hp-message">Choose Side:</label>
                                                <input type="text" name="wpcf7-66c195ec08993-website" id="wpcf7-66c195ec08993-website" tabIndex="-1" autoComplete="false"/>
                                            </div>
                                            <div className="site-popup-form">
                                                <div className="site-popup-field">
                                                    <label className="hidden" htmlFor="popup-email">Email Address</label>
                                                    <span className="wpcf7-form-control-wrap" data-name="your-email">
                                                        <input size="40" maxLength="400" className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" id="popup-email" aria-required="true" aria-invalid="false" placeholder="Email Address" defaultValue="" type="email" name="your-email"  onChange={() => {}}/>
                                                    </span>
                                                </div>
                                                <div className="site-popup-field form-submit">
                                                    <button type="submit" className="global-btn is-white">Join Us</button>
                                                    <span className="ajax-loader"></span>
                                                </div>
                                            </div>
                                            <div className="wpcf7-response-output" aria-hidden="true"></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="site-popup-col">
                            <div className="site-popup-agent-img">
                                <img src="images/team-photo-c.jpg" alt="Serio Group Photo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* <div className="intro-video">
        <div className="intro-inner">
            <div className="textwidget custom-html-widget">
                <video preload="none" autoPlay={true} muted={true} playsInline={true}>
                    <source src="98c38821-98e2f416" type="video/mp4"/>
                </video>
            </div>
        </div>
    </div> */}
    <main>
        <h2 className="aios-starter-theme-hide-title">Main Content</h2>
        {/* <!-- ip banner goes here -->
        <!-- ip banner goes here -->
        <!-- Slideshow --> */}
        <section className="aios-scroll-section" data-aios-scroll-title="Slider">
            <h2 className="hidden">HP Slideshow</h2>
            <div className="slideshow-container">
                <div className="slideshow-wrapper">
                    <div className="cycloneslider cycloneslider-template-video cycloneslider-width-full" id="cycloneslider-hp-video-1">
                        <canvas width="1600" height="819" className="canvas-holder"></canvas>
                        <div className="cycloneslider-slides" data-cycle-allow-wrap="true" data-cycle-dynamic-height="off" data-cycle-auto-height="1600:819" data-cycle-auto-height-easing="null" data-cycle-auto-height-speed="250" data-cycle-delay="0" data-cycle-easing="" data-cycle-fx="fade" data-cycle-hide-non-active="true" data-cycle-log="false" data-cycle-next="#cycloneslider-hp-video-1 .cycloneslider-next" data-cycle-pager="#cycloneslider-hp-video-1 .cycloneslider-pager" data-cycle-pause-on-hover="false" data-cycle-prev="#cycloneslider-hp-video-1 .cycloneslider-prev" data-cycle-slides="> div" data-cycle-speed="1000" data-cycle-swipe="1" data-cycle-tile-count="7" data-cycle-tile-delay="100" data-cycle-tile-vertical="true" data-cycle-timeout="4000">
                            <div className="cycloneslider-slide cycloneslider-slide-custom">
                                <video id="slide-video" preload="none" poster={require('./assets/home.jpg')} style={{ width: '100%', height: 'auto' }} autoPlay muted playsInline loop onContextMenu={() => false} className="hp-vid">
                                    <source src={require('./assets/new.mp4')} type="video/mp4" />
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
        {/* <!-- Quick Search --> */}
        <section id="quicksearch" className="aios-scroll-section" data-aios-scroll-title="Quick Search">
            <div id="content"></div>
            <div className="textwidget custom-html-widget">
                <div className="qs-container">
                    <div className="qs-bg attachment-fixed">
                        <canvas width="1340" height="320" className="lazyload" data-bgset="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/qs-bg.jpg"></canvas>
                    </div>
                    <div className="custom-container">
                        <div className="global-accent-letter">
                            <span>S</span>
                        </div>
                        <div className="global-title is-centered" data-aos-once="true" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                            <h2>
                                <small>
                                    <em className="global-logo-icon">
                                        <i className="global-outline"></i>
                                    </em>Quick </small>
                                <span>Search</span>
                            </h2>
                        </div>
                        <div className="qs-main" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                            <div className="qs-form-bg attachment-fixed">
                                <canvas width="1340" height="320" className="lazyload" data-bgset="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/qs-bg.jpg"></canvas>
                            </div>
                            <form className="qs-form" action="https://serioestates.com/homes-for-sale-results/" method="GET">
                                <div className="qs-field long">
                                    <span className="qs-label">Property Type</span>
                                    <div className="qs-field-holder">
                                        <select aria-label="Property Type" name="propertyType" onChange={() => {}}>
                                            <option defaultValue="">Property Type</option>
                                            <option defaultValue="1">House / Condo</option>
                                            <option defaultValue="2">Condo Only</option>
                                            <option defaultValue="3">Lots / Land</option>
                                            <option defaultValue="4">Multi-Unit Residential</option>
                                            <option defaultValue="5">Rental</option>
                                            <option defaultValue="6">Commercial</option>
                                        </select>
                                        <span className="qs-icon ai-icon-pin"></span>
                                    </div>
                                </div>
                                <div className="qs-field mlong">
                                    <span className="qs-label">Select a City</span>
                                    <div className="qs-field-holder">
                                        {/* <!-- <select aria-label="Select a City" name="cityZip"><option defaultValue="0"></option></select> --> */}
                                        <select name="cityzip" id="cityzip" data-type="cityzip" className="qs-select " multiple="" title="Select a City" aria-labelledby="cityzip"></select>
                                        <span className="qs-icon ai-icon-city"></span>
                                    </div>
                                </div>
                                <div className="qs-field short-b">
                                    <span className="qs-label">Beds</span>
                                    <div className="qs-field-holder">
                                        <select aria-label="Beds" name="bedrooms" onChange={() => {}}>
                                            <option defaultValue="">Beds</option>
                                            <option defaultValue="1">1</option>
                                            <option defaultValue="2">2</option>
                                            <option defaultValue="3">3</option>
                                            <option defaultValue="4">4</option>
                                            <option defaultValue="5">5</option>
                                        </select>
                                        <span className="qs-icon ai-icon-bed"></span>
                                    </div>
                                </div>
                                <div className="qs-field short-b fl-r">
                                    <span className="qs-label">Baths</span>
                                    <div className="qs-field-holder">
                                        <select aria-label="Baths" name="bathCount" onChange={() => {}}>
                                            <option defaultValue="">Baths</option>
                                            <option defaultValue="1">1</option>
                                            <option defaultValue="2">2</option>
                                            <option defaultValue="3">3</option>
                                            <option defaultValue="4">4</option>
                                            <option defaultValue="5">5</option>
                                        </select>
                                        <span className="qs-icon ai-icon-bath"></span>
                                    </div>
                                </div>
                                <div className="qs-field short-i">
                                    <span className="qs-label">Min. $</span>
                                    <div className="qs-field-holder">
                                        <input aria-label="Min Price" type="text" id="minprice" name="minListPrice" placeholder="Min Price"/>
                                        <span className="qs-icon ai-icon-dollar"></span>
                                    </div>
                                </div>
                                <div className="qs-field short-i fl-r">
                                    <span className="qs-label">Max. $</span>
                                    <div className="qs-field-holder">
                                        <input aria-label="Max Price" type="text" id="maxprice" name="maxListPrice" placeholder="Max Price"/>
                                        <span className="qs-icon ai-icon-dollar"></span>
                                    </div>
                                </div>
                                <div className="qs-field submit">
                                    <button className="global-btn">Search</button>
                                </div>
                            </form>
                            <div className="qs-disclaimer">
                                <span>Real Estate IDX Powered By IhomeFinder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Welcome --> */}
        <section id="welcome" className="aios-scroll-section" data-aios-scroll-title="Welcome">
            <div className="textwidget custom-html-widget">
                <div className="welc-container">
                    <div className="welc-bg attachment-fixed">
                        <canvas width="1600" height="780" className="lazyload" data-bgset="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/welc-bg.jpg"></canvas>
                    </div>
                    <div className="welc-main">
                        <div className="welc-row">
                            <div className="welc-col">
                                <div className="welc-content-container is-left">
                                    <div className="global-title" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                        <h2>
                                            <small>
                                                <em className="global-logo-icon">
                                                    <i className="global-outline"></i>
                                                </em>Waruka </small>
                                            <span>Serio</span>
                                        </h2>
                                    </div>
                                    <div className="welc-content" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                        <p>It seems that from an early age, Waruka was destined to sell luxury real estate. As a young girl in Thailand, Waruka used to accompany her mother on real estate appointments, where she would listen intently to the negotiations. She was a quick study and loved everything about the process, and soon her mom had her negotiating deals on her own! Waruka Serio became a young entrepreneur starting her own business at the age of 14, all the while working with her mom in real estate. Waruka later immigrated to the United States, eventually meeting her future husband Ron Serio. She decided to parlay her 15 years of experience, with Ron’s own expertise to form the Serio Group, specializing in luxury real estate.</p>
                                    </div>
                                    <div className="welc-content-btn" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                        <a href="/meet-waruka-serio/" className="global-btn">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="welc-col">
                                <div className="welc-img-holder">
                                    <div className="welc-img" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                                        <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/team-photo.png" alt="Serio Group Photo" width="495" height="610" />
                                    </div>
                                    <div className="welc-img-accent-bg">
                                        <canvas width="542" height="872" className="lazyload" data-bgset="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/welc-accent-logo.png"></canvas>
                                    </div>
                                </div>
                            </div>
                            <div className="welc-col">
                                <div className="welc-content-container is-right">
                                    <div className="global-title" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                        <h2>
                                            <small>
                                                <em className="global-logo-icon">
                                                    <i className="global-outline"></i>
                                                </em>Ron </small>
                                            <span>Serio</span>
                                        </h2>
                                    </div>
                                    <div className="welc-content" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                        <p>Over his highly successful 35 plus year career, Ron has developed a keen acumen for sales and marketing, and is particularly skilled at complex negotiations. For the past 20 years, Ron has been an avid real estate investor, parlaying this passion to create the Serio Group with his wife Waruka Serio. His enthusiasm and energy relating to all things real estate, along with his deep commitment to his clients, are just some of the reasons Ron Serio excels at developing long-term relationships with all those that he works with. Ron also excels at helping his clients build generational wealth, through the acquisition of real estate.</p>
                                    </div>
                                    <div className="welc-content-btn" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                        <a href="/meet-ron-serio/" className="global-btn">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Social Media --> */}
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
                                        <span>@seriogroup</span>
                                        <a href="https://www.instagram.com/seriogroup/" className="global-btn" target="_blank" rel="noopener">Follow <em className="ai-font-instagram"></em>
                                        </a>
                                    </div>
                                </div>
                                <div className="sm-follow-smi-holder">
                                    <span>Check Us Out On Other Social Media Platforms:</span>
                                    <div className="sm-follow-smi">
                                        <a href="https://www.instagram.com/seriogroup/" target="_blank" rel="noopener">
                                            <span className="ai-font-instagram">
                                                <em className="hidden">Instagram</em>
                                            </span>
                                        </a>
                                        <a href="https://www.facebook.com/SerioEstates/" target="_blank" rel="noopener">
                                            <span className="ai-font-facebook">
                                                <em className="hidden">Facebook</em>
                                            </span>
                                        </a>
                                        <a href="https://www.tiktok.com/@seriogroup" target="_blank" rel="noopener">
                                            <span className="ai-font-tiktok">
                                                <em className="hidden">tiktok</em>
                                            </span>
                                        </a>
                                        <a href="https://www.linkedin.com/company/serio-estates-group?trk=public_profile_topcard-current-company" target="_blank" rel="noopener">
                                            <span className="ai-font-linkedin">
                                                <em className="hidden">Linkedin</em>
                                            </span>
                                        </a>
                                        <a href="https://www.youtube.com/@seriogroup" target="_blank" rel="noopener">
                                            <span className="ai-font-youtube">
                                                <em className="hidden">youtube</em>
                                            </span>
                                        </a>
                                        <a href="https://twitter.com/SerioGroup" target="_blank" rel="noopener">
                                            <span className="ai-font-twitter">
                                                <em className="hidden">twitter</em>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="sm-list">
                                <div className="sm-item" data-aos-once="true" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                                    <a href="https://www.instagram.com/p/C-GChsGvWt7/" target="_blank" rel="noopener">
                                        <div className="sm-img site-img">
                                            <canvas width="219" height="235"></canvas>
                                            <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://dashboard.agentimage.com/storage/feeds/zm3gk1rtidw2vn/instagrambasic/k6xh846qtpg.jpg?uat=1723960896" alt="Instagram Photo" width="219" height="235"/>
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
                                <div className="sm-item" data-aos-once="true" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                                    <a href="https://www.instagram.com/p/C-MeOsrRkdx/" target="_blank" rel="noopener">
                                        <div className="sm-img site-img">
                                            <canvas width="219" height="235"></canvas>
                                            <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://dashboard.agentimage.com/storage/feeds/zm3gk1rtidw2vn/instagrambasic/k6xh826qtpg.jpg?uat=1723960895" alt="Instagram Photo" width="219" height="235"/>
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
                                <div className="sm-item" data-aos-once="true" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                                    <a href="https://www.instagram.com/p/C9eHdC9x-bV/" target="_blank" rel="noopener">
                                        <div className="sm-img site-img">
                                            <canvas width="219" height="235"></canvas>
                                            <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://dashboard.agentimage.com/storage/feeds/zm3gk1rtidw2vn/instagrambasic/k6xh896qtpg.jpg?uat=1723960896" alt="Instagram Photo" width="219" height="235"/>
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
                                <div className="sm-item" data-aos-once="true" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                                    <a href="https://www.instagram.com/reel/C9s-VO4ST3e/" target="_blank" rel="noopener">
                                        <div className="sm-img site-img">
                                            <canvas width="219" height="235"></canvas>
                                            <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://dashboard.agentimage.com/storage/feeds/zm3gk1rtidw2vn/instagrambasic/k6xh856qtpg.jpg?uat=1723960896" alt="Instagram Photo" width="219" height="235"/>
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
                                <div className="sm-item" data-aos-once="true" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                                    <a href="https://www.instagram.com/p/C9loOnLpSuM/" target="_blank" rel="noopener">
                                        <div className="sm-img site-img">
                                            <canvas width="219" height="235"></canvas>
                                            <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://dashboard.agentimage.com/storage/feeds/zm3gk1rtidw2vn/instagrambasic/k6xh876qtpg.jpg?uat=1723960896" alt="Instagram Photo" width="219" height="235"/>
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
                                <div className="sm-item" data-aos-once="true" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                                    <a href="https://www.instagram.com/reel/C-I14mNSmjj/" target="_blank" rel="noopener">
                                        <div className="sm-img site-img">
                                            <canvas width="219" height="235"></canvas>
                                            <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://dashboard.agentimage.com/storage/feeds/zm3gk1rtidw2vn/instagrambasic/k6xh836qtpg.jpg?uat=1723960896" alt="Instagram Photo" width="219" height="235"/>
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
                                <div className="sm-item" data-aos-once="true" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                                    <a href="https://www.instagram.com/p/C9jD09ep9bY/" target="_blank" rel="noopener">
                                        <div className="sm-img site-img">
                                            <canvas width="219" height="235"></canvas>
                                            <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://dashboard.agentimage.com/storage/feeds/zm3gk1rtidw2vn/instagrambasic/k6xh886qtpg.jpg?uat=1723960896" alt="Instagram Photo" width="219" height="235"/>
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
                                <div className="sm-item" data-aos-once="true" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                                    <a href="https://www.instagram.com/reel/C-O-Y7-x2eq/" target="_blank" rel="noopener">
                                        <div className="sm-img site-img">
                                            <canvas width="219" height="235"></canvas>
                                            <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://dashboard.agentimage.com/storage/feeds/zm3gk1rtidw2vn/instagrambasic/k6xh816qtpg.jpg?uat=1723960895" alt="Instagram Photo" width="219" height="235"/>
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
                                <div className="sm-item" data-aos-once="true" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                                    <a href="https://www.instagram.com/p/C-UF-7dxel0/" target="_blank" rel="noopener">
                                        <div className="sm-img site-img">
                                            <canvas width="219" height="235"></canvas>
                                            <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://dashboard.agentimage.com/storage/feeds/zm3gk1rtidw2vn/instagrambasic/k6xh806qtpg.jpg?uat=1723960895" alt="Instagram Photo" width="219" height="235"/>
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
                                <div className="sm-item" data-aos-once="true" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                                    <a href="https://www.instagram.com/p/C9oWEyhxXDl/" target="_blank" rel="noopener">
                                        <div className="sm-img site-img">
                                            <canvas width="219" height="235"></canvas>
                                            <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://dashboard.agentimage.com/storage/feeds/zm3gk1rtidw2vn/instagrambasic/k6xh866qtpg.jpg?uat=1723960896" alt="Instagram Photo" width="219" height="235"/>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Listing of the Day --> */}
        <section id="listing-of-the-day" className="aios-scroll-section" data-aios-scroll-title="Listing of the Day">
            <div className="textwidget custom-html-widget">
                <div className="ld-container">
                    <div className="global-accent-bar attachment-fixed">
                        <canvas width="70" height="768" className="lazyload" data-bgset="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/accent-gradient.jpg"></canvas>
                    </div>
                    <div className="global-accent-letter">
                        <span>L</span>
                    </div>
                    <div className="ld-bg attachment-fixed">
                        <canvas width="1600" height="1165" className="lazyload" data-bgset="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/ld-bg.jpg"></canvas>
                    </div>
                    <div className="custom-container">
                        <div className="ld-main">
                            <div className="global-title is-centered" data-aos-once="true" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                                <h2>
                                    <em className="global-logo-icon">
                                        <i className="global-outline"></i>
                                    </em>
                                    <span>Listing Of the Day</span>
                                </h2>
                            </div>
                            <div className="ld-list">
                                <div className="ld-list-item" id="listing-24404087">
                                    <div className="ld-list-title" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                        <span>3268 Serra Road, Malibu, CA 90265</span>
                                    </div>
                                    <div className="ld-list-details" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                        <div className="ld-list-info">
                                            <span>
                                                <em className="ai-icon-bed-w"></em>5 <i>Beds</i>
                                            </span>
                                            <span>
                                                <em className="ai-icon-bath-w"></em>5 <i>Baths</i>
                                            </span>
                                            <span>
                                                <em className="ai-icon-sqft-w"></em>5,226 <i>Sq.ft.</i>
                                            </span>
                                            <span>
                                                <em className="ai-icon-acres"></em>1.79 <i>Acres</i>
                                            </span>
                                        </div>
                                        <div className="ld-list-btn">
                                            <a href="https://serioestates.com/featured-listings/" className="global-btn">See More</a>
                                        </div>
                                    </div>
                                    <div className="ld-grid-row" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                        <div className="ld-grid-col">
                                            <a href="https://serioestates.com/homes-for-sale-details/3268-SERRA-ROAD-MALIBU-CA-90265/24404087/306/" className="ld-grid-main">
                                                <div className="ld-grid-img site-img">
                                                    <canvas width="750" height="652"></canvas>
                                                    <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-class="lazyload" data-src="https://imageproxy.agentimage.com/750x652/https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1076543361/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcxODY1NDA4MA/JWeuq1PuhrVFZs1RPPC7wVDTC4CfRCWA2ap4GAkpT3Y" alt="Listing Image" width="750" height="652"/>
                                                </div>
                                                <div className="ld-grid-price">
                                                    <span>$9,950,000</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="ld-grid-col ld-ajax-images" data-url="https://serioestates.com/homes-for-sale-details/3268-SERRA-ROAD-MALIBU-CA-90265/24404087/306/">
                                            <a href="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/ld-img-2.jpg" className="ld-grid-thumb">
                                                <div className="ld-grid-img site-img">
                                                    <canvas width="360" height="197"></canvas>
                                                    <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/ld-img-2b.jpg" alt="Listing Image" width="360" height="197"/>
                                                </div>
                                            </a>
                                            <a href="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/ld-img-3.jpg" className="ld-grid-thumb">
                                                <div className="ld-grid-img site-img">
                                                    <canvas width="360" height="197"></canvas>
                                                    <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/ld-img-3.jpg" alt="Listing Image" width="360" height="197"/>
                                                </div>
                                            </a>
                                            <a href="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/ld-img-4.jpg" className="ld-grid-thumb">
                                                <div className="ld-grid-img site-img">
                                                    <canvas width="360" height="197"></canvas>
                                                    <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/ld-img-4b.jpg" alt="Listing Image" width="360" height="197"/>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Area of Expertise --> */}
        <Places />
        {/* <!-- Featured Listings --> */}
        <section id="featured-listings" className="aios-scroll-section" data-aios-scroll-title="Featured Listings">
            <div className="textwidget custom-html-widget">
                <div className="fl-container active">
                    <div className="global-accent-bar attachment-fixed">
                        <canvas width="70" height="936" className="lazyload" data-bgset="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/accent-gradient.jpg"></canvas>
                    </div>
                    <div className="global-accent-letter inline">
                        <span>L</span>
                    </div>
                    <div className="fl-bg attachment-fixed">
                        <canvas width="1600" height="963" className="lazyload" data-bgset="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/ld-bg.jpg"></canvas>
                    </div>
                    <div className="custom-container">
                        <div className="fl-main">
                            <div className="fl-title-holder inline">
                                <div className="global-title">
                                    <h2>
                                        <small>
                                            <em className="global-logo-icon">
                                                <i className="global-outline"></i>
                                            </em>Featured </small>
                                        <span>Listings</span>
                                    </h2>
                                </div>
                                <div className="fl-btn-controls">
                                    <button className="fl-prev ai-icon-prev" aria-label="Prev">
                                        <i className="ai-outline"></i>
                                    </button>
                                    <div className="fl-more-btn">
                                        <a href="/featured-listings/" className="global-btn">See More</a>
                                    </div>
                                    <button className="fl-next ai-icon-next" aria-label="Next">
                                        <i className="ai-outline"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="fl-slide-holder">
                                <div className="global-accent-letter alter">
                                    <span>L</span>
                                </div>
                                <div className="fl-title-holder alter">
                                    <div className="global-title" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                        <h2>
                                            <small>
                                                <em className="global-logo-icon">
                                                    <i className="global-outline"></i>
                                                </em>Featured </small>
                                            <span>Listings</span>
                                        </h2>
                                    </div>
                                    <div className="fl-more-btn" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                        <a href="/featured-listings/" className="global-btn">See More</a>
                                    </div>
                                </div>
                                <div className="fl-slide">
                                    <div className="fl-item">
                                        <a href="https://serioestates.com/homes-for-sale-details/16801-OAK-VIEW-DRIVE-ENCINO-CA-91436/24404057/306/">
                                            <div className="fl-img site-img">
                                                <canvas width="488" height="484"></canvas>
                                                <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://imageproxy.agentimage.com/355x465/https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1076572512/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcxODczMDY3OA/dNyNBZRRz8H4FVhK8Y7GG6xD-rEh_C_hBzBVkT8z1kc" alt="16801 Oak View Drive"/>
                                            </div>
                                            <div className="fl-price">
                                                <span>$12,000,000</span>
                                            </div>
                                            <div className="fl-details">
                                                <span>16801 Oak View Drive, <br/>Encino, CA 91436 </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="fl-item">
                                        <a href="https://serioestates.com/homes-for-sale-details/9900-S-SANTA-MONICA-BOULEVARD-2A-BEVERLY-HILLS-CA-90212/24392529/306/">
                                            <div className="fl-img site-img">
                                                <canvas width="488" height="484"></canvas>
                                                <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://imageproxy.agentimage.com/355x465/https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1076093595/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcxNzU0NTA4Ng/Kii5u9I_DhH5IbrGfljq1ZHiEjsrsocBX70nZaIgW_o" alt="9900 S Santa Monica Boulevard #2A"/>
                                            </div>
                                            <div className="fl-price">
                                                <span>$12,000,000</span>
                                            </div>
                                            <div className="fl-details">
                                                <span>9900 S Santa Monica Boulevard #2A, <br/>Beverly Hills, CA 90212 </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="fl-item">
                                        <a href="https://serioestates.com/homes-for-sale-details/9935-KIP-DRIVE-BEVERLY-HILLS-CA-90210/24404169/306/">
                                            <div className="fl-img site-img">
                                                <canvas width="488" height="484"></canvas>
                                                <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://imageproxy.agentimage.com/355x465/https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1076480901/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcxODM5MzQxNw/fx0CORYzyWQSEQavBDyp2fGJEqqkd41OiuUEsao1QGY" alt="9935 Kip Drive"/>
                                            </div>
                                            <div className="fl-price">
                                                <span>$19,865,000</span>
                                            </div>
                                            <div className="fl-details">
                                                <span>9935 Kip Drive, <br/>Beverly Hills, CA 90210 </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="fl-item">
                                        <a href="https://serioestates.com/homes-for-sale-details/15515-COLLINA-STRADA-LOS-ANGELES-CA-90077/24422659/306/">
                                            <div className="fl-img site-img">
                                                <canvas width="488" height="484"></canvas>
                                                <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://imageproxy.agentimage.com/355x465/https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1079056207/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcyMjU1NzAyOQ/deWWa4GtW5xLfB1VsuchGzU-IcA5n79JviIemmv8D8c" alt="15515 Collina Strada"/>
                                            </div>
                                            <div className="fl-price">
                                                <span>$8,750,000</span>
                                            </div>
                                            <div className="fl-details">
                                                <span>15515 Collina Strada, <br/>Los Angeles, CA 90077 </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="fl-item">
                                        <a href="https://serioestates.com/homes-for-sale-details/1024-SUMMIT-DRIVE-BEVERLY-HILLS-CA-90210/23319949/306/">
                                            <div className="fl-img site-img">
                                                <canvas width="488" height="484"></canvas>
                                                <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://imageproxy.agentimage.com/355x465/https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1046110263/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcxNjA1MjU0MA/i-N84CSYt3vX5ab8JjOs9kPxFJfEhiWIPAZLv3XEuqk" alt="1024 Summit Drive"/>
                                            </div>
                                            <div className="fl-price">
                                                <span>$19,950,000</span>
                                            </div>
                                            <div className="fl-details">
                                                <span>1024 Summit Drive, <br/>Beverly Hills, CA 90210 </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="fl-item">
                                        <a href="https://serioestates.com/homes-for-sale-details/825-OCEAN-AVENUE-SANTA-MONICA-CA-90403/SB23080737/306/">
                                            <div className="fl-img site-img">
                                                <canvas width="488" height="484"></canvas>
                                                <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://imageproxy.agentimage.com/355x465/https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1037533028/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcxNjA1MjU5Mw/v1Toz-1P7W9vNn1zvFx1-UPJIMAzNKLeTw5VIIu7SqI" alt="825 Ocean Avenue"/>
                                            </div>
                                            <div className="fl-price">
                                                <span>$7,999,000</span>
                                            </div>
                                            <div className="fl-details">
                                                <span>825 Ocean Avenue, <br/>Santa Monica, CA 90403 </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="fl-item">
                                        <a href="https://serioestates.com/homes-for-sale-details/625-N-SIERRA-DRIVE-BEVERLY-HILLS-CA-90210/24418119/306/">
                                            <div className="fl-img site-img">
                                                <canvas width="488" height="484"></canvas>
                                                <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://imageproxy.agentimage.com/355x465/https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1077754544/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcyMTY4OTM1MQ/iYmJgZkJyTZ2xxlPYiqVY7sU9Tink17-8HzUvYdpWKU" alt="625 N Sierra Drive"/>
                                            </div>
                                            <div className="fl-price">
                                                <span>$10,750,000</span>
                                            </div>
                                            <div className="fl-details">
                                                <span>625 N Sierra Drive, <br/>Beverly Hills, CA 90210 </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="fl-item">
                                        <a href="https://serioestates.com/homes-for-sale-details/1420-LAUREL-WAY-BEVERLY-HILLS-CA-90210/24407673/306/">
                                            <div className="fl-img site-img">
                                                <canvas width="488" height="484"></canvas>
                                                <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://imageproxy.agentimage.com/355x465/https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1076770441/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcxOTI1OTY4OA/hxvMJgXEgf-kk4xllZWvNP7-yzTSE7pYHKur-CiwYmU" alt="1420 Laurel Way"/>
                                            </div>
                                            <div className="fl-price">
                                                <span>$12,900,000</span>
                                            </div>
                                            <div className="fl-details">
                                                <span>1420 Laurel Way, <br/>Beverly Hills, CA 90210 </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="fl-item">
                                        <a href="https://serioestates.com/homes-for-sale-details/801-N-SIERRA-DRIVE-BEVERLY-HILLS-CA-90210/24414331/306/">
                                            <div className="fl-img site-img">
                                                <canvas width="488" height="484"></canvas>
                                                <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://imageproxy.agentimage.com/355x465/https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1077486925/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcyMTA1NzU0OQ/Ozol_Zz2f6kA5tsPGzXdp7u7FT856Ao6pHW67de8SIU" alt="801 N Sierra Drive"/>
                                            </div>
                                            <div className="fl-price">
                                                <span>$11,995,000</span>
                                            </div>
                                            <div className="fl-details">
                                                <span>801 N Sierra Drive, <br/>Beverly Hills, CA 90210 </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="fl-item">
                                        <a href="https://serioestates.com/homes-for-sale-details/3160-COLDWATER-CANYON-AVENUE-STUDIO-CITY-CA-91604/24385723/306/">
                                            <div className="fl-img site-img">
                                                <canvas width="488" height="484"></canvas>
                                                <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://imageproxy.agentimage.com/355x465/https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1073293481/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcyMjkwNDQ2OA/gP9_9NNQnJlaL-NjRTyEU3-lS2VOr3z91jk6T8EHPEk" alt="3160 Coldwater Canyon Avenue"/>
                                            </div>
                                            <div className="fl-price">
                                                <span>$19,995,000</span>
                                            </div>
                                            <div className="fl-details">
                                                <span>3160 Coldwater Canyon Avenue, <br/>Studio City, CA 91604 </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="fl-item">
                                        <a href="https://serioestates.com/homes-for-sale-details/10640-TARANTO-WAY-LOS-ANGELES-CA-90077/24425069/306/">
                                            <div className="fl-img site-img">
                                                <canvas width="488" height="484"></canvas>
                                                <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://imageproxy.agentimage.com/355x465/https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1079654766/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcyMzY3MTkzNg/jbIqV607PCHFp3KG3-lVHiJbhJWtHpQKskz95NzZhE8" alt="10640 Taranto Way"/>
                                            </div>
                                            <div className="fl-price">
                                                <span>$12,995,000</span>
                                            </div>
                                            <div className="fl-details">
                                                <span>10640 Taranto Way, <br/>Los Angeles, CA 90077 </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="fl-item">
                                        <a href="https://serioestates.com/homes-for-sale-details/4445-FIRMAMENT-AVENUE-ENCINO-CA-91436/SR24125561/306/">
                                            <div className="fl-img site-img">
                                                <canvas width="488" height="484"></canvas>
                                                <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://imageproxy.agentimage.com/355x465/https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1076624204/1/Mzc4LzgzMDEvMjA/MjAvMTY3MTgvMTcxODgzMTIxOA/LaepijBQCNGgVkYEpNI9lEUqS5-8Q7LvfXZtrToVtR4" alt="4445 Firmament Avenue"/>
                                            </div>
                                            <div className="fl-price">
                                                <span>$7,995,000</span>
                                            </div>
                                            <div className="fl-details">
                                                <span>4445 Firmament Avenue, <br/>Encino, CA 91436 </span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Call to Action --> */}
        <section id="call-to-action" className="aios-scroll-section" data-aios-scroll-title="Call to Action">
            <div className="textwidget custom-html-widget">
                <div className="cta-container">
                    <div className="cta-bg attachment-fixed">
                        <canvas width="1600" height="851" className="lazyload" data-bgset="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/cta-bg.jpg"></canvas>
                    </div>
                    <div className="custom-container">
                        <div className="cta-main">
                            <div className="cta-item">
                                <a href="/buyers/" data-aos-once="true" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                                    <div className="cta-img site-img">
                                        <canvas width="294" height="296"></canvas>
                                        <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/accent-logo-b.png" alt="Serio Group Logo" width="294" height="296"/>
                                    </div>
                                    <div className="cta-title">
                                        <h2>
                                            <small>Buyers</small>
                                            <span>Guide</span>
                                        </h2>
                                    </div>
                                </a>
                            </div>
                            <div className="cta-item">
                                <a href="/interactive-map/" data-aos-once="true" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                                    <div className="cta-img site-img">
                                        <canvas width="294" height="296"></canvas>
                                        <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/accent-logo-b.png" alt="Serio Group Logo" width="294" height="296"/>
                                    </div>
                                    <div className="cta-title">
                                        <h2><small>Interactive</small><span>Map</span>
                                        </h2>
                                    </div>
                                </a>
                            </div>
                            <div className="cta-item">
                                <a href="/sellers/" data-aos-once="true" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                                    <div className="cta-img site-img">
                                        <canvas width="294" height="296"></canvas>
                                        <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/accent-logo-b.png" alt="Serio Group Logo" width="294" height="296"/>
                                    </div>
                                    <div className="cta-title"><h2><small>Sellers</small><span>Guide</span></h2>
                                    </div>
                                </a>
                            </div>
                            <div className="cta-item">
                                <a href="/property-search/" data-aos-once="true" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                                    <div className="cta-img site-img"><canvas width="294" height="296"></canvas><img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/accent-logo-b.png" alt="Serio Group Logo" width="294" height="296"/></div><div className="cta-title"><h2><small>Property</small><span>Search</span></h2></div>
                                </a>
                            </div>
                            <div className="cta-item">
                                <a href="/contact-us/" data-aos-once="true" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300"><div className="cta-img site-img"><canvas width="294" height="296"></canvas><img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/accent-logo-b.png" alt="Serio Group Logo" width="294" height="296"/></div><div className="cta-title"><h2><small>Contact</small><span>Us</span></h2></div></a>
                            </div>
                            <div className="cta-item"><a href="/home-valuation/" data-aos-once="true" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300"><div className="cta-img site-img"><canvas width="294" height="296"></canvas><img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://serioestates.com/wp-content/themes/rwserio-pending.com/images/accent-logo-b.png" alt="Serio Group Logo" width="294" height="296"/></div><div className="cta-title"><h2><small>Home</small><span>Valuation</span></h2></div></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Testimonials --> */}
        <Testimonials />
    </main>
    <FooterPart />
    {/* <div className="back-top"><em className="ai-font-arrow-i-u"></em></div> */}
</div>
  );
}

export default App;
