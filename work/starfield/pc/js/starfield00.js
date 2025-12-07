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

    
    
    
/*section 슬라이드 시작*/
    
        $('.slideshow').each(function () {

    // 변수의 준비
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        var $container = $(this),                                 // a
            $slideGroup = $container.find('.slideshow_slides'),   // b
            $slides = $slideGroup.find('.slide'),                 // c
            $nav = $container.find('.slideshow_nav'),             // d
            $indicator = $container.find('.slideshow_indicator'), // e
            // 슬라이드 쇼의 각 요소의 jQuery 객체
            // a 슬라이드 쇼 전체 컨테이너
            // b 모든 슬라이드의 정리 (슬라이드 그룹)
            // c 각 슬라이드
            // d 네비게이션 (Prev/Next)
            // e 인디게이터 (점)

            slideCount = $slides.length, // 슬라이드 점수
            indicatorHTML = '',          // 인디게이터 콘텐트
            currentIndex = 0,            // 현재 슬라이드의 인덱스
            duration = 300,              // 다음 슬라이드에 애니메이션의 소요 시간
            easing = 'easeInOutExpo',    // 다음 슬라이드에 애니메이션의 이징 종류
            interval = 4500,             // 자동으로 다음 슬라이드로 옮길 때까지의 시간
            timer;                       // 타이머


    // HTML 요소의 배치 생성 삽입
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        // 각 슬라이드의 위치를 결정하고,
        // 해당 인디게이터의 앵커를 생성
        $slides.each(function (i) {
            $(this).css({ left: 100 * i + '%' });
            indicatorHTML += '<a href="#">' + (i + 1) + '</a>';
        });

        // 인디게이터에 콘텐트를 삽입
        $indicator.html(indicatorHTML);


    // 함수의 정의
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        // 모든 슬라이드를 표시하는 함수
        function goToSlide (index) {
            // 슬라이드 그룹을 대상 위치에 맞게 이동
            $slideGroup.animate({ left: - 100 * index + '%' }, duration, easing);
            // 현재 슬라이드의 인덱스를 덮어쓰기
            currentIndex = index;
            // 탐색 및 표시 상태를 업데이트
            updateNav();
        }

        // 슬라이드의 상태에 따라 탐색 및 표시를 업데이트하는 함수
        function updateNav () {
            var $navPrev = $nav.find('.prev'), // Prev (뒤로) 링크
                $navNext = $nav.find('.next'); // Next (앞으로) 링크
            // 만약 첫 번째 슬라이드이라면 Prev 탐색을 해제
            if (currentIndex === 0) {
                $navPrev.addClass('disabled');
            } else {
                $navPrev.removeClass('disabled');
            }
            // 만약 마지막 슬라이드이라면 Next 탐색을 해제
            if (currentIndex === slideCount - 1) {
                $navNext.addClass('disabled');
            } else {
                $navNext.removeClass('disabled');
            }
            // 현재 슬라이드의 표시를 해제
            $indicator.find('a').removeClass('active')
                .eq(currentIndex).addClass('active');
        }

        // 타이머를 시작하는 함수
        function startTimer () {
            // 변수 interval에서 설정 한 시간이 경과 할 때마다 작업을 수행
            timer = setInterval(function () {
                // 현재 슬라이드의 인덱스에 따라 다음 표시 할 슬라이드의 결정
                // 만약 마지막 슬라이드이라면 첫 번째 슬라이드에
                var nextIndex = (currentIndex + 1) % slideCount;
                goToSlide(nextIndex);
            }, interval);
        }

        // 타이머를 중지있는 함수
        function stopTimer () {
            clearInterval(timer);
        }


    // 인벤토리 등록
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        // 네비게이션 링크를 클릭하면 해당 슬라이드를 표시
        $nav.on('click', 'a', function (event) {
            event.preventDefault();
            if ($(this).hasClass('prev')) {
                goToSlide(currentIndex - 1);
            } else {
                goToSlide(currentIndex + 1);
            }
        });

        // 인디게이터의 링크를 클릭하면 해당 슬라이드를 표시
        $indicator.on('click', 'a', function (event) {
            event.preventDefault();
            if (!$(this).hasClass('active')) {
                goToSlide($(this).index());
            }
        });

        // 마우스오버를 하면 타이머를 정지 그렇지 않으면 시작
        $container.on({
            mouseenter: stopTimer,
            mouseleave: startTimer
        });


    // 슬라이드 쇼 시작
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        // 첫 번째 슬라이드를 표시
        goToSlide(currentIndex);

        // 타이머를 시작
        startTimer();

    });
    
    
    
    
    
   /*main 주요매장 hover*/
    $(function(){
        $('.store_li').on('mouseover',function(){
            $(this).stop().animate({
                'width':'20%'
            },600,function(){
                $(this).find('a').stop().animate({
                    'right':'20px'
                },400);
//                $(this).find('span').stop().animate({
//                    'right':'20px'
//                },400);
            });
        });
        
        $('.store_li01').on('mouseover',function () {  
            $('.store_li01 > a > img').css({
                'display':'none'
            });
            $('.store_li01 > span').css({
                'display':'none'
            });
            $('.store_li01 > div').css({
                'display':'block'
            });
        });
        
        /*li02 hover*/
        $('.store_li02').on('mouseover',function () {
            $('.store_li02 > a > img').css({
                'display':'none'
            });
            $('.store_li02 > span').css({
                'display':'none'
            });
            $('.bg_div02').css({
                'display':'block'
            });
            
        });
        /*li02 leave*/
        $('.store_li02').on('mouseleave',function() {
            $('.bg_div').css({
                'display':'none'
            });
            $('.store_li02 > a > img').css({
                'display':'block'
            });
            $('.store_li02 > span').css({
                'display':'block'
            });
        });
        
        /*li03 hover*/
        $('.store_li03').on('mouseover',function () {
            $('.store_li03 > a > img').css({
                'display':'none'
            });
            $('.store_li03 > span').css({
                'display':'none'
            });
            $('.bg_div03').css({
                'display':'block'
            });
            
        });
        /*li03 leave*/
        $('.store_li03').on('mouseleave',function() {
            $('.bg_div').css({
                'display':'none'
            });
            $('.store_li03 > a > img').css({
                'display':'block'
            });
            $('.store_li03 > span').css({
                'display':'block'
            });
        });
        
        /*li04 hover*/
        $('.store_li04').on('mouseover',function () {
            $('.store_li04 > a > img').css({
                'display':'none'
            });
            $('.store_li04 > span').css({
                'display':'none'
            });
            $('.bg_div04').css({
                'display':'block'
            });
            
        });
        /*li04 leave*/
        $('.store_li04').on('mouseleave',function() {
            $('.bg_div').css({
                'display':'none'
            });
            $('.store_li04 > a > img').css({
                'display':'block'
            });
            $('.store_li04 > span').css({
                'display':'block'
            });
        });
        
        /*li05 hover*/
        $('.store_li05').on('mouseover',function () {
            $('.store_li05 > a > img').css({
                'display':'none'
            });
            $('.store_li05 > span').css({
                'display':'none'
            });
            $('.bg_div05').css({
                'display':'block'
            });
            
        });
        /*li05 leave*/
        $('.store_li05').on('mouseleave',function() {
            $('.bg_div').css({
                'display':'none'
            });
            $('.store_li05 > a > img').css({
                'display':'block'
            });
            $('.store_li05 > span').css({
                'display':'block'
            });
        });
        
        /*li06 hover*/
        $('.store_li06').on('mouseover',function () {
            $('.store_li06 > a > img').css({
                'display':'none'
            });
            $('.store_li06 > span').css({
                'display':'none'
            });
            $('.bg_div06').css({
                'display':'block'
            });
            
        });
        /*li05 leave*/
        $('.store_li06').on('mouseleave',function() {
            $('.bg_div').css({
                'display':'none'
            });
            $('.store_li06 > a > img').css({
                'display':'block'
            });
            $('.store_li06 > span').css({
                'display':'block'
            });
        });
        
        /*li07 hover*/
        $('.store_li07').on('mouseover',function () {
            $('.store_li07 > a > img').css({
                'display':'none'
            });
            $('.store_li07 > span').css({
                'display':'none'
            });
            $('.bg_div07').css({
                'display':'block'
            });
            
        });
        /*li07 leave*/
        $('.store_li07').on('mouseleave',function() {
            $('.bg_div').css({
                'display':'none'
            });
            $('.store_li07 > a > img').css({
                'display':'block'
            });
            $('.store_li07 > span').css({
                'display':'block'
            });
        });
        
        /*li08 hover*/
        $('.store_li08').on('mouseover',function () {
            $('.store_li08 > a > img').css({
                'display':'none'
            });
            $('.store_li08 > span').css({
                'display':'none'
            });
            $('.bg_div08').css({
                'display':'block'
            });
            
        });
        /*li08 leave*/
        $('.store_li08').on('mouseleave',function() {
            $('.bg_div').css({
                'display':'none'
            });
            $('.store_li08 > a > img').css({
                'display':'block'
            });
            $('.store_li08 > span').css({
                'display':'block'
            });
        });
        
        $('.store_li09').on('mouseover',function(){
            $(this).stop().animate({
                'width':'16%',
            },600,function(){
                $(this).find('a').stop().animate({
                    'left':'18px'
                },400);
//                $(this).find('span').stop().animate({
//                    'right':'20px'
//                },400);
            });
        });
        
        /*li09 hover*/
        $('.store_li09').on('mouseover',function () {
            $('.store_li09 > a > img').css({
                'display':'none'
            });
            $('.store_li09 > span').css({
                'display':'none'
            });
            $('.bg_div09').css({
                'display':'block'
            });
            
        });
        /*li09 leave*/
        $('.store_li09').on('mouseleave',function() {
            $('.bg_div').css({
                'display':'none'
            });
            $('.store_li09 > a > img').css({
                'display':'block'
            });
            $('.store_li09 > span').css({
                'display':'block'
            });
        });
        
        /*leave시 */
        $('.store_li').on('mouseleave',function(){
            $(this).stop().animate({
                'width':'10.3%'
            },600,function(){
                $(this).find('a').stop().animate({
                    'right':'-13px'
                },400);
//                $(this).find('span').stop().animate({
//                    'right':'-13px'
//                },400);
            });
            $('.store_li01 > a > img').css({
                'display':'block'
            });
            $('.store_li01 > span').css({
                'display':'block'
            });
        });
        
        
    });

    
    
/*main 주요매장 내용 나오게 하는 거*/
$(function(){
       $('.store_box > ul > li').eq(0).on('mouseout',function() {
           $('.store_box > ul > li:nth-child(1) > div').css({
                'display':'none'
            });
            $('.store_box > ul > li:nth-child(1) > a > img').css({
                'display':'block'
            });
       }) 
    });
    
   /*main 주요매장 내용 나오게 하는 거*/
    $(function(){
        $('.store_box > ul > li').eq(0).on('click',function(){
            $('.store_box_on').addClass('on');
            $('.store_box').css({
                'display':'none'
            });
        });
            
    });
    
    /*main 주요매장에서 주요매장 내용에서 리스트 나오게 하는거*/
    $(function(){
       $('.store_box_on > a').on('click',function(){
           $('.store_box_on').removeClass('on');
           $('.store_box').css({
               'display':'block'
           });
       });
    });
    
    
  
/*엔터테인먼트 hover시 li의 넓이 변화*/
    $(function(){
        $('.box_b_li').on('mouseover',function(){
            $(this).stop().animate({
                'width':'24%'
            },600,function(){
                $(this).find('a').stop().animate({
                    'right':'20px'
                },400);
            });
        }); 
    });
    
    /*div.store_box_b > ul > li .b_bg_div01*/
    $(function() {
        $('.box_b_li01').on('mouseover',function() {
            $('.box_b_li01 > a > img').css({
                'display':'none'
            });
            $('.box_b_li01 > span').css({
                'display':'none'
            });
            $('.b_bg_div01').css({
                'display':'block'
            });
        });
     });
    $(function() {
        $('.box_b_li01').on('mouseleave',function() {
            $('.box_b_li01 > a > img').css({
                'display':'block'
            });
            $('.box_b_li01 > span').css({
                'display':'block'
            });
            $('.b_bg_div01').css({
                'display':'none'
            });
        });
     });
    
        /*div.store_box_b > ul > li .b_bg_div02*/
    $(function() {
        $('.box_b_li02').on('mouseover',function() {
            $('.box_b_li02 > a > img').css({
                'display':'none'
            });
            $('.box_b_li02 > span').css({
                'display':'none'
            });
            $('.b_bg_div02').css({
                'display':'block'
            });
        });
     });
    $(function() {
        $('.box_b_li02').on('mouseleave',function() {
            $('.box_b_li02 > a > img').css({
                'display':'block'
            });
            $('.box_b_li02 > span').css({
                'display':'block'
            });
            $('.b_bg_div02').css({
                'display':'none'
            });
        });
     });
    
/*div.store_box_b > ul > li .b_bg_div03*/
    $(function() {
        $('.box_b_li03').on('mouseover',function() {
            $('.box_b_li03 > a > img').css({
                'display':'none'
            });
            $('.box_b_li03 > span').css({
                'display':'none'
            });
            $('.b_bg_div03').css({
                'display':'block'
            });
        });
     });
    $(function() {
        $('.box_b_li03').on('mouseleave',function() {
            $('.box_b_li03 > a > img').css({
                'display':'block'
            });
            $('.box_b_li03 > span').css({
                'display':'block'
            });
            $('.b_bg_div03').css({
                'display':'none'
            });
        });
     });

        /*div.store_box_b > ul > li .b_bg_div04*/
    $(function() {
        $('.box_b_li04').on('mouseover',function() {
            $('.box_b_li04 > a > img').css({
                'display':'none'
            });
            $('.box_b_li04 > span').css({
                'display':'none'
            });
            $('.b_bg_div04').css({
                'display':'block'
            });
        });
     });
    $(function() {
        $('.box_b_li04').on('mouseleave',function() {
            $('.box_b_li04 > a > img').css({
                'display':'block'
            });
            $('.box_b_li04 > span').css({
                'display':'block'
            });
            $('.b_bg_div04').css({
                'display':'none'
            });
        });
     });

        /*div.store_box_b > ul > li .b_bg_div05*/
    $(function() {
        $('.box_b_li05').on('mouseover',function() {
            $('.box_b_li05 > a > img').css({
                'display':'none'
            });
            $('.box_b_li05 > span').css({
                'display':'none'
            });
            $('.b_bg_div05').css({
                'display':'block'
            });
        });
     });
    $(function() {
        $('.box_b_li05').on('mouseleave',function() {
            $('.box_b_li05 > a > img').css({
                'display':'block'
            });
            $('.box_b_li05 > span').css({
                'display':'block'
            });
            $('.b_bg_div05').css({
                'display':'none'
            });
        });
     });
    
/*div.store_box_b > ul > li-4번째는 넓이가 다름*/
    $(function(){
        $('.box_b_li05').on('mouseover',function(){
            $(this).stop().animate({
                'width':'22%'
            },600,function(){
                $(this).find('a').stop().animate({
                    'right':'20px'
                },400);
            });
        });
    });
    
    
    /*엔터테인먼트 leave시 li의 넓이 변화*/
        $('.box_b_li').on('mouseleave',function(){
            $(this).stop().animate({
                'width':'18.7%'
            },300,function(){
                $(this).find('a').stop().animate({
                    'right':'-13px'
                },400);
            });

        });
    
   /*main 엔터테인먼트 내용 나오게 하는 거*/
    $(function(){
        $('.box_b_li01').on('click',function(){
            $('.store_box_b_on').addClass('on');
            $('.store_box_b').css({
                'display':'none'
            });
        });
            
    });
    
    /*main 엔터테인먼트 내용에서 리스트 나오게 하는거*/
    $(function(){
       $('.store_box_b_on > a').on('click',function(){
           $('.store_box_b_on').removeClass('on');
           $('.store_box_b').css({
               'display':'block'
           });
       });
    });
    
    
    
    
    
    
    
    
    
    

    
});
































