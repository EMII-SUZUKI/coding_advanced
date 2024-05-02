/*SP ハンバーガーメニュー開閉*/
$(document).ready(function() {
    $('#hamburger').click(function() {
        $('.sp-nav').slideToggle('slow', function() {
            if ($(this).is(':visible')) {
                $('.header-container').css('margin-bottom', '200px');
            } else {
                $('.header-container').css('margin-bottom', '0');
            }
        });
    });
});






/*スライドショー*/
$(document).ready(function() {
    const swiper = new Swiper('.top-slider', {
        loop: true,                         
        autoplay: {                         
            delay: 2000,  
        },   
        navigation: {                       
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {                       
            el: '.swiper-pagination',
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true 
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
        }
    });
});



/*ご案内クリックアニメーション*/
$(document).ready(function() {
  $('.topic').click(function() {
    var $targetContent = $(this).next('.content-list');
    
    $('.content-list').not($targetContent).slideUp('slow');
    
    $targetContent.slideToggle('slow');
  });
});



/*スクロール時、ふわっと表示させるアニメーション*/
$(function(){
	$(window).scroll(function (){
		$('.js-fade').each(function(){
			var pos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > pos - windowHeight + 100){
				$(this).addClass('scroll');
			}
		});
	});
});





 