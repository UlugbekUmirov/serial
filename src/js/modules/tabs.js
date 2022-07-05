function tabs(
  tabsSelector,
  tabcontentSelector,
  tabparentSelector,
  activeSelector
) {
  const tabs = document.querySelectorAll(tabsSelector),
    tabcontent = document.querySelectorAll(tabcontentSelector),
    headerParents = document.querySelector(tabparentSelector);

  function hideTabContent() {
    tabcontent.forEach((item) => {
      item.style.display = "none";
    });
    tabs.forEach((item) => {
      item.classList.remove(activeSelector);
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

export default tabs;
