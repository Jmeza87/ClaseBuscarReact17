import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Inicio from './pages/Inicio'
import Footer from './components/Footer'
import Tienda from './pages/Tienda'
import Movil from './pages/Movil'
import Categorias from './pages/Categorias'
import Laptop from './pages/Laptop'
import Buscar from './pages/Buscar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/Tienda" element={<Tienda/>} />
            <Route path="/Movil" element={<Movil/>} />
            <Route path="/Categorias/:id" element={<Categorias/>} />
            <Route path="/Buscar" element={<Buscar/>} />
            <Route path="*" element={<Inicio/>} />
        </Routes>

        <Footer/>
       
    </BrowserRouter>
    </>
  )
}

export default App
