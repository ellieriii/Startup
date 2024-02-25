$(document).ready(function() {

    let selectedColor = '';

    $(".peg").click(function() {

        $(".peg").css("border", "thin black solid");
        $(this).css("border", "thick black solid");
        // let peg = ($(this).parent())[0];
        selectedColor = $(this).css("background");
        // $(this).css("border", "thick black solid");
        console.log(selectedColor)
        
    });

});



// generateSecretCode() {
//     const colors = ["red", 'green', 'yellow', 'blue', 'black', 'white'];
//     let secretCode = [];
//     for (let i = 0; i < 4; i++) {
//         const randomIndex = Math.floor(Math.random() * colors.length);
//         secretCode.push(colors[randomIndex])
//     }
// }

// let secretCode = generateSecretCode();
// console.log(secretCode)
// let attempts = 0;

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