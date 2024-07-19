/* ***********************
            OOP
*********************** */

console.log("*** Object Literals ***")

// const book1 = {
//     title: "Karmazov",
//     author: "Dosto",
//     year: 1886,
//     getSummary: function() {
//         return `The ${this.title} was written by ${this.author} in ${this.year}`
//     }
// }

// console.log(book1)
// console.log(book1.getSummary())

// // Object nesnesinden mirasla bize gelmiştir
// console.log(book1.hasOwnProperty("year")) // true

// const book2 = {
//     title: "Deneme",
//     author: "Balzac",
//     year: 1889,
//     getSummary: function() {
//         return `The ${this.title} was written by ${this.author} in ${this.year}`
//     }
// }

// console.log(book2.getSummary())

// ************** Object Constructor **************

// function Book(title, author, year) {
//     this.title = title
//     this.author = author
//     this.year = year
//     // this.getSummary = function() {
//     //     return `The ${this.title} was written by ${this.author} in ${this.year}`
//     // }
// }

// Book.prototype.getSummary = function() {
//     return `The ${this.title} was written by ${this.author} in ${this.year}`
// }

// console.log(Book.prototype)

// // Book kitabından yeni bir instance (örnek) oluşturduk
// const book1 = new Book("Kasaği", "Ömer Seyfettin", 1990)
// console.log(book1)
// console.log(book1.getSummary())

// //  instance 
// const book2 = new Book("Simyacı", "Pauolo Coelho", 2000)
// console.log(book2.getSummary())

// console.log(book1.__proto__)

// // book1.price = 250
// Book.prototype.price = 0
// book1.price = 200
// book2.price = 300
// console.log(book1, book2)


// ***************** Inheritance (Kalıtım) ES-5 *****************

// // Sub-Class

// function Magazine(title, author, year, month){
//     // İnheritance
//     Book.call(this, title, author, year)
//     this.month = month
// }

// // Prototypeleri miras olarak almak için Object.create() methodu kullanılabilir
// Magazine.prototype = Object.create(Book.prototype)

// const mag1 = new Magazine("SRE", "Einstein", 1930, "Nov")
// console.log(mag1)

// // Prototype doğrudan miras olarak gelmez
// console.log(mag1.getSummary())


// ***************** ES-6 Classes  *****************

class Book {
    constructor(title, author, year ){
        this.title = title
        this.author = author
        this.year = year
        this.description = "deneme"

        // Bu alanda yazılan bir metot butun instance'ların belleğinde tek tek yer kaplar
        // this.getTitle = function () {
        //     return this.title
        // }
    }
    // Constructor dışında yazılanlar aslında prototype alanında bulunur
    getSummary(){
        return `The ${this.title} was written by ${this.author} in ${this.year}`
    }

    getAge(){
        return `${new Date().getFullYear() - this.year}`
    }
}

// Book kitabından yeni bir instance (örnek) oluşturduk
const book1 = new Book("Kasaği", "Ömer Seyfettin", 1990)
console.log(book1)
console.log(book1.getSummary())

//  instance 
const book2 = new Book("Simyacı", "Pauolo Coelho", 2000)
console.log(book2.getSummary())
console.log(book2.getAge())


// Sub-Class tanımlaması (inheritance)
class Magazine extends Book {
    constructor(title, author, year, month){
        // Book'un contructor'i çağırıldı
        super(title, author, year) // Book'un prototype'i kopyalanmış ve Magazinede yapılacak değişiklik Book'u etkilemez
        this.month = month
    }
}

// Magazine objesinin yeni bir instance
const mag1 = new Magazine("SRE", "Einstein", 1930, "Nov")
console.log(mag1)
console.log(mag1.getSummary())
console.log(mag1.getAge())

