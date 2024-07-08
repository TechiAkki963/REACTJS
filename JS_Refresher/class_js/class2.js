class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  getInfo() {
    console.log(`${this.title} by ${this.author} (${this.pages} pages)`);
  }

  read() {
    console.log(`Reading ${this.title} by ${this.author}`);
  }
}

const book = new Book("harry potter", "JK rowling", "1000");
book.getInfo();
book.read();
