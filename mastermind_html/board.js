function generateSecretCode() {
    const colors = ['red', 'green', 'yellow', 'blue', 'black', 'white'];
    let secretCode = [];
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * colors.length);
        secretCode.push(colors[randomIndex])
    }
}

let secretCode = generateSecretCode();
let attempts = 0;

let selectedColor;
let selectedSlot;

function selectColor(color){
    selectedColor = color;

    if (selectedSlot)
}
