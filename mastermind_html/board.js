$(document).ready(function() {

    //colors: 
    let R = "linear-gradient(to top right, red, rgb(168, 121, 121))"
    let G = "linear-gradient(to top right, rgb(5, 107, 5), rgb(121, 168, 121))"
    let Y = "linear-gradient(to top right, rgb(168, 168, 16), rgb(240, 240, 169))"
    let Bu = "linear-gradient(to top right, rgb(0, 0, 195), rgb(121, 121, 168))"
    let Ba = "linear-gradient(to top right, black, rgb(112, 111, 111))"
    let W = "linear-gradient(to top right, rgb(97, 96, 96), white)"

    let slotDefault = "rgba(0, 0, 0, 0) linear-gradient(to right top, rgb(53, 50, 50), rgb(128, 128, 128)) repeat scroll 0% 0% / auto padding-box border-box";
    let selectedColor = '';
    let guess = 0
    $(".submit").hide();
    let pegCount = 0;
    let isSelected = false;
    let secretCode = makeSecretCode();


    let tempArray =  $(".cp-row");
    let guessArray = [];
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
        // console.log(secretCode);
        let clues = giveClues();
        
        guess++;
        for(let i = 0; i < 4; i++) {
            $(`#g-${guess}-${i}`).addClass("active");
        }
        $(".submit").hide();
        
    })


    $(".peg").click(function() {

        $(".peg").css("border", "thin black solid");
        $(this).css("border", "thick black solid");
        // let peg = ($(this).parent())[0];
        selectedColor = $(this).css("background");
        // $(this).css("border", "thick black solid");
        // console.log(selectedColor)
        
    });
    
    $(".cp-slot").click(function() {
        if($(this).hasClass('active')) {
            if ($(this).css("background") == slotDefault) {
                $(this).css("background", selectedColor);
                let coord = $(this).attr("id");
                updateMasterArray(selectedColor, coord);
                pegCount++;
                if(pegCount === 4) {
                    $(".submit").show();
                    pegCount = 0;
                }
            }
            else if ($(this).css("background") !== slotDefault) {
                $(this).css("background", slotDefault);
                pegCount--;
        }}
    });

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
    //   console.log(masterArray);
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
                clues.push(1);
                secretArray[i] = -1;
                masterArray[guess][i] = -2;
            }
        }
        //white peg check
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (masterArray[guess][i] === secretArray[j]) {
                    clues.push(2);
                    secretArray[j] = -1;
                    masterArray[guess][i] = -2;
                }
            }
        console.log(clues);
        return clues;    
        }
    }
});

