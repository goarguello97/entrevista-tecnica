class Alumno {
  #nombre = null;
  #edad = null;

  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.#edad = edad;
  }

  imprimirDatos() {
    console.log(
      `El nombre del alumno es ${this.#nombre} y su edad es de ${this.#edad}`
    );
  }

  mayoriaEdad() {
    this.#edad >= 18
      ? console.log(`El alumno ${this.#nombre} es mayor de edad.`)
      : console.log(`El alumno ${this.#nombre} es menor de edad.`);
  }
}

const alumnoA = new Alumno("Fulanito", 17);

const alumnoB = new Alumno("Menganito", 18);

alumnoA.imprimirDatos();
alumnoA.mayoriaEdad();
alumnoB.imprimirDatos();
alumnoB.mayoriaEdad();
