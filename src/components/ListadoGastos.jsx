import React, { useEffect, useState } from "react";
import Gasto from "./Gasto";

const ListadoGastos = ({
  gastos,
  setGastos,
  setGastoEditar,
  eliminarGasto,
}) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos.length > 0 ? "Gastos" : "No hay gastos aún"}</h2>
      {gastos.map((gasto, i) => (
        <Gasto
          key={i}
          gasto={gasto}
          setGastoEditar={setGastoEditar}
          setGastos={setGastos}
          eliminarGasto={eliminarGasto}
        />
      ))}
    </div>
  );
};

export default ListadoGastos;
