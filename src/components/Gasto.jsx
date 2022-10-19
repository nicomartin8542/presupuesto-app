import React from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import IconoAhorro from "../img/icono_ahorro.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoCasa from "../img/icono_casa.svg";
import Iconosalud from "../img/icono_salud.svg";
import Iconoocio from "../img/icono_ocio.svg";
import Iconosuscripciones from "../img/icono_suscripciones.svg";
import { formatearCantidad } from "../helpers";

const disccionarioIconos = {
  ahorro: IconoAhorro,
  comida: IconoComida,
  casa: IconoCasa,
  gastos: IconoGastos,
  ocio: Iconoocio,
  salud: Iconosalud,
  suscripciones: Iconosuscripciones,
};

const Gasto = ({ gasto, setGastoEditar, eliminarGasto }) => {
  const { categoria, nombre, cantidad, id, fecha } = gasto;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>Editar</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => eliminarGasto(id)} destructive={true}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  // const preguntarEliminar = () => {
  //   if (window.confirm("Esta por eliminar un gasto. ¿Desea continuar?")) {
  //     eliminarGasto(id);
  //   }
  // };

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
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
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Gasto;
