// TIPOS BÁSICOS
let cadena: string = "Hola mundo";
let numero: number = 123;
let verdad: boolean = true;


//////////////////////////////////////////////////////////////////
// ARRAYS
let pares: number[] = [2, 4, 6];
let dias: string[] = ["lunes", "martes", "miercoles"];


//////////////////////////////////////////////////////////////////
// FUNCIONES
function sumar(a: number, b: number): number {
  return a + b;
}
function saludar(nombre: string): void {
  console.log(`Hola ${nombre}`);
}

//////////////////////////////////////////////////////////////////
// NULL
const n: null = null


//////////////////////////////////////////////////////////////////
// TIPOS DE UNIÓN

  // Esto representa un problema
  let nombre = "Juan";
  // @ts-expect-error
  nombre = null;

  // Solución
  let nombre2: string | null = "Juan";
  nombre2 = null;


////////////////////////////////////////////////////////////////// 
// TYPE ALIASES
type nombre = string;
let miNombre: nombre = "Juan";

type estatura = number | null;
let miEstatura: estatura = 1.78;
miEstatura = null;

type direcciones = 'arriba' | 'abajo' | 'izquierda' | 'derecha';
let sentido: direcciones = 'izquierda';

type pelicula = {
  titulo: string;
  director: string;
  anyo: number;
}
let pelicula1: pelicula = {
  titulo: "Batman",
  director: "Tim Burton",
  anyo: 1989
}


//////////////////////////////////////////////////////////////////
// ENUM
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul"
}
let colorFavorito: Color = Color.Verde;
console.log(colorFavorito);


//////////////////////////////////////////////////////////////////
// CLASES
class Coche {
  public velocidad: number = 0;

  constructor(private color: Color, private modelo: string) {
    this.color = color;
    this.modelo = modelo;
  }

  public acelerar(): void {
    this.velocidad++;
  }

  public frenar(): void {
    this.velocidad--;
  }
}

let miCoche = new Coche(Color.Rojo, "Seat"); // inferencia de tipos
miCoche.acelerar();
miCoche.acelerar();
console.log(miCoche.velocidad);


//////////////////////////////////////////////////////////////////
// INTERFACES
interface Rectangulo {
  ancho: number; 
  alto: number;
}
let miRectangulo: Rectangulo = {
  alto: 3,
  ancho: 4
}

interface Pez {
  nadar(): void
}

interface Marisco {
  filtrar(): void
}

let pesca: Pez | Marisco;
pesca = {
  nadar: () => {
    console.log("Nadando");
  }
};
let pescaIntensiva: Pez & Marisco;
pescaIntensiva = {
  nadar: () => {
    console.log("Nadando");
  },
  filtrar: () => {
    console.log("Filtrando");
  }
};
class Tiburon implements Pez {
  nadar(): void {
    console.log("Nadando a lo grande");
  }
}
