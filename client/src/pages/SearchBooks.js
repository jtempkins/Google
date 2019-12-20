import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult"


class SearchBooks extends Component {
  state = {
    search: "",
    books: [],
    error: "",
    message: ""
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    if (this.state.search) {
      API.getGoogleSearchBooks(this.state.search)
        .then(res => {
          if (res.data.item === "error") {
            throw new Error(res.data.items);
        }

        else {
            // store response in a array
            let results = res.data.items
            //map through the array 
            results = results.map(result => {
              //store each book information in a new object 
              result = {
                key: result.id,
                id: result.id,
                title: result.volumeInfo.title,
                author: result.volumeInfo.authors,
                description: result.volumeInfo.description,
                image: result.volumeInfo.imageLinks.thumbnail,
                link: result.volumeInfo.infoLink
              }
              return result;
            })
            this.setState({ books: results, error: "" })
          }
        })
        .catch (err => this.setState({ error: err.items }));
  }
}

  handleSavedButton = event => {
    // console.log(event)
    event.preventDefault();
    console.log(this.state.books)
    let savedBooks = this.state.books.filter(book => book.id === event.target.id)
    savedBooks = savedBooks[0];
    API.saveBook(savedBooks)
      .then(this.setState({ message: alert("Your book is saved") }))
      .catch(err => console.log(err))
  }


  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>What Books Should I Read?</h1>
        </Jumbotron>
        <Container>
          <Row>
            <Col size="md-12">
              <SearchForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>
        </Container>

        <Container>
          <SearchResult books={this.state.books} handleSavedButton={this.handleSavedButton} />
        </Container>
      </Container>
    )
  }
}

export default SearchBooks
