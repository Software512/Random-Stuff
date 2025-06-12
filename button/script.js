let button = document.getElementById("button");
let password;
let presses = 0;
let playing = true;
let messageTimer;
let lastPress = 0;

button.addEventListener("click", () => {
     if (playing) {
        if (Date.now() - 400 >= lastPress) {
            presses++;
            lastPress = Date.now();
            document.getElementById("presses").innerHTML = "Button Presses: " + presses;
            doFunnyThing();
        } else {
            showMessage("You pressed the button too quickly. Game Over.");
            gameOver();
        }
    } else {
        presses = 0;
        document.getElementById("message").innerHTML = "";
        document.getElementById("presses").innerHTML = "Button Presses: 0";
        playing = true;
        button.innerHTML = "Click Me";
    }
});

function showMessage(message) {
    clearTimeout(messageTimer);
    document.getElementById("message").innerHTML = message;
    messageTimer = setTimeout(() => {
        document.getElementById("message").innerHTML = "";
    }, 3000);
}

function gameOver() {
    document.body.style.backgroundColor = "";
    button.innerHTML = "Play Again"
    score = 0;
    playing = false;
    lastpress = 0;
    password = null;
}

function doFunnyThing() {
    switch (Math.round(Math.random() * 7)) {
        case 1:
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
            break;
        case 2:
            document.body.style.backgroundColor = "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ")"
            break;
        case 3:
            showMessage("You pressed the button.");
            break;
        case 4:
            document.getElementById("noise").play();
            break;
        case 5:
            button.style.rotate = Math.random() * 360 + "deg";
            setTimeout(() => {button.style.rotate = "";}, 1000);
            break;
        case 6:
            if (!password) {
                while (!password || password.length < 8) {
                    password = prompt("Make a password. It must be at least 8 characters in length. Remember it for later.")
                }
            } else {
                let response;
                response = prompt("What is the password?");
                if (response != password) {
                    showMessage("Incorrect password. Game over.");
                    gameOver();
                }
            }
            break;
        case 7:
            let addend1 = Math.round(Math.random() * 20);
            let addend2 = Math.round(Math.random() * 20);
            answer = prompt("What is " + addend1 + " + " + addend2 + "?");
            if (answer != addend1 + addend2) {
                showMessage("Incorrect. The answer was " + (addend1 + addend2) + ". Game over.");
                gameOver();
            }
            break;
    }
}
