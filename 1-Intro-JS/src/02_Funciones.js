function obtenerInfo(name = 'Monserrat', apellido = 'Fdz'){
    const info = `${name} ${apellido}`;

    return info;
}

const info = obtenerInfo('Xiomara', 'Ahumada');

console.log(info);