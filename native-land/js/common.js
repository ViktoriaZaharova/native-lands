$(document).ready(function () {

    $('.photo-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    centerMode: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false
                }
            }
        ]

    });

    // slick active
    $(window).on('load resize', function() {
        if ($(window).width() < 576) {
            $('.infrastructure-content:not(.slick-initialized)').slick({
                dots: true,
                infinite: true,
                speed: 100,
                slidesToShow: 1,
                arrows: false,
                autoplay: true
            });
        } else {
            $(".infrastructure-content.slick-initialized").slick("unslick");
        }
    });
// slick active


    $('.question-box__title').on('click', function () {
        $(this).parents('.question-box').toggleClass('open');
    });


    $("body").on("click", ".animate-top", function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow")
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });

    $(".form").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $(".form").trigger("reset");
        });
        return false;
    });

    // модальные окна (несколько)
    $(document).ready(function () {
        var overlay = $('.overlay');
        var open_modal = $('.open_modal');
        var close = $('.modal__close, .overlay');
        var modal = $('.modal__div');

        open_modal.click(function (event) {
            event.preventDefault();
            var div = $(this).attr('href');
            overlay.fadeIn(400,
                function () {
                    $(div)
                        .css('display', 'flex')
                        .animate({
                            opacity: 1,
                            top: '50%'
                        }, 200);
                });
        });

        close.click(function () {
            modal
                .animate({
                        opacity: 0,
                        top: '45%'
                    }, 200,
                    function () {
                        $(this).css('display', 'none');
                        overlay.fadeOut(400);
                    }
                );
        });
    });
//end

    $(document).ready(function () {
        $('.go_to').click(function () {
            var scroll_el = $(this).attr('href');
            if ($(scroll_el).length != 0) {
                $('html, body').animate({
                    scrollTop: $(scroll_el).offset().top
                }, 500);
            }
            return false;
        });
    });

});
