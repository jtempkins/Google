import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import SavedResult from "../components/SavedResult";

// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class SaveBook extends Component {
  state = {
    savedBooks: [],
  };

  componentDidMount() {
    API.getBook()
      .then(res => this.setState({ savedBooks: res.data }))
      .catch(err => console.log(err))
    }

  handleDeleteButton = id => {
    API.deleteBook(id)
    .then(res => this.componentDidMount())
    .catch(err => console.log(err))
  }


  render() {
    return (
      <Container fluid className="container">
        <Jumbotron />
        <Container>
        <SavedResult savedBooks={this.state.savedBooks} 
        handleDeleteButton={this.handleDeleteButton} />
        </Container>
      </Container>
    )
  }
}

export default SaveBook
