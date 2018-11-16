$(function(){
  
  let $wave1 = $(".wave1"),
      $wave2 = $(".wave2"),
      $wave3 = $(".wave3"),
      screenWidth = 0;
  
  $(".btn-start").click(function(){
    $(".screen-slider").addClass("slides")
  });
  
  $(window).mousemove(function(e){
    $wave1.css("background-position", -1 * ((screenWidth / 2 - e.clientX) / 35) + "px 400px");
    $wave2.css("background-position", -1 * ((screenWidth / 2 - e.clientX) / 25) + "px 400px");
    $wave3.css("background-position", -1 * ((screenWidth / 2 - e.clientX) / 15) + "px 400px");
  });
  
  $(window).resize(function(){
    screenWidth = $(window).width();
  });
  
  screenWidth = $(window).width();
});