import axios from 'axios';  
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './constants';

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get('/api/items') //this is the backend part where we make GET request
    .then(res => dispatch({
      type: GET_ITEMS,
      payload: res.data
    }))
}

export const addItem = newItem => {
  return {
    type: ADD_ITEM,
    payload: newItem
  };
}

export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
}

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}