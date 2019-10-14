import {DrawBlank} from "./blank.js";
import {DrawShip} from "./ship.js";
import {Board} from "./board.js";

const FactoryDefaultRender = {};
export const FactoryRender = {
    blank: (fn) => {
        return new FactoryDefaultRender.blank(FactoryDefaultRender.board,fn);
    },

    ship: (fn) => {
        return new FactoryDefaultRender.ship(FactoryDefaultRender.board,fn);
    }
};

export const BuildRender = function (obj) {
    if (obj) {
        FactoryDefaultRender.board = new obj.board();
        FactoryDefaultRender.blank = obj.blank;
        FactoryDefaultRender.ship = obj.ship;
    } else {
        FactoryDefaultRender.board = new Board();
        FactoryDefaultRender.blank = DrawBlank;
        FactoryDefaultRender.ship = DrawShip;
    }
};