let existingScores = localStorage.getItem('gameScores');
if (!existingScores) {
    existingScores = [];
} 
else {
    // Parse the existing scores from JSON
    existingScores = JSON.parse(existingScores);
}
console.log(existingScores)

let total = 0;
let maxWidth = 1000;

var scoresCount = JSON.parse(localStorage.getItem('scoresCount')) || {};

// Parse the JSON strings into JavaScript objects
var scoresCount = JSON.parse(localStorage.getItem('scoresCount')) || {};

// Check if existingScores has changed
existingScores.forEach(function(score) {
    var key = score + "-scores";
    scoresCount[key] = scoresCount[key] += 1;
    total += scoresCount[key];
    console.log(total);
    console.log(scoresCount);
    })

localStorage.setItem("scoresCount", JSON.stringify(scoresCount));


for (var key in scoresCount) {
    if (scoresCount.hasOwnProperty(key)) {
        var value = scoresCount[key] || 0;
        console.log("Key: " + key + ", Value: " + value);
        let scoreCountPc = value / total;
        var elements = document.getElementsByClassName(key);
        console.log(elements);
        for (element of elements) {
            console.log(element);
            element.style.width = (maxWidth * scoreCountPc) + 'px';
            element.style.display = 'flex';
            element.style.justifyContent = 'right';
            element.style["font-family"] = "times-new roman";
            element.textContent = (scoreCountPc * 100).toFixed(1) + "%";
        }
    }
    if (!value) {

    }
}

// localStorage.getItem("scoreCount");
// localStorage.setItem("scoreCount", scoreCount);
// let scoreCountPc = scoreCount / total;
// var element = document.querySelector("." + key);
// element.style.width = (maxWidth * scoreCountPc) + 'px';  


// $(".ones").css("width", maxWidth * onesPc + 'px');
// let twosPc = twos / total;
// $(".twos").css("width", maxWidth * twosPc + 'px');
// let threesPc = threes / total;
// $(".threes").css("width", maxWidth * threesPc + 'px');
// let foursPc = fours / total;
// $(".fours").css("width", maxWidth * foursPc + 'px');
// let fivesPc = fives/ total;
// $(".fives").css("width", maxWidth * fivesPc + 'px');
// let sixesPc = sixes / total;
// $(".sixes").css("width", maxWidth * sixesPc + 'px');
// let sevensPc = sevens / total;
// $(".sevens").css("width", maxWidth * sevensPc + 'px');
// let eightsPc = eights / total;
// $(".eights").css("width", maxWidth * eightsPc + 'px');
// let ninesPc = nines / total;
// $(".nines").css("width", maxWidth * ninesPc + 'px');
// let tensPc = tens / total;
// $(".tens").css("width", maxWidth * tensPc + 'px');




