
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
        "keyboardNavigation": "true",
        "autoclose": "true"
    });
});
/* end datepicker bootstrap*/

/* Preview Modal*/
/*
var imageLoader = document.getElementById('docLoader');
imageLoader.addEventListener('change', handleImage, false);
var canvas = document.getElementById('imageCanvas');
var ctx = canvas.getContext('2d');


function handleImage(e){
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
            canvas.width = (img.width);
            canvas.height = (img.height);
            ctx.drawImage(img,0,0);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}
*/
$("#input-boot-file").fileinput({
    theme: 'fas',
    language: 'fr',
    uploadUrl: "/file-upload-batch/2",
    //uplpoadUrl: '#',
    uploadAsync: false,
    previewFileIcon: '<i class="fas fa-file"></i>',
    allowedFileExtensions: ['doc', 'xls', 'ppt', 'pdf', 'txt', 'jpg', 'gif', 'png', 'odt', 'odf'],
    preferIconicZoomPreview: false, // this will force zoom preview thumbnails to display icons for following file extensions
    /*previewFileIconSettings: { // configure your icon file extensions
        'doc': '<i class="fas fa-file-word text-primary"></i>',
        'xls': '<i class="fas fa-file-excel text-success"></i>',
        'ppt': '<i class="fas fa-file-powerpoint text-danger"></i>',
        'pdf': '<i class="fas fa-file-pdf text-danger"></i>',
        //'zip': '<i class="fas fa-file-archive text-muted"></i>',
        //'htm': '<i class="fas fa-file-code text-info"></i>',
        'txt': '<i class="fas fa-file-text text-info"></i>',
        //'mov': '<i class="fas fa-file-movie-o text-warning"></i>',
        //'mp3': '<i class="fas fa-file-audio text-warning"></i>',
        // note for these file types below no extension determination logic
        // has been configured (the keys itself will be used as extensions)
        'jpg': '<i class="fas fa-file-image text-danger"></i>',
        'gif': '<i class="fas fa-file-image text-warning"></i>',
        'png': '<i class="fas fa-file-image text-primary"></i>'
    },*/
    previewFileExtSettings: { // configure the logic for determining icon file extensions
        'doc': function(ext) {
            return ext.match(/(doc|docx)$/i);
        },
        'xls': function(ext) {
            return ext.match(/(xls|xlsx)$/i);
        },
        'ppt': function(ext) {
            return ext.match(/(ppt|pptx)$/i);
        },
        /*'zip': function(ext) {
            return ext.match(/(zip|rar|tar|gzip|gz|7z)$/i);
        },
        'htm': function(ext) {
            return ext.match(/(htm|html)$/i);
        },*/
        'txt': function(ext) {
            return ext.match(/(txt|ini|csv|java|php|js|css)$/i);
        },/*
        'mov': function(ext) {
            return ext.match(/(avi|mpg|mkv|mov|mp4|3gp|webm|wmv)$/i);
        },
        'mp3': function(ext) {
            return ext.match(/(mp3|wav)$/i);
        },*/
    }
}).on('filepreupload', function(event, data, previewId, index) {
    alert('The description entered is:\n\n' + ($('#description').val() || ' NULL'));
});

/* Preview Modal*/

