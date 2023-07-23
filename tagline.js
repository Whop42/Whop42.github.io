let elems = document.getElementById("tagline").getElementsByTagName("strong");

let choices = ["programmer", "FOSS enthusiast", "linux nerd"];

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



