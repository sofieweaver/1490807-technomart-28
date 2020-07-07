/* Слайдер
*/
var slides = document.querySelectorAll(".slider-item");

var leftBtn = document.querySelector(".first-slide-btn");
var rightBtn = document.querySelector(".second-slide-btn");
var currentSlide = 0;

if (rightBtn) {
  rightBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    slides[0].classList.remove("slide-current");
    slides[1].classList.add("slide-current");
    currentSlide = 1;
  })
}

if (leftBtn) {
  leftBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    slides[1].classList.remove("slide-current");
    slides[0].classList.add("slide-current");
    currentSlide = 0;
  })
}

if (slides) {
  function setNextSlide () {
    currentSlide = (currentSlide + 1) % slides.length;
  }
  function setPrevSlide () {
    currentSlide = Math.abs((currentSlide - 1) % slides.length);
  }
}
/* Сервисы
*/
var deliveryCheck = document.getElementById("delivery");
var warrantyCheck = document.getElementById("warrranty");
var creditCheck = document.getElementById("credit");

var delivery = document.getElementsByClassName(".service-delivery-submenu");
var warranty = document.getElementsByClassName(".service-warranty-submenu");
var credit = document.getElementsByClassName(".service-credit-submenu");


/* Форма
обратной связи
*/
var contactLink = document.querySelector(".contact-us-button");
var storageName = localStorage.getItem("contactName");
var storageContact = localStorage.getItem("contactContact");

var contactPopup = document.querySelector(".contact-us-modal");
if (contactPopup) {
  var contactClose = contactPopup.querySelector(".contact-modal-close");
  var contactForm = contactPopup.querySelector(".contact-form");
  var contactName = contactPopup.querySelector("[name=name]");
  var contactContact = contactPopup.querySelector("[name=email]");
  var contactMessage = contactPopup.querySelector("[name=comment]");

  contactLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactPopup.classList.add("modal-show");
    contactName.focus();
  
    if (storage) {
      contactName.value = storageName;
      contactContact.value = storageContact;
      contactMessage.focus();
    } else {
      contactName.focus();
    }
  });
  
  contactClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactPopup.classList.remove("modal-show");
    contactPopup.classList.remove("modal-error");
  });
  
  contactForm.addEventListener("submit", function (evt) {
    if (!contactName.value || !contactContact.value) {
      evt.preventDefault();
      contactPopup.classList.remove("modal-error");
      contactPopup.offsetWidth = contactPopup.offsetWidth;
      contactPopup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("contactName", contactName.value);
        localStorage.setItem("contactContact", contactContact.value);
      }
    }
  });
}

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("contactName");
  storage = localStorage.getItem("contactContact");
} catch (err) {
  isStorageSupport = false;
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      contactPopup.classList.remove("modal-show");
      contactPopup.classList.remove("modal-error");
    }
  }
});

/* Карта
*/

var mapLink = document.querySelector(".map-popup");

var mapPopup = document.querySelector(".modal-map");
if (mapPopup) {
  var mapClose = mapPopup.querySelector(".map-modal-close");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-show");
      }
    }
  });
}

/* Товар добавлен
в корзину
*/

var buyLinks = document.querySelectorAll(".cart-button");

var cartPopup = document.querySelector(".item-added");
if (cartPopup) {
  var cartClose = cartPopup.querySelector(".cart-modal-close");

  for (var i = 0; i < buyLinks.length; i++) {
    buyLinks[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      console.log("Работает");
      cartPopup.classList.add("modal-show");
    })
  };

  cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (cartPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        cartPopup.classList.remove("modal-show");
      }
    }
  });
}
