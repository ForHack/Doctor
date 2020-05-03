$(function() {
    $('.header__inner .controls').on('click', () => {
        $('.panel-inner').toggleClass('show-menu');
    });
    $(window).on('scroll', () => {
        $(window).scrollTop() ? 
            $('.header').addClass('fixed-top') :  
            $('.header').removeClass('fixed-top');
    })
    $('.user-info__img').on('click', () => {
        $('.user-info__details').toggleClass('show-menu');
        $('.user-info__bonus').removeClass('show-cash');
    });
    $('.user-info__cash').on('click', () => {
        $('.user-info__bonus').toggleClass('show-cash')
        $('.user-info__details').removeClass('show-menu')
    });
    $('.burger').on('click', () => {
        $('.left-sidebar').toggleClass('left-sidebar_show')
        $('.burger').toggleClass('burger-style');
    });
    $('.body-part_right, .body-part_left').on('mouseenter', function() {
        let positionY = $(this).offset().top - 150
        let val = $(this).data().info;
        if ($(this).hasClass('body-part_left')) {
            $('.tooltip').addClass('tooltip-show rd')
                .css({'top': positionY, 'right': '100%', 'left': 'auto'}).text(val)
        } else {
            $('.tooltip').addClass('tooltip-show').removeClass('rd')
                .css({'top': positionY, 'left':'100%'}).text(val)
        }
    });
    let mqlX = window.matchMedia('(min-width: 710px) and (max-width: 1024px)')
    let mqlS = window.matchMedia('(max-width: 700px)')
    if(mqlX.matches) {
        $('.body-part_right, .body-part_left').on('mouseenter', function() {
            let positionY = $(this).offset().top - 380
            let val = $(this).data().info;
            if ($(this).hasClass('body-part_left')) {
                $('.tooltip').addClass('tooltip-show rd')
                    .css({'top': positionY, 'right': '100%', 'left': 'auto'}).text(val)
            } else {
                $('.tooltip').addClass('tooltip-show').removeClass('rd')
                    .css({'top': positionY, 'left':'100%'}).text(val)
            }
        });
    }
    if(mqlS.matches) {
        $('.body-part_right, .body-part_left').on('mouseenter', function() {
            let positionY = $(this).offset().top - 420
            let val = $(this).data().info;
            $('.tooltip').addClass('tooltip-show')
                    .css({'top': positionY, 'left':'100%'}).text(val)
        });
    }
    
    $('.body-part_right, .body-part_left').on('mouseleave', function() {
        $('.tooltip').removeClass('tooltip-show ')
    });
    $('.orthosis-slide').slick({
        variableWidth: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    variableWidth: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 460,
                settings: {
                    variableWidth: true,
                    slidesToShow: 1
                }
            }
        ]
    })
    $('#performStop').on('click', function() {
        $('.overlay, .modal.restart').toggleClass('overlay-show');
        $(document).on('keydown', function({key}) {
          if (key === 'Escape') {
              $('.overlay, .modal.restart').removeClass('overlay-show');    
          }
        })
        $('.overlay').on('click', function() {
            $('.overlay, .modal.restart').removeClass('overlay-show');    
        })
    });
    $('#performRestart').on('click', function() {
        $('.overlay, .modal.stop').toggleClass('overlay-show');
        $(document).on('keydown', function({key}) {
          if (key === 'Escape') {
              $('.overlay, .modal.stop').removeClass('overlay-show');    
          }
        })
        $('.overlay').on('click', function() {
            $('.overlay, .modal.stop').removeClass('overlay-show');    
        })
    });
    $('.news__slider').slick({
        variableWidth: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 568,
                settings: {
                    variableWidth: false,
                    centerPadding: true
                }
            }
        ]
    })
});