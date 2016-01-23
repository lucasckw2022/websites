// set up list of foods in an array
var food = ['Please Select','beer','burger','hotdog','pizza','salad'];
/*var selectFood = $('select').val()*/
//set up a counter to keep track of the position in the foods array
console.table(food)
// use jQuery to check when document is ready, then do pageSetup
$(document).ready(function(){
	$('select').empty();
	for( i = 0; i < food.length; i ++){
		$('select').append('<option value="' + food[i] + '">' + food[i] + '</option>');	
	};
	$('select').change(function(){
		switch($('select').val()){
			case 'Please Select':
			$('#box_1').css("background-image","url(images/)");
			$('p').css("background-color","rgba(0,255,0,0.2)");
			$('p').css("text-decoration","none");
			$('p').css("color","black");
			$('p').css("border","");
			break;
			case 'beer':
			$('#box_1').css("background-image","url(images/beer.jpg)");
			$('#box_1').css("background-size","cover")
			$('p').css("background-color","rgba(0,255,0,0.7)");
			$('p').css("text-decoration","none");
			$('p').css("color","black");
			$('p').css("border","");
			break;
			case 'burger':
			$('#box_1').css("background-image","url(images/burger.jpg)");
			$('#box_1').css("background-size","cover")
			$('p').css("background-color","rgba(0,255,0,0.7)");
			$('p').css("text-decoration","none");
			$('p').css("color","black");
			$('p').css("border","");
			break;
			case 'hotdog':
			$('#box_1').css("background-image","url(images/hotdog.jpg");
			$('#box_1').css("background-size","cover")
			$('p').css("background-color","rgba(0,255,0,0.7)");
			$('p').css("text-decoration","none");
			$('p').css("color","black");
			$('p').css("border","");
			break;
			case 'pizza':
			$('#box_1').css("background-image","url(images/pizza.jpg");
			$('#box_1').css("background-size","cover")
			$('p').css("background-color","rgba(0,255,0,0.7)");
			$('p').css("text-decoration","none");
			$('p').css("color","black");
			$('p').css("border","");
			break;
			case 'salad':
			$('#box_1').css("background-image","url(images/salad.jpg");
			$('#box_1').css("background-size","cover")
			$('p').css("background-color","rgba(0,255,0,0.7)");
			$('p').css("text-decoration","line-through");
			$('p').css("color","red");
			$('p').css("border","solid 2px red");
			break;
		};
	});

})

// at this point the page is loaded and ready, waiting for the user to do something


// pageSetup function: when triggered, pageSetup function does 2 things:
// 1) triggers the buildTheDropDown function
// 2) attaches a 'change' listener to the dropdown once it's built
// the 'change' listener calls the choosePicture function when a change happens

// buildTheDropdown function:  builds an <option> tag for each food in foods array
// then adds it to the #food_selector div

// swapFood function:  is a simple helper function to swap the class
// with the background-image in it

// choosePicture function: runs swapFood depending on which food is chosen
