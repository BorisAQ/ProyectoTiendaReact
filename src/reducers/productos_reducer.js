
import {SET_PRODUCTOS, ADD_PRODUCTO} from '../constants';

const eliminaDeLista =  (listado, item) => listado.filter (itemLista => itemLista.id !== item.id);

const inicializa = (productos)=>{
  return productos.map ((producto)=>{producto.cantidadSolicitada=0; producto.cantidadEvento= 0; return producto})
}

//const adicionar  = (state,producto)=>{
//  return [...state,producto]
//}


const adicionar  = (productos,producto)=>{
  if (producto.cantidadEvento<= producto.cantidad){
    producto.cantidad= producto.cantidad- producto.cantidadEvento;
    producto.cantidadSolicitada = producto.cantidadSolicitada + producto.cantidadEvento;
  }
  
  return [...eliminaDeLista(productos, producto), producto]
}

const productos_reducer = (state =[], action)=>{
  switch (action.type) {
    //case SET_PRODUCTOS: return { productos: action.payload};
    //case SET_PRODUCTOS: return  action.payload;
    case SET_PRODUCTOS: return inicializa( action.payload);
    case ADD_PRODUCTO : return adicionar (state,action.payload);
    default: return  state;

  }
      //return Object.assign({}, state, {login:state.login.concat (action.payload) })


}

export default productos_reducer;
