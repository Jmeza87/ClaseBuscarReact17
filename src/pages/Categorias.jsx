import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Cardproductos from '../components/Cardproductos';


const API = "https://dummyjson.com/products/category/"

const Categorias = () => {

    const [datos, setDatos] = useState([])
    const params = useParams()
    let id=params.id;

    const getDatos = async () =>{
        const URI=API+id ;
        try {
          const response = await fetch(URI);
          const data = await response.json();
          console.log(data)
          setDatos(data.products);
        } catch (error) {
          console.error(error)
        }
      };

      useEffect(()=>{
        getDatos();
      },[id]);

    


  return (
    <>
    <div className="container">
      <h1 className="text-center py-3">
        Todos los Productos ({datos.length})
      </h1>
      <div className="row">
        {datos && datos.map((item,index) => (
              
              <Cardproductos key={index} item={item}/>
            

          ))}
      </div>
    </div>
  </>
  )
}

export default Categorias