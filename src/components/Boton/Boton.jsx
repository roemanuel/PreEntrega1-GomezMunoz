import "./Boton.css";

export default function Boton ({children}) {
  return (
    <>
      <button className="btn">
        {children}
      </button>
    </>
  );
}