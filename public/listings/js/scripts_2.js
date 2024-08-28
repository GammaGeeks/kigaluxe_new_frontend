(function ($, w, d, h, b) {

    var app = {
        lazyLoad: {
            imageChecker: function ($image) {
                var $mainSrc = $image.attr('data-lazy');
                var $errorSrc = $image.attr('data-error');
                var $fakeImage = $('<img />', {
                    src: $mainSrc
                });

                $fakeImage.on({
                    load: function () {
                        $image
                            .attr('src', $mainSrc)
                            .animate({
                                opacity: 1,
                            })
                            .addClass('lazy-loaded')
                            .parent()
                            .addClass('hide-loader');

                        if (typeof AOS === 'function') AOS.refresh(); 
                    },
                    error: function () {
                        $image
                            .attr('src', $errorSrc)
                            .animate({
                                opacity: 1,
                            })
                            .addClass('lazy-error')
                            .parent()
                            .addClass('hide-loader');
                    }
                });
            },
            init: function () {
                var $html = $(h);
                var isMobile = w.matchMedia('(max-width: 991px)').matches;
                var lazyLoad = app.lazyLoad;

                if ($html.hasClass('mobile') || isMobile || typeof AOS === 'undefined') {
                    $lazyImages = $('.ai-minimalist-properties-results img[data-lazy]');
                    $.each($lazyImages, function (i, image) {
                        var $image = $(image);
                        lazyLoad.imageChecker($image);
                    });
                }
                else {
                    $(d).on('aos:in', function ({detail}) {
                        var $detail = $(detail);
                        var $image = $detail.find('img[data-lazy]').not('lazy-loaded');

                        if ($image.length != 0) {
                            lazyLoad.imageChecker($image);
                        }
                    });
                }
            },
        },
        sort: {
            view: function () {
                var $target = $('.ai-minimalist-properties-results-views [data-sort]');
                
                $target.on('click', function (e) {
                    e.preventDefault();
    
                    var $this = $(this);
                    var control = $this.data('sort');
                    var $parent = $this.closest('#ai-minimalist-properties-results');
                    var $target = $parent.find('[data-sort-view="' + control + '"]');
    
                    if (!$target.hasClass('active')) {
                        $parent.find('[data-sort]').not($this).parent().removeClass('active');
                        $this.parent().addClass('active');
    
                        $parent.find('[data-sort-view]').not($target).removeClass('active').hide();
                        $target.addClass('active').hide().fadeIn();
                    }
                });
            },
            dropdown: function () {
                var $target = $('.ai-minimalist-properties-results-dropdowns [data-dropdown]');
                
                $target.find('span').on('click', function (e) {
                    e.preventDefault();
                    
                    var $this = $(this);
                    var $parent = $this.parent();
                    
                    $target.not($parent).removeClass('active');
                    $parent.toggleClass('active');
                });
                
                $(document).on('mouseup', function (e) {
                    if (!$target.is(e.target) && $target.has(e.target).length === 0) {
                        $target.removeClass('active');
                    }
                });
            },
            init: function () {
                var sort = app.sort;

                sort.view();
                sort.dropdown();
            }
        },
        setParameter: function (paramName, paramValue) {
            var url = window.location.href;
            var hash = location.hash;

            url = url.replace(hash, '');

            if (url.indexOf('?') >= 0) {
                var params = url.substring(url.indexOf('?') + 1).split('&');
                var paramFound = false;
                params.forEach(function (param, index) {
                    var p = param.split('=');
                    if (p[0] === paramName) {
                        params[index] = paramName + '=' + paramValue;
                        paramFound = true;
                    }
                });
                if (!paramFound) {
                    params.push(paramName + '=' + paramValue);
                }
                url = url.substring(0, url.indexOf('?') + 1) + params.join('&');
                url = url.replace(/(&?\w+=((?=$)|(?=&)))/g, '');
                history.pushState(null, null, url + hash);
            } else {
                url += '?' + paramName + '=' + paramValue;
                history.pushState(null, null, url + hash);
            }
        },
        aosAnimation: function () {
            if (typeof AOS == 'undefined') {
                console.error('Please enqueue AOS library on AIOS Initial Setup');
                return;
            }
            
            AOS.init({
                disable: 'mobile',
                once: true,
                duration: 500,
                easing: 'ease-in-out'
            });
        },
        mediaLinks: function () {
            $('#ai-minimalist-properties-results [data-media]').on('click', function (e) {
                e.stopImmediatePropagation();
                e.preventDefault();

                var $this = $(this);
                var type = $this.data('media');
                var target = $this.data('target');

                if (type == 'virtual-tour') {
                    window.open(target);
                }

                if (type == 'photos') {
                    var boardID = $this.data('board');

                    if (boardID) {
                        var url = window.location.origin + '/wp-admin/admin-ajax.php?action=ihf_photo_tour&listingNumber=' + target + '&boardID=' + boardID;
                        var proxy = $this.data('proxy');

                        $.ajax({
                            url: url,
                            type: "GET",
                            success: function (b) {
                                var imgList = [];
                                $(b).find('img').each(function (i, v) {
                                    imgList[i] = {
                                        src: proxy + $(v).data('ihf-main-source'),   
                                    }
                                });
                                
                                var $aiosPopup = $.aiosPopup;

                                $aiosPopup.open({
                                    items: imgList,
                                    type: 'image',
                                    tLoading: 'Loading image #%curr%...',
                                    mainClass: 'aios-img-mobile',
                                    fixedContentPos: true,
                                    fixedBgPos: true,
                                    gallery: {
                                        enabled: true,
                                        navigateByImgClick: true,
                                        preload: [0,1] 
                                    },
                                    image: { tError: '<a href="%url%">The image #%curr%</a> could not be loaded.' }
                                }, 0);
                            },
                            error: function (e) {
                                console.log(e);
                            }
                        });
                    }
                }
            });
        },
        init: function () {
            this.lazyLoad.init();
            this.sort.init();
            this.aosAnimation();
            this.mediaLinks();
        }
    }

    $(document).ready(function () {
        /* Initialize all app functions */
        app.init();
    });

    /** 
     *
     * Please do add your custom script functions similar to the current file structure.
     * You may also add your uncategorized script functions inside the `app.others` function.
     *
     */
})(jQuery, window, document, 'html', 'body');