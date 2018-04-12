// JavaScript Document

$(document).ready(function(){				
	
    'use strict';
    /*
      $(".slider").owlCarousel({
      	margin:10,
        loop:true,
        autoWidth:true,
        items:2
      });*/
      $(".navigation, .close-menu").click(function(){
        $('nav').toggleClass('show');
      });

}); //$(document).ready(function () {
    
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide-big");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";
  var slides2 = document.getElementsByClassName("small-slide");
  if (n > slides2.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";  
  }
  slides2[slideIndex-1].style.display = "block";
}