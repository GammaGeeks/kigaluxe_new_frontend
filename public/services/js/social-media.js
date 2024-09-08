( function($) {

	var app = {

		initTabToggle: function(){
			$('.ip-sf-filter-list .ip-sf-filter-option').on('click', function(){
				var $this = $(this);
				var $data = $this.data('filter');
				$('.ip-sf-filter-list .ip-sf-filter-option').removeClass('active');
				$this.addClass('active');
				$('.ip-sf-group-holder[data-filter]').removeClass('active');
				$('.ip-sf-group-holder[data-filter="'+$data+'"]').addClass('active');
			 });
		},
	}

	
	$(document).ready( function() {
		app.initTabToggle();
	});
	
	$(window).on('load', function(){

	});

})(jQuery);