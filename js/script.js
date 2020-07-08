/* Слайдер
 */
var slides = document.querySelectorAll(".slider-item");

var leftBtn = document.querySelector(".first-slide-btn");
var rightBtn = document.querySelector(".second-slide-btn");

var leftArrow = document.querySelector(".slider-arrow-left");
var rightArrow = document.querySelector(".slider-arrow-right");

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

if (rightArrow) {
  rightArrow.addEventListener("click", function (evt) {
    evt.preventDefault();
    slides[0].classList.remove("slide-current");
    slides[1].classList.add("slide-current");
    currentSlide = 1;
  })
}

if (leftArrow) {
  leftArrow.addEventListener("click", function (evt) {
    evt.preventDefault();
    slides[1].classList.remove("slide-current");
    slides[0].classList.add("slide-current");
    currentSlide = 0;
  })
}

if (slides) {
  function setNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
  }

  function setPrevSlide() {
    currentSlide = Math.abs((currentSlide - 1) % slides.length);
  }
}

var leftPin = document.querySelector(".first-slide-btn");
var rightPin = document.querySelector(".second-slide-btn");

if (rightPin) {
  rightPin.addEventListener("click", function (evt) {
    evt.preventDefault();
    rightPin.classList.add("current");
    leftPin.classList.remove("current");
  })
}

if (leftPin) {
  leftPin.addEventListener("click", function (evt) {
    evt.preventDefault();
    leftPin.classList.add("current");
    rightPin.classList.remove("current");
  })
}

/* Сервисы
 */
var serviceOptions = document.querySelectorAll(".service-options");

var pickDelivery = document.querySelector(".pick-delivery");
var pickWarranty = document.querySelector(".pick-warranty");
var pickCredit = document.querySelector(".pick-credit");

var delivery = document.querySelector(".service-delivery-submenu");
var warranty = document.querySelector(".service-warranty-submenu");
var credit = document.querySelector(".service-credit-submenu");

if (pickDelivery) {
  pickDelivery.addEventListener("click", function (evt) {
    if (pickDelivery.classList.contains("service-options-active")) {
      evt.preventDefault();
      pickDelivery.classList.remove("service-options-active");
    } else {
      pickDelivery.classList.add("service-options-active");
      pickWarranty.classList.remove("service-options-active");
      pickCredit.classList.remove("service-options-active");
      delivery.classList.add("service-slide-active");
      warranty.classList.remove("service-slide-active");
      credit.classList.remove("service-slide-active");
    }
  })
}

if (pickWarranty) {
  pickWarranty.addEventListener("click", function (evt) {
    if (pickWarranty.classList.contains("service-options-active")) {
      evt.preventDefault();
      pickWarranty.classList.remove("service-options-active");
    } else {
      pickWarranty.classList.add("service-options-active");
      pickDelivery.classList.remove("service-options-active");
      pickCredit.classList.remove("service-options-active");
      warranty.classList.add("service-slide-active");
      delivery.classList.remove("service-slide-active");
      credit.classList.remove("service-slide-active");
    }
  })
}

if (pickCredit) {
  pickCredit.addEventListener("click", function (evt) {
    if (pickCredit.classList.contains("service-options-active")) {
      evt.preventDefault();
      pickCredit.classList.remove("service-options-active");
    } else {
      pickCredit.classList.add("service-options-active");
      pickDelivery.classList.remove("service-options-active");
      pickWarranty.classList.remove("service-options-active");
      credit.classList.add("service-slide-active");
      delivery.classList.remove("service-slide-active");
      warranty.classList.remove("service-slide-active");
    }
  })
}



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
