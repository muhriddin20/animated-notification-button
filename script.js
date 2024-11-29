let notify = document.querySelector(".notify");
let btn = document.querySelector(".btn");

btn.addEventListener("click", addNotify);

let count = 0;
function addNotify() {
  notify.textContent = count += 1;
  notify.classList.add("add-notify");
}
