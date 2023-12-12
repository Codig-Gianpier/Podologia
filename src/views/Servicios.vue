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
            <router-link to="/servicios" class="nav-link text-white"
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
         
          class="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
        >
          <div class="card container border border-2" style="width: 24rem">
            <img
              class="card-img-top  container mt-2 expansion"
              :src="require(`@/assets/servicios/BIOMECANICA.jpg`)"
              alt="Card image cap"
              style="width:250px; height:280px"

            />
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text justificado">
                Servicio especializado en el análisis de la marcha y la estructura del pie para diseñar ortesis y tratamientos que mejoren la biomecánica y prevenir lesiones.
              </p>
            
            <button
                @mouseover="mostrarMensajeCarrito"
                @mouseout="ocultarMensajeCarrito"
                @click="
                  agregarDato(
                    21,
                    150,
                    ``,
                    'BIOMECANICA',
                    ''
                  )
                "
                class="btn btn-primary"
              >
                S/150.00
              </button>
            </div>
          </div>
        </div>

        <div
         
          class="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
        >
          <div class="card container border border-2" style="width: 24rem">
            <img
              class="card-img-top  container mt-2 expansion"
              :src="require(`@/assets/servicios/DIABETICO.jpg`)"
              alt="Card image cap"
              style="width:250px; height:280px"

            />
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text justificado">
               enfocado en el cuidado de los pies en  diabéticos, evaluación, tratamiento y prevención de complicaciones específicas para esta condición.
              </p>
              <button
                @mouseover="mostrarMensajeCarrito"
                @mouseout="ocultarMensajeCarrito"
                @click="
                  agregarDato(
                    22,
                    180,
                    ``,
                    'DIABETICO',
                    ''
                  )
                "
                class="btn btn-primary"
              >
                S/180.00
              </button>
            </div>
          </div>
        </div>


        <div
         
          class="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
        >
          <div class="card container border border-2" style="width: 24rem">
            <img
              class="card-img-top  container mt-2 expansion"
              :src="require(`@/assets/servicios/HELOMA.jpg`)"
              alt="Card image cap"
              style="width:250px; height:280px"

            />
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text justificado">
                Servicio dedicado a la atención de helomas (callosidades) mediante técnicas y tratamientos que alivian el dolor y mejoran la comodidad del paciente.
              </p>
              <button
                @mouseover="mostrarMensajeCarrito"
                @mouseout="ocultarMensajeCarrito"
                @click="
                  agregarDato(
                    23,
                    250,
                    ``,
                    'HELOMA',
                    ''
                  )
                "
                class="btn btn-primary"
              >
                S/250.00
              </button>
            </div>
          </div>
        </div>



        <div
         
          class="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
        >
          <div class="card container border border-2" style="width: 24rem">
            <img
              class="card-img-top  container mt-2 expansion"
              :src="require(`@/assets/servicios/laser.jpg`)"
              alt="Card image cap"
              style="width:250px; height:280px"

            />
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text justificado">
                Servicio que utiliza tecnología láser para el tratamiento de diversas afecciones podológicas, incluyendo hongos en las uñas, verrugas plantares y otras lesiones.
              </p>
              <button
                @mouseover="mostrarMensajeCarrito"
                @mouseout="ocultarMensajeCarrito"
                @click="
                  agregarDato(
                    24,
                    200,
                    ``,
                    'laser',
                    ''
                  )
                "
                class="btn btn-primary"
              >
                S/200.00
              </button>
            </div>
          </div>
        </div>


        <div
         
          class="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
        >
          <div class="card container border border-2" style="width: 24rem">
            <img
              class="card-img-top  container mt-2 expansion"
              :src="require(`@/assets/servicios/onicocriptosis.jpg`)"
              alt="Card image cap"
              style="width:250px; height:280px"

            />
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text justificado">
                Servicio especializado en el tratamiento de la onicocriptosis, comúnmente conocida como uña encarnada, mediante técnicas que alivian el dolor y previenen complicaciones.
              </p>
              <button
                @mouseover="mostrarMensajeCarrito"
                @mouseout="ocultarMensajeCarrito"
                @click="
                  agregarDato(
                    25,
                    190,
                    ``,
                    'onicocriptosis',
                    ''
                  )
                "
                class="btn btn-primary"
              >
                S/190.00
              </button>
            </div>
          </div>
        </div>


        <div
         
          class="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
        >
          <div class="card container border border-2" style="width: 24rem">
            <img
              class="card-img-top  container mt-2 expansion"
              :src="require(`@/assets/servicios/pieatleta.jpg`)"
              alt="Card image cap"
              style="width:250px; height:280px"

            />
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text justificado">
                Servicio dirigido al diagnóstico y tratamiento del pie de atleta, una infección fúngica en la piel de los pies, mediante terapias antifúngicas y medidas preventivas.
              </p>
              <button
                @mouseover="mostrarMensajeCarrito"
                @mouseout="ocultarMensajeCarrito"
                @click="
                  agregarDato(
                    26,
                    240,
                    ``,
                    'pieatleta',
                    ''
                  )
                "
                class="btn btn-primary"
              >
                S/240.00
              </button>
            </div>
          </div>
        </div>


       
      </div>
    </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
export default {
    name: 'AplicationServicios',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    computed:{
        miArrayGlobal() {
      return this.$store.getters.obtenerArrayGlobal;
    },
    },

    methods: {
        mostrarMensajeCarrito() {
      // Cambiar el color del botón a verde y el ícono
      this.$refs.iconoCarrito.style.fill = "white"; // Color blanco o el color que desees
      this.$refs.btnCarrito.title = "Agregar al carrito"; // Mostrar el mensaje al pasar el mouse
    },

    ocultarMensajeCarrito() {
      // Restaurar el color original y el ícono
      this.$refs.iconoCarrito.style.fill = ""; // Restaurar el color original
      this.$refs.btnCarrito.title = ""; // Ocultar el mensaje al quitar el mouse
    },
    cerrarSesion() {
      // Limpiar localStorage
      localStorage.clear();

      // Recargar la página
      location.reload();
    },
    getAttribtes() {
      this.axios.get(`Especialistas/ObtenerEspecialistas`).then((r) => {
        console.log(r.data);
        this.info = r.data;
      });
    },

    agregarDato(id, precio, imagen, descripcion, nombre) {
      // Llamamos a la acción para agregar un nuevo dato al array global
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Servicio ${nombre} registrado`,
        showConfirmButton: false,
        timer: 1500,
      });
      this.$store.dispatch("agregarDato", {
        id: id,
        precio: precio,
        imagenUrl: imagen,
        descripcion: descripcion,
      });

      // Mostrar en la consola
      console.log(
        "miArrayGlobal actualizado:",
        this.$store.getters.obtenerArrayGlobal
      );
    },
    },
};
</script>

<style  scoped>
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