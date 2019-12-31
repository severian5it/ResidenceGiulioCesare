// Modal opening and sliding through gallery
// Modified from a tutorial found at
//https://www.w3schools.com/howto/howto_js_lightbox.asp
$('#contact-form').on('submit', function (e) {
    /**
     * show contact form modal instead of submitting data
    */
    $('#contactFormModal').modal('show');
    e.preventDefault();
})

function openGalleryModal() {
    /**
     * Open Gallery Modal
    */
    $('#galleryModal').modal('show');

}

function closeGalleryModal() {
    /**
     * close Gallery  Modal
    */
    $('#galleryModal').modal('hide');

}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    /**
     * increase slides number
    */
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    /**
     * returning current slide
    */
    showSlides(slideIndex = n);
}

function showSlides(n) {
    /**
     * show selected slide
    */
    var i;
    var slides = document.getElementsByClassName("gallerySlides");
    var dots = document.getElementsByClassName("gallery");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
