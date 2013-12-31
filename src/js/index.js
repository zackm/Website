$(document).ready(function(){
	if (window.usePageTransitions) {
		PageTransitions.init();
	}

    Fluidvids.init({
      selector: 'iframe',
      players: ['www.youtube.com']
    });

    if (window.graphics) {
    	// Graphics Page Stuff
		// Nav Button Highlighting
		$(".graphics-btn").click(function() {
			$('.graphics-btn').removeClass('selected');
			$(this).addClass('selected');
		});

		g_pages = ['graphics-home','ray-page','bez-page','fluid-page'];

		$.each(g_pages,function(i,val) {
			var name = '.' + val;
			$(name+'-button').click(function() {
				var currentPage = $('.active-content');
				if(!currentPage.hasClass(val)) {
					currentPage.fadeToggle(400,"swing", function(){
						currentPage.removeClass('active-content');
						$(name).addClass('active-content');
						$(name).fadeToggle(400);
					});
					$(".graphics-nav "+name+"-button").addClass('selected');
				}
			});
		});
    }
});
