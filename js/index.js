'use strict';

var $slider = $("#slider");
$slider.on('init', function () {
	mouseWheel($slider);
}).slick({
	dots: false,
	vertical: true,
	infinite: false
});
function mouseWheel($slider) {
	$(window).on('wheel', { $slider: $slider }, mouseWheelHandler);
}
function mouseWheelHandler(event) {
	var $slider = event.data.$slider;
	var delta = event.originalEvent.deltaY;
	if (delta < 0) {
		$slider.slick('slickPrev');
	} else {
		$slider.slick('slickNext');
	}
}