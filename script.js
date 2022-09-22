let count = 0;

const value = document.querySelector(".value");
const buttons = document.querySelectorAll(".btn");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const style = e.currentTarget.classList;
    if (style.contains("decrease")) {
      count -= 1;
    } else if (style.contains("increase")) {
      count += 1;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    } else if (count == 0) {
      value.style.color = "black";
    } else {
      value.style.color = "red";
    }
    value.innerHTML = count;
  });
});
