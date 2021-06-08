import React, {Fragment, useState} from "react";
import PropTypes from "prop-types";
import Error from "./Error";

const Pregunta = ({addPresupuesto, addRestante, updateMostrarP}) => {
	//state
	const [cantidad, addCantidad] = useState(0);
	const [error, addError] = useState(false);

	const defPresupuesto = (e) => {
		addCantidad(parseInt(e.target.value));
	};

	const chargePresupuesto = (e) => {
		e.preventDefault();

		//Validar
		if (cantidad < 1 || isNaN(cantidad)) {
			addError(true);
			return;
		}

		//agregar valor
		addError(false);
		addPresupuesto(cantidad);
		addRestante(cantidad);
		updateMostrarP(false);
	};

	return (
		<Fragment>
			<h2>Pregunta</h2>

			{error ? <Error mensaje="El presupuesto es incorrecto" /> : null}

			<form onSubmit={chargePresupuesto}>
				<input
					type="number"
					className="u-full-width"
					onChange={defPresupuesto}
				/>
				<input
					type="submit"
					className="button-primary u-full-width"
					value="Definit presupuesto"
				/>
			</form>
		</Fragment>
	);
};

Pregunta.propTypes = {
	addPresupuesto: PropTypes.func.isRequired,
	addRestante: PropTypes.func.isRequired,
	updateMostrarP: PropTypes.func.isRequired,
};

export default Pregunta;
