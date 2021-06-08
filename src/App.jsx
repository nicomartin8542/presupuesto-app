import React, {useState, useEffect} from "react";
import Pregunta from "./components/Pregtunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
	const [presupuesto, addPresupuesto] = useState(0);
	const [restante, addRestante] = useState(0);
	const [mostrarPretunga, updateMostrarP] = useState(true);
	const [gastos, addGastos] = useState([]);
	const [gasto, addGastoForm] = useState({
		name: "",
		cant: 0,
		id: 0,
	});
	const [altGasto, updateAltGasto] = useState(false);

	useEffect(() => {
		if (altGasto) {
			addGastos([...gastos, gasto]);
		}

		const calcularRestante = restante - gasto.cant;
		addRestante(calcularRestante);

		updateAltGasto(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [gasto]);

	return (
		<div className="container">
			<header>
				<h1>Gasto semanal</h1>
				<div className="contenido-principal contenido">
					{/* Carga componente condicional */}
					{mostrarPretunga ? (
						<Pregunta
							addPresupuesto={addPresupuesto}
							addRestante={addRestante}
							updateMostrarP={updateMostrarP}
						/>
					) : (
						<div className="row">
							<div className="one-half column">
								<Formulario
									addGasto={addGastoForm}
									updateAltGasto={updateAltGasto}
								/>
							</div>
							<div className="one-half column">
								<Listado gastos={gastos} />
								<ControlPresupuesto
									presupuesto={presupuesto}
									restante={restante}
								/>
							</div>
						</div>
					)}
				</div>
			</header>
		</div>
	);
}

export default App;
