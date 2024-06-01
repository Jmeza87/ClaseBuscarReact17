import React, { useEffect, useState } from 'react'
import Cardproductos from '../components/Cardproductos';


const API='https://dummyjson.com/products?limit=16';




const Tienda = () => {

    const [datos, setDatos] = useState([])

    const getDatos = async () =>{
        try {
          const response = await fetch(API);
          const data = await response.json();
          console.log(data)
          setDatos(data.products);
        } catch (error) {
          console.error(error)
        }
      };

      useEffect(()=>{
        getDatos();
      },[]);



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
  );
} 


export default Tienda