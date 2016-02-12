/**
 * Created by Primoz on 12/02/16.
 */

$(document).ready(function() {
    console.log( "ready!" );


    $("#count-me").characterCounter({
        limit: '75',
        counterCssClass: 'counter'

    });

    $("#count-me2").characterCounter({
        limit: '120',
        counterCssClass: 'counter2'

    });


    $('.hashtag').keydown(function(){

       var element = $(this).val();
       $('.hashtag-preview').text(element);

    });

    $('#count-me').keydown(function(){

        var element = $(this).val();
        $('#count-me-preview').text(element);

    });

    $('#count-me2').keydown(function(){

        var element = $(this).val();
        $('#count-me2-preview').text(element);

    });

    $('.icon-eye').click(function(){

        $('.form-wrapper-preview').show();

    });

    $('.icon-chevron-small-left').click(function(){

        $('.form-wrapper-preview').hide();

    });

});
