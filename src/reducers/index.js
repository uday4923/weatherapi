import { combineReducers } from 'redux';
import Weather from './reduce_weather';

const rootReducer = combineReducers({
  weather: Weather
});

export default rootReducer;
