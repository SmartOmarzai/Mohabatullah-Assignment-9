class Book {
    constructor(name, writer, number_of_page) {
        this.name = name;
        this.writer = writer;
        this.number_of_page = number_of_page;
    }
}

const myBook = new Book('Correction of the hearts', 'Khalid bin Omar', 200);
console.log(myBook);