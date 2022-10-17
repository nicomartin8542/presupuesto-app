import React from "react";
import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = ({
  presupuesto,
  gastos,
  setPresupuesto,
  isvalidPresupuesto,
  setIsvalidPresupuesto,
}) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>

      {isvalidPresupuesto ? (
        <ControlPresupuesto presupuesto={presupuesto} gastos={gastos} />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isvalidPresupuesto={isvalidPresupuesto}
          setIsvalidPresupuesto={setIsvalidPresupuesto}
        />
      )}
    </header>
  );
};

export default Header;
