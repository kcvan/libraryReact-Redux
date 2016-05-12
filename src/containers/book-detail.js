import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deeperHarryClick } from "../actions/deeperHarryClick";

// Under the render function, we are returning early because our state is currently null,
// which redux will register as an error. Once they click a book, the state will rerender
// and we will get the book's title.
class BookDetail extends Component {
  render() {
    if(!this.props.book) {
      return <div>Select a book to the started.</div>;
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div 
        onClick={() => {
          if(this.props.book.title === "Harry Potter") {
            return this.props.deeperHarryClick();
          }  
        }
        }>
        Title: {this.props.book.title}
      </div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deeperHarryClick: deeperHarryClick }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);