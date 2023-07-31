window.addEventListener("DOMContentLoaded", () => {
  console.log("hola");

  const nombre = document.getElementById("nombre");
  const talla = document.getElementById("talla");
  const precio = document.getElementById("precio");
  const boton = document.querySelector("#btnAgregar");
  const contenedor = document.getElementById("tabla_agregados");
  const allInputs = document.querySelectorAll("input");
  const botonEliminar = document.querySelector("#btnEliminar");
  const prodContainer = document.getElementById("tabla_productos");
  

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
     
      const imageSrc = document.getElementById("opciones").value;
      const addItem = true;
      // como se maneja tablas, en esta se ag"rega una fila nueva
      const nuevaFila = contenedor.insertRow();
      
      // se crean las celdas en la fila nueva
      const celdaNombre = nuevaFila.insertCell(0);
      const celdaTalla = nuevaFila.insertCell(1);
      const celdaPrecio = nuevaFila.insertCell(2);
      const button = nuevaFila.insertCell(3)
      // agregamos el valor de los campos a cada celda
      celdaNombre.innerHTML = valorNombre;
      celdaTalla.innerHTML = valorTalla;
      celdaPrecio.innerHTML = valorPrecio;
      button.innerHTML = `<button class="btn btn-outline-danger" onclick="myFunction()">X</button>`
      //   <tr>
      //     <td>${valorNombre}</td>
      //     <td>${valorTalla}</td>
      //     <td>$ ${valorPrecio}</td>
      // </tr>
      // `;
      nombre.value = "";
      talla.value = "";
      precio.value = "";

      const fila = prodContainer.insertRow();
      const celdaDetalle = fila.insertCell(0)
      celdaDetalle.innerHTML =`
            <div class="juntify-content-center" style="padding:20px;">
            <img src="${imageSrc}" alt="Los Angeles" class="d-block" style="width:30%">

            <p>Nombre: ${valorNombre}<br>
            Talla: ${valorTalla}<br>
            Precio: $ ${valorPrecio}</p>
             </div
            `;

       const celdaDelete = fila.insertCell(1);
       celdaDelete.innerHTML = `<button class="btn btn-outline-danger" onclick="myFunction()">X</button>`
    }
  });

});

function myFunction() {
  var td = event.target.parentNode; 
  var tr = td.parentNode; // the row to be removed
  tr.parentNode.removeChild(tr);
}