const validateFormModal = (values) => {
  const { nombre, cantidad, categoria } = values;
  let error = {};
  if ([nombre, categoria].includes("")) {
    error.msg = "Debe cargar un nombre y categoria!";
    return error;
  }

  if (cantidad <= 0 || isNaN(cantidad) || !cantidad) {
    error.msg = "Debe cargar una cantidad valida!";
    return error;
  }

  return error;
};

export default validateFormModal;
