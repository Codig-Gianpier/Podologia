<template>
  <div class="acomodar">
    <div class="mt-1">
      <nav class="navbar navbar-expand-lg navbar-light bg-secondary border rounded-3  mx-2 mt-1">
      <router-link to="/carrito" class="navbar-brand ms-3 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
</svg></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link text-white">Servicios</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/especialistas" class="nav-link text-white"
              >Especialistas</router-link
            >
          </li>
          <li class="nav-item ">
            <router-link to="/catalogo" class="nav-link text-white" >Productos</router-link>
          </li>

          <li class="ms-5 my-auto">
            <router-link to="/carrito">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart text-white" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
              <!-- Número de notificaciones -->
              <span class="badge bg-danger">{{
                miArrayGlobal.length
              }}</span></router-link
            >
          </li>
        </ul>
      </div>

      <div class="">
        <button class="btn btn-primary me-3" @click="cerrarSesion">Cerrar sesión<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-bar-left ms-2" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"/>
</svg></button>
      </div>
    </nav>

      <div class="mx-5 mt-5  pb-4">
        <div class="mb-3">
          <button @click="imprimirBoleta" class="btn btn-success">
            Realizar compra total S/<svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-cash"
              viewBox="0 0 16 16"
            >
              <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
              <path
                d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z"
              />
            </svg>
          </button>
        </div>

        <div class="row gy-4 gx-4">
          <div
            v-for="(items, index) in miArrayGlobal"
            :key="index.id"
            class="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
          >
            <div class="d-flex border border-2 pe-3">
              <div class="my-auto  ms-1 me-4">
                <img src="../assets/ventas.png" class="expansion" width="180" height="150" alt="Imagen" />


              </div>

              <div class="mt-2 w-100">
                <p
                  class="w-100 text-start mt-5 d-flex"
                  style="font-weight: 700"
                >
                  Cantidad : {{ items.cantidad }}
                  <button
                    @click="Eliminar(items.id)"
                    class="btn btn-danger p-0 ms-2 my-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-down-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
                      />
                    </svg>
                  </button>
                </p>

                <p
                  class="w-100 text-start mb-0 mt-2"
                  style="font-weight: 700; font-size: 1.25rem"
                >
                  Precio Total:
                </p>
                <p
                  class="w-100 text-start text-success"
                  style="font-weight: 700; font-size: 1.15rem"
                >
                  S/{{ items.precioTotal }}
                </p>

                <p
                  class="w-100 text-start mt-2 mb-0 text-dark"
                  style="font-weight: 700; font-size: 1.25rem"
                >
                  Descripcion :
                </p>
                <p
                  class="w-100 text-start text-secondary"
                  style="font-weight: 700; font-size: 1.15rem"
                >
                  {{ items.descripcion }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jsPDF from "jspdf";
import "jspdf-autotable";
import Swal from "sweetalert2";
export default {
  name: "AplicationCarrito",

  data() {
    return {};
  },

  mounted() {},

  computed: {
    miArrayGlobal() {
      return this.$store.getters.obtenerArrayGlobal;
    },
  },
  methods: {
  
    cerrarSesion() {
    // Limpiar localStorage
    localStorage.clear();

    // Recargar la página
    location.reload();
  },

    Eliminar(index) {
      // Llamamos a la acción para eliminar un elemento del array global
      Swal.fire({
  title: "Estas seguro de disminuir compra",
  text: "",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Si"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Disminuido",
      text: "Se disminuyo un producto",
      icon: "success"
    });
    this.$store.dispatch("eliminarDato", index);
      console.log(index);
  }
});
     
    },
    calcularTotalPagar() {
      // Lógica para calcular el total a pagar
      // Puedes usar un bucle o cualquier lógica que necesites
      // Por ejemplo, sumar todos los precios totales en tu array
      const totalPagar = this.miArrayGlobal.reduce(
        (total, item) => total + item.precioTotal,
        0
      );
      return totalPagar;
    },

    calcularTotalPagarConIGV() {
      // Lógica para calcular el total a pagar con IGV
      const totalPagar = this.calcularTotalPagar();
      const igv = this.calcularIGV();
      return totalPagar + igv;
    },

    calcularIGV() {
      // Lógica para calcular el IGV
      // Puedes usar un cálculo fijo o ajustar la lógica según tus necesidades
      const porcentajeIGV = 0.18; // Ejemplo: 18%
      return this.calcularTotalPagar() * porcentajeIGV;
    },

    imprimirBoleta() {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Se  genero boleta`,
        showConfirmButton: false,
        timer: 1500,
      });
      const doc = new jsPDF();
      
      // Encabezado
      doc.text("Boleta de Compra", 20, 10);

      // Contenido de la tabla
      const headers = ["Descripción", "Cantidad", "Precio Total"];
      const data = this.miArrayGlobal.map((item) => [
        item.descripcion,
        item.cantidad,
        item.precioTotal,
      ]);

      doc.autoTable({
        head: [headers],
        body: data,
        startY: 20,
      });

      // Total a pagar y IGV
      const totalPagar = this.calcularTotalPagarConIGV();
      const igv = this.calcularIGV();

      doc.text(
        `Total a pagar: ${totalPagar.toFixed(2)}`,
        20,
        doc.autoTable.previous.finalY + 10
      );
      doc.text(
        `IGV (18%): ${igv.toFixed(2)}`,
        20,
        doc.autoTable.previous.finalY + 20
      );

      // Guardar o mostrar el PDF (depende de tus necesidades)
      doc.save("boleta_compra.pdf");
    },
  },
};
</script>

<style scoped>
.acomodar{
  background: rgb(245, 255, 253);
  height: 100vh}

  .expansion {
  transition: transform 0.3s ease-in-out;
}

.expansion:hover {
  transform: scale(1.1); /* Puedes ajustar el valor según tus preferencias */
}
  </style>
