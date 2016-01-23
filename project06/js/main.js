var country = ["NYC", "SF", "LA", "ATX", "SYD"];
$(document).ready(function(){
	for (i = 0; i < country.length; i++){
		$('select').append('<option>'+ country[i] +'</option>');
	};
	$( "#city-type" ).change(function() {
	  if ($('select').val() == "NYC"){
			$('body').css('background','url(' + 'images/nyc.jpg' + ')' + ' no-repeat center fixed');
			$('body').css('background-size','cover');
			$('body').css('-webkit-background-size','cover');
			$('body').css('-moz-background-size','cover');
			$('body').css('-o-background-size','cover');
		}
		else if ($('select').val() == "SF"){
			$('body').css('background','url(' + 'images/sf.jpg' + ')' + ' no-repeat center fixed');
			$('body').css('background-size','cover');
			$('body').css('-webkit-background-size','cover');
			$('body').css('-moz-background-size','cover');
			$('body').css('-o-background-size','cover');
		}
		else if ($('select').val() == "LA"){
			$('body').css('background','url(' + 'images/la.jpg' + ')' + ' no-repeat center fixed');
			$('body').css('background-size','cover');
			$('body').css('-webkit-background-size','cover');
			$('body').css('-moz-background-size','cover');
			$('body').css('-o-background-size','cover');
		}
		else if ($('select').val() == "ATX"){
			$('body').css('background','url(' + 'images/austin.jpg' + ')' + ' no-repeat center fixed');
			$('body').css('background-size','cover');
			$('body').css('-webkit-background-size','cover');
			$('body').css('-moz-background-size','cover');
			$('body').css('-o-background-size','cover');
		}
		else if ($('select').val() == "SYD"){
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
		}
	});
	
})