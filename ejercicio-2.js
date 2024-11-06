class Operario {
  #sueldos = [];

  // De esta forma podemos manejar mas de 5 sueldos en el constructor
  constructor(...args) {
    this.#sueldos = args.map((arg) => {
      // Si se ingresa un valor que no es un número inscribe el mensaje de error
      if (isNaN(arg)) return "Valor incorrecto - Ingrese un número";

      // Aca se agrega el sueldo con dos decimales
      return `$${parseFloat(arg).toFixed(2)}`;
    });
  }

  mostrarSueldos() {
    // Si no hay sueldos ingresados, lo avisa
    if (this.#sueldos.length === 0) {
      console.log("No hay sueldos ingresados");
      return;
    }

    // Aqui muestra uno por uno los sueldos cargados
    for (let i = 0; i <= this.#sueldos.length - 1; i++) {
      console.log(`El sueldo del operario ${i + 1} es: ${this.#sueldos[i]}`);
    }
    return;
  }
}

const op = new Operario("a", 2.33333333, 3, 4, 5);

op.mostrarSueldos();
