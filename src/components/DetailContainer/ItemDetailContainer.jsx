import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductData } from "../../services/asyncMocks";

export default function ItemDetailContainer() {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  async function requestProducto() {
    const respuesta = await getProductData(id);
    setProducto(respuesta);
  }

  useEffect(() => {
    requestProducto();
  }, []);

  return (
    <>
      <div>
        <img width={800} src={producto.imagen}></img>
      </div>
      <div>
        <h1>{producto.titulo}</h1>
        <p>Categoría: {producto.categoria}</p>
        <p>${producto.precio}</p>
        <h2>{producto.descripcion}</h2>
      </div>
    </>
  );
};