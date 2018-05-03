/*------------ 动画效果初始化  Start ------------*/
new WOW().init();
/*------------ 动画效果初始化  End ------------*/
jQuery(document).ready(function($) {
	/*------------ 判断隐藏头部距离头部的位置  Start ------------*/
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
	/*------------ 判断隐藏头部距离头部的位置  End ------------*/

	/*------------ readmore-button控制文字隐藏/显示  Start ------------*/
	$('.read-button a').on('click', function() {
		if($(this).text() == 'Read more..') {
			$('.readmore-hidetext').slideDown(500);
			$(this).text('Read less..');
		} else {
			$('.readmore-hidetext').slideUp(500);
			$(this).text('Read more..');
		}
	});
	/*------------ readmore-button控制文字隐藏/显示  End ------------*/

	/*------------ portfolio标题的active控制  Start ------------*/
	$('#filters button').on('click', function() {
			$(this).siblings('button').removeClass('portfolio-active')
			$(this).addClass('portfolio-active');
		})
		/*------------ portfolio标题的active控制  End ------------*/

	/*------------ 汉堡包的开关控制  Start ------------*/
	$('.hamb').on('click', function() {
		if ($(window).width() < 769) {
            if (!$('body').hasClass('hidden')) {
                $('body').addClass('hidden');
                $(this).siblings('.menu-outer').fadeIn(700);
            } else {
                $('body').removeClass('hidden');
                $(this).siblings('.menu-outer').fadeOut(700);
            }
        }
	});

	$('.menu-outer ul li a').on('click', function() {
		if($('body').has('.hidden')) {
			$('body').removeClass('hidden');
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
	/*------------ 汉堡包的开关控制  End ------------*/

	/*------------ 点击logo回到顶部  Start ------------*/
	$('.hide-brand').on('click', function() {
		$("body,html").animate({
			scrollTop: $("#header").offset().top
		}, 1000);
	});
	/*------------ 点击logo回到顶部  Start ------------*/

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

	/*------------ 点击滚动效果 Start ------------*/
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
	/*------------ 点击滚动效果 End ------------*/
})