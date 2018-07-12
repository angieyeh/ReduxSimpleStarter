export function selectBook(book) {
    console.log('a book has been selected: ', book.title);
    //selectBook is an ActionCreator, it needs to return an action
    //an object with a type property and a payload
    //type describe the purpose of the action 
    //payload gives more details of the action being triggered
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}