import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/googleMap';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp - 273);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const {lat, lon} = cityData.city.coord;
        
        return (
            <tr>
                <td><GoogleMap lat={lat} lon={lon}/></td>
                <td><Chart key={`${name}-${0}`} weatherData={temps} units="C"></Chart></td>
                <td><Chart key={`${name}-${1}`} weatherData={pressure} unit="hPa" ></Chart></td>
                <td><Chart key={`${name}-${2}`} weatherData={humidity} units="%"></Chart></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return {
        weather
    };
}

export default connect(mapStateToProps)(WeatherList);