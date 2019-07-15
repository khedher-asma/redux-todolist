import { createStore, combineReducers } from 'redux';
import inputReducer from './reducers/inputReducer';
import mainReducer from './reducers/mainReducer'

const store = createStore(combineReducers({input:inputReducer,main:mainReducer}), window.devToolsExtension && window.devToolsExtension());
//combineReducers():fct
export default store;