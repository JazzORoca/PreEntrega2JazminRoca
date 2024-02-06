import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ inicial, stock }) => {
  const [contador, setContador] = useState(inicial);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  const agregarCarrito = () => {
    alert("AGREGASTE ESTA CANTIDAD DE PRODUCTOS: " + contador);
  };

  return (
    <div className="item-count-container">
      <div className="quantity-control">
        <button
          className="btn btn-dark btn-sm"
          onClick={decrementar}
        >
          -
        </button>
        <span className="quantity">{contador}</span>
        <button
          className="btn btn-dark btn-sm"
          onClick={incrementar}
        >
          +
        </button>
      </div>
      <button
        className="btn btn-primary btn-block mt-3 mb-3"
        onClick={agregarCarrito}
        disabled={stock === 0}
        style={{color:'black', fontSize:'20px', fontFamily:'inherit', fontWeight:'bold',background:'blue'}}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;

