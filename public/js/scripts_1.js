; (function ($, w, d, h, b) {

    var app = {

        init: function () {

            this.form_steps_submit();
            this.search();
            this.process();


        },

        validateEmail: function ($email) {
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailReg.test($email);
        },

        form_steps: function (form_step = false) {
            if (form_step) {
                if (form_step == 1) {
                    $('.aios-home-valuation-email').hide();
                    $('.aios-home-valuation-name').show();
                    $('.aios-home-valuation-email').removeClass('active');
                    $('.aios-home-valuation-name').addClass('active');
                    $('.aios-home-valuation-text').hide();
                }
                if (form_step == 2) {
                    $('.aios-home-valuation-footer-steps').removeClass('active');
                    $('.aios-home-valuation-name').hide();
                    $('.aios-home-valuation-phone').show();
                    $('.aios-home-valuation-name').removeClass('active');
                    $('.aios-home-valuation-phone').addClass('active');
                    $('.aios-home-valuation-footer-steps-2').addClass('active');
                }

                if (form_step == 3) {
                    $('.aios-home-valuation-phone').hide();
                    $('.aios-home-valuation-looking-sell').show();
                    $('.aios-home-valuation-button-input').show();
                    $('.aios-home-valuation-button-steps').hide();
                    $('.aios-home-valuation-phone').removeClass('active');
                    $('.aios-home-valuation-looking-sell').addClass('active');
                }
            }
        },

        form_steps_submit: function () {

            $('.aios-home-valuation-form-quiz-type .aios-home-valuation-email').addClass('active');
            const $button = $(".aios-home-valuation-quiz-next");

            let counter = 1;

            $button.click(function (e) {
                $email = $('.aios-home-valuation-email.active input');
                $phone = $('.aios-home-valuation-phone.active input');
                $name = $('.aios-home-valuation-name.active input');




                if (counter == 1) {
                    if ($email.val() != '') {
                        if (app.validateEmail($email.val())) {

                        } else {
                            alert('Invalid Email Address');

                            return false;
                        }
                    } else {
                        alert('Field Empty');

                        return false;
                    }
                }


                if (counter == 2) {

                    if ($name.val() != '') {

                    } else {
                        alert('Field Empty');
                        return false;
                    }
                }

                app.form_steps(counter);

                counter++;

            });

        },

        steps: function (step = false) {
            if (step) {
                if (step == 2) {
                    $('.aios-home-valuation-footer-steps').removeClass('active');
                    $('.aios-home-valuation-step-1').fadeOut();
                    $('.aios-home-valuation-footer-steps').fadeOut();
                    $('.aios-home-valuation-loader').fadeIn();
                    $('.aios-home-valuation-loader').fadeOut(1000);
                    $('.aios-home-valuation-step-2').delay(1000).fadeIn();
                    $('.aios-home-valuation-footer-steps').delay(1000).fadeIn();
                    $('.aios-home-valuation-footer-steps-2').addClass('active');

                }
                if (step == 3) {
                    $('.aios-home-valuation-footer-steps').removeClass('active');
                    $('.aios-home-valuation-step-2').fadeOut();
                    $('.aios-home-valuation-footer-steps').fadeOut();
                    $('.aios-home-valuation-loader').fadeIn();
                    $('.aios-home-valuation-loader').fadeOut(1000);
                    $('.aios-home-valuation-step-3').delay(1000).fadeIn();
                    $('.aios-home-valuation-footer-steps-3').addClass('active');
                }
            }
        },
        search: function () {

            $next = $('.aios-home-valuation-proceed-2');
            $search_field = $('.aios-home-valuation-address-search');


            $search_field.on('keyup', function () {
                $next.removeAttr('disabled');
            });

            $next.on('click', function () {
                if ($search_field.val() != '') {
                    app.briged_results();
                    app.steps(2);
                }
            });



        },
        briged_results: function (address) {

            data = {
                'action': 'bridge_data',
                'data': {
                    address: $('.aios-home-valuation-address-search').val(),
                    address2: $('.aios-home-valuation-city-state').val(),
                }
            };

            $.post(ajaxurl, data, function (response) {


                $searchAddress = $('.aios-home-valuation-address-search').val() + ',' + $('.aios-home-valuation-city-state').val();

                $('.aios-home-valuation-properties').val(response);

                if ($("#aios-home-valuation-leaflet-map")[0]) {
                    app.maptiler($searchAddress);
                }

                if ($("#aios-home-valuation-google-map")[0]) {
                    app.google_map($searchAddress);
                }
                if (response.indexOf('No estimate found on') != -1) {
                    $('.bridge-api-status').val('false');
                    $('.aios-home-valuation-map h3').text('No Property Found');
                    $('.aios-home-valuation-form .aios-home-valuation-text').html('<p>The property address you provided is not available in our system, but give us time and our real estate team will get back to you as soon as we can with an estimate.</p>');
                    $('.aios-home-valuation-map-cover').show();


                } else {
                    $('.bridge-api-status').val('true');
                    $('.aios-home-valuation-api-result').html(response);

                }

            });

        },
        maptiler: function ($mapAddress) {

            // Initialize map to specified coordinates
            var map = L.map('aios-home-valuation-leaflet-map', {
                center: [33.9276214, -118.3977387], // CAREFULL!!! The first position corresponds to the lat (y) and the second to the lon (x)
                zoom: 16
            });

            const mapIcon = L.icon({
                iconUrl: 'https://cdn.vs12.com/libraries/images/map-marker/52.png',
                iconSize: [52, 52]
            });


            // Add tiles (streets, etc)
            L.mapboxGL({
                attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
                accessToken: 'not-needed',
                style: 'https://api.maptiler.com/maps/596f856e-8da8-4219-a343-f1cf70a960ef/style.json?key=3i8dcrACEAmtPrc6lzeW'
            }).addTo(map);

            // hack on getting lat long before using geo search
            var wholePageHtml = $(h).html();
            var longitude = wholePageHtml.match(/(longitude|long)\:\".*?\"/);
            var latitude = wholePageHtml.match(/(latitude|lat)\:\".*?\"/);

            if (latitude != null && longitude != null) {
                longitude = longitude[0].match(/(\"\-?.*?\")/)[0].replace(/\"/g, '');
                latitude = latitude[0].match(/(\"\-?.*?\")/)[0].replace(/\"/g, '');

                var x_coor = longitude;
                var y_coor = latitude;
                var label = $mapAddress;
                var marker = L.marker([y_coor, x_coor], { icon: mapIcon }).addTo(map);
                marker.bindPopup(label).openPopup();
                map.setView([y_coor, x_coor]);
            }
            else {
                var query_addr = $mapAddress;
                // Get the provider, in this case the OpenStreetMap (OSM) provider. For some reason, this is the "wrong" way to instanciate it. Instead, we should be using an import "leaflet-geosearch" but I coulnd't make that work
                const provider = new window.GeoSearch.EsriProvider();
                var query_promise = provider.search({
                    query: query_addr
                });

                // It's a promise because we have to wait for the geosearch results. It may be more than one. Be careful.
                // These results have the following properties:
                // const result = {
                //   x: Number,                      // lon,
                //   y: Number,                      // lat,
                //   label: String,                  // formatted address
                //   bounds: [
                //     [Number, Number],             // s, w - lat, lon
                //     [Number, Number],             // n, e - lat, lon
                //   ],
                //   raw: {},                        // raw provider result
                // }

                query_promise.then(value => {
                    for (i = 0; i < value.length; i++) {
                        // Success!
                        var x_coor = value[i].x;
                        var y_coor = value[i].y;
                        var label = $mapAddress;
                        var marker = L.marker([y_coor, x_coor], { icon: mapIcon }).addTo(map);
                        marker.bindPopup(label).openPopup();
                        map.setView([y_coor, x_coor]);
                    };
                }, reason => {
                    console.log(reason); // Error!
                });
            }
        },
        google_map: function ($mapAddress) {
            data = {
                'i': {
                    address: $mapAddress
                }
            };

            var AHVMap = new google.maps.Map(document.getElementById('aios-home-valuation-google-map'), {
                zoom: 15,
                disableDefaultUI: true,
                draggable: false
            });

            geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'address': data.i.address }, function (results, status) {
                if (status == 'OK') {
                    AHVMap.setCenter(results[0].geometry.location);
                    var marker = new google.maps.Marker({
                        map: AHVMap,
                        position: results[0].geometry.location,
                        title: "You're here!"
                    });


                } else {
                    alert('Geocode was not successful for the following reason: ' + status);
                }
            });

            /* myLatlng = new google.maps.LatLng(data.latitude,data.longitude);
         
             marker = new google.maps.Marker({
                 position: myLatlng,
         
             });
         
             marker.setMap(AHVMap);*/

        },
        process: function () {

            //Email Sent
            document.addEventListener('wpcf7mailsent', function (event) {
                app.steps(3);
            }, false);
        },

        initAjaxLoadMore: function(){
            $('#properties-load-more').on('click', function() {

            	var $btnLoadMore = $(this); 

                var listing_url = $(this).data('listing-url');
                var listing_max = $(this).data('listing-max');

                var href = new URL(listing_url);

				href.searchParams.set('pg', inc);

				inc += 1;

				var data = {
					'action': 'fetch_the_listings',
					'next_page_url': href.toString(),
				}

				$btnLoadMore.hide();
		
				$.ajax({
					url: listing_params.ajax_url,
					data: data,
					type: 'POST',
					beforeSend : function ( xhr ) {
						$('.ip-fl-listing-main .ip-fl-listing-row').append('<div class="loading"><img src="'+ listing_params.stylesheet_url +'/images/rotation-loading.gif" style="background-position: center center;width: 3%;display: block;filter: sepia(1);margin: 0 auto 20px auto;"></div>');
					},
					success: function (response) {
						$('.loading').remove();
						$('.ip-fl-listing-main .ip-fl-listing-row').append(response);

						if(listing_max == inc) {
							$('#properties-load-more').hide();
						}else{
							$btnLoadMore.show();
						}

					}
				});
                
            });
			
                
		}

    }

    $(document).ready(function () {
        /* Initialize all app functions */
        app.init();
    });

    $(document).ready( function() {
        
		app.initAjaxLoadMore();

	});
	
	$(window).on('load', function() {

	});


    /** 
     *
     * Please do add your custom script functions similar to the current file structure.
     * You may also add your uncategorized script functions inside the `app.others` function.
     *
     */
})($, window, document, 'html', 'body');
