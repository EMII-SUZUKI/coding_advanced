$(document).ready(function() {
        /* SPメニュー開閉 */
        $('#hamburger').click(function() {
            if ($(this).hasClass('opened')) {
                $('.swiperContainer').css('transform', 'translateY(0)'); 
                $('.header-container').css('margin-bottom', '0');
                } else {
                $('.swiperContainer').css('transform', 'translateY(200px)'); 
                 $('.header-container').css('margin-bottom', '15px');   
                }
                $('.swiperContainer').css('transition', 'transform 0.5s ease'); 
                $('.sp-nav').slideToggle('100'); 
                $(this).toggleClass('opened'); 
            });


         /* スライドショー */
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

          /* ご案内クリックアニメーション */
        $('.topic').click(function() {
        var $targetContent = $(this).next('.content-list');
        $('.content-list').not($targetContent).slideUp('slow');
        $targetContent.slideToggle('slow');
       });

      /* スクロール時、ふわっと表示させるアニメーション */
         $(window).scroll(function() {
          $('.js-fade').each(function() {
            var pos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > pos - windowHeight + 100) {
                $(this).addClass('scroll');
            }
        });
    });
});



 