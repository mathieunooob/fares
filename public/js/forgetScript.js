// var connectBtn = document.getElementById('connectBtn');
// var registratBtn = document.getElementById('registratBtn');

// connectBtn.addEventListener('click', function(e){
//     e.preventDefault();
//     window.open("./login.html", "_self");
// });
// registratBtn.addEventListener('click', function(e){
//     e.preventDefault();
//     window.open("./register.html", "_self");
// });
$('#lenghtInfo').tooltip('enable')

function showPwd() {
    var x = document.getElementById("newPassword");
    var y = document.getElementById("verifNewPassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    if (y.type === "password") {
      y.type = "text";
    } else {
      y.type = "password";
    }
} 
