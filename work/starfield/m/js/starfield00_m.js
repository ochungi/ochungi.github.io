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

});

///*2번째 슬라이드*/
//$(function () {
//
//    /*
//     * Slideshow
//     */
//    $('.slideshow02').each(function () {
//
//    // 변수의 준비
//    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//
//        var $container = $(this),                                 // a
//            $slideGroup = $container.find('.slideshow_slides02'),   // b
//            $slides = $slideGroup.find('.slide02'),                 // c
//            $nav = $container.find('.slideshow_nav02'),             // d
//            $indicator = $container.find('.slideshow_indicator02'), // e
//            // 슬라이드 쇼의 각 요소의 jQuery 객체
//            // a 슬라이드 쇼 전체 컨테이너
//            // b 모든 슬라이드의 정리 (슬라이드 그룹)
//            // c 각 슬라이드
//            // d 네비게이션 (Prev/Next)
//            // e 인디게이터 (점)
//
//            slideCount = $slides.length, // 슬라이드 점수
//            indicatorHTML = '',          // 인디게이터 콘텐트
//            currentIndex = 0,            // 현재 슬라이드의 인덱스
//            duration = 500,              // 다음 슬라이드에 애니메이션의 소요 시간
//            easing = 'easeInOutExpo',    // 다음 슬라이드에 애니메이션의 이징 종류
//            interval = 4500,             // 자동으로 다음 슬라이드로 옮길 때까지의 시간
//            timer;                       // 타이머
//
//
//    // HTML 요소의 배치 생성 삽입
//    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//
//        // 각 슬라이드의 위치를 결정하고,
//        // 해당 인디게이터의 앵커를 생성
//        $slides.each(function (i) {
//            $(this).css({ left: 100 * i + '%' });
//            indicatorHTML += '<a href="#">' + (i + 1) + '</a>';
//        });
//
//        // 인디게이터에 콘텐트를 삽입
//        $indicator.html(indicatorHTML);
//
//
//    // 함수의 정의
//    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//
//        // 모든 슬라이드를 표시하는 함수
//        function goToSlide (index) {
//            // 슬라이드 그룹을 대상 위치에 맞게 이동
//            $slideGroup.animate({ left: - 100 * index + '%' }, duration, easing);
//            // 현재 슬라이드의 인덱스를 덮어쓰기
//            currentIndex = index;
//            // 탐색 및 표시 상태를 업데이트
//            updateNav();
//        }
//
//        // 슬라이드의 상태에 따라 탐색 및 표시를 업데이트하는 함수
//        function updateNav () {
//            var $navPrev = $nav.find('.prev'), // Prev (뒤로) 링크
//                $navNext = $nav.find('.next'); // Next (앞으로) 링크
//            // 만약 첫 번째 슬라이드이라면 Prev 탐색을 해제
//            if (currentIndex === 0) {
//                $navPrev.addClass('disabled');
//            } else {
//                $navPrev.removeClass('disabled');
//            }
//            // 만약 마지막 슬라이드이라면 Next 탐색을 해제
//            if (currentIndex === slideCount - 1) {
//                $navNext.addClass('disabled');
//            } else {
//                $navNext.removeClass('disabled');
//            }
//            // 현재 슬라이드의 표시를 해제
//            $indicator.find('a').removeClass('active')
//                .eq(currentIndex).addClass('active');
//        }
//
//        // 타이머를 시작하는 함수
//        function startTimer () {
//            // 변수 interval에서 설정 한 시간이 경과 할 때마다 작업을 수행
//            timer = setInterval(function () {
//                // 현재 슬라이드의 인덱스에 따라 다음 표시 할 슬라이드의 결정
//                // 만약 마지막 슬라이드이라면 첫 번째 슬라이드에
//                var nextIndex = (currentIndex + 1) % slideCount;
//                goToSlide(nextIndex);
//            }, interval);
//        }
//
//        // 타이머를 중지있는 함수
//        function stopTimer () {
//            clearInterval(timer);
//        }
//
//
//    // 인벤토리 등록
//    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//
//        // 네비게이션 링크를 클릭하면 해당 슬라이드를 표시
//        $nav.on('click', 'a', function (event) {
//            event.preventDefault();
//            if ($(this).hasClass('prev')) {
//                goToSlide(currentIndex - 1);
//            } else {
//                goToSlide(currentIndex + 1);
//            }
//        });
//
//        // 인디게이터의 링크를 클릭하면 해당 슬라이드를 표시
//        $indicator.on('click', 'a', function (event) {
//            event.preventDefault();
//            if (!$(this).hasClass('active')) {
//                goToSlide($(this).index());
//            }
//        });
//
//        // 마우스오버를 하면 타이머를 정지 그렇지 않으면 시작
//        $container.on({
//            mouseenter: stopTimer,
//            mouseleave: startTimer
//        });
//
//
//    // 슬라이드 쇼 시작
//    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//
//        // 첫 번째 슬라이드를 표시
//        goToSlide(currentIndex);
//
//        // 타이머를 시작
//        startTimer();
//
//    });
//
//});




