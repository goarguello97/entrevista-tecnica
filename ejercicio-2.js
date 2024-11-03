import { stdin, stdout } from "process";
import { createInterface } from "readline";

const rl = createInterface({
  input: stdin,
  output: stdout,
});

class Operario {
  #sueldos = [];

  constructor() {
    this.#cargarSueldo();
  }

  #cargarSueldo(i = 1) {
    if (i <= 5) {
      rl.question(`Ingrese el sueldo del operario ${i}: `, (sueldo) => {
        if (isNaN(sueldo) || sueldo.length === 0) {
          console.log("Ingrese un número");
          this.#cargarSueldo(i);
        }
        this.#sueldos.push(parseFloat(sueldo));
        i++;
        this.#cargarSueldo(i);
      });
    } else {
      rl.close();
      this.mostrarSueldos();
    }
  }

  mostrarSueldos() {
    if (this.#sueldos.length === 0) {
      console.log("No hay sueldos ingresados");
      return;
    }
    for (let i = 0; i <= this.#sueldos.length - 1; i++) {
      console.log(`El sueldo del operario ${i + 1} es: ${this.#sueldos[i]}`);
    }
    return;
  }
}

const op = new Operario();
