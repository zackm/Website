$(document).ready(function(){
	if (window.usePageTransitions) {
		PageTransitions.init();
	}

    Fluidvids.init({
      selector: 'iframe',
      players: ['www.youtube.com']
    });
});
