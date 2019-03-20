import uuid from 'uuid';
import {GET_ITEMS,ADD_ITEM,DELETE_ITEM} from '../actions/types';

const initialState = {
    items: [
      { id: uuid(), name: 'Eggs' },
      { id: uuid(), name: 'Milk' },
      { id: uuid(), name: 'Steak' },
      { id: uuid(), name: 'Banana' }
    ]
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
             return{
                 ...state //return whatever is in here 
                //i'm doing this for a reson because when we fetch from the API we're gonna change this up a little
                //but for now it's just gonna fetch this hard coded data
             }
        default:
             return state
    }

}