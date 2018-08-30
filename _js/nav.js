
function navHide(elem) {
    $(elem).hide();
} //function

function navHide(elem) {
    $(elem).show();
} //function

function navToggle(elem) {
    $(elem).toggle();
} //function



function navHideAll() {
  var elems = document.getElementsByTagName("section");
  for (var i = 0; i < elems.length; i++) {
    $(elems[i]).hide();
  } //for
} //function

 function navShow(elem) {
    navHideAll();
    $(elem).show();
} //function
