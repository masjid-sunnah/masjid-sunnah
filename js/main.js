(function ($) {
	"use strict"

	// Preloader
	$(window).on('load', function () {
		$("#preloader").delay(0).fadeOut();
	});

	// Mobile Toggle Btn
	$('.navbar-toggle').on('click', function () {
		$('#header').toggleClass('nav-collapse')
	});

})(jQuery);