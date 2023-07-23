import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/" className="logo">Boom Burger</Link>
      <ul className="menu">
        <li><Link to="/categoria/hamburguesas">Hamburguesas</Link></li>
        <li><Link to="/categoria/papas">Papas Fritas</Link></li>
      </ul>
      <CartWidget />
    </nav>
  )
}