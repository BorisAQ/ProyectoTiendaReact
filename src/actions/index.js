import {ADD_LOGIN, SET_PRODUCTOS, ADD_PRODUCTO} from '../constants';

export function addLogin(payload){
    return  { type: ADD_LOGIN, payload};
}


export function setProductos (payload){
  return  ({type:SET_PRODUCTOS , payload})
}



export function addProducto (payload){
  return  ({type:ADD_PRODUCTO , payload})
}
