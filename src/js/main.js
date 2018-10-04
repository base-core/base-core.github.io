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



function onYouTubeIframeAPIReady() {
    var videos = [ 'd7tVc91x0Vs', 'MEN7M1XjE7A' ];
    var playlistThumbs = $('.playlist-thumbs');
    var prevBtn = $('#prev');
    var nextBtn = $('#next');
    var videoThumbs;
    var currentIndex = 0;

    videos.forEach(function(id, i){
      var activeClass = '';
      if ( i === currentIndex ) {
        activeClass = 'is-active';
      }
      console.log(id)
     $('.playlist-thumbs').append(`<li data-video-id="${id}" class="video-thumb ${activeClass}"><img class="video-thumb-img" src="https://img.youtube.com/vi/${id}/default.jpg"/></li>`)
    });

    videoThumbs = $('.video-thumb');

    videoThumbs.click(function(){
      currentIndex = videos.indexOf($(this).attr('data-video-id'));
      player.loadVideoById(videos[currentIndex], 0, "large");
      $(this).addClass('is-active').siblings().removeClass('is-active');
      
    })

    initPlayer(videos[currentIndex]);


    var player;
    function initPlayer(id) {
      console.log('initPlayer');
      // This function creates an <iframe> (and YouTube player) after the API code downloads.
      player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: id,
        playerVars: {
            autoplay: 0,
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }

    prevBtn.on('click', playPrevVideo);
    nextBtn.on('click', playNextVideo);

    // The API will call this function when the video player is ready.
    function onPlayerReady(event) {
      console.log('onPlayerREady', event);
      // event.target.playVideo();
    }

    function onPlayerStateChange(event) {
      if ( event.data === 0 ) { // video ended
        playNextVideo();
      }
    }

    function playNextVideo() {
      currentIndex = currentIndex == videos.length - 1 ? 0 : currentIndex + 1;
      player.loadVideoById(videos[currentIndex], 0, "large");
      playlistThumbs.find(`[data-video-id="${videos[currentIndex]}"]`).addClass('is-active').siblings().removeClass('is-active');
    }

    function playPrevVideo() {
        currentIndex = currentIndex == 0 ? videos.length - 1 : currentIndex - 1;
        player.loadVideoById(videos[currentIndex], 0, "large");
        playlistThumbs.find(`[data-video-id="${videos[currentIndex]}"]`).addClass('is-active').siblings().removeClass('is-active');
    }
}


$(function() {

    function onScroll(event) {
        var scrollPos = $(document).scrollTop() + 70;
        $('.menu a').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.menu li').removeClass("active");
                currLink.parent().addClass("active");
            } else {
                currLink.parent().removeClass("active");
            }
        });
    }
    $(window).scroll(onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $(document).off("scroll");

        $('.menu li').each(function() {
            $(this).parent().removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash;
        var menu = target;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function() {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    // ---------- MEDIUM INTEGRATION API ---------- 
    $.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fbscrinc', function(data) {
        // init arr with articles
        var articlesList = data.items;


        console.log(articlesList)


        // // sort by date
        // articlesList.sort(function(a, b) {
        //     a = new Date(a.pubDate);
        //     b = new Date(b.pubDate);
        //     return a > b ? -1 : a < b ? 1 : 0;
        // });


        // remove team arcile & get three feeds items
        var articles = articlesList.filter(element => element.title !== "BaseCore Team: We create an investment tool of the new generation.").slice(0, 3);
        articles.forEach(function(element, index) {
            let description = element.description.split('p>')[1].split('</p')[0].substr(0, 100);
            description = description.substring(0, description.lastIndexOf(" "));

            // template for display articles
            $('.medium__container').append(`<div class="medium__publication --medium-padding">
                    <div class="medium__publication__photo"><a href="${element.link}" style="background-image: url(${element.thumbnail})"></a></div>
                    <h4 class="publication__title"><a href="${element.link}" class="medium__publication__header">${element.title}</a></h4>
                    <div class="medium__publication__article">
                        <p>${description}...</p>
                    </div>
                    <div class="link">
                        <p><a class="details" target="_blank" href="${element.link}">Read more...</a></p>
                    </div>
                </div>`)
        });

        // get team article 
        var teamArticle = articlesList.find(element => element.title == "BaseCore Team: We create an investment tool of the new generation.");
        teamArticle.description = teamArticle.description.split('p>')[1].split('</p')[0].substr(0, 100);
        teamArticle.description = teamArticle.description.substring(0, teamArticle.description.lastIndexOf(" "));

        // article template
        $('.about_team').append(`<div class="about_team__photo"><a href="${teamArticle.link}" style="background-image: url(${teamArticle.thumbnail})"></a></div>
                <div class="about_team__info">
                    <div class="about_team__header">
                        <h2 class="--align-text_left"><a href="${teamArticle.link}">${teamArticle.title}</a></h2>
                    </div>
                    <div class="about_team__text">
                        <p>${teamArticle.description}...</p>
                        <p><a href="${teamArticle.link}">Read More...</a></p>
                    </div>
                </div>`)



    });






    if (window.innerWidth <= 425) {
        $('.features__list').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            loop: true,
            centerMode: true,
        })
        $('.footer__list').each(function(index, el) {
            $(this).find('ul').slideUp(1)
        });

        $('.footer__list h4').click(function() {
            $(this).siblings('ul').slideToggle(400).parent().siblings().each(function(index, el) {
                $(el).find('ul').slideUp(400)
            });
            $(this).toggleClass('active').parent().siblings().each(function(index, el) {
                $(el).find('.footer-triangle').removeClass('active');
            })
        })

    }
    // ---------- BURGER KING MENU ----------
    $('#burger-king').click(function(event) {
        $('.top-menu').toggleClass('active')
    })


    // footer slids


})