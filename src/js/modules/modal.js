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
export default modal;
