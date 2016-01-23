$(document).ready(table);

function table(){
	for(counter = 1; counter < 26; counter++){
		/*console.log('inside table');*/
		var li_string='';
		li_string +='<li><a href="images/'+ counter +'.jpg"><img src="thumbnails/thumb_'+ counter +'.jpg" /></a></li>';
		console.log(li_string);
		$('.photopile').append(li_string);
		/*$('.photopile').append('<li><a href="images/'+ counter +'.jpg"><img src="thumbnails/thumb_'+ counter +'.jpg" /></a></li>');*/
		photopile.scatter(); 
	}
}
/*<li>
				<a href="images/1.jpg">
					<img src="thumbnails/thumb_1.jpg" alt="Image description" ... />
				</a>
			</li>*/