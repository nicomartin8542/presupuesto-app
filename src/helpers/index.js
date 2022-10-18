export const generarId = () => {
  const random = Math.random().toPrecision(36).substring(2);
  const fecha = Date.now().toString(36);

  return random + fecha;
};

export const formatearFecha = (fecha) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return fecha.toLocaleString("es-ES", options);
};

export const formatearCantidad = (cantidad) => {
  if (!cantidad) return "0";

  return cantidad.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
