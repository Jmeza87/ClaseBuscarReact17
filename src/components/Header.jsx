import React, { useState } from 'react'
import logo from '../assets/logo.jpg'
import { Link, useNavigate } from 'react-router-dom'
import Filtrocategoria from './Filtrocategoria'

const Header = () => {

    const [inputValue, setInputValue] = useState('');
    const manejoBuscar = (event) => {
      setInputValue(event.target.value);
      console.log(inputValue)
    };


    const navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();
      navigate('/Buscar', {
        state: inputValue,
      });	
      
    };










  return (
    <nav className="navbar navbar-expand-lg bg-black p-2" data-bs-theme="dark">
    <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src={logo} alt="" width={90}  /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link to="/inicio" className="nav-link active" aria-current="page" href="#">Inicio</Link>
            </li>
            
            <li className="nav-item">
                <Link to="/Tienda" className="nav-link active" aria-current="page" href="#">Tienda</Link>
            </li>

            <li className="nav-item">
                <Link to="/Movil" className="nav-link active" aria-current="page" href="#">Movil</Link>
            </li>

            <li className="nav-item">
                <Link to="/Laptop" className="nav-link active" aria-current="page" href="#">Laptop</Link>
            </li>

                       
           <li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Categoria
  </a>
  <ul className="dropdown-menu">
    <Filtrocategoria/>
  </ul>
</li>

           
        </ul>
        <form className="d-flex" role="search" onSubmit={handleSubmit} >
            <input value={inputValue} onChange={manejoBuscar} className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Ok</button>
        </form>
        </div>
    </div>
    </nav>

  )
}

export default Header