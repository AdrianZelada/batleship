export class DrawBlankHtml {
    constructor(board, fn) {
        this.board = board;
        this.size = 10;
        const xmlns = "http://www.w3.org/2000/svg";
        this.elem = document.createElement("div");
        this.elem.style.width = this.size+'px';
        this.elem.style.height = this.size+'px';
        this.elem.style.background = 'blue';
        this.elem.style.position = 'absolute';
        this.elem.onclick = () => {
            console.log('clicked');
            fn.click();
        }
        // this.elem.addEventListeners('click', () => {
        //     console.log('clicked');
        // });
        this.board.add(this.elem);
    }

    render(x, y) {
        console.log(x,y)
        this.elem.style.left = x*this.size+'px';
        this.elem.style.top = y*this.size+'px';

    }

    assault() {
        this.elem.style.background = 'red';
    }
}