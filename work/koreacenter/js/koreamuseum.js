
//모바일 탭메뉴
$(function(){
	$('.con5_m h2').css('cursor','pointer');
});

$(function(){
    $('.con3_m_btn2').on('click',function(){
        $('.con3_m_btn2').css('background-color','#e1cea9'),
        $('.con3_m_btn1').css('background-color','#fff'),
        $('.con3_m_frame1').css('display','none'),
        $('.con3_m_frame2').css('display','block')            
    });
});

$(function(){
    $('.con3_m_btn1').on('click',function(){
        $('.con3_m_btn1').css('background-color','#e1cea9'),
        $('.con3_m_btn2').css('background-color','#fff'),
        $('.con3_m_frame2').css('display','none'),
        $('.con3_m_frame1').css('display','block')            
    });
});

// pc 이달의행사 슬라이드
$(function(){
    $('con5').each(function(){
       
        var $container = $(this),
            $slideGroup = $('.slideshow_slides'),
            $slides = $slideGroup.find('slide')
            
        
    });
});


//btnMenu click시
$(function(){
   $('.btnMenu').on('click',function(){
       $('.m_btn_menu').css('display','block'),
       $('.menu').css('display','block')
   }); 
});
//x_btn click시
$(function(){
   $('.x_btn').on('click',function(){
       $('.m_btn_menu').css('display','none'),
       $('.menu').css('display','none')
   }); 
});


/*main info 에 호버시*/
/*관람시간*/
$(function(){
    $('.ic_ho01').on('mouseenter',function(){
      $(this).css({
          'color':'#e1cea9'
      });
    });
});
$(function(){
    $('.ic_ho01').on('mouseenter',function(){
      $('.icon00_01').css({
          'background-image':'url(img/icon_time_hover.png)'
      });
    });
});

$(function(){
    $('.ic_ho01').on('mouseleave',function(){
      $(this).css({
          'color':''
      });
    });
});
$(function(){
    $('.ic_ho01').on('mouseleave',function(){
      $('.icon00_01').css({
          'background-image':''
      });
    });
});
/*예약예매*/
$(function(){
    $('.ic_ho02').on('mouseenter',function(){
      $(this).css({
          'color':'#e1cea9'
      });
    });
});
$(function(){
    $('.ic_ho02').on('mouseenter',function(){
      $('.icon00_02').css({
          'background-image':'url(img/icon_reserve_hover.png)'
      });
    });
});

$(function(){
    $('.ic_ho02').on('mouseleave',function(){
      $(this).css({
          'color':''
      });
    });
});
$(function(){
    $('.ic_ho02').on('mouseleave',function(){
      $('.icon00_02').css({
          'background-image':''
      });
    });
});
/*gps*/
$(function(){
    $('.ic_ho03').on('mouseenter',function(){
      $(this).css({
          'color':'#e1cea9'
      });
    });
});
$(function(){
    $('.ic_ho03').on('mouseenter',function(){
      $('.icon00_03').css({
          'background-image':'url(img/icon_gps_hover.png)'
      });
    });
});

$(function(){
    $('.ic_ho03').on('mouseleave',function(){
      $(this).css({
          'color':''
      });
    });
});
$(function(){
    $('.ic_ho03').on('mouseleave',function(){
      $('.icon00_03').css({
          'background-image':''
      });
    });
});












