$(document).ready(function(e) {
	
	// autocomplete js
	
	var autocomplete=["apple","banana","music","phone","video","fire","computer","internet","search","strawberry","watermelon","ants","house"];
	$("#searchbar").autocomplete({
		source:autocomplete
	})
	
	// initialize tabs
	
	$("#tabs").tabs();
	
	// jQuery Carousel
	
	var speed = 5000;
	var item_width = $('#slides li').outerWidth(); 
	var left_value = item_width * (-1); 
        
	$('#slides li:first').before($('#slides li:last'));
	$('#slides ul').css({'left' : left_value});

	$('#prev').click(function() {
        
		var left_indent = parseInt($('#slides ul').css('left')) + item_width;

		$('#slides ul').animate({'left' : left_indent}, 200,function(){    

         	
			$('#slides li:first').before($('#slides li:last'));           


			$('#slides ul').css({'left' : left_value});
		
		});

       
		return false;
            
	});

 

	$('#next').click(function() {
		

		var left_indent = parseInt($('#slides ul').css('left')) - item_width;
		

		$('#slides ul').animate({'left' : left_indent}, 200, function () {
            

			$('#slides li:last').after($('#slides li:first'));                 	
			

			$('#slides ul').css({'left' : left_value});
		
		});
		         

		return false;
		
	});        

	
	// END Jquery Carousel
	
	// Split columns in two
	
	var size = $(".column1 p").size();
	$(".column1 p").each(function(index) {
		if(index>=size/2) {
			$(this).appendTo($(".column2 .indent"));	
		}
	});
	
});