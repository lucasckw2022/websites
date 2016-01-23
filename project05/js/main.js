var city
$(document).ready(function(){
	$('#submit-btn').click(function(){
		city = $('input').val().toLowerCase();
		event.preventDefault();
	  if (city == "nyc" || city == "new york city" || city == "new york" ){
			$('body').css('background','url(' + 'images/nyc.jpg' + ')' + ' no-repeat center fixed');
			$('body').css('background-size','cover');
			$('body').css('-webkit-background-size','cover');
			$('body').css('-moz-background-size','cover');
			$('body').css('-o-background-size','cover');
		}
		else if (city == "sf" || city == "san francisco" || city == "bay area"){
			$('body').css('background','url(' + 'images/sf.jpg' + ')' + ' no-repeat center fixed');
			$('body').css('background-size','cover');
			$('body').css('-webkit-background-size','cover');
			$('body').css('-moz-background-size','cover');
			$('body').css('-o-background-size','cover');
		}
		else if (city == "los angeles" || city == "la" || city == "lax"){
			$('body').css('background','url(' + 'images/la.jpg' + ')' + ' no-repeat center fixed');
			$('body').css('background-size','cover');
			$('body').css('-webkit-background-size','cover');
			$('body').css('-moz-background-size','cover');
			$('body').css('-o-background-size','cover');
		}
		else if (city == "atx" || city == "austin"){
			$('body').css('background','url(' + 'images/austin.jpg' + ')' + ' no-repeat center fixed');
			$('body').css('background-size','cover');
			$('body').css('-webkit-background-size','cover');
			$('body').css('-moz-background-size','cover');
			$('body').css('-o-background-size','cover');
		}
		else if (city == "syd" || city == "sydney"){
			$('body').css('background','url(' + 'images/sydney.jpg' + ')' + ' no-repeat center fixed');
			$('body').css('background-size','cover');
			$('body').css('-webkit-background-size','cover');
			$('body').css('-moz-background-size','cover');
			$('body').css('-o-background-size','cover');
		}
		else {
			$('body').css('background','url(' + 'images/citipix_skyline.jpg' + ')' + ' no-repeat center fixed');
			$('body').css('background-size','cover');
			$('body').css('-webkit-background-size','cover');
			$('body').css('-moz-background-size','cover');
			$('body').css('-o-background-size','cover');
		};
	});
})