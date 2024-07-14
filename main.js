let countel = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
function increment() {
  count += 1;
  countel.textContent = count;
}
function reset() {
  count = 0;
  countel.textContent = count;
  //countel.innerText = count;
  //saveEl.innerText = "";
}
function save() {
  let message = ` ${count} - `;
  saveEl.textContent += message;
}
