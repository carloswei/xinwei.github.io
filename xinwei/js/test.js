/**
 * Created by xinwei on 6/12/15.
 */

$('.test').ready(function() {

    $('.test').mouseenter(function() {
        $(this).animate({
            height: '+=10px'
        });
        $( this ).append("<div id=red></div>");
    });
    $('.test').mouseleave(function() {
        $(this).animate({
            height: '-=10px'
        });
    });

});

$(document).ready( function() {

    $('.gallery-item').hover( function() {
        $(this).find('.img-title').fadeIn(300);
    }, function() {
        $(this).find('.img-title').fadeOut(100);
    });

});
