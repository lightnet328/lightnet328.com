$(function(){
   $("a[href^='#']").click(function() {
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href === "" ? 'html' : href);
      var header = $("#site-header-outline");
      var position = target.offset().top - header.height();
      console.log(header.height());
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});
