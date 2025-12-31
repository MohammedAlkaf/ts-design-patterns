
// Factory Use Case Example Code
// Concrete Creator
import ChairFactory, { ChairType } from './chair-factory'

const CHAIR = ChairFactory.getChair(ChairType.SmallChair)
console.log(CHAIR.getDimensions())