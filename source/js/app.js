/* Скрипт для блока editor */

const tabsBtn = document.querySelectorAll(".editor__action");
const tabsItems = document.querySelectorAll(".editor__filter-item");

tabsBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains("editor__item-active")) {
      tabsBtn.forEach(function (item) {
        item.classList.remove("editor__item-active");

      });

      tabsItems.forEach(function (item) {
        item.classList.remove("editor__item-active");

      });
    }

    currentBtn.classList.add("editor__item-active");
    currentTab.classList.add("editor__item-active");
  });

});

document.querySelector(".editor__item-active").click();
