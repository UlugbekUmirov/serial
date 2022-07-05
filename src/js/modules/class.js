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
export default clas;
