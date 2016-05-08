$(document).ready(function(){

	


	$('.fb-button').click(function () { // when I click on a button of class fb-button...

		var input = parseInt($('.fb-input').val());

		if (typeof input == 'number') {
			fizzbuzz(input);
		}
		
	});

	$('.fb-new-game').click(function(){
	$('.fb-list').empty();

});
});





function fizzbuzz(userinput){
	for (var i = 1; i <= userinput; i++){
		if (i % 3 === 0 && i % 5 === 0){
			appending('fizz buzz');
		}
		else if (i % 3 === 0){
			appending('fizz');
		}
		else if (i % 5 === 0){
			appending('buzz');
		}
		else {
			appending(i);
		}
	}
}

function appending(x){
	$('.fb-list').append('<li>' + x + '</li>');
}

