//= anime.min.js

//= banner-animation.js

$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	arrows: false,
	focusOnSelect: true
});