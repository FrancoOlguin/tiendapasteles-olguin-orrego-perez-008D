export function validarRun(run) {
  if (!run || typeof run !== 'string') return false;
  const valorLimpo = run.replace(/\./g, '').trim().toUpperCase();
  const regex = /^0*(\d+)-([\dK])$/;
  const match = valorLimpo.match(regex);
  if (!match) return false;

  const cuerpo = match[1];
  const dvIngresado = match[2];
  let suma = 0;
  let multiplicador = 2;

  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += parseInt(cuerpo.charAt(i), 10) * multiplicador;
    multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
  }

  const resto = suma % 11;
  const dvCalculadoNum = 11 - resto;
  let dvCalculado;
  if (dvCalculadoNum === 11) dvCalculado = '0';
  else if (dvCalculadoNum === 10) dvCalculado = 'K';
  else dvCalculado = dvCalculadoNum.toString();

  return dvCalculado === dvIngresado;
}


export function sanitizarEntrada(texto) {
  if (typeof texto !== 'string') return '';
  return texto.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}