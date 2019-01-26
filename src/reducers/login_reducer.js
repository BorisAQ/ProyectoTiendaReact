
import {ADD_LOGIN} from '../constants';


const login_reducer = (state ={}, action)=>{
  switch (action.type) {
    case ADD_LOGIN: return {usuario:action.payload.usuario, loggeado: action.payload.loggeado};
    default: return  state;

  }
      //return Object.assign({}, state, {login:state.login.concat (action.payload) })


}

export default login_reducer;
