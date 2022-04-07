let persona = {
    nombre: "Miguel",
    sexo: "Hombre",
    profesion: {
        nombre: 'programador',
        empresa: 'EscuelaIT'
    }
}

const empresa = persona.profesion.empresa;
const otra = persona?.edad?.algo;

console.log(empresa);
console.log(otra);