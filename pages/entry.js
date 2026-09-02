const backLink = document.querySelector(".back-link a");

// Не отменяем переход: если браузер не даст закрыться, href всё равно сработает.
backLink.addEventListener("click", () => window.close());
