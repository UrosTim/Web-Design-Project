// jquery for navbar scroll effect
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.navbar').addClass('scroll-effect');
    } else
        $('.navbar').removeClass('scroll-effect');
});
// js for "postani deo naseg tima" button
var modal = document.getElementById("careers-container");
var btn = document.getElementById("careers-btn");
var span = document.getElementsByClassName("careers-close")[0];
var form = document.getElementById("careers-form");

btn.onclick = function() {
modal.style.display = "block";
document.getElementById("mid-container-id").style.zIndex = "-1";
}
span.onclick = function() {
modal.style.display = "none";
document.getElementById("mid-container-id").style.zIndex = "1";
}
window.addEventListener('click', function(event){
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById("mid-container-id").style.zIndex = "1";
    }
});
form.addEventListener("submit", function(event1) {
    event1.preventDefault(); // prevent the form from submitting
    alert("Uspesno ste poslali prijavu!"); // print a message
    modal.style.display = "none"; // close the modal
    document.getElementById("mid-container-id").style.zIndex = "1";
});
// js for "besplatan cas" button
var modalFree = document.getElementById("free-container");
var btnFree = document.getElementById("free-btn");
var spanFree = document.getElementsByClassName("free-close")[0];
var formFree = document.getElementById("free-form");

btnFree.onclick = function() {
modalFree.style.display = "block";
document.getElementById("mid-container-id").style.zIndex = "-1";
}
spanFree.onclick = function() {
modalFree.style.display = "none";
document.getElementById("mid-container-id").style.zIndex = "1";
}
window.addEventListener('click', function(event){
    if(event.target == modalFree){
        modalFree.style.display = "none";
        document.getElementById("mid-container-id").style.zIndex = "1";
    }
});
formFree.addEventListener("submit", function(event2) {
    event2.preventDefault(); // prevent the form from submitting
    alert("Uspesno ste se prijavili. Uskoro cemo vam se javiti sa dostupnim terminima."); // print a message
    modalFree.style.display = "none"; // close the modal
    document.getElementById("mid-container-id").style.zIndex = "1";
});
// js for "kontakt" page form
var formContact = document.getElementById("contact-form");
formContact.addEventListener("submit", function(){
    alert("Vasa poruka je poslata.");
});
// js for "NZD" calculator in "kalkulatori" page
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}
function calculateGcd() {
    var firstNumber = document.getElementById("lcd-first-number").value;
    var secondNumber = document.getElementById("lcd-second-number").value;
    var result = gcd(firstNumber, secondNumber);
    document.getElementById("lcd-result").innerHTML = "Najveci zajednicki delilac je: " + result;
}
// js for "Fraction" calculator in "kalkulatori" page
function fractionToDecimal(numerator, denominator) {
    return numerator / denominator;
}
function calculateDecimal() {
    var numerator = document.getElementById("numerator").value;
    var denominator = document.getElementById("denominator").value;
    var result = fractionToDecimal(numerator, denominator);
    var resultCap = result.toFixed(2);
    document.getElementById("fraction-result").innerHTML = "Decimalni oblik: " + resultCap;
}
// js for "Prime" calculator in "kalkulatori" page
function isPrime(num){
    if(num < 2){
        return false;
    }
    for(var i = 2; i < num; i++){
        if(num % i === 0){
        return false;
        }
    }
    return true;
}
function calculatePrime(){
    var primeNumber = document.getElementById("prime-number").value;
    var result = isPrime(primeNumber);
    if(result){
        document.getElementById("prime-result").innerHTML = "Trazeni broj je prost.";
    }
    else{
        document.getElementById("prime-result").innerHTML = "Trazeni broj nije prost.";
    }
}
// js for "Fibonacci" calculator in "kalkulatori" page
function fibonacci(num){
    if(num <= 0){
        return 0;
    } else if(num === 1){
        return 1;
    } else{
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
function calculateFib(){
    var fibNumber = document.getElementById("fib-number").value;
    var result = fibonacci(fibNumber);
    document.getElementById("fib-result").innerHTML = "Na trazenoj poziciji u nizu se nalazi broj " + result;
}