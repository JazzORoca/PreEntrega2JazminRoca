import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ producto }) => {
  return (
    <div className="container mt-4">
      <div className="card" style={{ maxWidth: '400px', margin: 'auto' }}>
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="card-img-top img-fluid rounded"
          style={{ maxWidth: '100%', height: 'auto' }} // Ajusta el tamaño de la imagen aquí
        />
        <div className="card-body">
          <h1 className="card-title" style={{ fontFamily: 'sans-serif', fontSize: '24px', fontWeight: 'bolder', textAlign: 'center' }}>
            {producto.nombre}
          </h1>
          <h3 className="card-text" style={{ fontFamily: 'sans-serif', fontWeight: 'bolder', textAlign: 'center' }}>
            Precio: ${producto.precio}
          </h3>
          <h3 className="card-text" style={{ fontFamily: 'sans-serif', fontWeight: 'bolder', textAlign: 'center' }}>
            Stock: {producto.stock}
          </h3>
          <p className="card-text" style={{ fontFamily: 'sans-serif', fontWeight: 'bolder', textAlign: 'center' }}>
            {producto.descripcion}
          </p>

          <ItemCount
            inicial={1}
            stock={producto.stock}
            style={{
              marginTop: '10px', // Ajusta el margen superior del contador según tus preferencias
              // Otros estilos según sea necesario
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;



