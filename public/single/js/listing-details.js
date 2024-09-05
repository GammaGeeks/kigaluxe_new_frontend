( function($) {

	var app = {
		
		initHeroSlider: function() {
			$('.ip-ld-hero-slide').not('.slick-initialized').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
				arrows: true,
				infinite: true,
				autoplay: false,
				autoplaySpeed: 5000,
				speed: 700,
				fade: true,
				prevArrow: '.ip-ld-hero-controls .ip-ld-hero-prev',
				nextArrow: '.ip-ld-hero-controls .ip-ld-hero-next',
			});
		},

		initGalleryPopup: function(){
			// $('.ip-ld-gallery-popup').aiosPopup({
			//     type: 'image',
			//     gallery: {
			//         enabled: true,
			//         navigateByImgClick: true
			//     },
			//     callbacks: {
			//         close: function() {
			//             jQuery('body').removeClass('overflow');
			//         }
			//     },
			//     fixedContentPos: false
			// }); 

			jQuery('a.ip-ld-gallery-popup').click(function(){
			    jQuery('body').addClass('overflow');
			});

			jQuery('body .aiosp-image-holder .aiosp-close, body .aiosp-bg').click(function(){
			    jQuery('body').removeClass('overflow');
			});
		},

		fixPropertyDetails: function() {

			jQuery('.ip-ld-accordion .col-md-6 > .panel.panel-default').each(function(){

				var data_key = jQuery(this).attr('data-key');

				var data_key_place = 0;

				if( data_key == 0 || data_key == 1 ) {

					data_key_place = 0;
				}

				if( data_key == 2 || data_key == 3 ) {
					
					data_key_place = 1;
				}

				jQuery('.ip-ld-accordion .col-md-6[data-key="' + data_key_place + '"]').append( jQuery(this) );
			});

			if (jQuery('.ip-ld-content-main-container') ){
		        jQuery('.breadcrumb_last').text(jQuery('.ip-ld-content-row .global-title span').text() + ', '+ jQuery('.ip-ld-content-row .global-title small').text());
		    }

		    if(jQuery('.ip-ld-specs')){
		    	jQuery('.ip-ld-specs li').each(function (){
				    if(jQuery(this).find('span').text() == 0){
				        jQuery(this).hide();
				    }
				})
		    }
		    
		}
	}

	
	$(document).ready( function() {
		app.initHeroSlider();
		app.initGalleryPopup();
		app.fixPropertyDetails();
	});
	
	$(window).on('load', function(){
		setTimeout(function(){
			jQuery('.ip-ld-hero-img img').each(function(){
			    var imgVal = jQuery(this).attr('src');
			    if(imgVal === 'https://imageproxy.agentimage.com/1600x800/https://api-prod.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1032860943/0/Mzc4LzM3OTkvMTk/MTkvOTAyNC8xNjc2MjgwMzgx/tQ6SrHv4BIuIxbupI727lDhrBG9G1TCaX1mzUIHgmzQ'){
			        jQuery(this).attr('src', 'https://imageproxy.agentimage.com/1600x800/https://serioestates.com/wp-content/uploads/2023/02/no-photo.jpg')
			    }
			});
			jQuery('.ip-ld-gallery-img img').each(function(){
			    var imgVal = jQuery(this).attr('src');
			    if(imgVal === 'https://imageproxy.agentimage.com/355x465/https://api-prod.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-jpeg/1032860943/0/Mzc4LzM3OTkvMTk/MTkvOTAyNC8xNjc2MjgwMzgx/tQ6SrHv4BIuIxbupI727lDhrBG9G1TCaX1mzUIHgmzQ'){
			        jQuery(this).attr('src', 'https://imageproxy.agentimage.com/355x465/https://serioestates.com/wp-content/uploads/2023/02/no-photo.jpg')
			    }
			});
		},200);
	});
	
})(jQuery);
