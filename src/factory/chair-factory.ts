import SmallChair from './small-chair'
import MediumChair from './medium-chair'
import BigChair from './big-chair'
import IChair from './chair'

// Creator
export enum ChairType {
    SmallChair = 'SmallChair',
    MediumChair = 'MediumChair',
    BigChair = 'BigChair',
}

export default class ChairFactory {
    static getChair(chair: ChairType): IChair {
        if (chair == ChairType.BigChair) {
            return new BigChair()
        } else if (chair == ChairType.MediumChair) {
            return new MediumChair()
        } else {
            return new SmallChair()
        }
    }
}
