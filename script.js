const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");
const mainThumbnail = document.querySelector(".main-thumbnail");
const indicator = document.querySelector(".indicator");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");

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

mainThumbnail.addEventListener("click", openLightBox);
