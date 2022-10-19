import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { formatearCantidad } from "../helpers";

const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const [disponible, setDisponible] = useState(presupuesto);
  const [gastado, setGastado] = useState(0);
  const [procentaje, setProcentaje] = useState(0);

  useEffect(() => {
    const totalGastos = gastos.reduce(
      (total, gasto) => Number(gasto.cantidad) + total,
      0
    );
    const totalDisponibles = presupuesto - totalGastos;

    //Calcular el porcenataje gastado
    const nuevoPorcentaje =
      (((presupuesto - totalDisponibles) / presupuesto) * 100).toFixed(2) ?? 0;

    setTimeout(() => {
      setProcentaje(nuevoPorcentaje > 0 ? nuevoPorcentaje : 0);
    }, 400);

    setGastado(totalGastos);
    setDisponible(totalDisponibles);
  }, [gastos]);

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          value={procentaje}
          styles={buildStyles({
            pathColor: "#3B82F6",
            trailColor: "#F5F5F5",
            textColor: "#3B82F6",
          })}
          text={`${procentaje}% Gastado`}
        />
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
