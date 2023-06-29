'use strict';
/*
console.log(document.querySelector(`.message`).textContent);
document.querySelector(`.message`).textContent = `🎉 Correct Number`

document.querySelector(`.number`).textContent = `20`
document.querySelector(`.score`).textContent = `10`

document.querySelector(`.guess`).value = `23`
console.log(document.querySelector(`.guess`).value)*/

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

const displayNumber = (number) => {
    document.querySelector(`.number`).textContent = number;
}

const displayScore = (Score) => {
    document.querySelector('.score').textContent = Score;
}

let Score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', () => {
    const guess = document.querySelector('.guess').value;


    // When there is no input
    if (!guess) {
        displayMessage(`😫NO NUMBER!`);
    }

    //When player wins
    else if (guess == SecretNumber) {
        displayMessage(`🎉Correct number`);

        displayNumber(SecretNumber);
        //document.querySelector('.number').textContent = SecretNumber;

        document.querySelector(`body`).style.backgroundColor = `#60b347`;

        //  document.querySelector(`.number`).style.width = `30 rem`;
        //displayNumber(`30 rem`)
        if (Score > highscore) {
            highscore = Score;
            document.querySelector(`.highscore`).textContent = highscore
        }
    }
    //when guess is wrong
    else if (guess != SecretNumber) {
        if (Score > 1) {
            document.querySelector(`.message`).textContent = guess > SecretNumber ? `😐 too HIGH` : `😐 too LOW`;
            Score--;
            displayScore(Score)
            //document.querySelector(`.score`).textContent = Score;
        } else {
            document.querySelector(`.message`).textContent = `Game over Champ🙄`;
            document.querySelector(`.score`).textContent = 0;
        }
    }
    //when guess is too high
    /*
    else if (guess > SecretNumber) {
        if (Score > 1) {
            document.querySelector('.message').textContent = `😐 too high`;
            Score--;
            document.querySelector('.score').textContent = Score;
        }
        else {
            document.querySelector(`.message`).textContent = `Game over champ !`;
            document.querySelector('.score').textContent = 0;

            document.querySelector(`body`).style.backgroundColor = `red`;

            document.querySelector(`.number`).style.width = `30 rem`;
        }

        //when guess is too low
    } else if (guess < SecretNumber) {
        if (Score > 1) {
            document.querySelector('.message').textContent = `😐 too LOW`;
            Score--;
            document.querySelector('.score').textContent = Score;
        }
        else {
            document.querySelector(`.message`).textContent = `Game over champ !`;
            document.querySelector('.score').textContent = 0;

            document.querySelector(`body`).style.backgroundColor = `red`;

            document.querySelector(`.number`).style.width = `30 rem`;
        }

    }
}); */

    document.querySelector(`.again`).addEventListener(`click`, () => {

        Score = 20;
        SecretNumber = Math.trunc(Math.random() * 20) + 1;
        displayMessage(`Start guessing`);

        displayScore(Score);
        //document.querySelector(`.score`).textContent = Score;
        displayNumber(`?`)
        //document.querySelector('.number').textContent = `?`;
        document.querySelector(`.guess`).value = ``;
        document.querySelector(`body`).style.backgroundColor = `#222`;

        document.querySelector(`.number`).style.width = `15 rem`;








    })
})