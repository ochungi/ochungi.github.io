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
 




