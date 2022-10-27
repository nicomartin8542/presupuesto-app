import { useEffect, useState } from "react";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ListadoGastos from "./components/ListadoGastos";
import Filtros from "./components/Filtros";

function App() {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem("presupuesto")) ?? 0
  );
  const [isvalidPresupuesto, setIsvalidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState(
    localStorage.getItem("gastos")
      ? JSON.parse(localStorage.getItem("gastos"))
      : []
  );
  const [gastoEditar, setGastoEditar] = useState({});
  const [filtro, setFiltro] = useState("");
  const [gastosFiltro, setGastosFiltro] = useState(gastos);

  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  useEffect(() => {
    const verificarFiltro = () => {
      const gastosFiltro =
        filtro !== ""
          ? gastos.filter((g) => g.categoria === filtro)
          : JSON.parse(localStorage.getItem("gastos") || []);
      return gastosFiltro;
    };
    setGastosFiltro(verificarFiltro());
  }, [filtro]);

  useEffect(() => {
    gastoEditar.id && handleNuevoGasto();
  }, [gastoEditar]);

  useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto ?? 0);
  }, [presupuesto]);

  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(gastos) ?? []);
    setGastosFiltro(gastos);
  }, [gastos]);

  useEffect(() => {
    const presupuestoStorage = Number(localStorage.getItem("presupuesto") ?? 0);
    presupuestoStorage > 0 && setIsvalidPresupuesto(true);
  }, []);

  const eliminarGasto = (id) => {
    const gastosElininado = gastos.filter((g) => g.id !== id);
    setGastos(gastosElininado);
  };

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        gastos={gastosFiltro}
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isvalidPresupuesto={isvalidPresupuesto}
        setIsvalidPresupuesto={setIsvalidPresupuesto}
      />

      {isvalidPresupuesto && (
        <>
          <main>
            <Filtros filtro={filtro} setFiltro={setFiltro} />
            <ListadoGastos
              gastos={gastosFiltro}
              setGastos={setGastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="Alta nuevo gasto"
              onClick={() => handleNuevoGasto()}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          setAnimarModal={setAnimarModal}
          animarModal={animarModal}
          setGastos={setGastos}
          gastos={gastos}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  );
}

export default App;
