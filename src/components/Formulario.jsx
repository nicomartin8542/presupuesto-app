import React, {useState} from "react";
import PropTypes from "prop-types";
import Error from "./Error";
import shortid from "shortid";

const Formulario = ({addGasto, updateAltGasto}) => {
	const [name, addName] = useState("");
	const [cant, addCant] = useState(0);
	const [error, addError] = useState(false);

	const addForm = (e) => {
		e.preventDefault();
		if (name === "" || cant < 1 || isNaN(cant)) {
			addError(true);
			return;
		}

		addError(false);

		const gasto = {
			name,
			cant,
			id: shortid.generate(),
		};

		addGasto(gasto);
		updateAltGasto(true);
		addName("");
		addCant(0);
	};

	return (
		<form onSubmit={addForm}>
			<h2>Agrego tus gastos aqui </h2>

			{error ? <Error mensaje="Los datos son obligatorios" /> : null}

			<div className="campo">
				<label />
				<input
					type="text"
					className="u-full-width"
					placeholder="Ej Transporte"
					name="name"
					value={name}
					onChange={(e) => addName(e.target.value)}
				/>
			</div>
			<div className="campo">
				<label />
				<input
					type="number"
					className="u-full-width"
					placeholder="Ej 300"
					value={cant}
					onChange={(e) => addCant(e.target.value)}
				/>
			</div>
			<div className="campo">
				<label />
				<input
					type="submit"
					className="button-primary u-full-width"
					value="Agregar Gasto"
				/>
			</div>
		</form>
	);
};

Formulario.propTypes = {
	addGasto: PropTypes.func.isRequired,
	updateAltGasto: PropTypes.func.isRequired,
};

export default Formulario;
