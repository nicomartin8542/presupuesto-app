import { useEffect, useState } from "react";
import { formatearCantidad } from "../helpers";

const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const [disponible, setDisponible] = useState(presupuesto);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastos = gastos.reduce(
      (total, gasto) => Number(gasto.cantidad) + total,
      0
    );
    const totalDisponibles = presupuesto - totalGastos;

    setGastado(totalGastos);
    setDisponible(totalDisponibles);
  }, [gastos]);

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica aqui</p>
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
        </p>
        <p>
          <span>Disponible: </span> {formatearCantidad(disponible)}
        </p>
        <p>
          <span>Gastado: </span> {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
