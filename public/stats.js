userName = localStorage.getItem("userName");
document.querySelector("h2").textContent = userName + "'s Score Distribution";




let gameScores = JSON.parse(localStorage.getItem('gameScores')) || [];


var scoresCount = JSON.parse(localStorage.getItem('scoresCount')) || {};




flag = localStorage.getItem("updateFlag");
//flag is set to true when the modal is closed after each game
if (flag === "true") {
    updateScores();
    updateStatsUI();
    localStorage.setItem('updateFlag', false);
}




function updateScores() {
    for (let score of gameScores) {
            var key = score + "-scores";
            scoresCount[key] = (scoresCount[key] || 0) + 1;
            localStorage.removeItem("gameScores");
        }
    localStorage.setItem("scoresCount", JSON.stringify(scoresCount));
}




function updateStatsUI() {
    let maxWidth = 400;
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




function getTotal () {
    let total = 0;
    for (var key in scoresCount) {
        total += scoresCount[key];
    }
    return total
}







