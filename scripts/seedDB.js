const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = {
  authors: ["Tom Clancy"],
  description: "The Soviet Union and United States Star Wars race escalates, Colonel Mikkail Filtov, America's agent in the Kremlin, is about to be betrayed, and only Jack Ryan can save Filtov--and world peace.",
  image: "http://books.google.com/books/content?id=Vj-NDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  link: "http://books.google.com/books?id=TKuJDQAAQBAJ&printsec=frontcover&dq=The+Hunt+for+Red+October&hl=&cd=1&source=gbs_api",
  title: "The Hunt for Red October",
}

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
