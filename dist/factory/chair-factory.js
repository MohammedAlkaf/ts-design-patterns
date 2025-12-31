"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChairType = void 0;
const small_chair_1 = require("./small-chair");
const medium_chair_1 = require("./medium-chair");
const big_chair_1 = require("./big-chair");
// Creator
var ChairType;
(function (ChairType) {
    ChairType["SmallChair"] = "SmallChair";
    ChairType["MediumChair"] = "MediumChair";
    ChairType["BigChair"] = "BigChair";
})(ChairType || (exports.ChairType = ChairType = {}));
class ChairFactory {
    static getChair(chair) {
        if (chair == ChairType.BigChair) {
            return new big_chair_1.default();
        }
        else if (chair == ChairType.MediumChair) {
            return new medium_chair_1.default();
        }
        else {
            return new small_chair_1.default();
        }
    }
}
exports.default = ChairFactory;
