import React from 'react'

const Heroinicio = () => {
  return (
    <div className='container'>
<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
  <div className="col-10 col-sm-8 col-lg-6">
    <img src="hero1.jpg" className="d-block mx-lg-auto   " alt="Bootstrap Themes" width={600} height={350} loading="lazy" />
  </div>
  <div className="col-lg-6">
    <h1 className="display-5 fw-bold lh-1 mb-3">La biblioteca para interfaces de usuario web y nativas</h1>
    <p className="lead">
    React es una biblioteca de JavaScript que permite construir interfaces de usuario a partir de piezas individuales llamadas componentes. Estos componentes pueden ser desde botones hasta páginas completas, y se pueden combinar para formar pantallas, páginas y aplicaciones enteras. React es una biblioteca que permite unir componentes, pero no prescribe cómo hacer enrutamiento y obtención de datos. Para construir una aplicación completa con React, se recomienda un marco de trabajo completo como Next.js o Remix. Con React, es posible ser un desarrollador web y nativo, lo que permite a los equipos lanzar aplicaciones en múltiples plataformas sin sacrificar la experiencia del usuario. Además, React puede renderizar en el servidor utilizando Node y alimentar aplicaciones móviles utilizando React Native.
En resumen, React es una biblioteca de JavaScript que facilita la creación de interfaces de usuario interactivas y eficientes, permitiendo a los desarrolladores trabajar con componentes modulares para construir aplicaciones web y móviles.
Espero que esta información te sea útil. Si tienes alguna otra pregunta, no dudes en preguntar.

    </p>
    <div className="d-grid gap-2 d-md-flex justify-content-md-start py-4">
      <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 py-3" style={{marginLeft:"200px"}}><a href="https://es.react.dev/" style={{color:"white",textDecoration:"none"}}>Ir a sitio web de REACT</a></button>
      
    </div>
  </div>
</div>
</div>

  )
}

export default Heroinicio