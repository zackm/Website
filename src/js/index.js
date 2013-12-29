$(document).ready(function(){
	
  // Nav Button Highlighting
  $("nav .nav-link").click(function() {
    $('nav .nav-link').removeClass('nav-selected');
    $(this).addClass('nav-selected');
  });
  // Home Nav Button
  $('#logo').click(function() {
    $('nav .nav-link').removeClass('nav-selected');
  });

});
