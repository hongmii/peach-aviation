


$(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
});
    
$(document).ready(function(){
    var current = 0; // 현재위치 변수 
    var max = 0; //  이미지 개수 
    var container; // ul변수
    function init(){    
        container = $('.image-slide ul.slide');
        max = container.children().length; //ul안의 li를 배열로 가져옴

        console.log(init);
        events(); 
        interval = setInterval(next, 3000);
    }
    function events(){
        $('div.prev').on('click', prev);
        $('div.next').on('click', next);

    }
   
    function prev(e){    //이전
        current--;
        if(current < 0) current = max-1;
        animate("prev");
    }
    function next(e){    //다음
        current++;
        if(current > max -1) current = 0;
        animate("next");
    }
    function animate(){
        var moveX = current * 1600;
        TweenMax.to(container, 0.8, {marginLeft: -moveX, ease:Expo.easeOut});
    }
    $(document).ready(init);
});




//배너슬라이드 

setBannerSlide('div.banner-slide:eq(0)', true, 3000);
// setBannerSlide('div.banner-slide:eq(1)', false, 2000);

function setBannerSlide(selector, timer, speed) {
    var test = $(selector).find('div.box').innerWidth();
    
    var offsetLeft = 0;
    var boxWidth = $(selector).find('div.box').innerWidth();
    var barWidth = 0;
    var minOffsetLeft = 0;
    var moveDistance = 260;
    var timerId = 0;
    var isTimerOn = timer;
    var timerSpeed = speed;
    console.log(boxWidth);
    // 초기화
    $(selector).find('ul.banner li').each(function() {
        barWidth += $(this).outerWidth(true);
    });
    $(selector).find('ul.banner').css({'width': barWidth + 'px'});
    minOffsetLeft = -(barWidth - boxWidth);
    if (isTimerOn === true) {
        $(selector).find('p.control a.play').addClass('on');
        timerId = setTimeout(function() {moveBanner('next', 'auto');}, timerSpeed);
    } else {
        $(selector).find('p.control a.play').removeClass('on');
    }

    // 이벤트
    $(selector).find('p.control a.prev').on('click', function() {
        moveBanner('prev', 'manual');
    });
    $(selector).find('p.control a.next').on('click', function() {
        moveBanner('next', 'manual');
    });
    $(selector).find('p.control a.play').on('click', function() {
        if (isTimerOn === true) {  // 끄기
            clearTimeout(timerId);
            $(selector).find('p.control a.play').removeClass('on');
            isTimerOn = false;
        } else {  // 켜기
            timerId = setTimeout(function() {moveBanner('next', 'auto');}, timerSpeed);
            $(selector).find('p.control a.play').addClass('on');
            isTimerOn = true;
        }
    });

    function moveBanner(direction, type) { console.log(boxWidth); console.log(barWidth); console.log(minOffsetLeft);
        clearTimeout(timerId);
        if (direction === 'prev') {
            if (offsetLeft === 0) {
                $(selector).find('ul.banner').stop(true).animate({'left': '260px'}, 50).animate({'left': 0}, 100);
            } else {
                offsetLeft += moveDistance;
                if (offsetLeft > 0) offsetLeft = 0;
                $(selector).find('ul.banner').stop().animate({'left': offsetLeft + 'px'});
            }
        } else if (direction === 'next') {
            if (offsetLeft === minOffsetLeft) {
                if (type === 'manual') {
                    $(selector).find('ul.banner').stop(true).animate({'left': (minOffsetLeft - 260) + 'px'}, 50).animate({'left': minOffsetLeft + 'px'}, 100);
                } else {
                    offsetLeft = 0;
                    $(selector).find('ul.banner').stop().animate({'left': offsetLeft + 'px'});
                }
            } else {
                offsetLeft -= moveDistance;
                if (offsetLeft < minOffsetLeft) offsetLeft = minOffsetLeft;
                $(selector).find('ul.banner').stop().animate({'left': offsetLeft + 'px'});
            }
        }
        if (isTimerOn === true) {
            timerId = setTimeout(function() {moveBanner('next', 'auto');}, timerSpeed);
        }
    }
    
}


$(document).ready(function() { 
    $(".radio-box").on("click", "div", function() { 
      $(this).toggleClass("checked");
    });
  });