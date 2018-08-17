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

$(function () {

	function onScroll(event){
	    var scrollPos = $(document).scrollTop() + 70;
	    $('.menu a').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('.menu li').removeClass("active");
	            currLink.parent().addClass("active");
	        }
	        else{
	            currLink.parent().removeClass("active");
	        }
	    });
	}
	$(window).scroll(onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('.menu li').each(function () {
            $(this).parent().removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash;
        var menu = target;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top;
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
})