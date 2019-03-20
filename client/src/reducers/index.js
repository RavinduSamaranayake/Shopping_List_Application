import {combineReducers} from 'redux'; 
import itemReducer from './itemReducer';

export default combineReducers({  //create a single reducer using multiple reducers
    item:itemReducer
});
