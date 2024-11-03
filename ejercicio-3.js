import { stdin, stdout } from "process";
import { createInterface } from "readline";

const rl = createInterface({
  input: stdin,
  output: stdout,
});

class Alumno {
  #nombre = null;
  #edad = null;

  constructor() {
    this.#cargarAlumno();
  }

  #cargarAlumno() {
    this.#nombre &&
      rl.question("Ingrese la edad: ", (edad) => {
        isNaN(edad) && console.log("Error - Ingrese edad en numero: ");
        typeof parseInt(edad) !== "number" &&
          console.log("Error - Ingrese edad en numero: ");
        this.#edad = edad;
        rl.close();
        this.imprimirDatos();
      });

    rl.question("Ingrese el nombre: ", (nombre) => {
      this.#nombre = nombre;
      this.#cargarAlumno();
    });
  }

  imprimirDatos() {
    console.log(
      `El nombre del alumno es ${this.#nombre} y su edad es de ${this.#edad}`
    );
    this.mayoriaEdad();
  }

  mayoriaEdad() {
    this.#edad >= 18
      ? console.log(`El alumno ${this.#nombre} es mayor de edad.`)
      : console.log(`El alumno ${this.#nombre} es menor de edad.`);
  }
}

const alumno = new Alumno();
