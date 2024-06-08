import React, { useEffect, useState } from 'react'
import Cardproductos from '../components/Cardproductos';


const API='https://dummyjson.com/products?limit=20&skip=';




const Tienda = () => {

    const [datos, setDatos] = useState([])
   
    const [skip, setSkip] = useState(0);
    const [total , setTotal] = useState(0);

    const getDatos = async () =>{

      const URI = API + skip;
      
          try {
          
          const response = await fetch(URI);
          const data = await response.json();
          console.log(data)
          setDatos(data.products);
          setTotal(data.total);
        } catch (error) {
          console.error(error)
        }
      };

      useEffect(()=>{
        getDatos();
      },[skip]);

function regresar(){
  if (skip >= 10){
    setSkip(skip - 10)
  }

}

  return (
    <>
      <div className="container">
        <h1 className="text-center py-3">
          Todos los Productos ({datos.length}) Total Productos : ({total})
          <div className="d-flex justify-content-evenly align-content-center  text-black mb-3 p-2 alert alert-dark">

            <p className="lead m-0">Pagina {Math.floor(skip / 10) + 1} de {Math.ceil(total / 10)}</p>

            <nav className="">
              <ul className="pagination m-0">
                <li className="page-item">
                  <a className="page-link" href="#" onClick={() => regresar()}>&lt;&lt;
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    {Math.floor(skip / 20) + 1}
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#"
                    onClick={() => {
                      if (skip + 20 < total) {
                        setSkip(skip + 20);
                      }
                    }}
                  >
                    &gt;&gt;
                  </a>
                </li>
              </ul>
            </nav>

          </div>
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