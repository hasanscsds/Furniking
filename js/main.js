
//PRELOADER
$(window).on('load', function() {
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow")
	var mixer = mixitup('.filtered__products__trending, filtered__our__products');
	var mixer = mixitup(containerEl);
	var mixer = mixitup(containerEl, {
		selectors: {
			target: '.blog-item'
		},
		animation: {
			duration: 300
		}
	});

});


//OWL CAROUSEL
$('.customer__comments__block .container .owl-carousel').owlCarousel({
	loop: true,
	nav: true,
	dots: false,
	responsiveClass: true,
	autoplay: true,
	autoplaySpeed: 2000,
	navSpeed: 2000,
	lazyContent: true,
	autoplayHoverPause: true,
	mouseDrag: true,
	touchDrag: true,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 1,
		},
		1000: {
			items: 1,
		}
	}
})

$('.banner__block .container  .owl-carousel').owlCarousel({
	loop: true,
	dots: true,
	responsiveClass: true,
	dotsSpeed: 2000,
	dotsEach: true,
	lazyContent: true,
	autoplayHoverPause: true,
	mouseDrag: true,
	touchDrag: true,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 1,
		},
		1000: {
			items: 1,
		}
	}
})
$(document).ready(function() {
	$(".banner__collections__mobile__btn").click(function() {
		$(".banner__collections").toggleClass("active").toggle(500)
	})
	$(".icon_close").click(function() {
		$(".banner__collections").toggleClass("active").toggle(500)
	})
	$(".banner__collections__sidebar__nav .nav__item").click(function() {
		$(".banner__collections").toggleClass("active").toggle(500)
	})
});