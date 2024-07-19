"use strict"
/* -------------------------------------------------------
    OOP: OBJECTS
------------------------------------------------------- *

// Direkt obje oluşturuken PascalCase veya camelCase yapı kullanılır.
const exampleObject = {
    propertyName: 'value', // property, attribute, field
    propertyArr: [],
    propertyObject: {},

    // Obje içindeki fonksiyonlara method denir
    methodName: function() {
        return 'this is a method'
    },

    methodAlternative () {
        return 'method-2'
    },
}

console.log(exampleObject.propertyName)
console.log(exampleObject.methodName())
console.log(exampleObject.methodAlternative())

/* ------------------------------------------------- *

// Object Declaration
const Car = {
    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    isAutoGear: true,
    colors: ['red', 'white'],
    details: {
        color1: 'red',
        color2: 'white',
        engineSize: 5000
    },
    startEngine: function(param='1') {
        console.log(param)
        return 'Engine started.'
    }
}

console.log(Car.brand)
console.log(Car.colors)
console.log(Car.colors[1])
console.log(Car.details.engineSize)
console.log(Car.startEngine())
console.log(Car.startEngine('2'))

// Alternative
console.log(Car['brand'])
console.log(Car['colors'])
console.log(Car['colors'][0])
console.log(Car['details']['engineSize'])
console.log(Car['startEngine']())


/* ----------------------------------------- *

// "This" Keyword:

const Car = {
    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    isAutoGear: true,
    colors: ['red', 'white'],
    details: {
        color1: 'red',
        color2: 'white',
        engineSize: 5000
    },
    startEngine: function(param='1') {
        console.log(param)
        return 'Engine started.'
    },
    getDetails: function() {
        // console.log(this)
        // return this.details
        // return this.startEngine()
        return this.brand + ' ' + this.model + ' ' + this.year + ' ' + this.startEngine()
    },
    arrowMethod: () => {
        // Arrow function is globalScope (arrowda this çalışmaz)
        console.log(this)
    }
}

console.log(Car.getDetails())
console.log(Car.arrowMethod())


/* -------------------------------------------------- *

// Array Destructuring

const testArray = ['value0', 'value1', 'value2', 'value3', 'value4']

// Rest Operator toplayıcıdır (= işaretinin sol tarafındaki REST operatörüdür)
const [var0, var1, ...varPart] = testArray
console.log(var0, var1, varPart)


// Spread Operatörü Dağıtıcı/serğiştiricidir (= işaretinin sağ tarafındaki SPREAD operatörüdür)
const newArr = [...testArray, 'value5', 'value6']
console.log(newArr)


/* -------------------------------------------------- *

// Object Destructuring

const Car = {
    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    isAutoGear: true,
    colors: ['red', 'white'],
    details: {
        color1: 'red',
        color2: 'white',
        engineSize: 5000
    },
    startEngine: function(param='1') {
        console.log(param)
        return 'Engine started.'
    }
}

// Rest Operator
const {brand, year, model, ...others} = Car
console.log(brand, year, model, others)
console.log(others.startEngine())

// const {brand: newBrand, year, model, ...others} = Car
// console.log(newBrand, year, model, others)


// Spread Operator
// const newObj = {...Car, newKey: 'newValue'}
// console.log(newObj)


/* -------------------------------------------------- *

// Object to JSON
console.log(typeof Car, Car)
const json = JSON.stringify(Car)
console.log(typeof json, json)

// JSON to Object
const obj = JSON.parse(json)
console.log(obj)

// Array to JSON
const arr = Object.keys(Car)
// console.log(arr)
// const arr = Object.values(Car)
// console.log(arr)
// const arr = Object.entries(Car) // enumarateType
console.log(arr)
const arrToJSON = JSON.stringify(arr)
console.log(arrToJSON)

const jsonToArr = JSON.parse(arrToJSON)
console.log(typeof jsonToArr, jsonToArr)


/* -------------------------------------------------- *

// CONSTRUCTOR FUNCTIONS

const constructorFunction = function() {
    this.property = 'value'
}

// New Keyword

const carConstructor = function(brand, model, year=2000) {
    this.brand = brand
    this.model = model
    this.year = year

    this.startEngine = function() {
        return 'Engine started'
    }
}

// new ile oluşturulanobjeler PascalCase ile isimlendirilir.

const Ford = new carConstructor('Ford', 'Mustang', 1967)
console.log(Ford)

const Mercedes = new carConstructor('Mercedes', 'CLK200', 2015)
console.log(Mercedes)
console.log(Mercedes.brand)
console.log(Mercedes.startEngine())



/* -------------------------------------------------- */
