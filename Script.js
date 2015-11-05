jQuery(document).ready(function($) {
    
      $('.trigger').click(function(){
    $('.mobile-navbar').toggle("slide", { direction: "up" }, 300);
    $('.line-1').toggleClass('line-1-x');
    $('.line-2').toggleClass('line-2-x');
    $('.line-2-1').toggleClass('line-2-1-x');
    $('.line-3').toggleClass('line-3-x');
   });
   
});