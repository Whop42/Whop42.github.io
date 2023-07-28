class TextScramble {
  constructor(element) {
    this.element = element;
    this.characters = "10_____?";
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.element.innerText;
    const maxLength = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < maxLength; i++) {
      const fromCharacter = oldText[i] || "";
      const toCharacter = newText[i] || "";
      const startFrame = Math.floor(Math.random() * 40);
      const endFrame = startFrame + Math.floor(Math.random() * 40);
      this.queue.push({ fromCharacter, toCharacter, startFrame, endFrame });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frameCount = 0;
    this.update();
    return promise;
  }

  update() {
    let outputText = "";
    let completedCount = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { fromCharacter, toCharacter, startFrame, endFrame, char } =
        this.queue[i];
      if (this.frameCount >= endFrame) {
        completedCount++;
        outputText += toCharacter;
      } else if (this.frameCount >= startFrame) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        outputText += `<span class="dud">${char}</span>`;
      } else {
        outputText += fromCharacter;
      }
    }
    this.element.innerHTML = outputText;
    if (completedCount === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frameCount++;
    }
  }

  randomChar() {
    return this.characters[
      Math.floor(Math.random() * this.characters.length)
    ];
  }
}