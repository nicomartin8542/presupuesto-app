export const generarId = () => {
  const random = Math.random().toPrecision(36).substring(2);
  const fecha = Date.now().toString(36);

  return random + fecha;
};
