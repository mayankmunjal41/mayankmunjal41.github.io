$("body").hide();
$("body").fadeIn(1000);

$('header img').hide().show(2000);
$('.projects').hide().show(3000);
$('.navbar-toggler').click(function() {
  $(".icon").toggleClass("close");
});



$(".about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

$(".contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1500);
});
