import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index.js';
import { bindActionCreators } from 'redux';


class BookList extends Component {
    renderList() {
        return this.props.books.map(book => {
            return (
                <li 
                    key={book.title}
                    className="list-group-item" 
                    onClick={() => this.props.selectBook(book)}>{book.title}</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

//purpose of this function is to take our application state as an argument and return out the data which will show up as props inside this bookList container
//the glue between react and redux
//when the redux state changes (user interaction like a click or a http request), this container will instantaneously re-render with new list of books 
function mapStateToProps(state) {
    return {
        books : state.books
    };
}

//selectBook is the action creator we imported at the top 
//what bindActionCreators is doing with dispatch: whenever selectBook is called, the result should be passed to all of the reducers
//whenever selectBook action creator is called we want to make sure the result of the action flows through this dispatch function. 
//dispatch takes all these actions results and spits them to all the reducers
//antyhing returned from this function will end up as props on the bookList container. this.props.selectBook will call our action creator
function matchDispatchToProps(dispatch) {
    //takes an action creator selectBook and makes it available to be called inside the container as a prop
    return bindActionCreators({selectBook}, dispatch); 
}
//promote BookList from a component to contation - it needs to know  about  this new dispatch   method SelectBook. Makes selectBook available  as a prop in BookList
export default connect(mapStateToProps, matchDispatchToProps)(BookList);
