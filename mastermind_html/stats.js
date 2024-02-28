let existingScores = localStorage.getItem('gameScores');
if (!existingScores) {
    existingScores = [];
} else {
    // Parse the existing scores from JSON
    existingScores = JSON.parse(existingScores);
}
console.log(existingScores)

let ones = 0;
let twos = 0;
let threes = 0;
let fours = 0;
let fives = 0;
let sixes = 0;
let sevens = 0;
let eights = 0;
let nines = 0;
let tens = 0;

let total = 0;

let maxWidth = 1000;

for (score of existingScores) {
    total += score;

    if (score == 1) {
        ones += 1;
    }
    if (score == 2) {
        twos += 1;
    }
    if (score == 3) {
        threes += 1;
    }
    if (score == 4) {
        fours += 1;
    }
    if (score == 5) {
        fives += 1;   
    }
    if (score == 6) {
        sixes += 1;   
    }
    if (score == 7) {
        sevens += 1;  
    }
    if (score == 8) {
        eights += 1;  
    }
    if (score == 9) {
        nines += 1;
    }
    if (score == 10) {
        tens += 1;
    }
}
let onesPc = ones / total;
$(".ones").css("width", maxWidth * onesPc + 'px');
let twosPc = twos / total;
$(".twos").css("width", maxWidth * twosPc + 'px');
let threesPc = threes / total;
$(".threes").css("width", maxWidth * threesPc + 'px');
let foursPc = fours / total;
$(".fours").css("width", maxWidth * foursPc + 'px');
let fivesPc = fives/ total;
$(".fives").css("width", maxWidth * fivesPc + 'px');
let sixesPc = sixes / total;
$(".sixes").css("width", maxWidth * sixesPc + 'px');
let sevensPc = sevens / total;
$(".sevens").css("width", maxWidth * sevensPc + 'px');
let eightsPc = eights / total;
$(".eights").css("width", maxWidth * eightsPc + 'px');
let ninesPc = nines / total;
$(".nines").css("width", maxWidth * ninesPc + 'px');
let tensPc = tens / total;
$(".tens").css("width", maxWidth * tensPc + 'px');




