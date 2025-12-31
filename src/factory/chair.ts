import { Dimension } from './dimension'
// Product Interface

// A Chair Interface
interface IChair {
    height: number
    width: number
    depth: number
    getDimensions(): Dimension
}

// The Chair Base Class
export default abstract class Chair implements IChair {
    height = 0
    width = 0
    depth = 0

    getDimensions(): Dimension {
        return {
            width: this.width,
            depth: this.depth,
            height: this.height,
        }
    }
}