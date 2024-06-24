let boxes = document.querySelectorAll(".box");
let turnX = true;
let win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      turnX = false;
      box.innerText = "X";
    } else {
      turnX = true;
      box.innerText = "O";
    }
    box.disabled = true;
    checkResult();
  });
});
let reset = document.querySelector(".reset");
boxes.forEach((box) => {
  reset.addEventListener("click", () => {
    for (let i = 0; i < 10; i++) {
      box.innerText = "";
    }
    for (let i = 0; i < 10; i++) {
      box.disabled = false;
    }
    document.querySelector(".result").innerText = "";
  });
});
let countX = 0;
let countO = 0;
function checkResult() {
  for (let i = 0; i < 8; i++) {
    countX = 0;
    countO = 0;
    for (let j = 0; j < 3; j++) {
      if (boxes[win[i][j]].innerText === "X") {
        countX++;
      } else if (boxes[win[i][j]].innerText === "O") {
        countO++;
      }
    }
    if (countX === 3) {
      document.querySelector(".result").innerText = "X Wins!";
      alert("X win!");
      return;
    } else if (countO === 3) {
      document.querySelector(".result").innerText = "O Wins!";
      alert("O win!");
      return;
    }
  }
}
