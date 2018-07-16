import React, { Component } from 'react';
// ref is a direct REFERENCE to an html element that has been rendered to the page 
// this.refs.map will give me a direct reference to the html element for the map 
class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12, 
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        }); 
    }
    render() {
        return <div ref="map" />
    }
}

export default GoogleMap;