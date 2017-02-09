// Author: Parin Ajmera


//-------------------------------------------------------------------------------//
//The following function is fired on screen resize and on screen load. The       //
//conditions are based on the various bootstrap viewport classes.				 //
//-------------------------------------------------------------------------------//
$(window).on("resize load", function() {
	//console.log($(window).width());
	if($(window).width() < 750){	//section corresponding to xs (extra small devices)

		// Introduction Section Big Header adjusted font size and line break
		$("#BigHeader").removeClass("big-header-md").addClass("big-header-xs");

		// Introduction paragraph padding below for mobile devices
		$("#IntroPara").addClass('padding-xs');

		// Education Section border adjustment for smaller devices
		$('.resp-edu').removeClass('card-right-border-md');

		// Work Experience description section's left border adjusted for smaller screen
		$('.resp-wx').removeClass('wx-description-md').addClass('wx-description-xs');

		// Content hidden in read more button to reduce scrolling for mobile screens
		$('.read-more').addClass('collapse');

		// Reducing font size of project body section by adding reduced font class
		$('.project-body').addClass('project-body-font-xs');

		// Add a reduce margin for better viewing on mobile
		$('.resp-reduce-margin').addClass('reduce-margin-xs');

		// Setting footer to center in mobile screens and not to the right
		$('#footer').removeClass('pull-right-md');

	}
	else if($(window).width() >= 750 && $(window).width() < 970){	//section corresponding to sm (small devices)
		
		// Work Experience description section's left border adjusted for smaller screen
		$('.resp-wx').removeClass('wx-description-md').addClass('wx-description-xs');		
		
		// Setting footer to center in mobile screens and not to the right
		$('#footer').removeClass('pull-right-md').css("text-align","center");
		
		// Content hidden in read more button to reduce scrolling for mobile screens
		$('.read-more').addClass('collapse');

		// Add a reduce margin for better viewing on mobile
		$('.resp-reduce-margin').addClass('reduce-margin-xs');

	}
	else if($(window).width() >= 970 && $(window).width() < 1150){	//section corresponding to md (medium devices)
				
		// Introduction Section Big Header adjusted font size and line break
		$("#BigHeader").removeClass("big-header-xs").addClass("big-header-md");

		// Introduction paragraph padding below for mobile devices removed for desktop
		$("#IntroPara").removeClass('padding-xs');

		// Education Section border adjustment for desktop devices
		$('.resp-edu').addClass('card-right-border-md');

		// Work Experience description section's left border adjusted for smaller screen
		$('.resp-wx').removeClass('wx-description-xs').addClass('wx-description-md');

		// Content hidden for mobile devices is loaded back
		$('.read-more').removeClass('collapse');

		// Restoring font size for project body for desktop screens
		$('.project-body').removeClass('project-body-font-xs');

		// Remove a reduce margin for dekstops
		$('.resp-reduce-margin').removeClass('reduce-margin-xs');

		// Setting footer to center for desktop screens
		$('#footer').addClass('pull-right-md');

		//Sidebar navigation bottom list item position (#menu-fixed-bottom)
		var height = $(window).height();
		//console.log("height = " + height);  //Debug
		var topValue = height - 108;
		var top = topValue + "px"
		$("#menu-fixed-bottom").css('top', top);
	}
	else if($(window).width() >= 1150){	//section corresponding to lg (large devices)

		// Introduction Section Big Header adjusted font size and line break
		$("#BigHeader").removeClass("big-header-xs").addClass("big-header-md");

		// Introduction paragraph padding below for mobile devices removed for desktop
		$("#IntroPara").removeClass('padding-xs');
				
		// Education Section border adjustment for desktop devices
		$('.resp-edu').addClass('card-right-border-md');

		// Work Experience description section's left border adjusted for smaller screen
		$('.resp-wx').removeClass('wx-description-xs').addClass('wx-description-md');

		// Content hidden for mobile devices is loaded back
		$('.read-more').removeClass('collapse');

		// Restoring font size for project body for desktop screens
		$('.project-body').removeClass('project-body-font-xs');

		// Remove a reduce margin for dekstops
		$('.resp-reduce-margin').removeClass('reduce-margin-xs');

		// Setting footer to center for desktop screens
		$('#footer').addClass('pull-right-md');
		
		//Sidebar navigation bottom list item position (#menu-fixed-bottom)
		var height = $(window).height();
		//console.log("height = " + height);  //Debug
		var topValue = height - 108;
		var top = topValue + "px"
		$("#menu-fixed-bottom").css('top', top);
	}

});
