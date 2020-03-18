var connectBtn = document.getElementById('connectBtn');
var registratBtn = document.getElementById('registratBtn');

connectBtn.addEventListener('click', function(e){
    e.preventDefault();
    window.open("./page-de-connexion", "_self");
});

registratBtn.addEventListener('click', function(e){
    e.preventDefault();
    window.open("./page-d-inscription", "_self");
});

// script tootltip hover-a in navbar
$('#element').tooltip('enable');


/* begining of the function who - display the sidebar on the left of screen
- let the container on the center of the screen
- rotate the arrow beside the "outils" menu
*/
var $target = $('#target');
var $navbar = $('#navbar');
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "auto";
    $target.toggleClass("fa-caret-right fa-caret-left");
    console.log(1);
    if ($navbar.attr("onclick", "closeNav()")){
        console.log(2);
        $navbar.remove("onclick", "openNav()");
        console.log(3);
    }
};

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "auto";
    $target.toggleClass("fa-caret-left fa-caret-right");
    console.log(4);
    if ($navbar.attr("onclick", "openNav()")){
        console.log(5);
        $navbar.remove("onclick", "closeNav()");
        console.log(6);
    }
};

// function qui permet de replier le menu empilable lors d'une navigation en mobile
$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".collapse").hasClass("collapse show");

        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $("button.navbar-toggler").click();
        }
    });
});

/* Beginning function to rotate dropdown caret */

$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');
    
  
    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
    });
  
    return false;
  });
  
  /* for TOP LEVEL MENU */
  $('.dropdown>.dropdown-toggle').click(function() {
      if ($(this).hasClass('caretDown')) {
          $(this).removeClass('caretDown');
        } else {
            $(this).addClass('caretDown');
        }
    });
    
    /* End function to rotate dropdown caret */
