$(function(){
    //트리거 버튼을 누르면 gnb메뉴가 나타남
    $('#gnb_menubtn').on('click',function(){
       $('.gnb_wrap').css({
           'display':'block'
       });
         $('.click_blind').css({
           'display':'block'
       }); 
    });
    //x버튼을 누르면 gnb메뉴가 없어짐
    $('.x').on('click',function(){
       $('.gnb_wrap').css({
           'display':'none'
       });
        $('.click_blind').css({
           'display':'none'
       });
    });
});



   $(function(){
	$("#accordian h3").click(function(){
		$("#accordian ul ul").slideUp();
		if(!$(this).next().is(":visible"))
		{
			$(this).next().slideDown();
		}
	});
});




 $(function(){
     $("#accordian h3").eq(0).on('click',function(){
         $(this).css({
             'backgroundColor':'#312f2f',
             'color':'#c1a774'
         });
         $('#accordian h3').eq(1).css({
             'backgroundColor':'',
             'color':''
         });
         $('#accordian h3').eq(2).css({
             'backgroundColor':'',
             'color':''
         });
         $('#accordian h3').eq(3).css({
             'backgroundColor':'',
             'color':''
         });
         $('#accordian h3').eq(4).css({
             'backgroundColor':'',
             'color':''
         });
         $('#accordian h3').eq(5).css({
             'backgroundColor':'',
             'color':''
         });
     });//클릭시 색깔변경
     //클릭후 색깔이변경된 다음 마우스를 옮겨도 색이 유지되면서 다른걸 클릭하면 색이 원상태로 돌아옴.
     $("#accordian h3").eq(1).on('click',function(){
         $(this).css({
             'backgroundColor':'#312f2f',
             'color':'#c1a774'
         });
         $('#accordian h3').eq(0).css({
             'backgroundColor':'#fff',
             'color':''
         });
         $('#accordian h3').eq(2).css({
             'backgroundColor':'',
             'color':''
         });
         $('#accordian h3').eq(3).css({
             'backgroundColor':'',
             'color':''
         });
         $('#accordian h3').eq(4).css({
             'backgroundColor':'',
             'color':''
         });
         $('#accordian h3').eq(5).css({
             'backgroundColor':'',
             'color':''
         });
     });
     
     
     $("#accordian h3").eq(2).on('click',function(){
         $(this).css({
             'backgroundColor':'#312f2f',
             'color':'#c1a774'
         });
         $('#accordian h3').eq(0).css({
             'backgroundColor':'',
             'color':''
         });
         $('#accordian h3').eq(1).css({
             'backgroundColor':'',
             'color':''
         });
         $('#accordian h3').eq(3).css({
             'backgroundColor':'',
             'color':''
         });
         $('#accordian h3').eq(4).css({
             'backgroundColor':'',
             'color':''
         });
         $('#accordian h3').eq(5).css({
             'backgroundColor':'',
             'color':''
         });
     });
     
     $("#accordian h3").eq(3).on('click',function(){
         $(this).css({
             'backgroundColor':'#312f2f',
             'color':'#c1a774'
         });
         $('#accordian h3').eq(0).css({
             'backgroundColor':'',
             'color':''
         });
         $('#accordian h3').eq(1).css({
             'backgroundColor':'',
             'color':''
         });
         $('#accordian h3').eq(2).css({
             'backgroundColor':'',
             'color':''
         });
         $('#accordian h3').eq(4).css({
             'backgroundColor':'',
             'color':''
         });
         $('#accordian h3').eq(5).css({
             'backgroundColor':'',
             'color':''
         });
     });
     
     $("#accordian h3").eq(4).on('click',function(){
         $(this).css({
             'backgroundColor':'#312f2f',
             'color':'#c1a774'
         });
         $('#accordian h3').eq(0).css({
             'backgroundColor':'',
             'color':''
         });
         $('#accordian h3').eq(1).css({
             'backgroundColor':'',
             'color':''
         });
         $('#accordian h3').eq(2).css({
             'backgroundColor':'',
             'color':''
         });
         $('#accordian h3').eq(3).css({
             'backgroundColor':'',
             'color':''
         });
         $('#accordian h3').eq(5).css({
             'backgroundColor':'',
             'color':''
         });
     });
     
     $("#accordian h3").eq(5).on('click',function(){
         $(this).css({
             'backgroundColor':'#312f2f',
             'color':'#c1a774'
         });
         $('#accordian h3').eq(0).css({
             'backgroundColor':'',
             'color':''
         });
         $('#accordian h3').eq(1).css({
             'backgroundColor':'',
             'color':''
         });
         $('#accordian h3').eq(2).css({
             'backgroundColor':'',
             'color':''
         });
         $('#accordian h3').eq(3).css({
             'backgroundColor':'',
             'color':''
         });
         $('#accordian h3').eq(4).css({
             'backgroundColor':'',
             'color':''
         });
     });

 });


//event mouseover
$(function(){
    //event 01
   $('.eve_content_01').on('mouseover', function(){
      $('.eve_content_01 > p').eq(0).css({
          'display':'none'
      });
       $('.eve_content_01 > p').eq(1).css({
          'display':'block'
      });
   }); 
    $('.eve_content_01').on('mouseleave', function(){
      $('.eve_content_01 > p').eq(0).css({
          'display':'block'
      });
       $('.eve_content_01 > p').eq(1).css({
          'display':'none'
      });
   });
    
    //event 02
    $('.eve_content_02').on('mouseover', function(){
      $('.eve_content_02 > p').eq(0).css({
          'display':'none'
      });
       $('.eve_content_02 > p').eq(1).css({
          'display':'block'
      });
   }); 
    $('.eve_content_02').on('mouseleave', function(){
      $('.eve_content_02 > p').eq(0).css({
          'display':'block'
      });
       $('.eve_content_02 > p').eq(1).css({
          'display':'none'
      });
   });
    //event 03
    $('.eve_content_03').on('mouseover', function(){
      $('.eve_content_03 > p').eq(0).css({
          'display':'none'
      });
       $('.eve_content_03 > p').eq(1).css({
          'display':'block'
      });
        $(this).css({
          'border':'none'
      });
   }); 
    $('.eve_content_03').on('mouseleave', function(){
      $('.eve_content_03 > p').eq(0).css({
          'display':'block'
      });
       $('.eve_content_03 > p').eq(1).css({
          'display':'none'
      });
        $(this).css({
          'border':''
      });     
   });
});

//sns mouseover
$(function(){
    //sns 01
   $('.sns_content_01').on('mouseover', function(){
      $('.sns_content_01 > p').eq(0).css({
          'display':'none'
      });
       $('.sns_content_01 > p').eq(1).css({
          'display':'block'
      });
   });
    $('.sns_content_01').on('mouseleave', function(){
      $('.sns_content_01 > p').eq(0).css({
          'display':'block'
      });
       $('.sns_content_01 > p').eq(1).css({
          'display':'none'
      });
   });
    
    //sns02
    
    $('.sns_content_02').on('mouseover', function(){
      $('.sns_content_02 > p').eq(0).css({
          'display':'none'
      });
       $('.sns_content_02 > p').eq(1).css({
          'display':'block'
      });
   });
    $('.sns_content_02').on('mouseleave', function(){
      $('.sns_content_02 > p').eq(0).css({
          'display':'block'
      });
       $('.sns_content_02 > p').eq(1).css({
          'display':'none'
      });
   });
    
    //03
    $('.sns_content_03').on('mouseover', function(){
      $('.sns_content_03 > p').eq(0).css({
          'display':'none'
      });
       $('.sns_content_03 > p').eq(1).css({
          'display':'block'
      });
   });
    $('.sns_content_03').on('mouseleave', function(){
      $('.sns_content_03 > p').eq(0).css({
          'display':'block'
      });
       $('.sns_content_03 > p').eq(1).css({
          'display':'none'
      });
   });
});


//탭메뉴 sns를 눌럿을경우
$(function(){
   $('.submenu_btn02').on('click',function(){
      $('.men01').css({
          'display':'none'
      });
       $('.men02').css({
          'display':'block'
      });
       $(this).css({
          'border-width':'none',
           'border-style':'none',
           'border-color':'none',
           'backgroundColor':'#c1a774',
           'color':'#eeeeee'
       });
       $('.submenu_btn01').css({
           'border-width':'1px',
           'border-style':'solid',
           'border-color':'#c1a774',
           'box-sizing':'border-box',
           'backgroundColor':'#fff',
           'color':'#2f2e2d'
       });
       $('.sns_contents').css({
          'display':'block'
       });
       $('.eve_contents').css({
          'display':'none'
       });
   }); 
});
//탭메뉴 event를 눌렀을 경우
$(function(){
   $('.submenu_btn01').on('click',function(){
      $('.men02').css({
          'display':'none'
      });
       $('.men01').css({
          'display':'block'
      });
       $(this).css({
          'border-width':'none',
           'border-style':'none',
           'border-color':'none',
           'backgroundColor':'#c1a774',
           'color':'#eeeeee'
       });
       $('.submenu_btn02').css({
           'border-width':'1px',
           'border-style':'solid',
           'border-color':'#c1a774',
           'box-sizing':'border-box',
           'backgroundColor':'#fff',
           'color':'#2f2e2d'
       });
       $('.eve_contents').css({
          'display':'block'
       });
       $('.sns_contents').css({
          'display':'none'
       });
   }); 
});


















