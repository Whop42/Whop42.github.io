let elems = document.getElementById("tagline").getElementsByTagName("strong");

let choices = ["linux nerd", "programmer", "FOSS enthusiast"];

[...elems].forEach((elem) => {
    let currentChoiceIndex = 1;

    const scrambler = new TextScramble(elem);
    
    asciiWrapper.addEventListener("mouseenter", () => {
        scrambler.setText(choices[currentChoiceIndex]);
        if(currentChoiceIndex == choices.length - 1) {
            currentChoiceIndex = 0;
        } else {
            currentChoiceIndex++;
        }
    });
})



