import React, { useEffect } from "react";
import CerrarBtn from "../img/cerrar.svg";
import useForm from "../hooks/useForm";
import validateFormModal from "../validate/validateFormModal";
import Mensaje from "./Mensaje";
import { formatearFecha, generarId } from "../helpers";

const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  setGastos,
  gastos,
  gastoEditar,
  setGastoEditar,
}) => {
  const [values, setValues, error, handleInputChange, handleFormSubmit] =
    useForm(
      {
        nombre: "",
        cantidad: 0,
        categoria: "",
      },

      validateFormModal,
      addGasto
    );

  useEffect(() => {
    gastoEditar.id && setValues(gastoEditar);
  }, []);

  const ocultarModal = () => {
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
      gastoEditar.id && setGastoEditar({});
    }, 500);
  };

  function addGasto() {
    const gastosForm = values;
    let gastosEditado = [];

    //Pregunto si esta en modo editar.
    if (gastoEditar.id) {
      gastosEditado = gastos.map((gasto) =>
        gasto.id === gastosForm.id ? gastosForm : gasto
      );
      setGastos(gastosEditado);
    } else {
      gastosForm.id = generarId();
      gastosForm.fecha = formatearFecha(new Date());
      setGastos([...gastos, gastosForm]);
    }
    ocultarModal();
  }

  const { nombre, cantidad, categoria } = values;

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={CerrarBtn}
          alt="cerrar modal"
          onClick={() => ocultarModal()}
        />
      </div>
      <form
        onSubmit={handleFormSubmit}
        className={`formulario ${animarModal ? "animar" : "cerrar"} `}
      >
        <legend>{gastoEditar.id ? "Editar Gasto" : "Nuevo Gasto"}</legend>
        {error.msg && <Mensaje tipo="error">{error.msg}</Mensaje>}

        <div className="campo">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            value={nombre}
            onChange={(e) => handleInputChange(e)}
            placeholder="Ingrese el nombre"
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            type="number"
            name="cantidad"
            id="cantidad"
            value={cantidad}
            onChange={(e) => handleInputChange(e)}
            placeholder="Ingrese el nombre"
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            name="categoria"
            value={categoria}
            onChange={(e) => handleInputChange(e)}
          >
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>

        <input type="submit" value={gastoEditar.id ? "Editar" : "Guardar"} />
      </form>
    </div>
  );
};

export default Modal;
