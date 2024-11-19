//ヘッダーとフッターの読み込み
fetch("/header.html")
.then((response) => response.text())
.then((data) => document.querySelector("#header").innerHTML = data);
fetch("/footer.html")
.then((response) => response.text())
.then((data) => document.querySelector("#footer").innerHTML = data);

document.addEventListener("DOMContentLoaded", () => {
    const Menu_checkbox = document.getElementById("menu-btn-check");
const Menu_space = document.getElementById("menu-space");

Menu_space.addEventListener('click', function() {
    Menu_checkbox.checked = !Menu_checkbox.checked
});
});
