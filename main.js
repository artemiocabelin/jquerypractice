// ----jQuery---
$(document).ready(function(){
    // .click
    $('#from_click').click(function() {
        $('#to_click').html('<h1>Hey, you clicked!!</h2>');
    });

    // .hide
    $('#from_hide').click(function() {
        $('#to_hide').hide();
    });

    // .show
    $('#from_show').click(function() {
        $('#to_hide').show();
    });

    // .toggle
    $('#from_toggle').click(function() {
        $('#to_toggle').toggle();
    });
    
    // .slideDown
    $('#from_slideDown').click(function() {
        $('#to_slideDown').slideDown();
    });

    // .slideUp
    $('#from_slideUp').click(function() {
        $('#to_slideDown').slideUp();
    });

    // .fadeIn
    $('#from_fadeIn').click(function() {
        $('#to_fadeIn').fadeIn();
    });

    // .fadeOut
    $('#from_fadeOut').click(function() {
        $('#to_fadeIn').fadeOut();
    });

    // .addClass
    $('#from_addClass').click(function() {
        $('#to_addClass').addClass('beer_friend');
    });

    // .before
    $('#from_before').click(function() {
        $('#to_before').before('<p class="shrink">No.. me first!!</p>');
    });

    // .after
    $('#from_after').click(function() {
        $('#to_after').after('<p class="shrink">No.. after you!</p>');
    });

    // .append
    $('#from_append').click(function() {
        $('#to_append').append('<p class="shrink">..of my poop..</p>');
    });

    // .html
    $('#from_html').click(function() {
        $('#to_html').html('<p class="shrink">AT EASE!!! MAKE WAY!!</p>');
    });

    // .attr
    $('#from_attr').click(function() {
        var myId = $('#to_attr').attr('id');
        $('#to_attr').text(myId);
    });

    // .val
    $('#from_val').click(function() {
        var myVal = $('#no_idea').val();
        $('#answer').text(myVal);
    });

    // .text
    $('#from_text').click(function() {
        $('#to_text').text('<p class="shrink">No.. me first!!</p>');
    });

    // .data
    $('#from_data').click(function() {
        $('#to_data').data('x',2);
        $('#to_data').text($('#to_data').data('x'));
    });

    $('#from_slideToggle').click(function() {
        $('#to_slideToggle').slideToggle();
    });
})