<template>
  <div class="acomodar">
    <nav
      class="navbar navbar-expand-lg navbar-light bg-secondary border rounded-3 mx-2 mt-1"
    >
      <router-link to="/carrito" class="navbar-brand ms-3 text-white"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          class="bi bi-house"
          viewBox="0 0 16 16"
        >
          <path
            d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"
          /></svg
      ></router-link>
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
            <router-link to="/" class="nav-link text-white"
              >Servicios</router-link
            >
          </li>
          <li class="nav-item active">
            <router-link to="/especialistas" class="nav-link text-white"
              >Especialistas</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/catalogo" class="nav-link text-white"
              >Productos</router-link
            >
          </li>

          <li class="ms-5 my-auto">
            <router-link to="/carrito">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-cart text-white"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
                />
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
        <button class="btn btn-primary me-3" @click="cerrarSesion">
          Cerrar sesión<svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-arrow-bar-left ms-2"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"
            />
          </svg>
        </button>
      </div>
    </nav>
    <div class="container mt-5 pb-4">
      <div class="row gy-4 gx-2">
        <div
          v-for="(items, index) in info"
          :key="index.id"
          class="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
        >
          <div class="card container border border-2" style="width: 24rem">
            <img
              class="card-img-top  container mt-2 expansion"
              :src="require(`@/assets/Productos/${index + 1}.jpg`)"
              alt="Card image cap"
              style="width:250px; height:280px"

            />
            <div class="card-body">
              <h5 class="card-title">{{ items.nombreProducto }}</h5>
              <p class="card-text justificado">
                {{ items.descripcion }}
              </p>
              <button
                @click="
                  agregarDato(
                    items.idProductos + 10,
                    items.precio,
                    `@/assets/Productos/${index + 1}.jpg`,
                    items.descripcion,
                    items.nombreProducto
                  )
                "
                class="btn btn-primary"
              >
                S/{{ items.precio }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "AplicationCatalogo",

  data() {
    return { info: [] };
  },

  mounted() {
    this.axios.get(`Producto/ObtenerDatos`).then((r) => {
      console.log(r.data);
      this.info = r.data;
    });
  },

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
    agregarDato(id, precio, imagen, descripcion, nombre) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Producto ${nombre} registrado`,
        showConfirmButton: false,
        timer: 1500,
      });
      // Llamamos a la acción para agregar un nuevo dato al array global
      this.$store.dispatch("agregarDato", {
        id: id,
        precio: precio,
        imagenUrl: imagen,
        descripcion: descripcion,
      });

      console.log(
        "miArrayGlobal actualizado:",
        this.$store.getters.obtenerArrayGlobal
      );
    },
  },
};
</script>

<style scoped>
.acomodar {
  background: rgb(245, 255, 253);
  height: 100%;
}
.expansion {
  transition: transform 0.3s ease-in-out;
}

.expansion:hover {
  transform: scale(1.1); /* Puedes ajustar el valor según tus preferencias */
}

.justificado{
      text-align: justify;
      font-size: 1.02rem;
      font-weight: 500;
    
}
.justificado:hover{
  color:darkblue;
  font-size: 1.03rem;

}
</style>
