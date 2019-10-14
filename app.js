import {Blank} from './entities/blank.js';
import {Ship} from './entities/ship.js';
import {Space} from "./entities/space.js";
import {Board} from "./renderHtml/board.js";
import {DrawBlank} from "./renderHtml/blank.js";
import {DrawShip} from "./renderHtml/ship.js";
import {BuildRender} from "./render";

// const sizeMap = 10;

export class Game {
    constructor(sizeMap, configRender){
        // if(configRender) {
            BuildRender(configRender)
        // }
        this.map = [];
        for (let i = 0; i < sizeMap ; i++) {
            const row = [];
            for (let j = 0; j < sizeMap; j++) {
                const occupant = new Blank();
                const space = new Space(i, j, occupant);
                space.clickEmit = this.clickSpace;
                row.push(space);
            }
            this.map.push(row);
        }

        this.generateOtherOccupants(10);
    }

    clickSpace(space) {
        console.log(space);
        space.assault();
    }

    generateOtherOccupants(num, count = 0, spaceOccupents = []) {
        if (num > count) {
            const x = this.numberRandom();
            const y = this.numberRandom();
            const key = `${x}_${y}`;
            if (spaceOccupents.indexOf(key) !== -1) {
                this.generateOtherOccupants(num, count, spaceOccupents);
            } else {
                spaceOccupents.push(key);
                const ship = new Ship();
                this.map[x][y].setOccupant(ship);
                this.generateOtherOccupants(num, count+1, spaceOccupents);
            }
        }

    }

    numberRandom() {
        return Math.floor(Math.random() * this.map.length);
    }
}


const game = new Game(10);
// const game = new Game(10, {
//     board: Board,
//     blank: DrawBlank,
//     ship: DrawShip
// });