import { combineReducers } from 'redux';
import WeatherReducer from './reducerWeather';

// state: (state = {}) => state
const rootReducer = combineReducers({
    weather: WeatherReducer
});

export default rootReducer;
