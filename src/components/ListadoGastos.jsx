import React from "react";
import Gasto from "./Gasto";

const ListadoGastos = ({ gastos }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos.length > 0 ? "Gastos" : "No hay gastos aún"}</h2>
      {gastos.map((gasto, i) => (
        <Gasto key={i} gasto={gasto} />
      ))}
    </div>
  );
};

export default ListadoGastos;
