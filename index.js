// Modal - Lightbox
function openModal() {
  if ($(window).width() <= 500) return;
  $("#myModal").css("display", "block");
  $("header").addClass("ui-state-disabled");
}

function closeModal() {
  $("#myModal").css("display", "none");
  $("header").removeClass("ui-state-disabled");
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
  
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active selected", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active selected";
  let url = $(".mySlides img")[slideIndex - 1].src

  $(".images__big").attr("src", url);
}

// Shopping Cart
function addToCart(count) {
  $(".badge").text((+$(".badge").text() + count) + "")
  let orderCount = $(".badge").text();

  if (orderCount == 0) return;
  $(".badge").show();

  const img = $('<img />', {
    class: 'cart-img', src: './images/image-product-1-thumbnail.jpg', alt: 'shoe'
  });

  const text = $(
    `<div class='cart-text'> 
      <p>Fall Limited Edition Sneakers</p>
      <p>$125.00 x ${orderCount} <span>$${125*orderCount}.00</span></p>
    </div>`)

  const info = $(
    `<div class='cart-info'> 
      ${img[0].outerHTML}
      ${text[0].outerHTML}
      <i class="fas fa-trash-alt"></i>
    </div>`)

  const button = $("<button class='add'>Checkout</button>")

  $('.cart-content').empty()
  info.appendTo($('.cart-content'));
  button.appendTo($('.cart-content'));
}

$(".orders").click(() => {
  let popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
})

$('.cart-content').on("click", ".fas", () => {
  $('.cart-content').empty()
  $(".badge").text("0")
  $(".badge").hide()
  $("<p>Your cart is empty.</p>").appendTo($('.cart-content'))
})

$("body").click(function(){
  $("#myPopup").removeClass("show")
});

// Prevent events from getting pass .popup
$(".popup, svg").click(function(e){
  e.stopPropagation();
});

$(".badge").hide()

// Increase/Decrease buttons
$(".increase").click(() => {
  $(".count").text() < 20 &&
    $(".count").text(+$(".count").text() + 1 + "")
})

$(".decrease").click(() => {
  $(".count").text() > 0 &&
    $(".count").text(+$(".count").text() - 1 + "");
})

// Control image
$(".images__small").click((e) => {
  $(".images__small").removeClass("selected")
  $(e.target).addClass("selected");

  $(".images__big").attr("src", (e.target.src).replace("-thumbnail", ""));
})

$(".demo").click((e) => {
  $(".demo").removeClass("selected")
  $(e.target).addClass("selected");
})

$(".add").click(() => {
  let count = +$(".count").text();
  $(".count").text("0")
  addToCart(count)
})

let slideIndex = 1;
showSlides(slideIndex);

