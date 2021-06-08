import React from "react";
import PropTypes from "prop-types";

const Error = ({mensaje}) => (
	<div>
		<p className="alert alert-danger error">{mensaje}</p>
	</div>
);

Error.propTypes = {
	mensaje: PropTypes.string.isRequired,
};

export default Error;
