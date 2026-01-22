class Books{
    #listOfBooks = [];
    constructor(){
        this.#listOfBooks = this.#listOfBooks;
    }

    createBook(genre,pages,author,read){
        const newBook = new Book(genre,pages,author,read);
        this.#listOfBooks.push(newBook);
    }

    displayBook(){
        for (const item of this.#listOfBooks){
            console.log(item);
        }
    }



}

class Book{
    constructor(genre,pages,author,read){
        this.genre = genre;
        this.pages = pages;
        this.author = author;
        this.read = read;
        this.id = crypto.randomUUID;
    }
}