import React from "react";
import CerrarBtn from "../img/cerrar.svg";
import useForm from "../hooks/useForm";
import validateFormModal from "../validate/validateFormModal";
import Mensaje from "./Mensaje";
import { generarId } from "../helpers";

const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  setGastos,
  gastos,
}) => {
  const [values, error, handleInputChange, handleFormSubmit] = useForm(
    {
      nombre: "",
      cantidad: 0,
      categoria: "",
    },

    validateFormModal,
    addGasto
  );

  const ocultarModal = () => {
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  function addGasto() {
    const gastosForm = values;
    gastosForm.id = generarId();
    console.log(gastosForm);
    setGastos([...gastos, gastosForm]);
    console.log(gastos);
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
        <legend>Nuevo Gasto</legend>
        {error.msg && <Mensaje tipo="error">{error.msg}</Mensaje>}

        <div className="campo">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            value={nombre}
            onChange={handleInputChange}
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
            onChange={handleInputChange}
            placeholder="Ingrese el nombre"
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            name="categoria"
            value={categoria}
            onChange={handleInputChange}
          >
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">casa</option>
            <option value="gastos">gastos</option>
            <option value="ocio">ocio</option>
            <option value="salud">salud</option>
            <option value="suscripciones">suscripciones</option>
          </select>
        </div>

        <input type="submit" value="Gasto" />
      </form>
    </div>
  );
};

export default Modal;
