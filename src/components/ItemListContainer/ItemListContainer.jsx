import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "../Producto/Producto";
import { getData, getCategoryData } from "../../services/asyncMocks";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { IDcategoria } = useParams();

  async function peticionProductos() {
    let respuesta = [];

    if(IDcategoria === undefined) {
      respuesta = await getData();
    }
    else {
      respuesta = await getCategoryData(IDcategoria);
    }
    setProductos(respuesta);
  }

  useEffect(() => {
    peticionProductos();
  }, []);

  return (
    <>
      <h1>Menú</h1>
      <div>
        { productos.map ( (objeto) => (
          <Item key={objeto.id} {...objeto} />
        ) ) }
      </div>
    </>
  );
}