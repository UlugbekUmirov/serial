/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/class.js":
/*!*********************************!*\
  !*** ./src/js/modules/class.js ***!
  \*********************************/
/***/ ((module) => {

function clas() {
  class MenuCard {
    constructor(src, alt, title, descrp, price, perentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descrp = descrp;
      this.price = price;
      this.classes = classes;
      this.perent = document.querySelector(perentSelector);
      this.ChangetoUzs();
    }
    ChangetoUzs() {
      this.price = this.price * 11045;
    }
    redner() {
      const element = document.createElement("div");

      if (this.classes.length === 0) {
        this.element = "menu__item";
        element.classList.add(this.element);
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }
      element.innerHTML = `
      <img src=${this.src} alt=${this.alt} />
      <h3 class="menu__item-subtitle">${this.title}</h3>
      <div class="menu__item-descr">${this.descrp}</div>
      <div class="menu__item-divider"></div>
      <div class="menu__item-price">
        <div class="menu__item-cost">Price:</div>
        <div class="menu__item-total"><span>${this.price}</span>Uzs/month</div>
      </div>
    `;
      this.perent.append(element);
    }
  }
  new MenuCard(
    "img/tabs/1.png",
    "vegy",
    "Plan “Premium”",
    "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugitnesciunt facere, sequi exercitationem praesentium ab cupiditatebeatae debitis perspiciatis itaque quaerat id modi corporisdelectus ratione nobis harum voluptatum in.",
    10,
    ".menu .container",
    "menu__item"
  ).redner();

  new MenuCard(
    "img/tabs/2.jpg",
    "elite",
    "Plan  'Usual'",
    "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit  nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis haruvoluptatum in.",
    10,
    ".menu .container",
    "menu__item"
  ).redner();

  new MenuCard(
    "img/tabs/3.jpg",
    "post",
    "Plan 'VIP'",
    "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditatebeatae debitis perspiciatis itaque quaerat id modi corporisdelectus ratione nobis harum voluptatum in.",
    10,
    ".menu .container",
    "menu__item"
  ).redner();
}
module.exports = clas;


/***/ }),

/***/ "./src/js/modules/loader.js":
/*!**********************************!*\
  !*** ./src/js/modules/loader.js ***!
  \**********************************/
/***/ ((module) => {

function loader() {
  const loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.opacity = 0;
    setTimeout(function () {
      loader.style.display = "none";
    }, 1500);
  }, 2000);
}

module.exports = loader;


/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((module) => {

function modal() {
  const modalClose = document.querySelector("[data-close]"),
    Allmodalbtn = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal");

  Allmodalbtn.forEach((item) => {
    item.addEventListener("click", OpenModal);
  });
  modalClose.addEventListener("click", () => {
    CloseModal();
  });

  function OpenModal() {
    modal.classList.add("show");
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    clearInterval(ModeTime);
  }
  function CloseModal() {
    modal.classList.remove("show");
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      CloseModal();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      CloseModal();
    }
  });
  const ModeTime = setInterval(OpenModal, 2000);

  function showMyModalbyScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      OpenModal();
      window.removeEventListener("scroll", showMyModalbyScroll);
    }
  }
  window.addEventListener("scroll", showMyModalbyScroll);
}
module.exports = modal;


/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((module) => {

function slider() {
  // const slides = document.querySelectorAll(".offer__slide"),
  //   next = document.querySelector(".offer__slider-next"),
  //   prev = document.querySelector(".offer__slider-prev"),
  //   current = document.querySelector("#current"),
  //   total = document.querySelector("#total");

  // let slideIndex = 1;

  // showSlides(slideIndex);
  // function showSlides(idx) {
  //   if (idx < 1) {
  //     slideIndex = slides.length;
  //   }

  //   if (idx > slides.length) {
  //     slideIndex = 1;
  //   }

  //   if (slides.length < 10) {
  //     current.textContent = `0${slideIndex}`;
  //   } else {
  //     current.textContent = slideIndex;
  //   }

  //   slides.forEach((item) => (item.style.display = "none"));
  //   slides[slideIndex - 1].style.display = "block";
  // }

  // function plusSlider(idx) {
  //   showSlides((slideIndex += idx));
  // }

  // next.addEventListener("click", () => {
  //   plusSlider(1);
  // });
  // prev.addEventListener("click", () => {
  //   plusSlider(-1);
  // });
  const slides = document.querySelectorAll(".offer__slide"),
    prev = document.querySelector(".offer__slider-prev"),
    next = document.querySelector(".offer__slider-next"),
    current = document.querySelector("#current"),
    total = document.querySelector("#total"),
    slideWrapper = document.querySelector(".offer__slider-wrapper"),
    slideFiled = document.querySelector(".offer__slider-inner"),
    width = window.getComputedStyle(slideWrapper).width,
    slider = document.querySelector(".offer__slider");

  let slideIndex = 1;
  let offset = 0;

  // slideFiled.style.width = 100 * slides.length + `%`;
  // slideFiled.style.display = "flex";
  // slideWrapper.style.overflow = "hidden";
  // slideFiled.style.transition = `0.5s ease all`;

  // if (slides.length < 10) {
  //   total.textContent = `0${slides.length}`;
  //   current.textContent = `0${slideIndex}`;
  // } else {
  //   total.textContent = slides.length;
  //   current.textContent = slideIndex;
  // }
  // slides.forEach((item) => {
  //   item.style.width = width;
  // });

  // next.addEventListener("click", () => {
  //   if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
  //     offset = 0;
  //   } else {
  //     offset += +width.slice(0, width.length - 2);
  //   }
  //   slideFiled.style.transform = `translateX(-${offset}px)`;

  //   if (slideIndex === slides.length) {
  //     slideIndex = 1;
  //   } else {
  //     slideIndex++;
  //   }
  //   if (slides.length < 10) {
  //     current.textContent = `0${slideIndex}`;
  //   } else {
  //     current.textContent = slideIndex;
  //   }
  // });

  // prev.addEventListener("click", () => {
  //   if (offset == 0) {
  //     offset = +width.slice(0, width.length - 2) * (slides.length - 1);
  //   } else {
  //     offset -= +width.slice(0, width.length - 2);
  //   }
  //   slideFiled.style.transform = `translateX(-${offset}px)`;
  //   if (slideIndex === 1) {
  //     slideIndex = slides.length;
  //   } else {
  //     slideIndex--;
  //   }

  //   if (slides.length < 10) {
  //     current.textContent = `0${slideIndex}`;
  //   } else {
  //     current.textContent = slideIndex;
  //   }
  // });

  /* *************************Murakkab slider ***************** */
  slideFiled.style.width = 100 * slides.length + "%";
  slideFiled.style.display = "flex";
  slideWrapper.style.overflow = "hidden";
  slideFiled.style.transition = ".5s ease all";

  slides.forEach((item) => {
    item.style.width = width;
  });

  const indicators = document.createElement("ol");
  const dots = [];
  indicators.classList.add("carusel-indicators");
  slider.append(indicators);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
    dot.classList.add("carusel-dot");
    if (i == 0) {
      dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
  }

  next.addEventListener("click", () => {
    if (offset === +width.slice(0, width.length - 2) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
    }

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }
    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

    slideFiled.style.transform = `translateX(-${offset}px)`;

    dots.forEach((dot) => (dot.style.opacity = 0.5));
    dots[slideIndex - 1].style.opacity = 1;
  });

  prev.addEventListener("click", () => {
    if (offset === 0) {
      offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
      offset -= +width.slice(0, width.length - 2);
    }

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }
    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

    slideFiled.style.transform = `translateX(-${offset}px)`;

    dots.forEach((dot) => (dot.style.opacity = 0.5));
    dots[slideIndex - 1].style.opacity = 1;
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const slideTo = e.target.getAttribute("data-slide-to");

      slideIndex = slideTo;

      offset = +width.slice(0, width.length - 2) * (slideTo - 1);
      slideFiled.style.transform = `translateX(-${offset}px)`;

      if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
      } else {
        current.textContent = slideIndex;
      }

      dots.forEach((dot) => (dot.style.opacity = 0.5));
      dots[slideIndex - 1].style.opacity = 1;
    });

    fetch("db.json")
      .then((data) => data.json())
      .then((res) => console.log(res));

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        name: "Ulug'bek",
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  });

  /*  **************ODDIY SLIDE *****************   */

  // showSlides(slideIndex);
  // function showSlides(idx) {
  //   if (slides.length < 10) {
  //     if (idx < 1) {
  //       slideIndex = slides.length;
  //     }

  //     if (idx > slides.length) {
  //       slideIndex = 1;
  //     }
  //     current.textContent = `0${slideIndex}`;
  //   } else {
  //     current.textContent = slideIndex;
  //   }

  //   slides.forEach((item) => (item.style.display = "none"));
  //   slides[slideIndex - 1].style.display = "block";
  // }

  // function plusSlider(idx) {
  //   showSlides((slideIndex += idx));
  // }

  // next.addEventListener("click", () => {
  //   plusSlider(1);
  // });

  // prev.addEventListener("click", () => {
  //   plusSlider(-1);
  // });

  /* carusel slider ********** */
}

module.exports = slider;


/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((module) => {

function tabs() {
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabcontent = document.querySelectorAll(".tabcontent"),
    headerParents = document.querySelector(".tabheader__items");

  function hideTabContent() {
    tabcontent.forEach((item) => {
      item.style.display = "none";
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }
  function showTabContent(i = 1) {
    tabcontent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
  }
  hideTabContent();
  showTabContent();
  headerParents.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (e.target === item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}

module.exports = tabs;


/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/***/ ((module) => {

function timer() {
  const deadline = "2022-07-08";

  function getTime(endtime) {
    const timer = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(timer / (1000 * 60 * 60 * 24)),
      hours = Math.floor(6 - ((timer / (1000 * 60 * 60)) % 24)),
      minutes = Math.floor((timer / 1000 / 60) % 60),
      seconds = Math.floor((timer / 1000) % 60);
    return { timer, days, hours, minutes, seconds };
  }
  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(upDateClock, 1000);

    upDateClock();
    function upDateClock() {
      const t = getTime(endtime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.timer <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  function getZero(num) {
    if (num > 0 && num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }
  setClock(".timer", deadline);
}

module.exports = timer;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
window.addEventListener("DOMContentLoaded", () => {
  const clas = __webpack_require__(/*! ./modules/class */ "./src/js/modules/class.js"),
    loader = __webpack_require__(/*! ./modules/loader */ "./src/js/modules/loader.js"),
    modal = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js"),
    slider = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js"),
    tabs = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js"),
    timer = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");

  clas();
  loader();
  modal();
  slider();
  tabs();
  timer();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map