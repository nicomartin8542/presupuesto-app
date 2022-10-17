import React from "react";
import IconoAhorro from "../img/icono_ahorro.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoCasa from "../img/icono_casa.svg";
import Iconosalud from "../img/icono_salud.svg";
import Iconoocio from "../img/icono_ocio.svg";
import Iconosuscripciones from "../img/icono_ahorro.svg";
import { formatearCantidad } from "../helpers";

const disccionarioIconos = {
  ahorro: IconoAhorro,
  comida: IconoComida,
  casa: IconoGastos,
  gastos: IconoCasa,
  ocio: Iconosalud,
  salud: Iconoocio,
  suscripciones: Iconosuscripciones,
};

const Gasto = ({ gasto }) => {
  const { categoria, nombre, cantidad, id, fecha } = gasto;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <img src={disccionarioIconos[categoria]} alt="icono gasto" />
        <div className="descripcion-gasto">
          <p className="categoria">{formatearCantidad(categoria)}</p>
          <p className="nombre-gasto">{nombre}</p>

          <p className="fecha-gasto">
            Agregado el {""}
            {fecha}
          </p>
        </div>
      </div>
      <p className="cantidad-gasto">${cantidad}</p>
    </div>
  );
};

export default Gasto;
