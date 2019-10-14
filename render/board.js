export class Board {
    constructor(width, height) {
        console.log("board");
        this.width = width | 270;
        this.height = height | 270;
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svg.setAttribute("aria-hidden","true");
        this.svg.setAttribute('viewbox', `0 0 ${this.width} ${this.height}`);
        this.svg.setAttribute('width', `${this.width}px`);
        this.svg.setAttribute('height', `${this.height}px`);
        document.body.appendChild(this.svg);
    }

    add(obj) {
        this.svg.appendChild(obj);
    }
}