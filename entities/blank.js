import {FactoryRender} from "../render";

export class Blank {
    constructor() {
        this.el = FactoryRender['blank'](this);
    }

    render(x, y) {
        this.el.render(x, y);
    }

    assault() {
        this.el.assault();
        return 0;
    }

    click() {
        this.clickOccupant();
    }
    clickOccupant() {}

}