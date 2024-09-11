(function($) {



    var app = {

        // initIntroVideo: function() {

        //     if ($('body').hasClass('ip-container')) {

        //         return false;

        //     }

        //     if (sessionStorage.getItem('introShown') === null) {

        //         $(".intro-video").addClass("active");

        //         sessionStorage.setItem('introShown', true);

        //     }else {

        //         $("body").addClass("intro-ended");

        //     }

        //     if (!jQuery('body').hasClass('user-navigated-from-a-page-on-the-site')) {

        //         $('.intro-video video').on('ended', function() {

        //             $("body").addClass("intro-ended");

        //             $("body").css("overflow", "hidden auto");

        //             console.log('Intro Ended');

        //         });

        //     }

        // },

        initSitePopup: function() {

            $(window).on('load', function() {

                if (!localStorage.getItem('accepted')) {

                    setTimeout(function() {

                        if (jQuery('body').hasClass('home') > 0) {

                            $('.site-popup-container').addClass('active');

                        }

                    }, 10000);

                }

            });



            $('.site-popup-close, .site-popup-wrapper').click(function() {

                $('.site-popup-container').removeClass('active');

                localStorage.setItem('accepted', true);

            });



            $('.site-popup-main').on('click', function(e) {

                e.stopImmediatePropagation();

            });



            $('.trigger-popup').click(function(e) {

                e.preventDefault();

                $('.site-popup-container').addClass('active');

            });

        },



        initFixedHeader: function() {

            $(window).on('load scroll orientationchange', function() {

                var currentScroll = window.pageYOffset || document.documentElement.scrollTop,

                    headerHeight = $('.header-wrapper').height(),

                    fixedHeaderEl = $('#fixed-header'),

                    currentWindowWidth = $(window).width();

                if (currentWindowWidth > 991) {

                    if (currentScroll > headerHeight) {

                        fixedHeaderEl.addClass('active');

                    } else {

                        fixedHeaderEl.removeClass('active');

                    }

                } else {

                    fixedHeaderEl.removeClass('active');

                }

            });

        },



        initsideMenu: function() {

            $('[data-side-menu]').on('click', function() {

                var $this = $(this),

                    $sideMenu = $('.side-menu'),

                    $sideMenuOverlay = $('.side-menu-overlay'),

                    option = $this.data('side-menu');

                if (option == 'open') {

                    $sideMenu.addClass('active');

                    $sideMenuOverlay.addClass('active');

                    jQuery('body').addClass('sp-active');

                }

                if (option == 'close') {

                    $sideMenu.removeClass('active');

                    $sideMenuOverlay.removeClass('active');

                    jQuery('body').removeClass('sp-active');

                }

            });

        },



        initSplitNav: function() {

            $("#main-nav").splitNav({

                logo: '.logo',

                splitCount: 3

            });

        },



        initNavDoubleTap: function() {

            var $nav = $('#nav, #fixed-nav,.main-nav');

            if ($nav.length > 0) $nav.navTabDoubleTap();

        },



        initSlideshowTagline: function() {

            var $video = $('.slideshow-container .aios-slider.aios-slider-template-default .aios-slider-splide .aios-slider-custom-video.is-autoplay video');



            $($video).on("playing", function(e) {

                $('span.tagline-sm-1').addClass('alt');

                setTimeout(function() {

                    $('span.tagline-sm-2').addClass('alt');

                }, 900);

                setTimeout(function() {

                    $('span.tagline-sm-3').addClass('alt');

                }, 1850);

                setTimeout(function() {

                    $('span.tagline-sm-4').addClass('alt');

                }, 2750);

                setTimeout(function() {

                    $('.slideshow-tagline-text.is-sm').addClass('doneintro');

                }, 3650);

                setTimeout(function() {

                    $('span.tagline-sm-lg').addClass('alt');

                }, 4100);

                setTimeout(function() {

                    $('.slideshow-tagline-text.is-lg').addClass('doneintro');

                }, 6000);

            });



            $($video).on("ended", function(e) {

                $('.slideshow-tagline-text').removeClass('doneintro');

                $('.slideshow-tagline-text span').removeClass('alt');

                $('span.tagline-sm-1').addClass('alt');

                setTimeout(function() {

                    $('span.tagline-sm-2').addClass('alt');

                }, 900);

                setTimeout(function() {

                    $('span.tagline-sm-3').addClass('alt');

                }, 1850);

                setTimeout(function() {

                    $('span.tagline-sm-4').addClass('alt');

                }, 2750);

                setTimeout(function() {

                    $('.slideshow-tagline-text.is-sm').addClass('doneintro');

                }, 3650);

                setTimeout(function() {

                    $('span.tagline-sm-lg').addClass('alt');

                }, 4100);

                setTimeout(function() {

                    $('.slideshow-tagline-text.is-lg').addClass('doneintro');

                }, 6000);

                jQuery(' #slideshow').fadeIn();

            });



            //   setInterval(function(){

            //      $('.slideshow-tagline-text').removeClass('doneintro');

            //      $('.slideshow-tagline-text span').removeClass('alt');

            //      $('span.tagline-sm-1').addClass('alt');

            //      setTimeout(function(){

            //          $('span.tagline-sm-2').addClass('alt');

            //      },900);

            //      setTimeout(function(){

            //          $('span.tagline-sm-3').addClass('alt');

            //      },1850);

            //      setTimeout(function(){

            //          $('span.tagline-sm-4').addClass('alt');

            //      },2750);

            //      setTimeout(function(){

            //          $('.slideshow-tagline-text.is-sm').addClass('doneintro');

            //      },3650);

            //      setTimeout(function(){

            //          $('span.tagline-sm-lg').addClass('alt');

            //      },4800);

            //      setTimeout(function(){

            //          $('.slideshow-tagline-text.is-lg').addClass('doneintro');

            //      },5950);

            // },9000);

        },



        initFixedSmi: function() {

            $('#scroll-down').sideNavigation();

        },



        initListingoftheDay: function() {

            $('.ld-grid-thumb').aiosPopup({

                type: 'image',

                gallery: {

                    enabled: true,

                    navigateByImgClick: true

                },

                fixedContentPos: false

            });

        },



        initFeaturedListings: function() {

            var $flSlider = $('.fl-slide'),

                $flcontainer = $('.fl-container');



            $flSlider.not('.slick-initialized').slick({

                slidesToShow: 3,

                slidesToScroll: 1,

                dots: false,

                arrows: true,

                infinite: true,

                autoplay: false,

                pauseOnFocus: false,

                pauseOnHover: false,

                speed: 700,

                autoplaySpeed: 5000,

                prevArrow: '.fl-btn-controls .fl-prev',

                nextArrow: '.fl-btn-controls .fl-next',

                responsive: [

                    {

                        breakpoint: 992,

                        settings: {

                            slidesToShow: 2,

                            slidesToScroll: 1

                        }

                    },

                    {

                        breakpoint: 768,

                        settings: {

                            slidesToShow: 1,

                            slidesToScroll: 1

                        }

                    }

                ]

            });



            $flSlider.slick('refresh');



            if ($('body').hasClass('home')) {

                var waypoint2 = new Waypoint({

                    element: document.getElementById('featured-listings'),

                    handler: function(direction) {

                        if (direction == 'down') {

                            setTimeout(function() {

                                $flcontainer.removeClass('active');

                            }, 700);

                            $flSlider.slick('slickPlay');

                        }

                    },

                    offset: 'bottom-in-view'

                });

            }



        },



        initTestimonials: function() {

            $('.testi-slide').not('.slick-initialized').slick({

                slidesToShow: 1,

                slidesToScroll: 1,

                dots: false,

                arrows: true,

                infinite: true,

                autoplaySpeed: 5000,

                speed: 700,

                autoplay: false,

                infinite: true,

                prevArrow: '.testi-slide-arrow .testi-prev',

                nextArrow: '.testi-slide-arrow .testi-next',

            });



            $('.testi-slide').slick('refresh');

        },



        initparallaxClip: function() {

            var isSafari = window.matchMedia('(max-width: 1199px)').matches;

            if (isSafari) {

                if ($('html').hasClass('safari-true')) {

                    function trigger() {

                        $('.attachment-fixed canvas').each(function() {

                            var this_position = window.pageYOffset - $(this).offset().top;

                            $(this).css({

                                backgroundPosition: "0 " + (this_position * 0.3) + "px"

                            })

                        });

                    }

                    trigger();

                    $(window).on('load scroll orientationchange', function() {

                        trigger();

                    });

                }

            }

        },

        initSiteAnimation: function() {

            AOS.init({

                once: true,

                disable: 'mobile'

            });

        },



        ContainBreadcrumbs: function() {

            if ($('body').hasClass('page-id-33') || $('body').hasClass('page-id-18')) {

                $('#breadcrumbs').wrap('<div class="container"></div>');

            }

        },

        initDoubleTapProperties: function() {

            jQuery('.ip-fl-listing-item a').on('click', function(e) {

                var $this = jQuery(this);

                var isMobile = window.matchMedia('(max-width: 991px)').matches || jQuery('html').hasClass('mobile');

                if (isMobile) {

                    if (!$this.hasClass('clicked-once')) {

                        e.preventDefault();

                        jQuery('.ip-fl-listing-item a').not($this).removeClass('clicked-once');

                        $this.addClass('clicked-once');

                    }

                }

            });

        },

        initListingDetailsForm: function() {

            // if (jQuery('#ip-listing-details')) {

            //     var address = jQuery('#ip-listing-details').data('address');

            //     jQuery('#listings-address').val(address);

            // }

            if(jQuery('#ip-listing-details')){

                var address = jQuery('.ip-ld-content-row .global-title h2 > span').text().trim() + ', ' + jQuery('.global-title h2 small').eq(1).text().trim();

                jQuery('#listings-address').val(address);

            }

        },

        BackTop: function() {

            function scrollappear() {

                if (jQuery(window).scrollTop() > (jQuery('#area-of-expertise').offset().top - 200)) {

                    jQuery('.back-top').addClass('active');

                } else {

                    jQuery('.back-top').removeClass('active');

                }

            }

            scrollappear();

            jQuery(document).scroll(function() {

                scrollappear();

            });

            jQuery('.back-top').click(function() {

                jQuery('html, body').animate({

                    scrollTop: jQuery('#slideshow').offset().top

                }, 1000);

            });

        },



        iPUpdates: function() {

            if(!jQuery('body').hasClass('home')) {



                if(jQuery('.ip-fl-listing-item img').length) {

                    setTimeout(function(){

                        jQuery('.ip-fl-listing-item img').each(function(){

                            if (jQuery(this).hasClass('error') === true) {

                                jQuery(this).attr('src', 'https://www.idxhome.com/service/resources/images/listing/no-photo.jpg')

                            }

                        })

                    

                    },500);

                }

                if(jQuery('.fl-slide .fl-item img').length) {

                    jQuery('.fl-slide').on('beforeChange', function(event, slick, currentSlide, nextSlide){

                        jQuery('.fl-item img').each(function(){

                              if (jQuery(this).hasClass('error') === true) {

                                  jQuery(this).attr('src', 'https://www.idxhome.com/service/resources/images/listing/no-photo.jpg')

                              }

                          })

                    });

                }

    

            }

        },

        initPropertSearch: function() {
            if(window.location.href.indexOf('/property-search/') > -1) {
                const items = [{value: "RI", text: "Multi-Unit Residential"},{value: "RNT", text: "Rental"},{value: "COM", text: "Commercial"}];
                jQuery.each(items, function (i, item) {
                    jQuery('#ihf-select-property-type').append($('<option>', { 
                        value: item.value,
                        text : item.text 
                    }));
                });
                ihfJquery('#ihf-select-property-type').trigger('chosen:updated');
            }
        },
        sortBy: function() {
            if(window.location.href.indexOf('/property-search/') > -1) {
                if ( $('.col-xs-12.col-sm-6.pt-5.mb-10').length ) {

                    $('.col-xs-12.col-sm-6.pt-5.mb-10').addClass('col-sm-3');
                    $('.col-xs-12.col-sm-6.pt-5.mb-10').removeClass('col-sm-6');

                    sortBy = ''+
                    '<div class="col-xs-12 col-sm-3 pt-5 mb-10">'+
                       '<span id="ihf-status-fields">'+
                          '<label for="ihf-status" class="field-label ihf-status-label"> Sort By </label> '+
                          '<div>'+
                                '<select id="ihf-select-sort-by" name="sortBy" class="form-control ihf-chosen-select-width" data-placeholder="any">'+
                                    '<option value="">Any</option>'+
                                    '<option value="pd">Price (High to Low)</option>'+
                                    '<option value="lpa">Price (Low to High)</option>'+
                                    '<option value="st">Status</option>'+
                                    // '<option value="cn">City</option>'+
                                    // '<option value="lpd">Type/Price Decending</option>'+
                                    '<option value="ln">Listing Number</option>'+
                                    // '<option value="ohd">Open Home Date Asc</option>'+
                                '</select>'+
                            '</div>'+
                       '</span>'+
                    '</div>';

                    $('.col-xs-12.col-sm-3.pt-5.mb-10').after(sortBy);
                    ihfJquery('#ihf-select-sort-by').chosen();
                }
            }
        },
        delayInitialization: function() {



            function initDelayThirdParty() {

    

                const third_party_scripts = [

                    'https://www.recaptcha.net/recaptcha/api.js?render=6Ldvn24nAAAAAOiLDFHdVqcRbpzz8i17Gv7oWP2C',

                ];

                jQuery.each(third_party_scripts, function (i, item) {

                    var scrpt = document.createElement('script');

                    scrpt.src = item;

                    scrpt.defer = true;

                    document.body.appendChild(scrpt);  

                });

                

            }

    

            function initSectionVisibility(){

                // jQuery('#quicksearch, #welcome, #social-media, #listing-of-the-day, #area-of-expertise, #featured-listings, #call-to-action, #testimonials, #shadow-host-companion,  .footer').fadeIn();

            

                // $('.hp-vid').html('<source src="https://player.vimeo.com/progressive_redirect/playback/796543489/rendition/1080p/file.mp4?loc=external&signature=b1ca3299a857aa6a66f17218c2bb70e9c68c81115eec6cc4683c4ffafbdac727" type="video/mp4" />');

                $('.hp-vid').html('<source src="https://player.vimeo.com/progressive_redirect/playback/796543489/rendition/1080p/file.mp4?loc=external&signature=b1ca3299a857aa6a66f17218c2bb70e9c68c81115eec6cc4683c4ffafbdac727" type="video/mp4" />');

                

               

            }

    

            var fired = false;

            window.addEventListener('scroll', function() {

                let scroll = window.scrollY;

                if (scroll > 0  && fired === false) {

                    initDelayThirdParty();

                    initSectionVisibility();

                    fired = true;

                }

            },{

                passive: true

            });

    

            document.addEventListener('mousemove', function(e) {

                let m_move = e.screenY;

                if (m_move > 0  && fired === false) {

                    initDelayThirdParty();

                    initSectionVisibility();

                    fired = true;

                }

            });

    

            document.addEventListener('touchmove', function(e) {

                let t_move = e.isTrusted;

                if (t_move > 0  && fired === false) {

                    initDelayThirdParty();

                    initSectionVisibility();

                    fired = true;

                }

            });

        },
        cf7FixTooltip: function() {
            jQuery('.wpcf7-form-control-wrap').hover( function() {
                jQuery(this).children( '.wpcf7-not-valid-tip').fadeOut(100);
            });
        },

        initSocialMedia: function(){
            jQuery('body.home .sm-list').slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 4000,
                pauseOnFocus: false,
                pauseOnHover: false,
                speed: 700,
                autoplaySpeed: 5000,
                  responsive: [
                    {
                      breakpoint: 992,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        rows: 2,
                      }
                    }
                  ]
            });
        },

    }



    $(document).ready(function() {

        app.cf7FixTooltip();
        // app.initIntroVideo();

        app.initSitePopup();

        app.initFixedHeader();

        app.initsideMenu();

        app.initSplitNav();

        app.initNavDoubleTap();

        // app.initSlideshowTagline();

        app.initFixedSmi();

        /*app.initparallaxClip();*/

        app.ContainBreadcrumbs();

        app.initDoubleTapProperties();

        app.initListingDetailsForm();

        app.iPUpdates();

        app.initPropertSearch();

        app.delayInitialization();

        app.initSocialMedia();

        app.initFeaturedListings();

        app.initTestimonials();

        app.initListingoftheDay();

              

        app.initSiteAnimation();

        // app.initSiteAnimation();

		

		

        

        // app.delayRecaptcha();

        if (jQuery('body').hasClass('home')) {

            app.BackTop();

        }

        if (jQuery('body').hasClass('page-id-94')) {

            console.log(1);

            jQuery('.ai-font-tiktok').parent().attr('href', 'https://www.tiktok.com/@seriogroup');

        }

        // if (localStorage.getItem("pageloadcount")) {

        //     $("body").addClass("intro-ended");

        // }

        // localStorage.setItem("pageloadcount", "1");

    });

    $(window).on('load', function() {



        app.sortBy();



    });

    

    // $(window).one('scroll mousemove touchmove', function() {

    //     $('.visible-on-scroll').each(function (i, v) {

    //         var $this = $(v);

    //         $this.removeClass('visible-on-scroll').hide().fadeIn();

    //         if (typeof AOS == 'object') {

    //             $this.find('.aos-animate').removeClass('aos-init aos-animate');

    //             AOS.refreshHard();

    //         }

    //         $('.fl-slide').slick('setPosition'); 

    //         $('.testi-slide').slick('setPosition'); 

    //     });

    //     $('.hp-vid').html('<source src="https://player.vimeo.com/progressive_redirect/playback/796543489/rendition/1080p/file.mp4?loc=external&signature=b1ca3299a857aa6a66f17218c2bb70e9c68c81115eec6cc4683c4ffafbdac727" type="video/mp4" />');

    //     $('.lazy-img').each(function(){

    //         var lImg = $(this).data('src');

    //         $(this).attr('src', lImg);

    //     })

    // });

    // var fired = false;

    // window.addEventListener('scroll', function () {

    //     let scroll = window.scrollY;

    //     if (scroll > 0 && fired === false) {



    //         fired = true;

    //     }

    // }, {

    //     passive: true

    // });

    // document.addEventListener('mousemove', function (e) {

    //     let m_move = e.screenY;

    //     if (m_move > 0 && fired === false) {



    //         fired = true;

    //     }

    // });

    // document.addEventListener('touchmove', function (e) {

    //     let t_move = e.isTrusted;

    //     if (t_move > 0 && fired === false) {

    //         fired = true;

    //     }

    // });

    // jQuery(window).one('scroll mousemove touchmove', function () {

    //     jQuery(' #slideshow, #quicksearch, #welcome, #social-media, #listing-of-the-day, #area-of-expertise, #featured-listings, #call-to-action, #testimonials, #shadow-host-companion,  .footer').fadeIn();

    //     app.initListingoftheDay();

    //     app.initFeaturedListings();

    //     app.initTestimonials();

    //     app.initSiteAnimation();

    // });

})(jQuery);

