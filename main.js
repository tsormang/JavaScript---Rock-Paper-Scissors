let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// JQuery Variables
const leftHandMove = $("#rockHandL");
const rightHandMove = $("#rockHandR");


// Set the letters r/p/s for the Computer
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

// Convert the letters r/p/s to words for display
function ConvertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}


// JQuery SHAKE HANDS______________________________________________________________________________________
$(".choice").mouseover(function () {
    jQuery.fn.shake = function () {
        this.each(function (i) {
            $(this).css({ "position": "absolute" });
            $(this).animate({ top: 220 }, 30).animate({ bottom: 180 }, 50).animate({ top: 222 }, 40).animate({ bottom: 178 }, 50).animate({ top: 215 }, 50).animate({ bottom: 172 }, 50).animate({ top: 200 }, 50); 
        });
        return this;
    }
    leftHandMove.shake();
    rightHandMove.shake();
});

// AFTER SHAKING DEFINE THE USER OPTION
function main() {

    $("#r").click(function () {

        setTimeout(function () { game("r") }, 1);
    });

    $("#p").click(function () {

        setTimeout(function () { game("p") }, 1);
    });

    $("#s").click(function () {

        setTimeout(function () { game("s") }, 1);
    });
}
main();


// DEFINE THE COMBINATION
function game(userChoice) {
    const computerChoice = getComputerChoice();
    if (userChoice + computerChoice === "rs") {
        leftHandMove.attr('src', 'hands/rockHAND.png');
        rightHandMove.attr('src', 'hands/scissorHAND.png');
        win(userChoice, computerChoice);
    }
    else if (userChoice + computerChoice === "pr") {
        leftHandMove.attr('src', 'hands/paperHAND.png');
        rightHandMove.attr('src', 'hands/rockHAND.png');
        win(userChoice, computerChoice);
    }
    else if (userChoice + computerChoice === "sp") {
        leftHandMove.attr('src', 'hands/scissorHAND.png');
        rightHandMove.attr('src', 'hands/paperHAND.png');
        win(userChoice, computerChoice);
    }
    else if (userChoice + computerChoice === "rp") {
        leftHandMove.attr('src', 'hands/rockHAND.png');
        rightHandMove.attr('src', 'hands/paperHAND.png');
        lose(userChoice, computerChoice);
    }
    else if (userChoice + computerChoice === "ps") {
        leftHandMove.attr('src', 'hands/paperHAND.png');
        rightHandMove.attr('src', 'hands/scissorHAND.png');
        lose(userChoice, computerChoice);
    }
    else if (userChoice + computerChoice === "sr") {
        leftHandMove.attr('src', 'hands/scissorHAND.png');
        rightHandMove.attr('src', 'hands/rockHAND.png');
        lose(userChoice, computerChoice);
    }
    else if (userChoice + computerChoice === "rr") {
        leftHandMove.attr('src', 'hands/rockHAND.png');
        rightHandMove.attr('src', 'hands/rockHAND.png');
        draw(userChoice, computerChoice);
    }
    else if (userChoice + computerChoice === "pp") {
        leftHandMove.attr('src', 'hands/paperHAND.png');
        rightHandMove.attr('src', 'hands/paperHAND.png');
        draw(userChoice, computerChoice);
    }
    else if (userChoice + computerChoice === "ss") {
        leftHandMove.attr('src', 'hands/scissorHAND.png');
        rightHandMove.attr('src', 'hands/scissorHAND.png');
        draw(userChoice, computerChoice);
    }

}

// ON WIN___________________________________________________________________________
function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);

    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    // Win Message
    result_p.innerHTML = `${ConvertToWord(userChoice)}${smallUserWord}beats${ConvertToWord(computerChoice)}${smallCompWord}. You Win!!!`;

    // Green Glow On Win
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 600);
}

// ON LOSS___________________________________________________________________________
function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);

    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    // Loss Message
    result_p.innerHTML = `${ConvertToWord(userChoice)}${smallUserWord}loses${ConvertToWord(computerChoice)}${smallCompWord}. You Lost...`;

    // Red Glow On Loss
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 600);
}

// ON DRAW___________________________________________________________________________
function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);

    // Draw Message
    result_p.innerHTML = `${ConvertToWord(userChoice)}${smallUserWord}equals${ConvertToWord(computerChoice)}${smallCompWord}. Its a Draw`;

    // Gray Glow On Loss
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 600);
}

    








