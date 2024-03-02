const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");
const mainThumbnail = document.querySelector(".main-thumbnail");
const indicator = document.querySelector(".indicator");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const amount = document.querySelector(".amount");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const lightbox = document.querySelector(".lightbox");
const cartBtn = document.querySelector(".cart-btn");
const cart = document.querySelector(".cart-wrp");
const wrp = document.querySelector(".cart-content");
const closeLightboxBtn = document.querySelector(".close-lightbox");
const addBtn = document.querySelector(".add-btn");

const thumbMob = document.querySelector(".thumb-mob");
let amountValue = 0;
let currentImg = 1;

const previewImages = document.querySelectorAll(".preview img");
const mainThumbnailLightBox = document.querySelector(
  ".lightbox-container .main-thumbnail"
);

indicator.style.display = "none";

menuBtn.addEventListener(
  "click",
  function () {
    menu.classList.add("active");
    overlay.classList.add("active");
  },
  { passive: false }
); // Set passive option to false

closeBtn.addEventListener(
  "click",
  function () {
    menu.classList.remove("active");
    overlay.classList.remove("active");
  },
  { passive: false }
); // Set passive option to false

plusBtn.addEventListener("click", function () {
  amountValue++;
  amount.innerText = amountValue;
});

minusBtn.addEventListener("click", function () {
  if (amountValue > 0) {
    amountValue--;
  }
  amount.innerText = amountValue;
});

nextButton.addEventListener("click", function () {
  if (currentImg == 4) {
    currentImg = 1;
  } else {
    currentImg++;
  }
  thumbMob.src = `./images/image-product-${currentImg}.jpg`;
});

previousButton.addEventListener("click", function () {
  if (currentImg == 1) {
    currentImg = 4;
  } else {
    currentImg--;
  }
  thumbMob.src = `./images/image-product-${currentImg}.jpg`;
});

function openLightBox() {
  lightbox.classList.remove("invisible");
}

function toggleCart() {
  cart.classList.toggle("invisible");
}
function closeLightBox() {
  lightbox.classList.add("invisible");
}

addBtn.addEventListener("click", function () {
  if (amountValue > 0) {
    const total = 125.0 * amountValue;
    wrp.classList.remove("empty");
    wrp.innerHTML = `<div class="product">
                    <div>
                      <img src="./images/image-product-1-thumbnail.jpg" class="product-img" alt="product">
                      <div class="product-info">
                        <p class="product-title">Fall Limited Edition Sneakers</p>
                       <p><span>$125.00</span> × <span class="number">${amountValue}</span> <b>$${total}</b></p>
                      </div>
                      <button class="delete-btn" onclick="deleteItem()"><img src="./images/icon-delete.svg" alt="delete"></button>
                    </div>
                    <button class="checkout-btn">Checkout</button>
                  </div>`;
    indicator.style.display = "block";
    indicator.innerText = amountValue;
  }
});

previewImages.forEach((previewImage) => {
  previewImage.addEventListener("click", () => {
    const lastImg = document.querySelectorAll(".selected");
    if (lastImg) {
      lastImg[0].classList.remove("selected");
    }
    previewImage.classList.add("selected");
    const selectedImg = document.querySelector(".selected");
    switch (selectedImg.getAttribute("src")) {
      case "./images/image-product-1-thumbnail.jpg":
        mainThumbnail.src = "./images/image-product-1.jpg";
        mainThumbnailLightBox.src = "./images/image-product-1.jpg";
        break;
      case "./images/image-product-2-thumbnail.jpg":
        mainThumbnail.src = "./images/image-product-2.jpg";
        mainThumbnailLightBox.src = "./images/image-product-2.jpg";
        break;
      case "./images/image-product-3-thumbnail.jpg":
        mainThumbnail.src = "./images/image-product-3.jpg";
        mainThumbnailLightBox.src = "./images/image-product-3.jpg";
        break;
      case "./images/image-product-4-thumbnail.jpg":
        mainThumbnail.src = "./images/image-product-4.jpg";
        mainThumbnailLightBox.src = "./images/image-product-4.jpg";
        break;
    }
  });
});

cartBtn.addEventListener("click", toggleCart);
mainThumbnail.addEventListener("click", openLightBox);
closeLightboxBtn.addEventListener("click", closeLightBox);
