import clas from "./modules/class";
import loader from "./modules/loader";
import modal from "./modules/modal";
import slider from "./modules/slider";
import tabs from "./modules/tabs";
import timer from "./modules/timer";

window.addEventListener("DOMContentLoaded", () => {
  clas();
  loader();
  modal();
  slider({
    container: ".offer__slider",
    slide: ".offer__slide",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    currentCounter: "#current",
    totalCounter: "#total",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner",
  });
  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_ac",
    ".offer__slidetive"
  );
  timer(".timer", "2022-12-12");
});
