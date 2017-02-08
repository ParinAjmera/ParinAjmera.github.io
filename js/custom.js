
//-------------------------------------------------------------------------------//
// Add class active to side navbar element clicked. The CSS class will change the//
// color of the element.									 					 //
//-------------------------------------------------------------------------------//
$(function() {
    $("li").on("click", function(e) {
        $(this).addClass("active").siblings().removeClass("active");
    });
})


//-------------------------------------------------------------------------------//
// All functions to be triggered on document load								 //
//-------------------------------------------------------------------------------//
$(document).ready(function(){

//-------------------------------------------------------------------------------//
// Easy Scrolling using Jquery Plugin											 //
// Refer to the below repo if you wish to use it on your website. 				 //
// https://github.com/davist11/jQuery-One-Page-Nav                               //
//-------------------------------------------------------------------------------//	
	$('#sidebar,#phone').onePageNav();

//Sidebar navigation bottom list item position (#menu-fixed-bottom)	
	var height = $(window).height();
	//console.log("height = " + height); //Debug
	var topValue = height - 108;
	var top = topValue + "px"
	$("#menu-fixed-bottom").css('top', top);

// Footer social-media icons animation
	$('#FbIcon').mouseover(function(){
		$('#FbIcon').addClass('text-primary');
	});
	$('#GitIcon').mouseover(function(){
		$('#GitIcon').addClass('text-primary');
	});
	$('#TwitterIcon').mouseover(function(){
		$('#TwitterIcon').addClass('text-primary');
	});
	$('#LinkedinIcon').mouseover(function(){
		$('#LinkedinIcon').addClass('text-primary');
	});
	$('#InstaIcon').mouseover(function(){
		$('#InstaIcon').addClass('text-primary');
	});
	$('.icon-size').mouseout(function(){
		$('.icon-size').removeClass('text-primary');
	});
	
});





