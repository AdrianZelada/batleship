export class Space{
    constructor(x, y, occupant) {
        this.x = x;
        this.y = y;
        this.setOccupant(occupant);
    }

    setOccupant(occupant) {
        this.occupant = occupant;
        this.occupant.clickOccupant = this.click.bind(this);
        this.occupant.render(this.x, this.y);
    }

    assault(){
        const damage = this.occupant.assault();
        // this.occupant.render(this.x, this.y);
        return damage;
    }

    click() {
        this.clickEmit(this)
    }

    clickEmit() {}
}