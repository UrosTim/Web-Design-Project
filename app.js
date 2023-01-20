$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.navbar').addClass('scroll-effect');
    } else
        $('.navbar').removeClass('scroll-effect');
});
// Get the modal
var modal = document.getElementById("careers-container");

// Get the button that opens the modal
var btn = document.getElementById("careers-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("careers-close")[0];

// Get the form element
var form = document.getElementById("careers-form");

// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event){
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// When the user clicks anywhere outside of the modal, close it

// When the user submits the form
form.addEventListener("submit", function(event1) {
    event1.preventDefault(); // prevent the form from submitting
    alert("Uspesno ste poslali prijavu!"); // print a message
    modal.style.display = "none"; // close the modal
});

// Get the modal
var modalFree = document.getElementById("free-container");

// Get the button that opens the modal
var btnFree = document.getElementById("free-btn");

// Get the <span> element that closes the modal
var spanFree = document.getElementsByClassName("free-close")[0];

// Get the form element
var formFree = document.querySelector("form");

// When the user clicks the button, open the modal 
btnFree.onclick = function() {
modalFree.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanFree.onclick = function() {
modalFree.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modalFree) {
    modalFree.style.display = "none";
}
}
// When the user submits the form
formFree.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent the form from submitting
    alert("Uspesno ste se prijavili. Uskoro cemo vam se javiti sa dostupnim terminima."); // print a message
    modalFree.style.display = "none"; // close the modal
});