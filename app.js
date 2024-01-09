const images1 = [...document.querySelectorAll('#slider-one .image1')];
const images2 = [...document.querySelectorAll('#slider-two .image2')];
let slideIndex = 1;
let manualIndex = 1;

// Next/previous controls
function plusSlides(n) {
    showSlides(manualIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(manualIndex = n);
}

function showSlides(n) {
    let index;
    let dots = document.getElementsByClassName("dot1");
    if (n< 1) {manualIndex = images1.length}
    if (n > images1.length) {manualIndex = 1}
    for (index = 0; index < images1.length; index++) {
        images1[index].style.display = "none";
    }
    for (index = 0; index < dots.length; index++) {
        dots[index].className = dots[index].className.replace(" active","");
    }
    images1[manualIndex-1].style.display = "flex";
    dots[manualIndex-1].className += " active";
}
showSlides(slideIndex);

function automaticShowSlides() {
    let i;
    let dots = document.getElementsByClassName("dot2");
    if (slideIndex < 1) {slideIndex = images2.length}
    for (i = 0; i < images2.length; i++) {
        images2[i].style.display = "none";
    }
    if (slideIndex > images2.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active","");
    }
    images2[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
    slideIndex++;
    setTimeout(automaticShowSlides,4_000);
}
automaticShowSlides(slideIndex);