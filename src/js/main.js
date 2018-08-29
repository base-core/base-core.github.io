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
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
    
// ---------- MEDIUM INTEGRATION API ---------- 
    $.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40avocodecom', function(data) {
        var articles = data.items.slice(0, 3);
        console.log(articles)
        articles.forEach( function(element, index) {
            $('.medium__container').append(`<a target="_blank" href="${element.link}" class="medium__publication">
                <div class="medium__publication__photo"><img width="318px" src="${element.thumbnail}"></div>
                <div class="medium__publication__header">
                    <h4>${element.title}</h4></div>
                <div class="medium__publication__article">
                    <p>${ element.description.split('p>')[1].split('.')[0].substr(0, 100)}</p>
                </div>
            </a>`)
        });
    });


    if (window.innerWidth <= 425) {
    	$('.features__list').slick({
    		slidesToShow: 1	,
    		slidesToScroll: 1,
    		arrows: false,
    		loop: true,
    		centerMode: true,
    	})
    }
})