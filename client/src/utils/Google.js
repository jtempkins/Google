import axios from "axios";

export default {
    // Get book from google search 
    getGoogleSearchBooks: function(query) {
      console.log("getGoogleSearchBooks", query)
      return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
  }
}