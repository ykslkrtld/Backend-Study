class Book {
    // Private Property
    #id = "123456"
    constructor(title, author, year ){
        this.title = title
        this.author = author
        this.year = year
        this.description = "deneme"

    }
    getSummary(){
        return `The ${this.title} was written by ${this.author} in ${this.year}`
    }

    getAge(){
        return `${new Date().getFullYear() - this.year}`
    }

    setPrice(price){
        const taxRate = 1.1
        this.price = Math.trunc(price * taxRate)
    }

    getId(){
        return this.#id
    }

    setId(id){
        this.#id = id
        
    }
}

class Magazine extends Book {
    constructor(title, author, year, month){
        super(title, author, year) 
        this.month = month
    }

    setPrice(price, taxRate){
        this.price = Math.trunc(price * taxRate)
    }
}

const book1 = new Book("SRE", "Einstein", 1930)

const mag1 = new Magazine("SRE", "Einstein", 1930, "Nov")
console.log(mag1)
console.log(mag1.getSummary())
console.log(mag1.getAge())


mag1.setPrice(100, 1.2)
console.log(mag1)

console.log(book1.getId())
console.log(book1.setId("4444"))
console.log(book1.getId())
