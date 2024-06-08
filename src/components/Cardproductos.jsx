import React from 'react'
import Detalles from './Detalles';

const Cardproductos = ({item}) => {
  return (
    <>
      <div className="col-sm-6 col-md-4 col-lg-3 mb-4 text-black">
        <div className="card h-100">
          <div className="card-header">
            <img src={item.thumbnail} alt="" className="img-fluid" />
          </div>

          <div className="card-body text-center">
            <p>{item.title}</p>

            <p className="text-danger">{item.stock}</p>
            <p className="text-danger">{item.price}$</p>
          </div>

          <div className="card-footer text-center">
            <a href="#" className="btn btn-info" data-bs-toggle="modal" data-bs-target={`#${item.id}`}>
              Ver detalles
            </a>
          </div>
        </div>
      </div>
      <Detalles key={item.id} item={item} />

    </>

  );
}

export default Cardproductos