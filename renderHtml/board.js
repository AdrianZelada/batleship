export class Board {
    constructor(width, height) {
        console.log("boardxxxxx");
        this.width = width | 270;
        this.height = height | 270;
        this.board = document.createElement('div');
        this.board.style.width = this.width + 'px';
        this.board.style.height = this.height + 'px';
        document.body.appendChild(this.board);
    }

    add(obj) {
        this.board.appendChild(obj);
    }
}