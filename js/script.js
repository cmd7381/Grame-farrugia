/*------------ animate.reset  Start ------------*/
new WOW().init();
/*------------ animate.reset  End ------------*/

jQuery(document).ready(function($) {
	/*------------ Determine the position of the head from the head.  Start ------------*/
	$(document).scroll(function() {
		var windowScrollTop = $(window).scrollTop();
		if($(window).width() > 1400) {
			if(windowScrollTop <= 260) {
				$('.hide-header').addClass('inhidden');
			}
			if(windowScrollTop > 260) {
				$('.hide-header').removeClass('inhidden');
			}
		} else if($(window).width() <= 1400 || $(window).width() > 1024) {
			if(windowScrollTop <= 185) {
				$('.hide-header').addClass('inhidden');
			}
			if(windowScrollTop > 185) {
				$('.hide-header').removeClass('inhidden');
			}
		} else if($(window).width() <= 1024 || $(window).width() > 414) {
			if(windowScrollTop <= 125) {
				$('.hide-header').addClass('inhidden');
			}
			if(windowScrollTop > 125) {
				$('.hide-header').removeClass('inhidden');
			}
		} else if($(window).width() <= 414) {
			if(windowScrollTop <= 75) {
				$('.hide-header').addClass('inhidden');
			}
			if(windowScrollTop > 75) {
				$('.hide-header').removeClass('inhidden');
			}
		}
	});
	/*------------ Determine the position of the head from the head.  End ------------*/

	/*------------ readmore-button Control text hide/display.  Start ------------*/
	$('.read-button a').on('click', function() {
		if($(this).text() == 'Read more..') {
			$(this).parent().siblings('.readmore-hidetext').slideDown(500);
			$(this).text('Read less..');
		} else {
			$(this).parent().siblings('.readmore-hidetext').slideUp(500);
			$(this).text('Read more..');
		}
	});
	/*------------ readmore-button Control text hide/display.  End ------------*/

	/*------------ portfolio active   Start ------------*/
	$('#filters button').on('click', function() {
		$(this).siblings('button').removeClass('portfolio-active')
		$(this).addClass('portfolio-active');
	});
	/*------------ portfolio active   End ------------*/

	/*------------ hamburger  Start ------------*/
	$('.hamb').on('click', function() {
		if($(window).width() < 769) {
			if(!$('body').hasClass('hidden')) {
				$('body').addClass('hidden');
				$(this).siblings('.menu-outer').slideDown(600);
			} else {
				$('body').removeClass('hidden');
				$(this).siblings('.menu-outer').slideUp(600);
			}
		}
	});

	$('.menu-outer ul li a').on('click', function() {
		if($('body').has('.hidden')) {
			$('body').removeClass('hidden');
			$('.menu-outer').css('display', 'none');
		}
	});

	$('.hide-hamb').on('click', function() {
		$('body').toggleClass('hide-hidden');
	});

	$('.hide-menu-outer ul li a').on('click', function() {
		if($('body').has('.hidden')) {
			$('body').removeClass('hide-hidden');
		}
	});
	/*------------ hamburger  End ------------*/

	/*------------ click logo to top  Start ------------*/
	$('.hide-brand').on('click', function() {
		$("body,html").animate({
			scrollTop: $("#header").offset().top
		}, 1000);
	});
	/*------------ click logo to top  Start ------------*/

	/*------------ slick Start ------------*/
	if($('.slide-container').length > 0) {
		$('.slide-container').slick({
			dots: false,
			arrows: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
		});
	}

	if($('.viewport-sc').length > 0) {
		$('.viewport-sc').slick({
			infinite: true,
			speed: 500,
			fade: true,
			cssEase: 'linear',
			autoplay: true,
			autoplaySpeed: 5000,
		});
	}
	/*------------ slick End ------------*/

	/*------------ Portfolio Start ------------*/
	if($('.isotope').length > 0) {
		var $container = $('.isotope').isotope({
			itemSelector: '.element-item',
			layoutMode: 'fitRows',
			filter: '.Kitchen',
		});

		$(window).load(function() {
			var $container = $('.isotope').isotope({
				itemSelector: '.element-item',
				layoutMode: 'fitRows',
				filter: '.Kitchen',
			});
		})

		$('#filters').on('click', 'button', function() {
			var filterValue = $(this).attr('data-filter');
			$container.isotope({
				filter: filterValue,
			});
		});

		$('.button-group').each(function(i, buttonGroup) {
			var $buttonGroup = $(buttonGroup);
			$buttonGroup.on('click', 'button', function() {
				$buttonGroup.find('.is-checked').removeClass('is-checked');
				$(this).addClass('is-checked');
			});
		});
	}
	/*------------ Portfolio End ------------*/

	/*------------ lightcase Start ------------*/
	//if($('div[data-rel^=lightcase]').length > 0) {
	//	 $('div[data-rel^=lightcase]').lightcase({
	//		showSequenceInfo: false
	//	 });
	//}
	/*------------ lightcase End ------------*/

	/*------------ Start ------------*/
	$('.about-button').on('click', function() {
		$("body,html").animate({
			scrollTop: $("#aboutus").offset().top
		}, 1000);
	});
	$('.What-button').on('click', function() {
		$("body,html").animate({
			scrollTop: $("#what-we-do").offset().top
		}, 1000);
	});
	$('.Portfolio-button').on('click', function() {
		$("body,html").animate({
			scrollTop: $("#portfolio").offset().top
		}, 1000);
	});
	$('.Contact-button').on('click', function() {
		$("body,html").animate({
			scrollTop: $("#contact").offset().top
		}, 1000);
	});
	/*------------ End ------------*/

	/*------------  Start ------------*/
	/*var anchor = window.location.hash;
	if(anchor != "" && anchor != undefined) {
		var anchorText = anchor.replace("#", "");
		$('html,body').stop(true).animate({
			scrollTop: $('.content').offset().top
		}, 1000);
	}*/
	/*------------  End ------------*/

	/*------------ imageslazyload Start ------------*/
	//	$('img').lazyload({
	//		effect: 'fadeIn'
	//	});
	/*------------ imageslazyload End ------------*/

	/*------------ send click Start ------------*/
	$(".icon-img").click(function() {
		$(".submit").trigger("click")
	});
	/*------------ send click End ------------*/

})