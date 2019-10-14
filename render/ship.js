export class DrawShip {
    constructor(board, fn) {
        this.board = board;
        this.size = 10;
        const xmlns = "http://www.w3.org/2000/svg";
        this.elem = document.createElementNS(xmlns, "rect");
        this.elem.setAttributeNS(null,"width",this.size);
        this.elem.setAttributeNS(null,"height",this.size);
        this.elem.setAttributeNS(null,"fill", "black");
        this.elem.onclick = () => {
            console.log('clicked ship');
            fn.click();
        }
        // this.elem.addEventListeners('click', () => {
        //     console.log('clicked');
        // });
        this.board.add(this.elem);
    }

    render(x, y) {
        this.elem.setAttributeNS(null,"x", x*this.size);
        this.elem.setAttributeNS(null,"y", y*this.size);
    }

    assault() {
        this.elem.setAttributeNS(null,"fill", "white");
    }
}