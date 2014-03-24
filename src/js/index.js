function setWelcomeMsg() {
    var time = new Date(Date.now()).getHours();
    var msg = 'Hello there!';
    if (time < 6) {
    	msg = 'Good morning, early bird';
    } else if (time < 11) {
    	msg = 'Good morning!';
    } else if (time < 12) {
    	msg = 'Good day!';
    } else if (time < 14) {
    	msg = 'Good afternoon!';
    } else if (time < 24) {
    	msg = 'Good evening!';
    } else if (time < 25) {
    	msg = 'Good evening night owl!';
    }

    $("#welcome-title").text(msg);
}

$(document).ready(function(){

	// Home page time-sensitive welcome message
	setWelcomeMsg();

	if (window.usePageTransitions) {
		PageTransitions.init();
	}

    Fluidvids.init({
      selector: 'iframe',
      players: ['www.youtube.com']
    });

	// Graphics Page Stuff
	// Nav Button Highlighting
    if (window.graphics) {
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
