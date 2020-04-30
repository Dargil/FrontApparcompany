<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <div>
        <h2>Listado de Eventos</h2>
        <b-button size="sm" :to="{name:'NewEvento'}" variant="primary">
        Nuevo Evento
        </b-button>
        </div>
        <br>
        <div class="col-md-12">
          <b-table striped hover :items="eventos":fields="fields">

              <template v-slot:cell(action)="data">
              <b-button size="sm" variant="primary" :to="{name:'EditEvento',params: {eventoId: data.item.id}}">
              Editar
              </b-button>
             <b-button size="sm" variant="danger" :to="{name:'DeleteEvento',params: {eventoId: data.item.id}}">
              Eliminar
            </b-button>
           </template>

          </b-table>

        </div>
      </div>
    </div>
  </div>
</template>
<script>

import axios from "axios";

export default {
  props: {
    token: String,
    username: String
  },
 data() {
    return {
      fields: [
        { key: "nombre", label: "Nombre" },
        { key: "hora_inicio", label: "Hora Inicio" },
        { key: "hora_final", label: "Hora Final" },
        { key: "descripcion", label: "Descripcion" },
        { key: "fecha", label: "Fecha" },
        { key: "lugar", label: "lugar" },
        { key: "action", label: "" }
      ],
      eventos: []
    };
  },
  methods: {
    getEventos() {
      const path = "http://ec2-54-161-138-190.compute-1.amazonaws.com:8080/evento/";
      axios.get(path).then(response => {
          this.eventos = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },

  created() {
    this.getEventos();
  }
};
</script>

<style lang="css" scope>
</style>