$(function(){
   $('.next_btn').on('click',function(){
      $('.box2-1').css({
         'display':'none' 
      }); 
   });
    $('.next_btn').on('click',function(){
      $('.box2-2').css({
         'display':'block',          
      }); 
   });
    $('.next_btn').on('click',function(){
      $(this).css({
         'display':'none',          
      }); 
   });
    $('.next_btn').on('click',function(){
      $('.prev_btn').css({
         'display':'block',          
      }); 
   });
});

$(function(){
   $('.prev_btn').on('click',function(){
      $('.box2-2').css({
         'display':'none' 
      }); 
   });
    $('.prev_btn').on('click',function(){
      $('.box2-1').css({
         'display':'block',          
      }); 
   });
    $('.prev_btn').on('click',function(){
      $(this).css({
         'display':'none',          
      }); 
   });
    $('.prev_btn').on('click',function(){
      $('.next_btn').css({
         'display':'block',          
      }); 
   });
});








