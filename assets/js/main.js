// INIT AOS
AOS.init();


//PROGRESS BAR 
var progressbar = document.querySelector(".progress__bar"); 
document.onscroll = function(){ 
  var pos = showPosition(document.body); progressbar.style.width = pos + "%"; }; 
  function showPosition(bar){ 
    var parent = bar.parentNode, pos = (bar.scrollTop || parent.scrollTop) / (parent.scrollHeight - parent.clientHeight ) * 100; 
    return pos; };


// SMOOTH SCROLL
$(document).ready(function(){
    $("a").on('click', function(event) {

            if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({scrollTop: $(hash).offset().top
                }, 800, function(){
                window.location.hash = hash;
            });
        } 
    });
});
