let canvas = document.getElementById('scrolling-background');
const context = canvas.getContext("2d");

const alphabet = "101";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fontSize = 10;
const columns = canvas.width/fontSize;

const rainDrops = Array.from({ length: columns }).fill(canvas.height);

const asciiWrapper = document.getElementById("ascii-hover");

isHovered = false;
if(asciiWrapper != null) {
    asciiWrapper.addEventListener("mouseenter", () => {
        isHovered = true;
    })
    asciiWrapper.addEventListener("mouseleave", () => {
        isHovered = false;
    })
}

context.fillStyle = 'rgba(0, 0, 0, 0.05)';
context.fillRect(0, 0, canvas.width, canvas.height);
context.fillStyle = '#898889';

function drawStuff() {
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
}

self.window.addEventListener('resize', resizeCanvas, false);
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
                
    /**
     * Your drawings need to be inside this function otherwise they will be reset when 
     * you resize the browser window and the canvas goes will be cleared.
     */
    drawStuff(); 
  }

const draw = () => {
    drawStuff();
};
let int = setInterval(draw, 20);