userName = localStorage.getItem("userName");
document.querySelector("h2").textContent = userName + "'s Score Distribution"


let maxWidth = 300;
let existingScores = localStorage.getItem('gameScores');
let total;

if (!existingScores) {
    existingScores = [];
} 
else {
    // Parse the existing scores from JSON
    existingScores = JSON.parse(existingScores);
    total = existingScores.length;
}
var scoresCount = JSON.parse(localStorage.getItem('scoresCount')) || {};

let newGuesses = JSON.stringify(localStorage.getItem("newGuesses"));
console.log(newGuesses);

function updateScores() { 

    for (let score of newGuesses) {
        var key = score + "-scores";
        scoresCount[key] = (scoresCount[key] || 0) + 1;
        console.log(scoresCount);
    }
    localStorage.setItem("scoresCount", JSON.stringify(scoresCount));

    for (var key in scoresCount) {
        var value = scoresCount[key];
        let scoreCountPc = value / total;
        console.log(total);
        console.log(scoreCountPc);
        var elements = document.getElementsByClassName(key);
        for (var element of elements) {
            element.style.width = (maxWidth * scoreCountPc) + 'px';
            element.style.display = 'flex';
            element.style.justifyContent = 'right';
            element.style["font-family"] = "times-new roman";
            element.textContent = value;
        }   
    }
    
};

flag = localStorage.getItem("updateFlag");
if (flag === "true") {
    updateScores();
    localStorage.setItem('updateFlag', false);
    localStorage.removeItem("newGuesses"); 
}
