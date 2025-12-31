interface Product {
    name: string
}

class CreateProduct {
    name = ''
    constructor() {}
}

class CreateProductA extends CreateProduct {
    additionalProperty: string
    constructor(additionalProperty: string) {
        super()
        this.name = 'ConcreteProductA'
        this.additionalProperty = additionalProperty
    }
}
class CreateProductB extends CreateProduct {
    constructor() {
        super()
        this.name = 'ConcreteProductB'
    }
}

class CreateProductC extends CreateProduct {
    constructor() {
        super()
        this.name = 'ConcreteProductC'
    }
}

class Creator {
    static createObject(someProperty: string) {
        if (someProperty === 'a') return new CreateProductA('additionalPropertyA')
        else if (someProperty === 'b') return new CreateProductB()
        else return new CreateProductC()
    }
}

const PRODUCT = Creator.createObject('a')
console.log(PRODUCT.name)
if (PRODUCT instanceof CreateProductA) {
    console.log(PRODUCT.additionalProperty)
}
