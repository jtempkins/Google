import axios from "axios";

export default {
// Gets all books
  getBook: function() {
    console.log("getBook")
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBookId: function(id) {
    console.log("getBookId", id)

    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log("saveBook", bookData)
    return axios.post("/api/books", bookData);
  }
};
