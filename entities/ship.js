import {FactoryRender} from "../render";

export class Ship {
    constructor() {
        this.damage = 0;
        this.el = FactoryRender['ship'](this);
    }

    render(x, y) {
        this.el.render(x, y);
    }

    assault() {
        this.damage = 1;
        this.el.assault();
        return this.damage;
    }

    click() {
        this.clickOccupant();
    }

    clickOccupant() {}
}