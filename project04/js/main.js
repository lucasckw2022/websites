$('document').ready(ready);

function ready(){
	function readMore(){
		$(".readmore",'.learnmore').animate({ opacity: 0 });
		$('#show-this-on-click').slideDown();
		$('.readless').fadeIn(1000);
	};
	$('.readmore').click(readMore);

	function readLess(){
		$('.hide').slideUp();
		$(".readmore").animate({ opacity: 100 });
	};
	$('.readless').click(readLess);

function learnmore(){

}
};