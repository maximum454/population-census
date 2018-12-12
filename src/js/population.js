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

    jQuery.fn.lightTabs = function(options){

        var createTabs = function(){
            tabs = this;
            i = 0;

            showPage = function(i){
                $(tabs).find(".tab").hide();
                $(tabs).find(".tab").eq(i).show();
                $(tabs).find(".dropdown-item").removeClass("active");
                $(tabs).find(".dropdown-item").eq(i).addClass("active");
            }

            showPage(0);

            $(tabs).find(".table__tab").each(function(index, element){
                $(element).attr("data-page", i);
                i++;
            });

            $(tabs).find(".table__tab").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });
        };
        return this.each(createTabs);
    };
    $(".tabs").lightTabs();
});

