export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property(usually all uppercase) and a 
  // payload(optional). The type describes the action. The payload 
  // is the item which the action is being acted upon.
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
};