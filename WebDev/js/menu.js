var menuOutObject;
var menuOutTimer;
$(function() {
	$('#menu h3').hover(
		function() {
			menuOutObject = $(this).next();
			y = $(this).offset().left;
			w = $(this).parent().offset().left;
			menuOutObject.css('left', y-w);
		
			if (!menuOutObject.is(':visible')) {
				hideMenuSubItems($('#menu ul:visible'));
			}
			clearTimeout(menuOutTimer);
			menuOutObject.fadeIn(50);
		},
		function() {
			menuOutTimer = setTimeout(function() {
				hideMenuSubItems(menuOutObject);
			}, 10);
		}
	);
	
	$('#menu ul').hover(
		function() {
			menuOutObject = $(this);
			clearTimeout(menuOutTimer);
		},
		function() {
			menuOutTimer = setTimeout(function() {
				hideMenuSubItems(menuOutObject);
			}, 10);
		}
	);
});

function hideMenuSubItems(o) {
	o.fadeOut(10);
}