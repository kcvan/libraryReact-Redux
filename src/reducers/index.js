import { combineReducers } from 'redux';
import BooksReducer from "./reducer_books";
import ActiveBookReducer from "./reducer_active_book";

// combineReducers is the mapping of our state. These end up as keys in our global
// state that we can reference. 
const rootReducer = combineReducers({
  books: BooksReducer
  activeBook: ActiveBook
});

export default rootReducer;
