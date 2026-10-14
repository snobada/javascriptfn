function getText() {
    return document.getElementById("textInput").value;
}

function getWord() {
    return document.getElementById("wordInput").value;
}

function showString(message) {
    document.getElementById("stringResult").textContent = message;
}

function showMath(message) {
    document.getElementById("mathResult").textContent = message;
}

// STRING FUNCTIONS

function stringLength() {
    showString("Length of string: " + getText().length);
}

function occurrences() {
    let text = getText();
    let word = getWord();

    if (!word) {
        showString("Please enter a word.");
        return;
    }

    showString(
        "First occurrence: " + text.indexOf(word) +
        " | Last occurrence: " + text.lastIndexOf(word)
    );
}

function searchWord() {
    let text = getText();
    let word = getWord();

    if (!word) {
        showString("Please enter a word to search.");
        return;
    }

    let position = text.search(word);

    showString(
        position === -1
            ? "Word not found."
            : "Word found at index: " + position
    );
}

function sliceText() {
    let text = getText();
    let start = Number(document.getElementById("start").value);
    let end = Number(document.getElementById("end").value);

    showString("Slice result: " + text.slice(start, end));
}

function substringText() {
    let text = getText();
    let start = Number(document.getElementById("start").value);
    let end = Number(document.getElementById("end").value);

    showString("Substring result: " + text.substring(start, end));
}

function substrText() {
    let text = getText();
    let start = Number(document.getElementById("start").value);
    let length = Number(document.getElementById("end").value);

    showString("Substr result: " + text.substr(start, length));
}

function replaceWord() {
    let text = getText();
    let word = getWord();
    let replacement = document.getElementById("replaceInput").value;

    if (!word) {
        showString("Please enter a word to replace.");
        return;
    }

    showString("Replace result: " + text.replace(word, replacement));
}

function upperCase() {
    showString("Uppercase: " + getText().toUpperCase());
}

function lowerCase() {
    showString("Lowercase: " + getText().toLowerCase());
}

// MATH FUNCTIONS

function getNumbers() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;

    if (a.trim() === "" || b.trim() === "") {
        showMath("Please enter both numbers.");
        return null;
    }

    a = Number(a);
    b = Number(b);

    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        showMath("Please enter valid numbers.");
        return null;
    }

    return [a, b];
}

function power() {
    let n = getNumbers();
    if (!n) return;

    showMath("Power: " + Math.pow(n[0], n[1]));
}

function squareRoot() {
    let n = getNumbers();
    if (!n) return;

    if (n[0] < 0) {
        showMath("Square root of a negative number is not real.");
        return;
    }

    showMath("Square root: " + Math.sqrt(n[0]));
}

function roundNumber() {
    let n = getNumbers();
    if (!n) return;

    showMath("Rounded value: " + Math.round(n[0]));
}

function ceilNumber() {
    let n = getNumbers();
    if (!n) return;

    showMath("Ceiling value: " + Math.ceil(n[0]));
}

function floorNumber() {
    let n = getNumbers();
    if (!n) return;

    showMath("Floor value: " + Math.floor(n[0]));
}

function absoluteNumber() {
    let n = getNumbers();
    if (!n) return;

    showMath("Absolute value: " + Math.abs(n[0]));
}

function sine() {
    let angle = Number(document.getElementById("angle").value);

    if (document.getElementById("angle").value.trim() === "") {
        showMath("Please enter an angle.");
        return;
    }

    showMath("Sine: " + Math.sin(angle * Math.PI / 180));
}

function cosine() {
    let angle = Number(document.getElementById("angle").value);

    if (document.getElementById("angle").value.trim() === "") {
        showMath("Please enter an angle.");
        return;
    }

    showMath("Cosine: " + Math.cos(angle * Math.PI / 180));
}

function minimum() {
    let n = getNumbers();
    if (!n) return;

    showMath("Minimum value: " + Math.min(n[0], n[1]));
}

function maximum() {
    let n = getNumbers();
    if (!n) return;

    showMath("Maximum value: " + Math.max(n[0], n[1]));
}

function randomNumber() {
    let n = getNumbers();
    if (!n) return;

    let min = Math.ceil(Math.min(n[0], n[1]));
    let max = Math.floor(Math.max(n[0], n[1]));

    if (min > max) {
        showMath("The range contains no integers.");
        return;
    }

    let random = Math.floor(Math.random() * (max - min + 1)) + min;

    showMath("Random integer between " + min + " and " +
             max + ": " + random);
}