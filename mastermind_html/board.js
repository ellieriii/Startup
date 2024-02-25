$(document).ready(function() {

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
    
    $(".submit").click(function() {

        $(".active").removeClass("active");
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
        console.log(selectedColor)
        
    });
    
    $(".cp-slot").click(function() {
        if($(this).hasClass('active')) {
            if ($(this).css("background") == slotDefault) {
            $(this).css("background", selectedColor);
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
        const colors = ["R", "G", "Y", "Bu", "Ba", "W"];
        let secretCode = []
        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * colors.length);
            secretCode.push(colors[randomIndex]);
        }
        return secretCode;
    }

});

