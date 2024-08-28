( function() {

    let inc = 1;

	var app = {
		initAjaxLoadMore: function(){
            jQuery('#properties-load-more').on('click', function() {

            	var $btnLoadMore = jQuery(this); 

                var listing_url = jQuery(this).data('listing-url');
                var listing_max = jQuery(this).data('listing-max');

                var href = new URL(listing_url);

				href.searchParams.set('pg', inc);

				inc += 1;

				var data = {
					'action': 'fetch_the_listings',
					'next_page_url': href.toString(),
				}

				$btnLoadMore.hide();
		
				jQuery.ajax({
					url: listing_params.ajax_url,
					data: data,
					type: 'POST',
					beforeSend : function ( xhr ) {
						jQuery('.ip-fl-listing-main .ip-fl-listing-row').append('<div class="loading"><img src="'+ listing_params.stylesheet_url +'/images/rotation-loading.gif" style="background-position: center center;width: 3%;display: block;filter: sepia(1);margin: 0 auto 20px auto;"></div>');
					},
					success: function (response) {
						jQuery('.loading').remove();
						jQuery('.ip-fl-listing-main .ip-fl-listing-row').append(response);

						if(listing_max == inc) {
							jQuery('#properties-load-more').hide();
						}else{
							$btnLoadMore.show();
						}

					}
				});
                
            });
			
                
		}
	}

	jQuery(document).ready( function() {
        
		app.initAjaxLoadMore();

	});
	
	jQuery(window).on('load', function() {

	});

})();