import React, { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsvalidPresupuesto,
}) => {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (e) => {
    e.preventDefault();
    if (!presupuesto || isNaN(presupuesto) || presupuesto <= 0) {
      setMensaje("No es un presupuesto valido");
      return;
    }

    setMensaje("");
    setIsvalidPresupuesto(true);
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label htmlFor="nuevo-presupuesto">Definir presupuesto</label>
          <input
            type="number"
            min="0"
            step="0.01"
            className="nuevo-presupuesto"
            id="nuevo-presupuesto"
            placeholder="Añade tu presupuesto"
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        </div>
        <input type="submit" value="Añadir" />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
