$(document).ready(function() {

    let slotDefault = "rgba(0, 0, 0, 0) linear-gradient(to right top, rgb(53, 50, 50), rgb(128, 128, 128)) repeat scroll 0% 0% / auto padding-box border-box";

    let selectedColor = '';

    let guess = 0

    let tempArray =  $(".cp-row");
    let guessArray = [];
    for(let i = 10; i >= 0; i--) {
        guessArray.push(tempArray[i]);
    }
    
    

    $(".peg").click(function() {

        $(".peg").css("border", "thin black solid");
        $(this).css("border", "thick black solid");
        // let peg = ($(this).parent())[0];
        selectedColor = $(this).css("background");
        // $(this).css("border", "thick black solid");
        console.log(selectedColor)
        
    });
    
    $(".cp-slot").click(function() {
        if ($(this).css("background") == slotDefault) {
            $(this).css("background", selectedColor);
        }
        else if ($(this).css("background") !== slotDefault) {
            $(this).css("background", slotDefault);
        }
    });

});

// function generateSecretCode() {
//     const colors = ["red", 'green', 'yellow', 'blue', 'black', 'white'];
//     let secretCode = [];
//     for (let i = 0; i < 4; i++) {
//         const randomIndex = Math.floor(Math.random() * colors.length);
//         secretCode.push(colors[randomIndex])
//     }
//     console.log(secretCode)
// }




// let selectedColor;
// let selectedSlot;

// function selectColor(color){
//     selectedColor = color;

//     if (selectedSlot) {
//         updateSlotColor(selectedSlot, selectedColor);
//         selectedSlot = null;
//     }
// }

// function selectSlot(slotIndex) {
//     selectedSlot = slotIndex;
// }

// function updateSlotColor(slotIndex, color) {
//     const slot = document.getElementById('try-${attempts}-${slotIndex}');
//     slot.style.backgroundColor = color;
// }