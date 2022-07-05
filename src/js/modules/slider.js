function slider({
  container,
  slide,
  nextArrow,
  prevArrow,
  currentCounter,
  totalCounter,
  wrapper,
  field,
}) {
  const slides = document.querySelectorAll(slide),
    prev = document.querySelector(prevArrow),
    next = document.querySelector(nextArrow),
    current = document.querySelector(currentCounter),
    total = document.querySelector(totalCounter),
    slideWrapper = document.querySelector(wrapper),
    slideFiled = document.querySelector(field),
    width = window.getComputedStyle(slideWrapper).width,
    slider = document.querySelector(container);

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

export default slider;
