const obtenerInfo = (name = 'Monserrat', apellido = 'Fdz') => `${name} ${apellido}`;
const sum = (a = 0, b = 0) => a + b;

const info = obtenerInfo('Xiomara', 'Ahumada');

console.log(info);
console.log(sum(20,10));