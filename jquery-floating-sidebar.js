/* 
* Name: Custom Lockfixed
* Author: Renz Ramos
* Description: Sticky Sidebar
*/


jQuery(document).ready(function($){
	
	lockfixedNow();


	function lockfixedNow(){
		var lockfixed;
		lockfixed = $(".lockfixed");

		if ( lockfixed.length ) {
			
			distance = 0;
			distance = lockfixed.offset().top;
			var relative = 0;
			var oldScrollTop = 0;
			var parentHeight  = 0;
			var breakWidth = 768;
			var relativePosition  = 0;
			var currentWidth = lockfixed.width();
			var bottomPadding = 0;
			
			var left = lockfixed.parents("#content-container").find(".left");
			var right = lockfixed.parents("#content-container").find(".right");
			
			left.css("height", "100%");

			var leftHeight = left.height();

			
			if (leftHeight > lockfixed.height()){
				

				console.log("Initialize Sticky Sidebar 1.0");

				$(window).resize(function() {
					lockfixed.css("top", "auto");
					distance = lockfixed.offset().top;
					relative = 0;
					oldScrollTop = 0;
					parentHeight  = 0;
					relativePosition  = 0;
					lockfixed.width("100%");
					currentWidth = lockfixed.width();

				});
				
				$(window).scroll(function(){
		
					if ($(window).width() >= breakWidth ){
						var scrollTop = $(document).scrollTop();

						var headerheight = 25; 
						if ($("#wpadminbar").length){
							headerheight+= 30;
						}
						
						var parentHeight = lockfixed.parents("#main-content").offset().top + lockfixed.parents("#main-content").outerHeight();
						
						
						parentHeight-=headerheight ;
						relative+= scrollTop - oldScrollTop ;
						
						
						if (distance <= scrollTop + headerheight ){
						
							if ( parentHeight - bottomPadding > (scrollTop + lockfixed.outerHeight() )){
							   lockfixed.css("position", "fixed");
							   lockfixed.css("top", headerheight  + "px");
							   
							   oldScrollTop = scrollTop ;	
							   relativePosition = ((scrollTop  - distance) + headerheight );
							}else{
								lockfixed.css("position", "relative");
								lockfixed.css("top", relativePosition + "px");
							}
						}else{
							lockfixed.css("top", "auto");
							lockfixed.css("position", "relative");
						}
						lockfixed.width(currentWidth );
					}else{
					   lockfixed.width("auto");
					   lockfixed.css("position", "relative");
					   lockfixed.css("top", "auto");
					} 
				
				});
			}



		}
	}


});