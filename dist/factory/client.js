"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Factory Use Case Example Code
// Concrete Creator
const chair_factory_1 = require("./chair-factory");
const CHAIR = chair_factory_1.default.getChair(chair_factory_1.ChairType.SmallChair);
console.log(CHAIR.getDimensions());
