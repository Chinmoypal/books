// Define the Book class
class Book {
    constructor(title, author, year, genre) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
    }

    // Method to return book information as a string
    getInfo() {
        return  `${this.title} by ${this.author}, published in ${this.year}, genre: ${this.genre}`;
    }
}

// Factory function to create a new Book
function createBook(title, author, year, genre) {
    return new Book(title, author, year, genre);
}

// Define the Library class
class Library {
    constructor() {
        this.books = []; // Initialize an empty array to store books
    }

    // Method to add a new book to the library
    addBook(book) {
        this.books.push(book);
    }

    // Method to filter books published after a given year
    filterBooksAfterYear(year) {
        return this.books.filter(book => book.year > year);
    }

    // Method to get an array of all book titles
    getAllBookTitles() {
        return this.books.map(book => book.title);
    }

    // Method to get the total number of books
    getTotalNumberOfBooks() {
        return this.books.reduce((total, book) => total + 1, 0);
    }

    // Method to calculate the average publication year of all books
    getAveragePublicationYear() {
        if (this.books.length === 0) return 0; // Avoid division by zero

        const totalYear = this.books.reduce((sum, book) => sum + book.year, 0);
        return totalYear / this.books.length;
    }
}

// Demonstration of usage

// Create an instance of Library
const myLibrary = new Library();

// Add books to the library using the factory function
const book1 = createBook("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction");
const book2 = createBook("1984", "George Orwell", 1949, "Dystopian");
const book3 = createBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Fiction");
const book4 = createBook("Brave New World", "Aldous Huxley", 1932, "Science Fiction");

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);

// Displaying the results

// Filter books published after 1950
console.log("Books published after 1950:");
console.log(myLibrary.filterBooksAfterYear(1950).map(book => book.getInfo()));

// Get all book titles
console.log("All book titles:");
console.log(myLibrary.getAllBookTitles());

// Get total number of books
console.log("Total number of books:");
console.log(myLibrary.getTotalNumberOfBooks());

// Get average publication year
console.log("Average publication year:");
console.log(myLibrary.getAveragePublicationYear());