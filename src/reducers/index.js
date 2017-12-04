import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';


//tie reducers together, reducers each manage a state
const rootReducer = combineReducers({
  weather : WeatherReducer,
  
});

export default rootReducer;
