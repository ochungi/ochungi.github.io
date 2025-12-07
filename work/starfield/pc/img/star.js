$(function(){
   $('.gnb_wrap > .gnb > li').eq(0).on('mouseover', function(){
      $('.gnb_wrap > .gnb > li > ul').eq(0).addClass('on'); 
   });
   $('.gnb_wrap > .gnb > li').eq(0).on('mouseleave', function(){
      $('.gnb_wrap > .gnb > li > ul').eq(0).removeClass('on'); 
   });     
});
