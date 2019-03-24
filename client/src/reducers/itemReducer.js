import uuid from 'uuid';
import {GET_ITEMS,ADD_ITEM,DELETE_ITEM,ITEMS_LOADING} from '../actions/types';

const initialState = {
    items: [],
    loading: false
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
             return{
                 ...state, //return whatever is in here 
                //i'm doing this for a reson because when we fetch from the API we're gonna change this up a little
                //but for now it's just gonna fetch this hard coded data

                items: action.payload, //after we make the request and we get the items and we get that payload 
                loading: false //set loading back to false

             }
        
        case DELETE_ITEM:
             return{
                 ...state,
                 items: state.items.filter(item => item.id !== action.payload)    
             }

        case ADD_ITEM:
             return{
                 ...state, //we use this '...' we can't actually mutate the state and we can't directly change it. because we have to basicly coppy of it
                 items: [action.payload , ...state.items]    
             }

        case ITEMS_LOADING:
             return{
                 ...state, //we use this '...' we can't actually mutate the state and we can't directly change it. because we have to basicly coppy of it
                 loading : true  
             }


        
        default:
             return state
    }

}