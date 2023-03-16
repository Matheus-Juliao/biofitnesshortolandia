/*Carrossel*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

let showEffects = true

function effects() {
  let card = document.getElementsByClassName("card")[0];
  let container = document.getElementsByClassName("container-arrow")[0];

  if(showEffects) {
    card.classList.add('effects-transiton')
    card.getElementsByTagName('h1')[0].style.display = "none";
    card.getElementsByTagName('p')[0].style.display = "none"
    container.classList.add('container-arrow-after')

    showEffects = false
  } else {
      card.classList.remove('effects-transiton')
      card.getElementsByTagName('h1')[0].style.display = "block";
      card.getElementsByTagName('p')[0].style.display = "block"
      container.classList.remove('container-arrow-after')
      showEffects = true
    }
}