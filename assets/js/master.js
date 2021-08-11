$(document).ready(function() {
    'use strict';
    $(function() {
        $('[data-href-scroll]').on('click', function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                }
            }
            return false;
        });
    });
    var toTop = function(a) {
        var b = $('[data-scroll-to-top]');
        if (a == "on") {
            b.addClass("on fadeInRight ").removeClass("off fadeOutRight");
        } else {
            b.addClass("off fadeOutRight animated").removeClass("on fadeInRight");
        }
    }
    $(window).on('scroll', function() {
        var b = $(this).scrollTop();
        var c = $(this).height();
        if (b > 0) {
            var d = b + c / 2;
        } else {
            var d = 1;
        }
        if (d < 1e3 && d < c) {
            toTop("off");
        } else {
            toTop("on");
        }
    });
    $('[data-scroll-to-top]').on('click', function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, 800, 'swing');
    });
    $('.product-layout-slider').slick({
        dots: true,
        infinite: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0'
    });
    $('.blog-layout-slider').slick({
        dots: true,
        infinite: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0'
    });
});
$(window).load(function() {
    'use strict';
    $("#loader-overlay").delay(500).fadeOut();
    $(".loader").delay(1000).fadeOut("slow");
    $('body').removeClass('loading');
});
    