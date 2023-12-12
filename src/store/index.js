import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    miArrayGlobal: [],
  },
  mutations: {
    agregarDato(state, nuevoDato) {
      const datoExistente = state.miArrayGlobal.find(dato => dato.id === nuevoDato.id);

      if (datoExistente) {
        // Si ya existe, incrementa la cantidad y actualiza el precio total
        datoExistente.cantidad++;
        datoExistente.precioTotal += nuevoDato.precio;
      } else {
        // Si no existe, agrega un nuevo elemento al array
        state.miArrayGlobal.push({
          id: nuevoDato.id,
          cantidad: 1,
          precioTotal: nuevoDato.precio,
          imagenUrl: nuevoDato.imagenUrl,
          descripcion : nuevoDato.descripcion
        });
      }
    },


    eliminarDato(state, index) {
      const item = state.miArrayGlobal

      item.map(r =>{
        console.log(r)

        if (r.id == index ) {
          // Si la cantidad es mayor a 1, disminuye la cantidad
          if (r.cantidad > 1) {
            r.precioTotal -= r.precioTotal/r.cantidad;
      
            r.cantidad--;
            console.log("esa aqui")
          } else {
            // Si la cantidad es 1 o menos, elimina el elemento completo
            state.miArrayGlobal = state.miArrayGlobal.filter(r => r.id !== index);
          }
        }


      })

      
 
    },
  },
  actions: {
    agregarDato({ commit }, nuevoDato) {
      commit('agregarDato', nuevoDato);
    },

    eliminarDato({ commit }, index) {
      commit('eliminarDato', index);
    },
  },
  getters: {
    obtenerArrayGlobal: (state) => state.miArrayGlobal,
  },
  modules: {
  }
})
