$(document).ready(function () {
	"use strict";
	
	/* Preloader Script
    ======================================================*/
	
	$(".tj-loader").delay(800).slideUp(1600);
	$(".loader-outer").delay(800).slideUp(1600);
	
	/* Sticky Navigation
    ======================================================*/
	if( $('.tj-nav-row').length ){
		var stickyNavTop = $('.tj-nav-row').offset().top;
		var stickyNav = function(){
			var scrollTop = $(window).scrollTop();
			if (scrollTop > 500) { 
				$('.tj-nav-row').addClass('sticky');	
			} else {
				$('.tj-nav-row').removeClass('sticky'); 
			}
		};
		stickyNav();
		$(window).scroll(function() {
			stickyNav();
		});
	}
});