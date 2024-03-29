$(document).ready(function() {
    let R = "linear-gradient(to top right, red, rgb(168, 121, 121))"
    let W = "linear-gradient(to top right, rgb(97, 96, 96), white)"

    let slotDefault = "rgba(0, 0, 0, 0) linear-gradient(to right top, rgb(53, 50, 50), rgb(128, 128, 128)) repeat scroll 0% 0% / auto padding-box border-box";
    let selectedColor = '';
    let guess = 0
    // $(".submit").hide();
    
    let isSelected = false;
    let secretCode = makeSecretCode();
    console.log(secretCode);


    let tempArray =  $(".cp-row");
    let guessArray = [];
    let pegCount = 0;
    for(let i = 10; i >= 0; i--) {
        guessArray.push(tempArray[i]);
    }
    for (let i = 0; i < 10; i++) {
        let guess = guessArray[i].getElementsByClassName("cp-slot");
        for (let j = 0; j < 4; j++) {
            $(guess[j]).attr("id", `g-${i}-${j}`);
        }
    }

    let masterArray =  [[-1, -1, -1, -1], 
                        [-1, -1, -1, -1], 
                        [-1, -1, -1, -1],                       
                        [-1, -1, -1, -1],                       
                        [-1, -1, -1, -1],                        
                        [-1, -1, -1, -1],                        
                        [-1, -1, -1, -1],
                        [-1, -1, -1, -1],
                        [-1, -1, -1, -1],
                        [-1, -1, -1, -1]];
    
    $(".submit").click(function() {

        $(".active").removeClass("active");
        let clues = giveClues();
        checkWin(clues);
        if (guess === 9) {
            revealSecretCode();
        }
        
        guess++;
        for(let i = 0; i < 4; i++) {
            $(`#g-${guess}-${i}`).addClass("active");
        }
        document.getElementById('submit').classList.add('hidden');
        pegCount = 0;
        
    })


    $(".peg").click(function() {

        $(".peg").css("border", "thin black solid");
        $(this).css("border", "thick black solid");
        selectedColor = $(this).css("background");
        
    });
    
    $(".cp-slot").click(function() {
        if($(this).hasClass('active')) {
            // pegCount = 0;
            if ($(this).css("background") == slotDefault) {
                $(this).css("background", selectedColor);
                let coord = $(this).attr("id");
                updateMasterArray(selectedColor, coord);
                pegCount++;
                if(pegCount === 4) {
                    document.getElementById('submit').classList.remove('hidden');
                }
            }
            else if ($(this).css("background") !== slotDefault) {
                $(this).css("background", slotDefault);
                pegCount--;
                document.getElementById('submit').classList.add('hidden');
            }
    }
    });
    pegCount = 0;

    function makeSecretCode() {
        const colors = [0, 1, 2, 3, 4, 5];
        let secretCode = []
        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * colors.length);
            secretCode.push(randomIndex);
        }
        return secretCode;
    };

    function updateMasterArray(color, xy) {
      let coordinates = xy.split("-");
      let x = coordinates[1];
      let y = coordinates[2];
      masterArray[x][y] = makeColorANumber(color);
    }

    function makeColorANumber(color) {
        if (color === "rgba(0, 0, 0, 0) linear-gradient(to right top, rgb(255, 0, 0), rgb(168, 121, 121)) repeat scroll 0% 0% / auto padding-box border-box") {
            return 0;
        }
        else if (color === "rgba(0, 0, 0, 0) linear-gradient(to right top, rgb(5, 107, 5), rgb(121, 168, 121)) repeat scroll 0% 0% / auto padding-box border-box") {
            return 1;
        }
        else if (color === "rgba(0, 0, 0, 0) linear-gradient(to right top, rgb(168, 168, 16), rgb(240, 240, 169)) repeat scroll 0% 0% / auto padding-box border-box") {
            return 2;
        }
        else if (color === "rgba(0, 0, 0, 0) linear-gradient(to right top, rgb(0, 0, 195), rgb(121, 121, 168)) repeat scroll 0% 0% / auto padding-box border-box") {
            return 3;
        }
        else if (color === "rgba(0, 0, 0, 0) linear-gradient(to right top, rgb(0, 0, 0), rgb(112, 111, 111)) repeat scroll 0% 0% / auto padding-box border-box") {
            return 4;
        }
        else if (color === "rgba(0, 0, 0, 0) linear-gradient(to right top, rgb(97, 96, 96), rgb(255, 255, 255)) repeat scroll 0% 0% / auto padding-box border-box") {
            return 5;
        }

    }


    function giveClues() {
        let clues = [];
        let secretArray = [];
        for (let i =0; i < 4; i++) {
            secretArray.push(secretCode[i]);
        }
        //red kp check
        for (let i = 0; i < 4; i++) {
            if (masterArray[guess][i] === secretArray[i]) {
                clues.push("red");
                secretArray[i] = "X";
                masterArray[guess][i] = "x";
                }
        }
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) { 
                if (masterArray[guess][i] === secretArray[j]) {
                        clues.push("white");
                        secretArray[j] = "X";
                        masterArray[guess][i] = "x";    
                }
            }
        }


        reds = 0
        whites = 0
        for (hint of clues) {
            if (hint === "red") {
                reds += 1;
            }
            else if (hint=== "white") {
                whites += 1;
            }
        }
        if (reds === 0 && whites === 1) {
            $(`.${guess + 1}-1`).css("background", W);
        }
        if (reds === 1 && whites === 0) {
            $(`.${guess + 1}-1`).css("background", R);
        }
        if (reds === 0 && whites === 2) {
            $(`.${guess + 1}-1`).css("background", W);
            $(`.${guess + 1}-2`).css("background", W);

        }
        if (reds === 0 && whites === 3) {
            $(`.${guess + 1}-1`).css("background", W);
            $(`.${guess + 1}-2`).css("background", W);
            $(`.${guess + 1}-3`).css("background", W);
        }
        if (reds === 0 && whites === 4) {
            $(`.${guess + 1}-1`).css("background", W);
            $(`.${guess + 1}-2`).css("background", W);
            $(`.${guess + 1}-3`).css("background", W);
            $(`.${guess + 1}-4`).css("background", W);
        }
        if (reds === 1 && whites === 3) {
            $(`.${guess + 1}-1`).css("background", R);
            $(`.${guess + 1}-2`).css("background", W);
            $(`.${guess + 1}-3`).css("background", W);
            $(`.${guess + 1}-4`).css("background", W);
        }
        if (reds === 1 && whites === 2) {
            $(`.${guess + 1}-1`).css("background", R);
            $(`.${guess + 1}-2`).css("background", W);
            $(`.${guess + 1}-3`).css("background", W);
        }
        if (reds === 1 && whites === 1) {
            $(`.${guess + 1}-1`).css("background", R);
            $(`.${guess + 1}-2`).css("background", W);
        }

        if (reds === 2 && whites === 2) {
            $(`.${guess + 1}-1`).css("background", R);
            $(`.${guess + 1}-2`).css("background", R);
            $(`.${guess + 1}-3`).css("background", W);
            $(`.${guess + 1}-4`).css("background", W);
        }
        if (reds === 2 && whites === 1) {
            $(`.${guess + 1}-1`).css("background", R);
            $(`.${guess + 1}-2`).css("background", R);
            $(`.${guess + 1}-3`).css("background", W);
        }
        if (reds === 2 && whites === 0) {
            $(`.${guess + 1}-1`).css("background", R);
            $(`.${guess + 1}-2`).css("background", R);
        }
        if (reds === 3 && whites === 1) {
            $(`.${guess + 1}-1`).css("background", R);
            $(`.${guess + 1}-2`).css("background", R);
            $(`.${guess + 1}-3`).css("background", R);
            $(`.${guess + 1}-4`).css("background", W);
        }
        if (reds === 3 && whites === 0) {
            $(`.${guess + 1}-1`).css("background", R);
            $(`.${guess + 1}-2`).css("background", R);
            $(`.${guess + 1}-3`).css("background", R);
        }
        if (reds === 4) {
            $(`.${guess + 1}-1`).css("background", R);
            $(`.${guess + 1}-2`).css("background", R);
            $(`.${guess + 1}-3`).css("background", R);
            $(`.${guess + 1}-4`).css("background", R);
        }
        return clues;
    }


    function checkWin(clues) {
        let clueStr = clues.join();
        if (clueStr === "red,red,red,red") {
            revealSecretCode();
        }
    }

    function revealSecretCode() {
        
        let secSlots = document.getElementsByClassName("secret");
        for (let i = 0; i < 4; i++) {
            secSlots[i].textContent = '';
            if (secretCode[i] === 0) {
                $(secSlots[i]).css("background", "rgba(0, 0, 0, 0) linear-gradient(to right top, rgb(255, 0, 0), rgb(168, 121, 121))");
            }
            if (secretCode[i] === 1) {
                $(secSlots[i]).css("background", "rgba(0, 0, 0, 0) linear-gradient(to right top, rgb(5, 107, 5), rgb(121, 168, 121))");
            }
            if (secretCode[i] === 2) {
                $(secSlots[i]).css("background", "rgba(0, 0, 0, 0) linear-gradient(to right top, rgb(168, 168, 16), rgb(240, 240, 169))");
            }
            if (secretCode[i] === 3) {
                $(secSlots[i]).css("background", "rgba(0, 0, 0, 0) linear-gradient(to right top, rgb(0, 0, 195), rgb(121, 121, 168))");
            }
            if (secretCode[i] === 4) {
                $(secSlots[i]).css("background", "rgba(0, 0, 0, 0) linear-gradient(to right top, rgb(0, 0, 0), rgb(112, 111, 111))");
            }
            if (secretCode[i] === 5) {
                $(secSlots[i]).css("background", "rgba(0, 0, 0, 0) linear-gradient(to right top, rgb(97, 96, 96), rgb(255, 255, 255))");
            }

        }
    
        

    function saveScore(guess) {
        // Retrieve existing scores from local storage or create an empty array
        let gameScores = JSON.parse(localStorage.getItem('gameScores')) || [];
        
        //add 1 because guess starts at index 0 
        guess += 1;
        // Add the new score to the array
        gameScores.push(guess);
    
        // Save the updated scores back to local storage
        //game scores will be removed each time the stats page is updated
        localStorage.setItem('gameScores', JSON.stringify(gameScores));
        const scores = { scores: gameScores };

    // Use JSON.stringify to convert the object to a JSON-formatted string
        const jsonScores = JSON.stringify(scores);

// Use JSON.stringify to convert the object to a JSON-formatted string
        
        fetch("/api/scores", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: jsonScores,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
                // You can perform additional actions here if needed
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle the error appropriately
            });
    } 

    if (guess <= 9) {
        openModal1();
        saveScore(guess); 
    }
    else {
        openModal2();
        saveScore(guess);
    }
    }
});




