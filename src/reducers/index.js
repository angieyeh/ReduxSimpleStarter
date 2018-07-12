import { combineReducers } from 'redux';
import BooksReducer from './reducerBooks.js';
import ActiveBook from './reducerActiveBook.js';

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook
});

// state: (state = {}) => state
export default rootReducer;
