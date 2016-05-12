// Reducers are only ever called when an action occurs. The state in a little confusing,
// state argument is not applicaiton state, only the state this reducer is responsible for.
// We have to use switch statement in redux, cannot use if statements.
// We use state = null as default because when the application first boots up, nothing
// has been selected yet so the state will actually be undefined. redux doesn't allow
// a state to be undefined, we have to set it to null.

// This produces a new piece of application state whenever the BOOK_SELECTED action is
// triggered.
// The action is the payload in the object being returned by index.js - actions.
export default function(state = null, action) {
  switch(action.type) {
    case "BOOK_SELECTED":
      return action.payload;
    case "HARRY_SELECTED":
      alert("You selected Harry!");
      return action.payload;
      // We always want to return a fresh object, meaning we never want to mutate
      // our current state. This means we cannot do something like
      // state.title = book.title;
      // return state; 
  }
  // Our base case when we don't care about the action.
  return state 
}