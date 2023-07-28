const elems = document.getElementById("tagline").getElementsByTagName("strong");
const hoverme = document.getElementById("hoverme");

let asciiWrapper = document.getElementById("ascii-hover");
const choices = ["programmer", "linux nerd", "1337 h4x0r"];

[...elems].forEach((elem) => {
    let currentChoiceIndex = 1;

    const scrambler = new TextScramble(elem);
    
    asciiWrapper.addEventListener("mouseenter", () => {
        hoverme.style.opacity = 0.0;
        scrambler.setText(choices[currentChoiceIndex]);
        if(currentChoiceIndex == choices.length - 1) {
            currentChoiceIndex = 0;
        } else {
            currentChoiceIndex++;
        }
    });
})