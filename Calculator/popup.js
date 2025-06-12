let num1 = "0";
let operation = plus;
let num2 = "0";
let current = 1;
let elementId;
let isAnswer = false;
addEventListener("click", handleClick);
addEventListener("keydown", handleKey);
function handleKey(event) {
    switch (event.key) {
        case "0":
            updateNumber("0");
            break;
        case "1":
            updateNumber("1");
            break;
        case "2":
            updateNumber("2");
            break;
        case "3":
            updateNumber("3");
            break;
        case "4":
            updateNumber("4");
            break;
        case "5":
            updateNumber("5");
            break;
        case "6":
            updateNumber("6");
            break;
        case "7":
            updateNumber("7");
            break;
        case "8":
            updateNumber("8");
            break;
        case "9":
            updateNumber("9");
            break;
        case ".":
            updateNumber(".");
            break;
        case "Delete":
            if (current == 1) {
                num1 = "0";
                document.getElementById("screen").innerHTML = "0";
            } else if (current == 2) {
                if (num2 = "0"){
                    current = 1;
                    num1 = "0";
                    operation = "plus";
                    document.getElementById("clear").innerHTML = "C";
                } else {
                    num2 = "0";
                    document.getElementById("screen").innerHTML = "0";
                    document.getElementById("clear").innerHTML = "AC";
                }
            }
            break;
        case "Backspace":
            if (current == 1) {
                num1 = "0";
                document.getElementById("screen").innerHTML = "0";
            } else if (current == 2) {
                if (num2 = "0"){
                    current = 1;
                    num1 = "0";
                    operation = "plus";
                    document.getElementById("clear").innerHTML = "C";
                } else {
                    num2 = "0";
                       document.getElementById("screen").innerHTML = "0";
                    document.getElementById("clear").innerHTML = "AC";
                }
            }
            break;
        case "%":
            if (current == 1) {
                num1 = num1 / 100;
                document.getElementById("screen").innerHTML = num1;
            } else if (current == 2) {
                evaluate();
                num1 = num1 / 100;
                document.getElementById("screen").innerHTML = num1;
            }
            break;
        case "+":
            if (current == 1) {
                operation = "plus";
                current = 2;
            } else if (current == 2) {
                evaluate()
                operation = "plus";
                current = 2;
            }
            document.getElementById("clear").innerHTML = "AC";
            break;
        case "-":
            if (current == 1) {
                operation = "minus";
                current = 2;
            } else if (current == 2) {
                evaluate()
                operation = "minus";
                current = 2;
            }
            document.getElementById("clear").innerHTML = "AC";
            break
        case "*":
            if (current == 1) {
                operation = "times";
                current = 2;
            } else if (current == 2) {
                evaluate()
                operation = "times";
                current = 2;
            }
            document.getElementById("clear").innerHTML = "AC";
            break
        case "/":
            if (current == 1) {
                operation = "divide";
                current = 2;
            } else if (current == 2) {
                evaluate()
                operation = "divide";
                current = 2;
            }
            document.getElementById("clear").innerHTML = "AC";
            break
        case "=":
            evaluate();
            break;
        case "Enter":
            evaluate();
            break;
    }
}
function handleClick(event) {
    elementId = event.target.id;
    if (elementId.length != 0 && elementId != "screen") {
        switch (elementId) {
            case "zero":
                updateNumber("0");
                break;
            case "one":
                updateNumber("1");
                break;
            case "two":
                updateNumber("2");
                break;
            case "three":
                updateNumber("3");
                break;
            case "four":
                updateNumber("4");
                break;
            case "five":
                updateNumber("5");
                break;
            case "six":
                updateNumber("6");
                break;
            case "seven":
                updateNumber("7");
                break;
            case "eight":
                updateNumber("8");
                break;
            case "nine":
                updateNumber("9");
                break;
            case "point":
                updateNumber(".");
                break;
            case "pm":
                isAnswer = false;
                if (current == 1) {
                    num1 = String(0-Number(num1));
                    document.getElementById("screen").innerHTML = num1;
                } else if (current == 2) {
                    num2 = String(0-Number(num2));
                    document.getElementById("screen").innerHTML = num2;
                }
                break;
            case "clear":
                if (current == 1) {
                    num1 = "0";
                    document.getElementById("screen").innerHTML = "0";
                } else if (current == 2) {
                    if (num2 = "0"){
                        current = 1;
                        num1 = "0";
                        operation = "plus";
                        document.getElementById("clear").innerHTML = "C";
                    } else {
                        num2 = "0";
                        document.getElementById("screen").innerHTML = "0";
                        document.getElementById("clear").innerHTML = "AC";
                    }
                }
                break;
            case "percent":
                if (current == 1) {
                    isAnswer = true;
                    num1 = String(num1 / 100);
                    document.getElementById("screen").innerHTML = num1;
                } else if (current == 2) {
                    evaluate();
                    isAnswer = true;
                    num1 = String(num1 / 100);
                    document.getElementById("screen").innerHTML = num1;
                }
                break;
            case "plus":
                isAnswer = false;
                if (current == 1) {
                    operation = "plus";
                    current = 2;
                } else if (current == 2) {
                    evaluate()
                    operation = "plus";
                    current = 2;
                }
                document.getElementById("clear").innerHTML = "AC";
                break;
            case "minus":
                isAnswer = false;
                if (current == 1) {
                    operation = "minus";
                    current = 2;
                } else if (current == 2) {
                    evaluate()
                    operation = "minus";
                    current = 2;
                }
                document.getElementById("clear").innerHTML = "AC";
                break
            case "times":
                isAnswer = false;
                if (current == 1) {
                    operation = "times";
                    current = 2;
                } else if (current == 2) {
                    evaluate()
                    operation = "times";
                    current = 2;
                }
                document.getElementById("clear").innerHTML = "AC";
                break
            case "divide":
                isAnswer = false;
                if (current == 1) {
                    operation = "divide";
                    current = 2;
                } else if (current == 2) {
                    evaluate()
                    operation = "divide";
                    current = 2;
                }
                document.getElementById("clear").innerHTML = "AC";
                break
            case "equal":
                evaluate();
                break;
        }
    }
}
function updateNumber(num) {
    if (current == 1 && num1.length < 20){
        if (num1 == "0" || isAnswer) {
            num1 = num;
            isAnswer = false;
        } else {
            num1 = num1 + num;
        }
        document.getElementById("screen").innerHTML = num1;
    } else if (current == 2 && num2.length < 20){
        if (num2 == "0") {
            num2 = num;
        } else {
            num2 = num2 + num;
        }
        document.getElementById("screen").innerHTML = num2;
        document.getElementById("clear").innerHTML = "C";
    }
}
function evaluate() {
    console.log(operation)
    num1 = Number(num1);
    num2 = Number(num2);
    if (operation == "plus") {
        console.log("adding")
        num1 = num1 + num2;
    } else if (operation == "minus") {
        num1 = num1 - num2;
    } else if (operation == "times") {
        num1 = num1 * num2;
    } else if (operation == "divide") {
        num1 = num1 / num2;
    }
    document.getElementById("screen").innerHTML = num1;
    operation = "plus";
    num2 = "0";
    current = 1;
    document.getElementById("clear").innerHTML = "C";
    num1 = String(num1);
    isAnswer = true;
}