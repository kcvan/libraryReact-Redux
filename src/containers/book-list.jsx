import React, { Component } from "react";
import { connect } from "react-redux";
// We are going to promote this component to a container, which is a 
// react component that has a direct connection to the state managed by redux.
// Containers are also called "smart-components", meaning they are linked
// to redux. We only promote components when the component cares about a
// certain piece of state. Only the most parent component that needs a 
// piece of state should be connected to redux, this is why the entire app
// is not connected to redux, only certain components.
class BookList extends Component {


  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside BookList container above.
  // mapStateToProps takes a state and returns an object we can use. This is the 
  // glue between react and redux.
  // Remeber that whenever our application state changes, the container will
  // rerender. This will trickle down to the child components as props.
  return {
    books: state.books
  };
}

// connect takes a function and a component and produces a container \/
export default connect(mapStateToProps)(BookList);
