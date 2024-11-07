let winnerBox = document.querySelector(".winner_box");
let winner = document.querySelector(".winner");
let restart = document.querySelector(".restart");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let xScore = document.querySelector(".x_score");
let oScore = document.querySelector(".o_score");

let xsScore = 0;
let osScore = 0;
let boxClick = 0;

let winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
];

winnerBox.classList.add("hide");
    let turnX = true;
    for (let box of boxes) {
        box.addEventListener("click", startPlay);
    }

function startPlay () {
    if (turnX) {
        this.innerText = "X";
        turnX = false;
        boxClick++;
        console.log(boxClick);
    } else {
        this.innerText = "O";
        turnX = true;
        boxClick++;
        console.log(boxClick);
    }
    this.disabled = true;
    checkWinner();
}
function checkWinner () {

    for (let pattern of winPatterns) {
    
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                boxDisable();
                boxes[pattern[0]].style.backgroundColor = "green";
                boxes[pattern[1]].style.backgroundColor = "green";
                boxes[pattern[2]].style.backgroundColor = "green";
                boxes[pattern[0]].style.color = "white";
                boxes[pattern[1]].style.color = "white";
                boxes[pattern[2]].style.color = "white";

                boxClick = 0;
                setTimeout(function () {
                    winnerBox.classList.remove("hide");
                    winner.innerText = `Congratulations ${pos1Val}. You are Winner.`;
                }, 750);

                if (pos1Val == "X") {
                    xsScore++;
                    xScore.innerText = xsScore;
                } else {
                    osScore++;
                    oScore.innerText = osScore;
                }
            } else {
                if (boxClick == 9) {
                    setTimeout(function () {
                        winnerBox.classList.remove("hide");
                        winner.innerText = `No one wins. Game is Draw.`;
                    }, 750);
                    boxClick = 0;
                }
            }
        }

        
    }
}

resetBtn.addEventListener("click", function () {
    boxEnable();
    reset();
});

restart.addEventListener("click", function () {
    winnerBox.classList.add("hide");
    boxEnable();
    reset();
});

function boxDisable () {
    for (let box of boxes) {
        box.disabled = true;
    }
}

function boxEnable () {
    for (let box of boxes) {
        box.disabled = false;
    }
}

function reset () {
    turnX = true;
    for (let box of boxes) {
        box.innerText = "";
        box.style.backgroundColor = "white";
        box.style.color = "black";
        };
        startPlay;
    }

function draw () {
    setTimeout(function () {
        winnerBox.classList.remove("hide");
        winner.innerText = `No one wins. Game is Draw.`; 
    }, 750);  
}
