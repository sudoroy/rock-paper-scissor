let con = document.querySelectorAll(".con");
let computer = document.querySelectorAll(".computer");
let user = document.querySelector(".user");
let machine = document.querySelector(".machine");
let winModal = document.querySelector(".win-modal");
let winner = document.querySelector(".winner");
let nextbtn = document.querySelector(".nextbtn");
console.log(computer);
let play = document.querySelector(".play");
let random = Math.floor(Math.random() * 3);
let bgLines = document.querySelector(".bgLines");

let score = JSON.parse(localStorage.getItem("sc"));
let scoreElem = document.getElementById("score");

let cscore = JSON.parse(localStorage.getItem("cs"));
let cscoreElem = document.getElementById("cscore");

if (cscore) {
  cscoreElem.innerText = cscore;
}
let num = 0;

if (score) {
  scoreElem.innerText = score;
}
let count = 0;

con.forEach((element, index) => {
  element.addEventListener("click", () => {
    user.style.opacity = "1";

    bgLines.style.display = "none";

    con.forEach((item) => {
      item.style.display = "none";
    });
    element.style.display = "block";
    element.classList.add("show");
    setTimeout(() => {
      machine.style.opacity = "1";
      setTimeout(() => {
        computer[random].style.display = "block";
        computer[random].classList.add("right");
      }, 1000);
    }, 500);
    setTimeout(() => {
      if (random == index) {
        winModal.style.display = "grid";
        winner.innerText = "Tie Up";
      } else if (
        (index == 0 && random == 2) ||
        (index == 1 && random == 0) ||
        (index == 2 && random == 1)
      ) {
        winModal.style.display = "grid";
        winner.innerText = "You Win \n Against PC";
        nextbtn.style.display = "flex";
        nextbtn.style.zIndex = "2";
        count = score;
        count++;
        scoreElem.innerText = count;
        localStorage.setItem("sc", JSON.stringify(count));
      } else {
        winModal.style.display = "grid";
        winner.innerText = "You Lost \n Against PC";

        num = cscore;
        num++;
        cscoreElem.innerText = num;
        localStorage.setItem("cs", JSON.stringify(num));
      }
    }, 1500);
  });
});
play.addEventListener("click", () => {
  window.location.reload();
});

// NEXT BUTTON JS CONFIG
let next = document.querySelector(".nextbtn");

next.addEventListener("click", () => {
  let playerScore = parseInt(scoreElem.innerText);
  let computerScore = parseInt(cscoreElem.innerText);

  if (playerScore > computerScore) {
    window.location.href = "hurray.html";
  } else if (playerScore == computerScore) {
    alert("Score is same, Please play again");
  } else {
    alert(
      "Next Page Is Only For Winners! Your Final Score Should Be Greater Than The Computer "
    );
  }
});

//RULES MODAL CODE
function showRules() {
  document.getElementById("rulesModal").style.display = "flex";
}

function closeRulesModal() {
  document.getElementById("rulesModal").style.display = "none";
}

// ----------
