let colors = [
    "#9227c4",
    "#1d841b",
    "#b54329",
    "#2668bf"
]

function adjust(color, amount) {
    // thanks to @supersan with https://stackoverflow.com/a/57401891
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}

function changeColor() {
    let index = Math.floor(Math.random() * colors.length);
    let currentAccent = document.documentElement.style.getPropertyValue("--accent-color");
    if(colors[index] != currentAccent) {
        document.documentElement.style.setProperty("--accent-color", colors[index]);
        document.documentElement.style.setProperty("--accent-color-darker", adjust(colors[index], -20));
    }
}

changeColor();