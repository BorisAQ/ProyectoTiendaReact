import { URL_PRODUCTOS, URL_USUARIOS} from './api_url';


export const getUsers = () => {
  return URL_USUARIOS ;
}




export const getProductosFromDB = (setProductosFuncion) =>{
  fetch (URL_PRODUCTOS, {
    method: 'GET',
    headers : { 'Accept':'application/json', 'Content-Type': 'application/json'}
  }).then(
    response=> response.json()
  ).then (
    data=>{setProductosFuncion(data)}
  )
}

export const setProductosToDB = (productos, setProductosFuncion, history) =>
        fetch (URL_PRODUCTOS,{
          method:'PUT',
          headers : { 'Accept':'application/json', 'Content-Type': 'application/json'},
          body:JSON.stringify(productos) })
        .then (
/*          console.log("actualia")


        , (error)=>{
            if (error){
              console.log (error)
            }
          }
*/
          getProductosFromDB (setProductosFuncion)
        ).then(
          history.push ("/dashboard")
        )
