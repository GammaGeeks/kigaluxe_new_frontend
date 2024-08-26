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
import Welcome from './components/HomePage/Welcome';
import Insta from './components/HomePage/Insta';
import ListingOfTheDay from './components/HomePage/ListOfTheDay';
import Listings from './components/HomePage/Listings';
import CallToAction from './components/HomePage/CallToAction';
import Hero from './components/HomePage/Hero';
import QuickSearch from './components/HomePage/QuickSearch';
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
        {/* <h2 className="aios-starter-theme-hide-title">Main Content</h2> */}
        {/* <!-- ip banner goes here -->
        <!-- ip banner goes here -->
        <!-- Slideshow --> */}
        <Hero />
        {/* <!-- Quick Search --> */}
        <QuickSearch />
        {/* <!-- Welcome --> */}
        <Welcome />
        {/* <!-- Social Media --> */}
        <Insta />
        {/* <!-- Listing of the Day --> */}
        <ListingOfTheDay />
        {/* <!-- Area of Expertise --> */}
        <Places />
        {/* <!-- Featured Listings --> */}
        <Listings />
        {/* <!-- Call to Action --> */}
        <CallToAction />
        {/* <!-- Testimonials --> */}
        <Testimonials />
    </main>
    <FooterPart />
    {/* <div className="back-top"><em className="ai-font-arrow-i-u"></em></div> */}
</div>
  );
}

export default App;
