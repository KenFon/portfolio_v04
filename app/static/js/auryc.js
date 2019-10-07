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


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var anchors = mod.el.querySelectorAll('a[data-date]'),
    ems = mod.el.querySelectorAll('em[data-date]');

for (var _i = 0; _i < anchors.length; _i++) {
  anchors[_i].innerHTML = dayAndShortMonth(anchors[_i].getAttribute('data-date'));
}

for (var _i2 = 0; _i2 < ems.length; _i2++) {
  ems[_i2].innerHTML = fullDate(ems[_i2].getAttribute('data-date'));
} // https://codyhouse.co/gem/horizontal-timeline


var timelines = $('.anm-horizontal-timeline'),
    eventsMinDistance = 60;
if (timelines.length > 0) initTimeline(timelines);

function initTimeline(timelines) {
  timelines.each(function () {
    var timeline = $(this),
        timelineComponents = {}; //cache timeline components 

    timelineComponents['timelineWrapper'] = timeline.find('.anm-events-wrapper');
    timelineComponents['eventsWrapper'] = timelineComponents['timelineWrapper'].children('.anm-events');
    timelineComponents['fillingLine'] = timelineComponents['eventsWrapper'].children('.anm-filling-line');
    timelineComponents['timelineEvents'] = timelineComponents['eventsWrapper'].find('a');
    timelineComponents['timelineDates'] = parseDate(timelineComponents['timelineEvents']);
    timelineComponents['eventsMinLapse'] = minLapse(timelineComponents['timelineDates']);
    timelineComponents['timelineNavigation'] = timeline.find('.anm-timeline-navigation');
    timelineComponents['eventsContent'] = timeline.children('.anm-events-content'); //assign a left postion to the single events along the timeline

    setDatePosition(timelineComponents, eventsMinDistance); //assign a width to the timeline

    var timelineTotWidth = setTimelineWidth(timelineComponents, eventsMinDistance); //the timeline has been initialize - show it

    timeline.addClass('loaded'); //detect click on the next arrow

    timelineComponents['timelineNavigation'].on('click', '.next', function (event) {
      event.preventDefault();
      updateSlide(timelineComponents, timelineTotWidth, 'next');
    }); //detect click on the prev arrow

    timelineComponents['timelineNavigation'].on('click', '.prev', function (event) {
      event.preventDefault();
      updateSlide(timelineComponents, timelineTotWidth, 'prev');
    }); //detect click on the a single event - show new event content

    timelineComponents['eventsWrapper'].on('click', 'a', function (event) {
      event.preventDefault();
      timelineComponents['timelineEvents'].removeClass('anm-selected');
      $(this).addClass('anm-selected');
      updateOlderEvents($(this));
      updateFilling($(this), timelineComponents['fillingLine'], timelineTotWidth);
      updateVisibleContent($(this), timelineComponents['eventsContent']);
    }); //on swipe, show next/prev event content

    timelineComponents['eventsContent'].on('swipeleft', function () {
      var mq = checkMQ();
      mq == 'mobile' && showNewContent(timelineComponents, timelineTotWidth, 'next');
    });
    timelineComponents['eventsContent'].on('swiperight', function () {
      var mq = checkMQ();
      mq == 'mobile' && showNewContent(timelineComponents, timelineTotWidth, 'prev');
    }); //keyboard navigation

    $(document).keyup(function (event) {
      if (event.which == '37' && elementInViewport(timeline.get(0))) {
        showNewContent(timelineComponents, timelineTotWidth, 'prev');
      } else if (event.which == '39' && elementInViewport(timeline.get(0))) {
        showNewContent(timelineComponents, timelineTotWidth, 'next');
      }
    });
  });
}

function updateSlide(timelineComponents, timelineTotWidth, string) {
  //retrieve translateX value of timelineComponents['eventsWrapper']
  var translateValue = getTranslateValue(timelineComponents['eventsWrapper']),
      wrapperWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', '')); //translate the timeline to the left('next')/right('prev') 

  string == 'next' ? translateTimeline(timelineComponents, translateValue - wrapperWidth + eventsMinDistance, wrapperWidth - timelineTotWidth) : translateTimeline(timelineComponents, translateValue + wrapperWidth - eventsMinDistance);
}

function showNewContent(timelineComponents, timelineTotWidth, string) {
  //go from one event to the next/previous one
  var visibleContent = timelineComponents['eventsContent'].find('.anm-selected'),
      newContent = string == 'next' ? visibleContent.next() : visibleContent.prev();

  if (newContent.length > 0) {
    //if there's a next/prev event - show it
    var selectedDate = timelineComponents['eventsWrapper'].find('.anm-selected'),
        newEvent = string == 'next' ? selectedDate.parent('li').next('li').children('a') : selectedDate.parent('li').prev('li').children('a');
    updateFilling(newEvent, timelineComponents['fillingLine'], timelineTotWidth);
    updateVisibleContent(newEvent, timelineComponents['eventsContent']);
    newEvent.addClass('anm-selected');
    selectedDate.removeClass('anm-selected');
    updateOlderEvents(newEvent);
    updateTimelinePosition(string, newEvent, timelineComponents);
  }
}

function updateTimelinePosition(string, event, timelineComponents) {
  //translate timeline to the left/right according to the position of the selected event
  var eventStyle = window.getComputedStyle(event.get(0), null),
      eventLeft = Number(eventStyle.getPropertyValue("left").replace('px', '')),
      timelineWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', '')),
      timelineTotWidth = Number(timelineComponents['eventsWrapper'].css('width').replace('px', ''));
  var timelineTranslate = getTranslateValue(timelineComponents['eventsWrapper']);

  if (string == 'next' && eventLeft > timelineWidth - timelineTranslate || string == 'prev' && eventLeft < -timelineTranslate) {
    translateTimeline(timelineComponents, -eventLeft + timelineWidth / 2, timelineWidth - timelineTotWidth);
  }
}

function translateTimeline(timelineComponents, value, totWidth) {
  var eventsWrapper = timelineComponents['eventsWrapper'].get(0);
  value = value > 0 ? 0 : value; //only negative translate value

  value = !(typeof totWidth === 'undefined') && value < totWidth ? totWidth : value; //do not translate more than timeline width

  setTransformValue(eventsWrapper, 'translateX', value + 'px'); //update navigation arrows visibility

  value == 0 ? timelineComponents['timelineNavigation'].find('.prev').addClass('inactive') : timelineComponents['timelineNavigation'].find('.prev').removeClass('inactive');
  value == totWidth ? timelineComponents['timelineNavigation'].find('.next').addClass('inactive') : timelineComponents['timelineNavigation'].find('.next').removeClass('inactive');
}

function updateFilling(selectedEvent, filling, totWidth) {
  //change .anm-filling-line length according to the selected event
  var eventStyle = window.getComputedStyle(selectedEvent.get(0), null),
      eventLeft = eventStyle.getPropertyValue("left"),
      eventWidth = eventStyle.getPropertyValue("width");
  eventLeft = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', '')) / 2;
  var scaleValue = eventLeft / totWidth;
  setTransformValue(filling.get(0), 'scaleX', scaleValue);
}

function setDatePosition(timelineComponents, min) {
  for (i = 0; i < timelineComponents['timelineDates'].length; i++) {
    var distance = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]),
        distanceNorm = Math.round(distance / timelineComponents['eventsMinLapse']) + 2;
    timelineComponents['timelineEvents'].eq(i).css('left', distanceNorm * min + 'px');
  }
}

function setTimelineWidth(timelineComponents, width) {
  var timeSpan = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][timelineComponents['timelineDates'].length - 1]),
      timeSpanNorm = timeSpan / timelineComponents['eventsMinLapse'],
      timeSpanNorm = Math.round(timeSpanNorm) + 4,
      totalWidth = timeSpanNorm * width;
  timelineComponents['eventsWrapper'].css('width', totalWidth + 'px');
  updateFilling(timelineComponents['eventsWrapper'].find('a.anm-selected'), timelineComponents['fillingLine'], totalWidth);
  updateTimelinePosition('next', timelineComponents['eventsWrapper'].find('a.anm-selected'), timelineComponents);
  return totalWidth;
}

function updateVisibleContent(event, eventsContent) {
  var eventDate = event.data('date'),
      visibleContent = eventsContent.find('.anm-selected'),
      selectedContent = eventsContent.find('[data-date="' + eventDate + '"]'),
      selectedContentHeight = selectedContent.height();

  if (selectedContent.index() > visibleContent.index()) {
    var classEnetering = 'anm-selected enter-right',
        classLeaving = 'leave-left';
  } else {
    var classEnetering = 'anm-selected enter-left',
        classLeaving = 'leave-right';
  }

  selectedContent.attr('class', classEnetering);
  visibleContent.attr('class', classLeaving).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
    visibleContent.removeClass('leave-right leave-left');
    selectedContent.removeClass('enter-left enter-right');
  });
  eventsContent.css('height', selectedContentHeight + 'px');
}

function updateOlderEvents(event) {
  event.parent('li').prevAll('li').children('a').addClass('older-event').end().end().nextAll('li').children('a').removeClass('older-event');
}

function getTranslateValue(timeline) {
  var timelineStyle = window.getComputedStyle(timeline.get(0), null),
      timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") || timelineStyle.getPropertyValue("-moz-transform") || timelineStyle.getPropertyValue("-ms-transform") || timelineStyle.getPropertyValue("-o-transform") || timelineStyle.getPropertyValue("transform");

  if (timelineTranslate.indexOf('(') >= 0) {
    var timelineTranslate = timelineTranslate.split('(')[1];
    timelineTranslate = timelineTranslate.split(')')[0];
    timelineTranslate = timelineTranslate.split(',');
    var translateValue = timelineTranslate[4];
  } else {
    var translateValue = 0;
  }

  return Number(translateValue);
}

function setTransformValue(element, property, value) {
  element.style["-webkit-transform"] = property + "(" + value + ")";
  element.style["-moz-transform"] = property + "(" + value + ")";
  element.style["-ms-transform"] = property + "(" + value + ")";
  element.style["-o-transform"] = property + "(" + value + ")";
  element.style["transform"] = property + "(" + value + ")";
} //based on http://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript


function parseDate(events) {
  var dateArrays = [];
  events.each(function () {
    var singleDate = $(this),
        dateComp = singleDate.data('date').split('T');

    if (dateComp.length > 1) {
      //both DD/MM/YEAR and time are provided
      var dayComp = dateComp[0].split('/'),
          timeComp = dateComp[1].split(':');
    } else if (dateComp[0].indexOf(':') >= 0) {
      //only time is provide
      var dayComp = ["2000", "0", "0"],
          timeComp = dateComp[0].split(':');
    } else {
      //only DD/MM/YEAR
      var dayComp = dateComp[0].split('/'),
          timeComp = ["0", "0"];
    }

    var newDate = new Date(dayComp[2], dayComp[1] - 1, dayComp[0], timeComp[0], timeComp[1]);
    dateArrays.push(newDate);
  });
  return dateArrays;
}

function daydiff(first, second) {
  return Math.round(second - first);
}

function minLapse(dates) {
  //determine the minimum distance among events
  var dateDistances = [];

  for (i = 1; i < dates.length; i++) {
    var distance = daydiff(dates[i - 1], dates[i]);
    dateDistances.push(distance);
  }

  return Math.min.apply(null, dateDistances);
}
/*
	How to tell if a DOM element is visible in the current viewport?
	http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
*/


function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return top < window.pageYOffset + window.innerHeight && left < window.pageXOffset + window.innerWidth && top + height > window.pageYOffset && left + width > window.pageXOffset;
}

function checkMQ() {
  //check if mobile or desktop device
  return window.getComputedStyle(document.querySelector('.anm-horizontal-timeline'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
}

function getMonth(num) {
  if (num == 1) return 'January';
  if (num == 2) return 'February';
  if (num == 3) return 'March';
  if (num == 4) return 'April';
  if (num == 5) return 'May';
  if (num == 6) return 'June';
  if (num == 7) return 'July';
  if (num == 8) return 'August';
  if (num == 9) return 'September';
  if (num == 10) return 'October';
  if (num == 11) return 'November';
  if (num == 12) return 'December';
  return '';
}

function getShortMonth(num) {
  return getMonth(num).slice(0, 3);
}

function dayAndShortMonth(dateStr) {
  var _dateStr$split = dateStr.split('/'),
      _dateStr$split2 = _slicedToArray(_dateStr$split, 3),
      day = _dateStr$split2[0],
      month = _dateStr$split2[1],
      year = _dateStr$split2[2];

  return day + ' ' + getShortMonth(month);
}

function fullDate(dateStr) {
  var _dateStr$split3 = dateStr.split('/'),
      _dateStr$split4 = _slicedToArray(_dateStr$split3, 3),
      day = _dateStr$split4[0],
      month = _dateStr$split4[1],
      year = _dateStr$split4[2];

  return day + ' ' + getMonth(month) + ', ' + year;
}