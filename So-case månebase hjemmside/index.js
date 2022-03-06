
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function setSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var knap = document.getElementsByClassName("knap");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < knap.length; i++) {
      knap[i].className = knap[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  knap[slideIndex-1].className += " active";
}
