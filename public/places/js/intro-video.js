( function($) {

	var app = {
		
		initIntroVideo: function() {
            if ($('body').hasClass('ip-container')) {
		        return false;
		    }

		    // if (sessionStorage.getItem('introShown') === null) {
		    //     $(".intro-video").addClass("active");
		    //     sessionStorage.setItem('introShown', true);
		    // }else {
		    //     $("body").addClass("intro-ended");
		    // }

		    $(".intro-video").addClass("active");

		    $('.intro-video video').on('ended', function() {
	            $("body").addClass("intro-ended");
	            $("body").css("overflow", "hidden auto");
	        });
        }
	}

	
	$(document).ready( function() {
		 app.initIntroVideo();

		// if (localStorage.getItem("pageloadcount")) { 
		//     $("body").addClass("intro-ended");
		// } 
		// localStorage.setItem("pageloadcount", "1");
	});
    $(window).one('scroll mousemove touchmove', function() {
//		app.initIntroVideo();
	});

})(jQuery);
