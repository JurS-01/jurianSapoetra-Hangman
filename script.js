// Initialize ALL global variables here
// allTheWords = []
// This code here selects a random word
const wordList = [
    "vis",
    "toeter",
    "developer",
    "telefoon",
    "moeder",
    "snoer",
    "geeuw"
];
let maxAmount = 6;

let word;
const pickWord = list => {
    let word = "sinaasappel"; // Why?
    let index = Math.floor(Math.random() * list.length);
    const x = list;
    console.log("wat ben ik?", word); // Why?
    return x[index];
};


let inputs;
const guessedWord = (word, inputs) => {
    // remove all letters from word that are already guessed
    // We can do this with a for loop to.
    let remaining = word.filter(letter => {
        // If the letter is guessed return true (we want to remove that right away)
        return !inputs.includes(letter);
    });
    // If we have letters left, right?
    return remaining.length === 0;
};


const clean = () => {
    document.querySelector("#input-letter").value = "";
};


let gameOver;
const finishGame = status => {
    return gameOver = status;
}

const winGame = () => {
    document.querySelector(".win").style.display = "block";
    finishGame(true)
    goPopupWin()
};

const loseGame = () => {
    document.querySelector(".lose").style.display = "block";
    finishGame(true)
    goPopupLose()
};


const blurBackground = () => {
    let blurContainer = document.getElementById('blur');
    blurContainer.classList.toggle('active');
}

const goPopupWin = () => {
    blurBackground();
    let popupContainer = document.getElementById('popup-win');
    popupContainer.classList.add('active');
}

const goPopupLose = () => {
    blurBackground();
    let popupContainer = document.getElementById('popup-lose');
    popupContainer.classList.add('active');
}

const closePopup = () => {
    blurBackground();
    document.querySelector(".win").style.display = "none";
    document.querySelector(".lose").style.display = "none";
}

const backToGameBtns = document.getElementsByClassName("close-popup")
const btnList = [...backToGameBtns]
btnList.forEach(btn => btn.addEventListener('click', closePopup))

const showNotGuessedWord = word => {
    document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
};


let tries = 0;
const updateTriesDisplay = tries => {
    document.querySelector(".lives span").innerHTML = 6 - tries;
};


const checkLetters = (word, inputs) => {
    let wrongLetters = inputs.filter(letter => {
        // If the letter is in the word return.... false/true (we want to remove that then)
        return !word.includes(letter);
    });
    document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
};


const checkWord = (word, inputLetterWords) => {
    let display = word.map(letter => {
        if (inputLetterWords.includes(letter)) {
            return letter;
        } else {
            return "_";
        }
    });
    document.querySelector(".the_word").innerHTML = display.join(" ");
};

const guessLetter = () => {
    if (gameOver) {
        return;
    }
    const input1 = document.querySelector("input").value;
    document.querySelector("input").value = "";

    if (inputs.includes(input1) || input1 === "") {
        return;
    }

    if (!word.includes(input1)) {
        tries++;
        document.querySelector(".lives span").innerHTML = 6 - tries;
        updateHangmanPicture()
    }

    inputs.push(input1);
    checkWord(word, inputs);
    checkLetters(word, inputs);

    if (guessedWord(word, inputs)) {
        winGame();
    } else if (tries >= 6) {
        loseGame();
    }
};

const updateHangmanPicture = () => {
    let remainingLives = document.querySelector(".lives span").innerHTML
    document.getElementById('hangman-status-pic').src = './images/' + remainingLives + '.jpg';
}

// Why?
const getThePlayer = player => {
    let play = document.getElementById("player1");
    play = play + "We are about to start the game";
    return play;
}

const beginTheGameWithPlayer = player1 => {
    getThePlayer(player1);
    gameOver = false;
    document.querySelector(".win").style.display = "none";
    document.querySelector(".lose").style.display = "none";
    clean();

    word = pickWord(wordList).split("");
    document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
    word;

    tries = 0;
    document.querySelector(".lives span").innerHTML = 6 - 0;

    inputs = [];
    checkWord(word, inputs);
    checkLetters(word, inputs);

    document.getElementById('hangman-status-pic').src = "./images/6.jpg";
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".guess").addEventListener("click", guessLetter);
    document
        .querySelector(".restart")
        .addEventListener("click", beginTheGameWithPlayer);
    beginTheGameWithPlayer();
});


module.exports = {
    pickWord,
    guessedWord,
    finishGame,
}




