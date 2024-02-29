userName = localStorage.getItem("userName");
document.querySelector("h2").textContent = userName + "'s Score Distribution";

let maxWidth = 400;
let existingScores = JSON.parse(localStorage.getItem('gameScores')) || [];

var scoresCount = JSON.parse(localStorage.getItem('scoresCount')) || {};


function updateScores() {

    for (let score of existingScores) {
            var key = score + "-scores";
            scoresCount[key] = (scoresCount[key] || 0) + 1;
            localStorage.removeItem("gameScores");
        }
    

    localStorage.setItem("scoresCount", JSON.stringify(scoresCount));

    function getTotal () {
        let total = 0;
        for (var key in scoresCount) {
            total += scoresCount[key];
        } 
        return total
    }
    

    total = getTotal()
    for (var key in scoresCount) {
        var value = (scoresCount[key]);
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