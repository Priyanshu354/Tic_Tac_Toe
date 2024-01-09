let boxes = document.querySelectorAll(".button-option");
let restartButton = document.querySelector("#restart");
let newGameButton = document.querySelector("#new-game");
let popup = document.querySelector(".Popup");
let massage = document.querySelector("#massage");

let turnO = true;

const winPatterens = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

function checkWin() {
    for (let pattern of winPatterens) {
        const [a, b, c] = pattern;
        if (
            boxes[a].innerText &&
            boxes[a].innerText === boxes[b].innerText &&
            boxes[a].innerText === boxes[c].innerText
        ) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return Array.from(boxes).every((box) => box.innerText !== "");
}

function endGame(result) {
    popup.classList.remove("hide");
    massage.innerText = result;
}

boxes.forEach((buttonOption) => {
    buttonOption.addEventListener("click", () => {
        if (!buttonOption.innerText) {
            if (turnO) {
                buttonOption.innerText = "O";
                turnO = false;
            } else {
                buttonOption.innerText = "X";
                turnO = true;
            }

            if (checkWin()) {
                endGame(turnO ? "X Wins!" : "O Wins!");
            } else if (checkDraw()) {
                endGame("It's a Draw!");
            }
        }
    });
});

restartButton.addEventListener("click", () => {
    boxes.forEach((buttonOption) => {
        buttonOption.innerText = "";
    });
    popup.classList.add("hide");
});

newGameButton.addEventListener("click", () => {
    boxes.forEach((buttonOption) => {
        buttonOption.innerText = "";
    });
    popup.classList.add("hide");
});
