let canvas = document.getElementById('scrolling-background');
const context = canvas.getContext("2d");

const alphabet = "101";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fontSize = 10;
const columns = canvas.width/fontSize;

const rainDrops = Array.from({ length: columns }).fill(canvas.height);

// for( let x = 0; x < columns; x++ ) {
//     rainDrops[x] = 1;
// }


let asciiWrapper = document.getElementById("ascii-hover");
let isHovered = false;
asciiWrapper.addEventListener("mouseenter", () => {
    isHovered = true;
})
asciiWrapper.addEventListener("mouseleave", () => {
    isHovered = false;
})

const draw = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#898889';
    if(isHovered) {
        context.fillStyle = getComputedStyle(document.body).getPropertyValue("--accent-color-darker"); 
    }
    context.font = fontSize + 'px monospace';

    for(let i = 0; i < rainDrops.length; i++)
    {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        
        context.fillText(text, rainDrops[i]*fontSize, i*fontSize);

        if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.996){
            rainDrops[i] = 0;
        }

        rainDrops[i]++;
    }
};
let int = setInterval(draw, 20);