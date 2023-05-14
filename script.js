const squares = Array.from(document.getElementsByClassName("square"));
const btn = document.querySelector("#reset");

let XPlayer = true;

squares.forEach((square) =>
  square.addEventListener("click", () => {
    if (XPlayer == true) {
      square.innerHTML = "X";
      XPlayer = false;
    } else {
      square.innerHTML = "O";
      XPlayer = true;
    }
  })
);

btn.addEventListener("click", () => {
  squares.forEach((square) => {
    square.innerHTML = "";
  });
});
