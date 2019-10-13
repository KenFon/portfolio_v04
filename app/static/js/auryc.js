/*
	RequestAnimationFrame Polyfill
	http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
	by Erik Möller, fixes from Paul Irish and Tino Zijdel
	MIT license
 

(function() {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
	}

	if ( ! window.requestAnimationFrame ) {
		window.requestAnimationFrame = function(callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function() { callback(currTime + timeToCall); },
			timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};
	}

	if ( ! window.cancelAnimationFrame ) {
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
	}
}());

/**********************************************************************************************************************
 *                              Fonction qui gere le parralax des mots de la home
 *********************************************************************************************************************
(function(){


    function preMove(){
        var moveLeftIndice=-20;
        var moveRightIndice=0;
        moveRightIndice += (window.scrollY/90);
        moveLeftIndice += (window.scrollY/90);
        document.documentElement.style.setProperty("--move_left", `${moveLeftIndice}vw`);
        document.documentElement.style.setProperty("--move_right", `-${moveRightIndice}vw`);
        return [moveLeftIndice, moveRightIndice];
    }

    function move(){
        window.addEventListener("scroll", preMove);
    }

    move();

})();

/**********************************************************************************************************************
 *                                         Fonctions pour le scroll
 **********************************************************************************************************************
(function(){
   function myLastScrollTo(id) {
  var e = document.getElementById(id);
  var box = e.getBoundingClientRect();
  window.scrollBy(0, box.top);
}

function myScrollTo(id) {
  var e = document.getElementById(id);
  var box = e.getBoundingClientRect();
  var k, inc;
  inc = (box.top >= 0) ? 1 : -1;
  for (k = 0; k < 49; k++) setTimeout("window.scrollBy(0," + Math.floor(box.top / 48.5) + ")", 10 * k);
  setTimeout("myLastScrollTo('" + id + "')", 500);
}

var lists = document.querySelector('.navBar').querySelectorAll('li');
   lists.forEach(list => {
       list.addEventListener('click', function(){
            myScrollTo(list.dataset.link)
       })
   })
})();


/***********************************************************************************************************************
 *                                   Fonction du menu
 **********************************************************************************************************************
(function(w,d,undefined){

	var el_html = d.documentElement,
	el_body = d.getElementsByTagName('body')[0],
	header = d.querySelector('.navBar')

    function menuIsStuck(){
	        var wScrollTop	= w.pageYOffset || el_body.scrollTop,
            regexp		= /(nav\-is\-stuck)/i,
            classFound	= el_html.className.match( regexp ),
            navHeight	= header.offsetHeight,
            bodyRect	= el_body.getBoundingClientRect(),
            scrollValue	= 800;

        // si le scroll est d'au moins 600 et
        // la class nav-is-stuck n'existe pas sur HTML
        if ( wScrollTop > scrollValue && !classFound ) {
            el_html.className = el_html.className + ' nav-is-stuck';
            el_html.className = el_html.className.replace('nav-no-stuck', '');
        }

        // si le scroll est inférieur à 2 et
        // la class nav-is-stuck existe
        if ( wScrollTop < 2 && classFound ) {
            el_html.className = el_html.className.replace( regexp, 'nav-no-stuck' );
        }
	}

	function onScrolling() {
		// on exécute notre fonction menuIsStuck()
		// dans la fonction onScrolling()
		menuIsStuck();
	};

// quand on scroll
w.addEventListener('scroll', function(){
	// on exécute la fonction onScrolling()
	w.requestAnimationFrame( onScrolling );
});

}(window, document));
*/



"use strict";

var btn = document.querySelector('.anm-menu-button'),
    menu = document.querySelector('.anm-menu'),
    background = document.querySelector('.anm-background');
var menuOpen = false;

function showMenu() {
  menuOpen = true;
  btn.classList.add('anm-fade-in');
  menu.classList.add('anm-show');
  background.classList.add('anm-show');
  setTimeout(function () {
    menu.classList.add('anm-fade-in');
    background.classList.add('anm-fade-in');
  }, 1);
}

function hideMenu() {
  menuOpen = false;
  btn.classList.remove('anm-fade-in');
  menu.classList.remove('anm-fade-in');
  background.classList.remove('anm-fade-in');
  setTimeout(function () {
    menu.classList.remove('anm-show');
    background.classList.remove('anm-show');
  }, 500);
}

btn.addEventListener('click', function () {
  menuOpen ? hideMenu() : showMenu();
});
window.addEventListener('keydown', function (e) {
  if (e.keyCode == 27) hideMenu();
});

/* Gere les projects */
var timelineSwiper = new Swiper ('.timeline .swiper-container', {
  direction: 'vertical',
  loop: false,
  speed: 1600,
  pagination: '.swiper-pagination',
  paginationBulletRender: function (swiper, index, className) {
    var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
    return '<span class="' + className + '">' + year + '</span>';
  },
  paginationClickable: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  breakpoints: {
    768: {
      direction: 'horizontal',
    }
  }
});
