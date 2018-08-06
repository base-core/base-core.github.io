$(document).foundation().ready(function(){
	$('.carousel').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		arrows: false,
	});
});

// ---------- Top-bar class changing ---------- 

  $(window).scroll(function(){
    var st = $(window).scrollTop()
    if(st > 0){
      $('.header').addClass('menu-on-scroll');
      $('#bcorelogo').attr('src','img/bclogodark.png')
    }else{
      $('.header').removeClass('menu-on-scroll');
      $('#bcorelogo').attr('src','img/bclogo.png')
    }
  });

// ---------- /Top-bar class changing ----------
// ---------- PC screen blocks filler ----------
var shapeColor = anime({
  targets: '#Group .btm-pc-left-col',
  fill: '#0195a1',
  delay: 2000,
  loop: true
});

var shapeColor2 = anime({
  targets: '#Group .btm-pc-btm-row-right',
  fill: '#addce0',
  delay: 3000,
  loop: true
});

var shapeColor3 = anime({
  targets: '#Group .btm-pc-top-row-mid-col',
  fill: '#2d2040',
  delay: 1500,
  loop: true
});

var shapeColor4 = anime({
  targets: '#Group .btm-pc-circle',
  fill: '#41d8e6',
  delay: 3500,
  loop: true
});

var shapeColor5 = anime({
  targets: '#Group .btm-pc-top-row-left-col',
  fill: '#addce0',
  delay: 2500,
  loop: true
});

var shapeColor6 = anime({
  targets: '#Group .btm-pc-top-row-right-col',
  fill: '#66676d',
  delay: 1000,
  loop: true
});
// ---------- /PC screen blocks filler ----------
// ---------- Right diagram columns animation ----------
var diagramMov1 = anime({
  targets: '.first-diagram-moving',
  translateY: '25',
  scaleY: '0.7',
  easing: 'linear',
  duration: 2000,
  direction: 'alternate',
  loop: true
});
var diagramMov2 = anime({
  targets: '.second-diagram-moving',
  translateY: '23',
  scaleY: '0.7',
  easing: 'linear',
  duration: 3000,
  direction: 'alternate',
  loop: true
});
var diagramMov3 = anime({
  targets: '.third-diagram-moving',
  translateY: '20',
  scaleY: '0.7',
  easing: 'linear',
  duration: 2500,
  direction: 'alternate',
  loop: true
});
var diagramMov4 = anime({
  targets: '.fourth-diagram-moving',
  translateY: '15',
  scaleY: '0.7',
  easing: 'linear',
  duration: 1800,
  direction: 'alternate',
  loop: true
});

// var elems = document.querySelectorAll('.diagram')


// var diagramMove = anime({
//   targets: elems,
//   direction: 'alternate',
//   easing: 'linear',
//   duration: 2500,
//   loop: true,
//   scaleY: '0.65',
  
//   translateY: function(el, i){
//     // console.log(Number( (i + 1) + '5'));
//     return Number( (elems.length - i) + '5');
//   }

  // delay: function(el, i){
  //   var randomDelay = Math.floor(Math.random() * 1000) + 100;
  //   console.log(randomDelay);
  //   console.log(i);
  //   return randomDelay;

  // }
// ---------- /Right diagram columns animation ----------
// ---------- Left graph dots animation ----------
var dot1 = anime({
  targets: '.dot-fill-gr',
  fill: '#0be881',
  direction: 'alternate',
  loop: true,
  duration: 1000,
  delay: 200
});

var dot2 = anime({
  targets: '.dot-fill-red',
  fill: '#ff5e57',
  direction: 'alternate',
  loop: true,
  duration: 1500,
  delay: 200
});
// ---------- /Left graph dots animation ----------
// ---------- Conveyor animation ----------
var strip = anime({
  targets: '.line-translate',
  translateX: '-10',
  translateY: '10',
  duration: 2000,
  easing: 'linear',
  // direction: 'alternate',
  loop: true
});

var cube1 = anime({
  targets: '.cube-mov1',
  translateX: '-15',
  translateY: '10',
  duration: 2000,
  easing: 'linear',
  loop: true
});
var cube1 = anime({
  targets: '.cube-mov2',
  translateY: '30',
  duration: 2000,
  easing: 'linear',
  direction: 'alternate',
  loop: true
});
var cube1 = anime({
  targets: '.cube-mov3',
  translateX: '-15',
  translateY: '10',
  duration: 2000,
  easing: 'linear',
  loop: true
});
var cube1 = anime({
  targets: '.cube-mov4',
  translateX: '-15',
  translateY: '10',
  duration: 2000,
  easing: 'linear',
  loop: true
});
var cube1 = anime({
  targets: '.cube-mov5',
  translateX: '-15',
  translateY: '10',
  duration: 2000,
  easing: 'linear',
  loop: true
});
// ---------- /Conveyor animation ----------