import {createStore,applyMiddleware,compose} from 'redux'; //compose is a wrappingup applymiddleware
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer,initialState,compose(
applyMiddleware(...middleware),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //setting redux devtools

));

export default store;