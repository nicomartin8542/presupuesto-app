import { useState } from "react";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import Header from "./components/Header";
import Modal from "./components/Modal";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isvalidPresupuesto, setIsvalidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);

  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  return (
    <>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isvalidPresupuesto={isvalidPresupuesto}
        setIsvalidPresupuesto={setIsvalidPresupuesto}
      />

      {isvalidPresupuesto && (
        <div className="nuevo-gasto">
          <img
            src={IconoNuevoGasto}
            alt="Alta nuevo gasto"
            onClick={() => handleNuevoGasto()}
          />
        </div>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          setAnimarModal={setAnimarModal}
          animarModal={animarModal}
          setGastos={setGastos}
          gastos={gastos}
        />
      )}
    </>
  );
}

export default App;
