import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    render() {
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}  />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.props.onSearchTermChange(this.state.term);
        }
    }
}

export default SearchBar;