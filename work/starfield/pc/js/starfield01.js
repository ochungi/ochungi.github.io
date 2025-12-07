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

$(function(){
  $('.box1').on('mouseover', function(){
      $(this).css({
        'display':'none'
      }); 
      $('.box1_1').css({
        'display':'block'
      }); 
   });
 /* $('.box1').on('mouseover', function(){
      $('.box1_1').css({
        'display':'block'
      }); 
   });*/
  $('.box1').on('mouseleave', function(){
      $(this).css({
        'display':'block'
      }); 
   });
  $('.box1').on('mouseleave', function(){
      $('.box1_1').css({
        'display':'none'
      }); 
   });


  $('.box2').on('mouseover', function(){
      $(this).css({
        'display':'none'
      }); 
   });
  $('.box2').on('mouseover', function(){
      $('.box2_2').css({
        'display':'block'
      }); 
   });
  $('.box2').on('mouseleave', function(){
      $(this).css({
        'display':'block'
      }); 
   });
  $('.box2').on('mouseleave', function(){
      $('.box2_2').css({
        'display':'none'
      }); 
   });


  $('.box3').on('mouseover', function(){
      $(this).css({
        'display':'none'
      }); 
   });
  $('.box3').on('mouseover', function(){
      $('.box3_3').css({
        'display':'block'
      }); 
   });
  $('.box3').on('mouseleave', function(){
      $(this).css({
        'display':'block'
      }); 
   });
  $('.box3').on('mouseleave', function(){
      $('.box3_3').css({
        'display':'none'
      }); 
   });


  $('.box4').on('mouseover', function(){
      $(this).css({
        'display':'none'
      }); 
   });
  $('.box4').on('mouseover', function(){
      $('.box4_4').css({
        'display':'block'
      }); 
   });
  $('.box4').on('mouseleave', function(){
      $(this).css({
        'display':'block'
      }); 
   });
  $('.box4').on('mouseleave', function(){
      $('.box4_4').css({
        'display':'none'
      }); 
   });


  $('.box5').on('mouseover', function(){
      $(this).css({
        'display':'none'
      }); 
   });
  $('.box5').on('mouseover', function(){
      $('.box5_5').css({
        'display':'block'
      }); 
   });
  $('.box5').on('mouseleave', function(){
      $(this).css({
        'display':'block'
      }); 
   });
  $('.box5').on('mouseleave', function(){
      $('.box5_5').css({
        'display':'none'
      }); 
   });


});

$(function () {

    /*
     * Slideshow
     */
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
            duration = 500,              // 다음 슬라이드에 애니메이션의 소요 시간
            easing = 'easeInOutExpo',    // 다음 슬라이드에 애니메이션의 이징 종류
            interval = 3000,             // 자동으로 다음 슬라이드로 옮길 때까지의 시간
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

});


//$(function(){
//     $('.section').on('mouseover', function(){
//        $(this).text({'영동대교'
//          
//       });
//  });
//});

//
$(function(){
	
	// 마우스가 들어갔을 때
	$('.section').on('mouseenter', function(){
		$('.section > div').text(
            '영동대교에서 17km 강남에서 자동차로 30분에 도착할 수 있는 탁월한 접근성으로 수도권 가족단위 고객들에게 최적의 나들이 코스입니다.  또한 동시에 6200대 주차할 수 있는 국내 최대의 주차공간이 있습니다.')  
	});
    $('.section').on('mouseenter',function(){
       $('.section > h2').css({
          'display':'none' 
       }); 
    });
    $('.section').on('mouseenter', function(){
		$('.section > div').css({
            'width':'300px',
            'padding-top':'60px'
            
        });
	});
       
    	
}); 


        
$(function(){
    $('.section').on('mouseleave', function(){
		$('.section > div').text(
            '강남에서 자동차로 30분, 6,200대 동시 주차 공간')
            
	}),
      $('.section').on('mouseleave', function(){
		$('.section > div').css({
            'width':'250px'
        });    
	});
    $('.section').on('mouseleave', function(){
		$('.section > h2').css({
            'display':'block'
        });        
	});
    $('.section').on('mouseleave',function(){
      $('.section > div').css({
          'padding-top':'25px',
          'width':'200px'
      });
    });
    
}); 




//2
$(function(){
	
	// 마우스가 들어갔을 때
	$('.section_1').on('mouseenter', function(){
		$('.section_1 > div').text(
            '지상 4층에서 지하 4층까지 축구장의 70배 크기인 연면적 460,000m2(약 14만평)에 달하는 타원형의 건물은 국내에서 단일 건물 최대 쇼핑몰입니다.유리 천장을 통해 하루 종일 자연광이 들어오는 쾌적한 쇼핑 공간입니다.')  
	});
    $('.section_1').on('mouseenter',function(){
       $('.section_1 > h2').css({
          'display':'none' 
       }); 
    });
    $('.section_1').on('mouseenter', function(){
		$('.section_1 > div').css({
            'width':'300px',
            'padding-top':'60px',
            
        });
	});
       
    	
}); 


        
$(function(){
    $('.section_1').on('mouseleave', function(){
		$('.section_1 > div').text(
            '햇살 가득한 단일 건물, 국내 최대 쇼핑몰')
            
	}),
      $('.section_1').on('mouseleave', function(){
		$('.section_1 > div').css({
            'width':'250px'
        });    
	});
    $('.section_1').on('mouseleave', function(){
		$('.section_1 > h2').css({
            'display':'block'
        });    
	});
    $('.section_1').on('mouseleave',function(){
      $('.section_1 > div').css({
          'padding-top':'25px',
          'width':'180px'
      });
    });
    
}); 

//3
$(function(){
	
	// 마우스가 들어갔을 때
	$('.section_2').on('mouseenter', function(){
		$('.section_2 > div').text(
            '스타필드 하남에서 만나는 아쿠아필드와 스포츠몬스터,  메가박스,  영풍문고, 수노래연습장은 국내 어느 곳에서도 볼 수 없는 차별화된 컨텐츠로 스포테이먼트의 신세계를 엽니다.')  
	});
    $('.section_2').on('mouseenter',function(){
       $('.section_2 > h2').css({
          'display':'none' 
       }); 
    });
    $('.section_2').on('mouseenter', function(){
		$('.section_2 > div').css({
            'width':'440px',
            'padding-top':'110px',
            
        });
	});
       
    	
}); 


        
$(function(){
    $('.section_2').on('mouseleave', function(){
		$('.section_2 > div').text(
            '쇼핑, 레저, 힐링을 한 곳에서, 신개념 스포테인먼트')
            
	}),
      $('.section_2').on('mouseleave', function(){
		$('.section_2 > div').css({
            'width':'250px'
        });    
	});
    $('.section_2').on('mouseleave', function(){
		$('.section_2 > h2').css({
            'display':'block'
        });    
	});
    $('.section_2').on('mouseleave', function(){
		$('.section_2 > div').css({
            'padding-top':'30px',
            'width':'220px'
        });    
	});
    
}); 

//4
$(function(){
	
	// 마우스가 들어갔을 때
	$('.section_3').on('mouseenter', function(){
		$('.section_3 > div').text(
            '야외테라스에서 즐기는 데블스도어 맥주, 3대를 이어오는 의정부 평양면옥의 물냉면 등 프리미언 다이닝의 세계를 선보이는 고메스트리트와 신개념 푸드코트 잇토피아에서 미식의 즐거움을 선보입니다.')  
	});
    $('.section_3').on('mouseenter',function(){
       $('.section_3 > h2').css({
          'display':'none' 
       }); 
    });
    $('.section_3').on('mouseenter', function(){
		$('.section_3 > div').css({
            'width':'320px',
            'padding-top':'75px',
            
        });
	});
       
    	
}); 


        
$(function(){
    $('.section_3').on('mouseleave', function(){
		$('.section_3 > div').text(
            '온가족이 함께 즐기는 다양한 맛의 천국')
            
	}),
      $('.section_3').on('mouseleave', function(){
		$('.section_3 > div').css({
            'width':'250px'
        });    
	});
    $('.section_3').on('mouseleave', function(){
		$('.section_3 > h2').css({
            'display':'block'
        });    
	});
    $('.section_3').on('mouseleave', function(){
		$('.section_3 > div').css({
            'padding-top':'25px',
            'width':'170px'
        });    
	});
    
}); 
//5
$(function(){
	
	// 마우스가 들어갔을 때
	$('.section_4').on('mouseenter', function(){
		$('.section_4 > div').text(
            '루이비통, 구찌 등 해외 유명 패션 브랜드부터 신세계백화점, 트레이더스, 이마트에서 선보이는 장르별 전문관, 레저를 결합한 체험형 전문 매장 등에서 쇼핑 그 이상을 경험할 수 있습니다.')  
	});
    $('.section_4').on('mouseenter',function(){
       $('.section_4 > h2').css({
          'display':'none' 
       }); 
    });
    $('.section_4').on('mouseenter', function(){
		$('.section_4 > div').css({
            'width':'320px',
            'padding-top':'75px',
            
        });
	});
       
    	
}); 


        
$(function(){
    $('.section_4').on('mouseleave', function(){
		$('.section_4 > div').text(
            '루이비통 노브랜드까지, 원스톱 쇼핑 스페이스')
            
	}),
      $('.section_4').on('mouseleave', function(){
		$('.section_4 > div').css({
            'width':'250px'
        });    
	});
    $('.section_4').on('mouseleave', function(){
		$('.section_4 > h2').css({
            'display':'block'
        });    
	});
    $('.section_4').on('mouseleave', function(){
		$('.section_4 > div').css({
            'padding-top':'25px',
            'width':'180px'
        });    
	});
    
}); 






