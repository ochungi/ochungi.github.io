$(function(){
    //검색버튼
    $('.seach_button').on('click', function(){
       $('.seach').css({
           'display':'block',
           'padding':'0'
       });
    });
    
    //소개
   $('.gnb_wrap > .gnb > li > a').eq(0).on('mouseover', function(){
      $('.gnb_wrap > .gnb > li > ul').eq(0).addClass('on');
     $(this).addClass('off');
     $('.gnb_wrap > .gnb > li > a').eq(1).removeClass('off');
     $('.gnb_wrap > .gnb > li > a').eq(2).removeClass('off');
     $('.gnb_wrap > .gnb > li > a').eq(3).removeClass('off');
     $('.gnb_wrap > .gnb > li > a').eq(4).removeClass('off');
     $('.gnb_wrap > .gnb > li > a').eq(5).removeClass('off');
     
   });
   $('.gnb_wrap > .gnb > li').eq(0).on('mouseleave', function(){
      $('.gnb_wrap > .gnb > li > ul').eq(0).removeClass('on'); 
   });
    
    
    
    //주요매장
    $('.gnb_wrap > .gnb > li > a').eq(1).on('mouseover', function(){
      $('.gnb_wrap > .gnb > li > ul').eq(1).addClass('on');
     $(this).addClass('off');
    $('.gnb_wrap > .gnb > li > a').eq(0).removeClass('off');
     $('.gnb_wrap > .gnb > li > a').eq(2).removeClass('off');
     $('.gnb_wrap > .gnb > li > a').eq(3).removeClass('off');
     $('.gnb_wrap > .gnb > li > a').eq(4).removeClass('off');
     $('.gnb_wrap > .gnb > li > a').eq(5).removeClass('off');
   });
   $('.gnb_wrap > .gnb > li').eq(1).on('mouseleave', function(){
      $('.gnb_wrap > .gnb > li > ul').eq(1).removeClass('on'); 
   });  
    //엔터테이먼트
    $('.gnb_wrap > .gnb > li > a').eq(2).on('mouseover', function(){
      $('.gnb_wrap > .gnb > li > ul').eq(2).addClass('on');
    $(this).addClass('off');
    $('.gnb_wrap > .gnb > li > a').eq(0).removeClass('off');
     $('.gnb_wrap > .gnb > li > a').eq(1).removeClass('off');
     $('.gnb_wrap > .gnb > li > a').eq(3).removeClass('off');
     $('.gnb_wrap > .gnb > li > a').eq(4).removeClass('off');
     $('.gnb_wrap > .gnb > li > a').eq(5).removeClass('off');
   });
   $('.gnb_wrap > .gnb > li').eq(2).on('mouseleave', function(){
      $('.gnb_wrap > .gnb > li > ul').eq(2).removeClass('on'); 
   });  
    //레스토랑n카페
    $('.gnb_wrap > .gnb > li > a').eq(3).on('mouseover', function(){
      $('.gnb_wrap > .gnb > li > ul').eq(3).addClass('on');
     $(this).addClass('off');
    $('.gnb_wrap > .gnb > li > a').eq(0).removeClass('off');
     $('.gnb_wrap > .gnb > li > a').eq(1).removeClass('off');
     $('.gnb_wrap > .gnb > li > a').eq(2).removeClass('off');
     $('.gnb_wrap > .gnb > li > a').eq(4).removeClass('off');
     $('.gnb_wrap > .gnb > li > a').eq(5).removeClass('off');
   });
   $('.gnb_wrap > .gnb > li').eq(3).on('mouseleave', function(){
      $('.gnb_wrap > .gnb > li > ul').eq(3).removeClass('on');
     
   });  
    //이벤트nSNS
     $('.gnb_wrap > .gnb > li > a').eq(4).on('mouseover', function(){
      $('.gnb_wrap > .gnb > li > ul').eq(4).addClass('on');
      $(this).addClass('off');
     $('.gnb_wrap > .gnb > li > a').eq(0).removeClass('off');
     $('.gnb_wrap > .gnb > li > a').eq(1).removeClass('off');
     $('.gnb_wrap > .gnb > li > a').eq(2).removeClass('off');
     $('.gnb_wrap > .gnb > li > a').eq(3).removeClass('off');
     $('.gnb_wrap > .gnb > li > a').eq(5).removeClass('off');
   });
   $('.gnb_wrap > .gnb > li').eq(4).on('mouseleave', function(){
      $('.gnb_wrap > .gnb > li > ul').eq(4).removeClass('on'); 
   }); 
    //고객의견
     $('.gnb_wrap > .gnb > li > a').eq(5).on('mouseover', function(){
      $('.gnb_wrap > .gnb > li > ul').eq(5).addClass('on');
      $(this).addClass('off');
     $('.gnb_wrap > .gnb > li > a').eq(0).removeClass('off');
     $('.gnb_wrap > .gnb > li > a').eq(1).removeClass('off');
     $('.gnb_wrap > .gnb > li > a').eq(2).removeClass('off');
     $('.gnb_wrap > .gnb > li > a').eq(3).removeClass('off');
     $('.gnb_wrap > .gnb > li > a').eq(4).removeClass('off');
   });
   $('.gnb_wrap > .gnb > li').eq(5).on('mouseleave', function(){
      $('.gnb_wrap > .gnb > li > ul').eq(5).removeClass('on'); 
   }); 
    
    
    //bg
     $('.gnb_wrap > .gnb > li').on('mouseover', function(){
      $('.gnb01_bg').addClass('on'); 
   });
   $('.gnb_wrap > .gnb > li').on('mouseleave', function(){
      $('.gnb01_bg').removeClass('on'); 
   });
   /* // hover 했을시 .gnb > li 의 color 색 변화
    $('.gnb_wrap > .gnb > li ').on('mouseover', function(){
      $('.gnb_wrap > .gnb > li > a ').css({
         'color':'#c1a774' 
      });
   });*/
   /*$('.gnb_wrap > .gnb > li').on('mouseleave', function(){
      $('.gnb_wrap > .gnb > li').css({
         'color':'#fff'  
   });
   });*/
    //hover
     
    
});