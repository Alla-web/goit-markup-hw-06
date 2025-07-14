(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector("[data-modal-open]"),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector("[data-modal-close]"),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle("is-visible");
  }
})();

(() => {
  const refs = {
    // Додати атрибут data-mobile-menu-open на кнопку відкриття
    openModalBtn: document.querySelector("[data-mobile-menu-open]"),

    // Додати атрибут data-mobile-menu-close на кнопку закриття
    closeModalBtn: document.querySelector("[data-mobile-menu-close]"),

    // Додати атрибут data-mobile-menu-modal на бекдроп модалки
    modal: document.querySelector("[data-mobile-menu-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle("is-visible");
  }
})();
