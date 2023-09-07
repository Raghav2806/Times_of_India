window.onscroll = function() {sticky_nav()}; //onscroll: call a function on window being scrolled

var navbar = document.getElementById("nav");

var sticky = nav.offsetTop; //offsetTop: returns the top position (in pixels) relative to the parent.

function sticky_nav() {
    if (window.pageYOffset >= sticky) { //pageYOffset: returns the pixels a document has scrolled from the upper left corner of the window.
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
}