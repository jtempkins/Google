import React from "react";
// import "./style/css";

// This file exports the Input, TextArea, and FormBtn components

const SearchForm = props => {
  return (
    <form>
      <div className="form-group">
        <label className="BookSearchLabel"><h3>Search For A Book</h3></label>
        <input className="col=12 form-control"
          value={props.search}
          type="text"
          name="searchBook"
          placeholder="Enter Book Name"
          onChange={props.handleInputChange}
        />
      </div>
      <button type="submit" className="submitBnt btn btn-primary" onClick={props.handleFormSubmit}>
        Submit
      </button>
    </form>
  )
}

export default SearchForm