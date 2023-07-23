import { Link } from "react-router-dom";
import Boton from "../Boton/Boton";
import "./Producto.css";

export default function Producto(props) {
  const { id, titulo, imagen, descripcion, precio } = props;

  return (
    <div className="item-card">
      <div className="item-card_img">
        <img src={imagen} alt="imagen"></img>
      </div>
      <div className="item-card_header">
        <h2>{titulo}</h2>
      </div>
      <div className="item-card_detail">
        <h4>$ {precio}</h4>
        <small>{descripcion}</small>
      </div>
      <Link to={`/producto/${id}`}>
        <Boton>Ver Producto</Boton>
      </Link>
    </div>
  );
}