window.addEventListener("DOMContentLoaded", () => {
  console.log("hola");

  const nombre = document.getElementById("nombre");
  const talla = document.getElementById("talla");
  const precio = document.getElementById("precio");
  const boton = document.querySelector("#btnAgregar");
  const contenedor = document.getElementById("tabla_agregados");
  const allInputs = document.querySelectorAll("input");

  allInputs.forEach((input) => {
    input.addEventListener("input", () => {
      if (input.value === "") {
        input.classList.add("is-invalid");
        input.classList.remove("valid");
      } else {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
      }
    });
  });

  boton.addEventListener("click", (event) => {
    event.preventDefault();

    const valorNombre = nombre.value;
    const valorTalla = talla.value;
    const valorPrecio = precio.value;

    if (valorNombre === "") {
      nombre.classList.add("is-invalid");
    } else {
      nombre.classList.remove("is-invalid");
    }

    if (valorPrecio === "") {
      precio.classList.add("is-invalid");
    } else {
      precio.classList.remove("is-invalid");
    }

    if (valorTalla === "") {
      talla.classList.add("is-invalid");
    } else {
      talla.classList.remove("is-invalid");
    }

    if (valorNombre !== "" && valorPrecio !== "" && valorPrecio !== "") {
      // como se maneja tablas, en esta se agrega una fila nueva
      const nuevaFila = contenedor.insertRow();
      // se crean las celdas en la fila nueva
      const celdaNombre = nuevaFila.insertCell(0);
      const celdaTalla = nuevaFila.insertCell(1);
      const celdaPrecio = nuevaFila.insertCell(2);
      // agregamos el valor de los campos a cada celda
      celdaNombre.innerHTML = valorNombre;
      celdaTalla.innerHTML = valorTalla;
      celdaPrecio.innerHTML = valorPrecio;

      // con esta se remplaza la fila ya insertada y se pone una nueva
      // contenedor.innerHTML =  `
      //   <tr>
      //     <td>${valorNombre}</td>
      //     <td>${valorTalla}</td>
      //     <td>$ ${valorPrecio}</td>
      // </tr>
      // `;
      nombre.value = "";
      talla.value = "";
      precio.value = "";

    }
  });
});
