
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
var scoresUpdatedFlag = localStorage.getItem('scoresUpdatedFlag');

if (scoresUpdatedFlag === "true") {
    updateScores(existingScores);
    localStorage.setItem('scoresUpdatedFlag', 'false');

}
    // makeBars(scoresCount);

    // Set the flag to indicate scores have been updated in this session
    // localStorage.setItem('scoresUpdatedFlag', 'false');


// Parse the JSON strings into JavaScript objects


// Check if existingScores has changed
function updateScores() { 
    for (score of existingScores) {
        var key = score + "-scores";
        scoresCount[key] = (scoresCount[key] || 0) + 1;
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
            // element.textContent = (scoreCountPc * 100).toFixed(1) + "%";
        }
    
}
}

// function makeBars() {
    





