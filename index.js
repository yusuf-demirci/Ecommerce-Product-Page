// Open the Modal
function openModal() {
  $("#myModal").css("display", "block");
  
}

// Close the Modal
function closeModal() {
  $("#myModal").css("display", "none");
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = $(".mySlides");
  const dots = $(".demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active selected", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active selected";
}

$(".increase").click(() => {
    $(".count").text() < 33 &&
    $(".count").text(+$(".count").text() + 1 + "")
})

$(".decrease").click(() => {
    $(".count").text() > 0 &&
    $(".count").text(+$(".count").text() - 1 + "");
})


$(".images__small").click((e) => {
    $(".images__small").removeClass("selected")
    $(e.target).addClass("selected");
    
    $(".images__big").attr("src", (e.target.src).replace("-thumbnail", ""));
})

$(".demo").click((e) => {
  $(".demo").removeClass("selected")
  $(e.target).addClass("selected");
})

let slideIndex = 1;
showSlides(slideIndex);

