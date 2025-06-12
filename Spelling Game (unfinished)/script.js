var wordText = "boat,center/centre,computer";
var wordList = ["boat", "center/centre", "computer"]
var word;
var score = 0;
var gameStarted = false;
var spellingCorrect;
var times = []
var startTime;
var timer;
var averageTime;
var speech = window.speechSynthesis;

document.getElementById("start").addEventListener("click", () => {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("game").style.display = "";
    startGame();
});
document.getElementById("submit").addEventListener("click", submitSpelling);
addEventListener("keydown", (e) => {
    if (e.key == "Enter" && gameStarted) {
        submitSpelling();
    }
})
document.getElementById("playSound").addEventListener("click", () => {
    speech.cancel()
    speech.speak(new SpeechSynthesisUtterance(word.split("/")[0]));
});
document.getElementById("quit").addEventListener("click", () => {
    clearTimeout(timer);
    gameOver("You Quit The Game");
})
document.getElementById("retry").addEventListener("click", () => {
    document.getElementById("gameOver").style.display = "none";
    document.getElementById("game").style.display = "";
    startGame();
})
document.getElementById("mainMenuButton").addEventListener("click", () => {
    document.getElementById("gameOver").style.display = "none";
    document.getElementById("startScreen").style.display = "";
})

function submitSpelling() {
    clearTimeout(timer);
    times.push(performance.now() - startTime);
    spellingCorrect == false;
    for (let i = 0; i < word.split("/").length; i++) {
        if (document.getElementById("spellingInput").value.toLowerCase() == word.split("/")[i]) {
            spellingCorrect = true;
        }
    }
    if (spellingCorrect) {
        score++;
        if (wordList.length == 0) {
            gameOver("You Won!");
        } else {
            document.getElementById("spellingInput").value = "";
            document.getElementById("score").innerHTML = "Score: " + score;
            word = getWord(wordList)
            startTime = performance.now();
            timer = setTimeout(() => {
                gameOver("You ran out of time.", "The word was \"" + word + "\".")
            }, 15000);
            speech.speak(new SpeechSynthesisUtterance(word.split("/")[0]));
        }
    } else {
        gameOver("Incorrect", "The word was " + word + ", not \"" + document.getElementById("spellingInput").value + "\".");
    }
}

function startGame() {
    wordList = wordText.split(",")
    score = 0;
    times = []
    document.getElementById("score").innerHTML = "Score: 0";
    document.getElementById("spellingInput").value = "";
    word = getWord(wordList)
    gameStarted = true;
    startTime = performance.now();
    timer = setTimeout(() => {
        gameOver("You ran out of time.", "The word was \"" + word + "\".")
    }, 15000);
    speech.speak(new SpeechSynthesisUtterance(word.split("/")[0]));
}


function getWord(words) {
    var randomNumber = Math.floor(Math.random() * words.length);
    var selectedWord = words[randomNumber];
    words.splice(randomNumber, 1);
    return (selectedWord);
}

function gameOver(title, reason) {
    gameStarted = false;
    document.getElementById("gameOverTitle").innerHTML = title;
    if (reason) {
        document.getElementById("gameOverText").innerHTML = reason;
        document.getElementById("gameOverText").style.display = "";
    } else {
        document.getElementById("gameOverText").style.display = "none";
    }
    if (times.length) {
        averageTime = 0;
        for (let i = 0; i < times.length; i++) {
            averageTime += times[i];
        }
        averageTime = (averageTime / times.length / 1000).toFixed(2);
        document.getElementById("stats").innerHTML = `Score: ${score}<br>Average Time Per Question: ${averageTime} seconds`;
    } else {
        document.getElementById("stats").innerHTML = `Score: ${score}`;
    }
    document.getElementById("game").style.display = "none";
    document.getElementById("gameOver").style.display = "";
}