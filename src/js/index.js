$(document).ready(function(){
	
  // Nav Button Highlighting
  $("div.nav-button").click(function() {
    $('div.nav-button').removeClass('nav-selected');
    $(this).addClass('nav-selected');
  });
  // Home Nav Button
  $('#logo').click(function() {
    $('div.nav-button').removeClass('nav-selected');
  });

});