//= partials/jquery.min.js
//= partials/popper.min.js
//= partials/bootstrap.js
//= partials/jquery.mask.min.js
//= partials/slick.js
$(function () {
    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 50}, 1500);
    });

    $('#exampleInputPhone1').mask('+0 (000) 000-00-00');


    $('.variable-width').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true
    });
});

