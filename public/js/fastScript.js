
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

/* adding the btnClick class when good button is setting up */
$('#meOthers').click(function(){
    if ($(this).hasClass('hoverable') && $('#me').hasClass('hoverable') && $('#others').hasClass('hoverable')){
        $(this).removeClass('hoverable');
        $(this).addClass('btnClick');
    } else if($('#me').hasClass('btnClick') || $('#others').hasClass('btnClick')){
        $('#me').removeClass('btnClick');
        $('#me').addClass('hoverable');
        $('#others').removeClass('btnClick');
        $('#others').addClass('hoverable');
        $(this).removeClass('hoverable');
        $(this).addClass('btnClick');
        $('.subsid').css('display', 'block');
    } else {
        $(this).removeClass('btnClick');
        $(this).addClass('hoverable');
    }
});

$('#me').click(function(){
    if ($(this).hasClass('hoverable') && $('#meOthers').hasClass('hoverable') && $('#others').hasClass('hoverable')){
        $(this).removeClass('hoverable');
        $(this).addClass('btnClick');
    } else if($('#meOthers').hasClass('btnClick') || $('#others').hasClass('btnClick')){
        $('#meOthers').removeClass('btnClick');
        $('#meOthers').addClass('hoverable');
        $('#others').removeClass('btnClick');
        $('#others').addClass('hoverable');
        $(this).removeClass('hoverable');
        $(this).addClass('btnClick');
    } else {
        $(this).removeClass('btnClick');
        $(this).addClass('hoverable');
    }
});

$('#others').click(function(){
    if ($(this).hasClass('hoverable') && $('#meOthers').hasClass('hoverable') && $('#me').hasClass('hoverable')){
        $(this).removeClass('hoverable');
        $(this).addClass('btnClick');
    } else if($('#meOthers').hasClass('btnClick') || $('#me').hasClass('btnClick')){
        $('#meOthers').removeClass('btnClick');
        $('#meOthers').addClass('hoverable');
        $('#me').removeClass('btnClick');
        $('#me').addClass('hoverable');
        $(this).removeClass('hoverable');
        $(this).addClass('btnClick');
        $('.subsid').css('display', 'block');
    } else {
        $(this).removeClass('btnClick');
        $(this).addClass('hoverable');
    }
});
/* ./ adding the btnClick class when good button is setting up */

$('#me').click(function(){
    if($(this).hasClass('btnClick')){
        $('.subsid').css('display', 'none');
    } else {
        $('.subsid').css('display', 'block');
    }
});

/* datepicker bootstrap*/
$(document).ready(function(){
    $('#datepicker').datepicker({
        "format": "dd/mm/yyyy",
        "language": "fr-FR",
        "keyboardNavigation": "right",
        "autoclose": "true"
    });
});