<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col text-left">
       <h2>Nuevo Evento</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <form @submit="onSubmit">

            <div class="form-group row">
                <label for="title" class="col-sm-2 col-form-label">Nombre del Evento</label>
                <div class="col-sm-6">
                  <input type="test" placeholder="Titulo" name="title" class="form-control" v-model.trim="form.title">
                </div>
            </div>

            <div class="form-group row">
                <label for="title" class="col-sm-2 col-form-label">Hora de Inicio</label>
                <div class="col-sm-6">
                 <b-time v-model="form.hora_inicio" show-seconds locale="en"></b-time>
                </div>
            </div>

            <div class="form-group row">
                <label for="title" class="col-sm-2 col-form-label">Hora Final</label>
                <div class="col-sm-6">
                  <b-time v-model="form.hora_final" show-seconds locale="en"></b-time>
                   </div>
            </div>


              <div class="form-group row">
                <label for="description" class="col-sm-2 col-form-label">Descripcion</label>
                <div class="col-sm-6">
                <textarea name="description" class="form-control" placeholder="Descripcion" rows="3" v-model.trim="form.description"></textarea>
                </div>
               </div>

            <div class="form-group row">
                <label for="foto" class="col-sm-2 col-form-label">Foto</label>
                 <div class="col-sm-6">
                <!-- Plain mode -->
                    <b-form-file v-model="form.foto" class="mt-3" plain></b-form-file>
                    </div>
            </div>




            <div class="form-group row">
                <label for="title" class="col-sm-2 col-form-label">Fecha</label>
                <div class="col-sm-6">
                    <b-form-datepicker id="example-datepicker" v-model.trim="form.fecha" class="mb-2"></b-form-datepicker>    
                </div>
            </div>

            <div class="form-group row">
                <label for="title" class="col-sm-2 col-form-label">Categoria</label>
                <div class="col-sm-6">
                    <b-form-select v-model="form.categoria" :options="categorias"></b-form-select>
                </div>
            </div>

            

               <div class="rows">
                <div class="col text-left">
                  <b-button type="submit" variant="primary">Insertar Evento</b-button>
                  <b-button type="submit" class="btn-large-space" :to="{name:'Evento'}">Cancelar</b-button>
                </div>
               </div>


            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>


import axios from "axios";
import swal from "sweetalert";

export default {
  data() {
    return {
      form: {
        nombre: "",
        hora_inicio: "",
        hora_final: "",
        descripcion: "",
        foto: null,
        fecha: "",
        lugar: "",
        categoria: ""

      },
       categorias: []
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      const path = "http://ec2-54-161-138-190.compute-1.amazonaws.com:8080/books/";
      axios
        .post(path, this.form)
        .then(response => {
          this.form.title = response.data.title;
          this.form.description = response.data.description;
          swal("Libro creado exitosamente", "", "success");
        })
        .catch(error => {
          swal("El libro no ha sido creado", "", "error");
        });
    },
    getCategorias(){
        const path='http://ec2-54-161-138-190.compute-1.amazonaws.com:8080/categoria/';
        axios.get(path).then(response => {
            var i;
            for (i = 0; i < response.data.length; i++) {
                this.categorias.push(response.data[i].nombre); 
            }
        console.log(this.categorias)
        })
        .catch(error => {
          console.log(error);
        });

    }
  },
  
  created() {
      this.getCategorias();
  }
};
</script>

<style lang="css" scope>
</style>
