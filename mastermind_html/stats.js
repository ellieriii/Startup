userName = localStorage.getItem("userName");
document.querySelector("h2").textContent = userName + "'s Score Distribution";

let maxWidth = 300;
let existingScores = JSON.parse(localStorage.getItem('gameScores')) || [];
// let newGuesses = JSON.parse(localStorage.getItem('newGesses')) || [];

let total = existingScores.length;

var scoresCount = JSON.parse(localStorage.getItem('scoresCount')) || {};

function updateScores() {

    for (let score of existingScores) {
            var key = score + "-scores";
            scoresCount[key] = (scoresCount[key] || 0) + 1;
            localStorage.removeItem("gameScores");
        }
    

    localStorage.setItem("scoresCount", JSON.stringify(scoresCount));

    for (var key in scoresCount) {
        var value = scoresCount[key];
        let scoreCountPc = value / total;

        var elements = document.getElementsByClassName(key);
        for (var element of elements) {
            element.style.width = (maxWidth * scoreCountPc) + 'px';
            element.style.display = 'flex';
            element.style.justifyContent = 'right';
            element.style["font-family"] = "times-new roman";
            element.textContent = value;
        }
    }
}

flag = localStorage.getItem("updateFlag");
if (flag === "true") {
    updateScores();
    localStorage.setItem('updateFlag', false);
}