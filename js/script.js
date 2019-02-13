


$(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
});



    
$(document).ready(function(){
    var current = 0;  
    var max = 0;  
    var container; 
    function init(){    
        container = $('.image-slide ul.slide');
        max = container.children().length; 

        console.log(init);
        events(); 
        interval = setInterval(next, 3000);
    }
    function events(){
        $('div.prev').on('click', prev);
        $('div.next').on('click', next);

    }
   
    function prev(e){    
        current--;
        if(current < 0) current = max-1;
        animate("prev");
    }
    function next(e){  
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

$(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
});
    
$(document).ready(function(){
    var current = 0; 
    var max = 0; 
    var container; 
    function init(){    
        container = $('.image-slide ul.slide');
        max = container.children().length; 

        console.log(init);
        events(); 
        interval = setInterval(next, 3000);
    }
    function events(){
        $('div.prev').on('click', prev);
        $('div.next').on('click', next);

    }
   
    function prev(e){   
        current--;
        if(current < 0) current = max-1;
        animate("prev");
    }
    function next(e){  
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



$(document).ready(function() { 
   //특가배너슬라이드

var offsetLeft = 0;
var boxWidth = $('div.banner-slide .box').innerWidth();
var barWidth = 0;
var minOffsetLeft = 0;

// 초기화
$('div.banner-slide ul.banner li').each(function() {
    barWidth += $(this).outerWidth(true);
});
$('div.banner-slide ul.banner').css({'width': barWidth + 'px'});
minOffsetLeft = -(barWidth - boxWidth);

// 이벤트
$('p.control a.prev').on('click', function() {
    if (offsetLeft === 0) {
        $('div.banner-slide ul.banner').stop(true).animate({'left': '10px'}, 50).animate({'left': 0}, 100);
    } else {
        offsetLeft += 242;
        if (offsetLeft > 0) offsetLeft = 0;
        $('div.banner-slide ul.banner').stop().animate({'left': offsetLeft + 'px'}, 500);
    }
});
$('p.control a.next').on('click', function() {
    if (offsetLeft === minOffsetLeft) {
        $('div.banner-slide ul.banner').stop(true).animate({'left': (minOffsetLeft - 10) + 'px'}, 50).animate({'left': minOffsetLeft + 'px'}, 100);
    } else {
        offsetLeft -= 242;
        if (offsetLeft < minOffsetLeft) offsetLeft = minOffsetLeft;
        $('div.banner-slide ul.banner').stop().animate({'left': offsetLeft + 'px'}, 500);
    }
});

  });