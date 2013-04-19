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

// Change page content
var pages = ['home','about','work','contact'];

$.each(pages,function(i,val){
    var name = '.' + val;
    $(name+'-button').click(function() {
      var currentPage = $('.active-content');
      if(!currentPage.hasClass(val)) {
        currentPage.fadeToggle(400,"swing", function(){
            currentPage.removeClass('active-content');
            $(name).addClass('active-content');
            $(name).fadeToggle(400);
        });
      }
    });
});

});

removeAnimation = function() {
  $("#logo").removeClass("animated").removeClass("tada");
}

$("#logo").click(function(){
  $(this).addClass("animated tada");
  window.setTimeout(removeAnimation,1500);
});