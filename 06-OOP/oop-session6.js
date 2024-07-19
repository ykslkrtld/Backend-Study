"use strict"
/* -------------------------------------------------------
    OOP: CLASSES
------------------------------------------------------- */
//? OOP: Object Oriented Programming
//? DRY: Don't Repeat Yourself
//? BLUEPRINT: Taslak (Mimarların kullandığı mavi şablon kağıdı)
//? CLASS: Obje türetmek için kullanılacak şablon.
/* ------------------------------------------------------- *

// Class Declaration
// class PascalNameCase { ... }


// Class Expression
const PascalNameCase = class {

    undefinedProperty // sadece tanımlanıp bırakılabilir. (değeri undefined)
    propertyName = 'value'

    // method tanımlarken başına function yazılmaz
    methodName(){
        return 'this is a method'
    }

    // Aşağıdaki yöntem objelerde kullanılabiliyordu fakat class içinde kullanılamaz
    // methodName = function() {}
}

// Instance = Bir classdan türetilen objedir
// Instance isimleri de PascalCase
const NewObj = new PascalNameCase()
console.log(NewObj)
console.log(NewObj.methodName())

/* ------------------------------------------------------- *

// Constructer Method:

class Car {

    isRunning = false
    
    constructor(brand, model, year = 2000){
        this.brand = brand
        this.model = model
        this.year = year
    }
    runEngine() {
        this.isRunning = true
        console.log('Engine started')
        return this.isRunning
    }

    newMethod() {
        this.runEngine()
    }

}

const Ford = new Car('Ford', 'Mustang', 1967)
console.log(Ford.isRunning)
Ford.runEngine()
console.log(Ford.isRunning)

const Mercedes = new Car('Mercedes', 'A180', 2015)
console.log(Mercedes)
const Opel = new Car('Opel', 'Astra', 2012)
console.log(Opel)

/* ------------------------------------------------------- *

// Inheritance = Miras alma Başka bir classın tüm property/methodlarını devralma (parent-child)
// Super = Parent Class, This = Child Class

class Vehicle {

    vehicleIsActive = false

    constructor(vehicleType, vehicleTekerlekSayisi){
        this.vehicleType = vehicleType
        this.vehicleTekerlekSayisi = vehicleTekerlekSayisi
    }
}


class Car extends Vehicle {

    isRunning = false

    // constructor(brand, model, year = 2000){

    //     super('Car', 4)
    //     this.brand = brand
    //     this.model = model
    //     this.year = year
    // }

    constructor(brand, model, year = 2000, vehicleType){

        super(vehicleType)
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning = true
        console.log('Engine started')
        return this.isRunning
    }
}

// class Truck extends Vehicle { ... } // Vehicle tekrar extends edilebilir engel yok

// const Mercedes = new Car('Mercedes', 'A180', 2015)
// console.log(Mercedes)
// const Mercedes = new Car('Mercedes', 'A180', 2015, 'Car')
// console.log(Mercedes)


class Accessory extends Car {

    constructor(accessoryName, brand, model, year, vehicleType) {
        super(brand, model, year, vehicleType)
        this.accessoryName = accessoryName
    }
}

// const BoshClimate = new Accessory('Bosh Climate', 'Ford', 'Mustang', 1967, 'Car')
// console.log(BoshClimate)

const Mercedes = new Car('Mercedes', 'CLK300', 2020, 'Car')
console.log( Mercedes)
const BoshClimate = new Accessory('Bosh Climate', Mercedes.brand, Mercedes.model, Mercedes.year, Mercedes.vehicleType)
console.log( BoshClimate)
const Man = new Accessory('Man Climate', "Opel", "Astra", 2012, "car")
console.log( Man)


/* ------------------------------------------------------- *

//? Polymorphism: Miras aldığımız sınıfın özellik/methodlarını yeniden yazabilme.
//? - Override: Üst metodla aynı isim ve yapıda yeni bir metod yazma. (ezme / iptal etme / önceliğini alma)
//? - Overload: Üst metodla aynı isimde ama farklı yapıda (farklı adet/tip) yeni method oluşturma. (aynı anda ikisi de aktif) (JS desteklemez)


class Vehicle {

    vehicleIsActive = false

    constructor(vehicleType) {
        this.vehicleType = vehicleType
    }

    getDetails() {
        console.log('Vehicle Class getDetails()')
        return this
    }
}

class Car extends Vehicle {

    isRunning = false

    constructor(brand, model, year, vehicleType) {
        super(vehicleType)
        this.brand = brand
        this.model = model
        this.year = year

    }

    runEngine() {
        this.isRunning = true
        console.log('Engine started')
        return this.isRunning
    }

    // Override: Parent classtaki methodu aynı isimle tekrar tanımlama.
    // Override işlemi parent classtaki methodu ezer (önceliğini alır)
    getDetails() {
        console.log('Car Class getDetails()')
        super.getDetails()
    }

    //? Overload: Üstteki methodun aynı isim ama farklı parametre adet/tip ile yeniden tanımlanması.
    //? JS Desteklemez. TypeScript destekler.
    //? Çalışma prensibi: Çağrıldığı zaman parametreye göre ilgili method çalışır.
    // getDetails(parametre1, parameter2) {
    //     return this
    // }
}

const Ford = new Car('Ford', 'Mustang', 1967, 'Car')
console.log(Ford)
console.log(Ford.getDetails())

/* ------------------------------------------------------- *
//? Access Modifiers:
//? - PUBLIC: Genel erişime açık. (Parent: Yes, Child: Yes, Instance: Yes)
//? - _PROTECTED: Sadece tanımlı olduğu class ve Inherit edilen child-class erişebilir. (Parent: Yes, Child: Yes, Instance: No) (JS Desteklemez.)
//? - #PRIVATE: Sadece tanımlı olduğu class içinde erişim var. (Parent: Yes, Child: No, Instance: No)

class Vehicle {

    publicProp = 'parent-child-instance erişebilir.'
    _proctectedProp = 'parent-child erişebilir.'
    #privateProp = 'parent erişebilir.'

    vehicleIsActive = false

    constructor(vehicleType) {
        this.vehicleType = vehicleType
    }

    getDetails() {
        console.log('Vehicle Class getDetails()')
        return this
    }
}

class Car extends Vehicle {

    isRunning = false

    constructor(brand, model, year, vehicleType) {
        super(vehicleType)
        this.brand = brand
        this.model = model
        this.year = year

    }

    runEngine() {
        this.isRunning = true
        console.log('Engine started')
        console.log(this.vehicleIsActive) // public: erişebilir, protected: erişebilir, private: erişemez.
        return this.isRunning
    }

    getDetails() {
        console.log('Car Class getDetails()')
        super.getDetails()
    }
}

const Ford = new Car('Ford', 'Mustang', 1967, 'Car')
// console.log(Ford)
console.log(Ford.runEngine())
console.log(Ford.vehicleIsActive) // public: erişebilir, protected: erişemez, private: erişemez.

/* ------------------------------------------------------- *
//* Piyasa Standartı İsimlendirme:

const BUYUK_HARF_ISIMLENDIRME = Bu bir constant değişkendir. Developer olarak bunu silme, değiştirirken dikkatli ol.
const _alttanTireIleBaslayan = BU bir proctected değişkendir. Developer olarak buna dokunma (erişme bile)

/* ------------------------------------------------------- */

//? GETTER & SETTER METHODS: Görevi veri getirme (getter) ve veri güncelleme (setter) olan metodlardır.
//? "STATIC" KEYWORD: Class'dan direkt erişim. (Instance erişemez.)

class Car {

    isRunning = false
    #price = 99

    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year

    }

    runEngine() {
        this.isRunning = true
        console.log('Engine started')
        return this.isRunning
    }

    get getPrice() {
        console.log('Fiyat yazılıyor:')
        return this.#price
    }

    set setPrice(price) {
        console.log('Fiyat güncellendi.')
        this.#price = price
    }

    // Statics:

    static staticProp = 'bu bir static değerdir.'

    static staticMethod() {
        return 'bu bir static methoddur.'
    }

}

const Ford = new Car('Ford', 'Mustang', 1967)
console.log(Ford)
// console.log(Ford.price) // Private olduğu için erişilemez.
// console.log(Ford.getPrice()) // Normal Method
console.log(Ford.getPrice) // Getter methodlar bir property gibi çağrılır. (parantez yok)
// Ford.setPrice(80000) // Normal method
Ford.setPrice = 80000 // Setter methodlar bir propertyy gibi güncellenebilir.
console.log(Ford.getPrice)


//* STATICS
// Static değerlere sadece ana CLASS ile erişilebilir.
console.log( Car.staticProp )
console.log( Car.staticMethod() )
console.log( Car )
// Static özellik/metodlara instance ile erişilemez.
console.log( Ford.staticProp ) // undefined


/* ------------------------------------------------------- */
//? ABSTRACTION: Soyutlama/Modelleme (Class ile obje üretebilme. Aynı amaç için kullanılan değişken ve methodların bir class içinde yazıyor olması)
//? ENCAPCULLATION: Kapsülleme/Ayrıştırma (Kodların gizliliği, private değişkenlere erişilemiyor olması ve birbirinden bağımsız çalışmaları.)
/* ------------------------------------------------------- */

//* HAPPY CODDING :)