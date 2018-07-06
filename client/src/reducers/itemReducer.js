import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/constants';

const initialState = {
  items: [
    { id: uuid(), name: 'Bread' },
    { id: uuid(), name: 'Milk' },
    { id: uuid(), name: 'Eggs' },
    { id: uuid(), name: 'Juice' }
  ]
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state,
      }
    default:
      return state;
  }
}