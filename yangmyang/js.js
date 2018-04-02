$(document).ready(function(){
	$('.men').hover(function(){
		$('.nav-men').css('display','block');
		$('.nav-women').css('display','none');
		$('.nav-kids').css('display','none');
	});



		$('.women').hover(function(){
		$('.nav-women').css('display','block');
		$('.nav-men').css('display','none');
		$('.nav-kids').css('display','none');
	});



		$('.kids').hover(function(){
		$('.nav-kids').css('display','block');
		$('.nav-men').css('display','none');
		$('.nav-women').css('display','none');
	});


});


/*-------------- Women page navigation --------------*/

$(document).ready(function(){
	$('#women-j').click(function(){
	  $('.women-page').css('display','none');
	  $('.women-jeans').css('display','block');


	});


});