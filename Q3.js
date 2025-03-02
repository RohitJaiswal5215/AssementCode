function BookCollection(name){
    this.name = name
    this.books = []
  }
    BookCollection.prototype.addBook = function(book){
      if(book && book.title && book.author && book .year && book.genre)
  {
      this.books.push(book)
  }
  else{
    console.error("Invalid")
  } 
  }
  
  BookCollection.prototype.findBooksByAuthor = function(author){
      return this.books.filter(book => book.author == author)
  }
  
  BookCollection.prototype.getStatistics = function() {
    const total = this.books.length
    const author = [...new Set(this.books.map(book => book.author))]
    const genre = [...new Set(this.books.map(book => book.genre))]
  }
  
    return {
      total,
      author: author.length,
      genre : genre.length
  }
  
  
  const myBooks = new BookCollection("classic Literature")
  
  myBooks.addBook({
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925,
          genre: "Fiction"
    }); 
  
  myBooks.addBook({
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        genre: "Fiction"
    });