// create new component. this component should produce some HTML
// Take components generated HTML and put it on the page (in the DOM)
import _ from 'lodash'; 
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar.js';
import VideoList from './components/videoList.js';
import VideoPlayer from './components/videoPlayer.js';


const API_KEY = 'AIzaSyCl3syXYRfpgkvOK6J9w9PwItXdxhkdMI0';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.selectedVideo = this.selectedVideo.bind(this);
        this.videoSearch = this.videoSearch.bind(this);
        this.videoSearch('puppy');
    }

    selectedVideo(video) {
        this.setState({selectedVideo: video});
    }

    videoSearch(searchTerm) {
        YTSearch({key: API_KEY, term: searchTerm}, (videos) => {
            this.setState({ videos, selectedVideo: videos[0]});
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term); }, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoPlayer selectedVideo={this.state.selectedVideo} />
                <VideoList videos={this.state.videos} selectedVideo={this.selectedVideo} />
            </div>
        );
    }
};

ReactDOM.render(<App />, document.querySelector('.container'));
