class Circle {
    private radius: number
    static readonly PI = 3.14
    constructor(radius: number) {
        this.radius = radius
    }
    get area() {
        return Circle.PI * this.radius * this.radius
    }
    get circumference() {
        return 2 * Circle.PI * this.radius
    }
}

const circle1 = new Circle(10)
const circle2 = new Circle(20)

console.log('Area of circle1: ' + circle1.area)
console.log('Area of circle2: ' + circle2.area)
console.log('Circumference of circle1: ' + circle1.circumference)
console.log('Circumference of circle2: ' + circle2.circumference)
