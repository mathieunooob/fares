// script tootltip hover-a in navbar
$('#element').tooltip('enable');


/* beginning home page */
$('#moreOptions').on('click', function() {
    console.log($ (this));
    if ($('#defaultHidden').hasClass('d-none')){
        $('#defaultHidden').removeClass('d-none');
        $('#defaultHidden').addClass('d-block');
        $('#caret').removeClass('fa-caret-square-down');
        $('#caret').addClass('fa-caret-square-up');

    } else {
        $('#defaultHidden').addClass('d-none')
        $('#defaultHidden').removeClass('d-block')
        $('#caret').removeClass('fa-caret-square-up');
        $('#caret').addClass('fa-caret-square-down');

    }
});

