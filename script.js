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
  });
});

let newgame = document.querySelector("#newGame");
boxes.forEach((box) => {
  newgame.addEventListener("click", () => {
    document.querySelector(".head").classList.add("hide");
    for (let i = 0; i < 10; i++) {
      box.innerText = "";
    }
    for (let i = 0; i < 10; i++) {
      box.disabled = false;
    }
  });
});

let countX = 0;
let countO = 0;
function checkResult() {
  for (let i = 0; i < 8; i++) {
    let sym = boxes[win[i][0]].innerText;
    if(boxes[win[i][0]].innerText!=""&&boxes[win[i][1]].innerText!=""&&boxes[win[i][2].innerText]!="")
    if (
      sym===boxes[win[i][1]].innerText && boxes[win[i][2]].innerText ===boxes[win[i][0]].innerText 
    ) {
      document.querySelector(".hide").classList.remove("hide");
      document.querySelector("#winner").innerText = 'Congratulations, '+ sym +' Wins!';
      return;
    }

  }
}
