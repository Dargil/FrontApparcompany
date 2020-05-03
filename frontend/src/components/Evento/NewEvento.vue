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
                  <input type="text" placeholder="Nombre del evento" name="nombre" class="form-control" v-model.trim="form.nombre">
                </div>
            </div>

            <div class="form-group row">
                <label for="title" class="col-sm-2 col-form-label">Hora de Inicio</label>
                <div class="col-sm-6">
                <input type="time" placeholder="Hora de Inicio" name="inicio" class="form-control" v-model.trim="form.hora_inicio">  
                </div>
            </div>

            <div class="form-group row">
                <label for="title" class="col-sm-2 col-form-label">Hora Final</label>
                <div class="col-sm-6">
                  <input type="time" placeholder="Hora Final" name="final" class="form-control" v-model.trim="form.hora_final">
                   </div>
            </div>


              <div class="form-group row">
                <label for="description" class="col-sm-2 col-form-label">Descripcion</label>
                <div class="col-sm-6">
                <textarea name="description" class="form-control" placeholder="Descripcion" rows="3" v-model.trim="form.descripcion"></textarea>
                </div>
               </div>

            <div class="form-group row">
                <label for="foto" class="col-sm-2 col-form-label">Foto</label>
                 <div class="col-sm-6">
                <!-- Plain mode -->
                   <!-- <b-form-file v-model="foto_evento" class="mt-3" plain></b-form-file>-->
                   <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
                    </div>
            </div>

            <div class="form-group row">
                <label for="title" class="col-sm-2 col-form-label">Fecha</label>
                <div class="col-sm-6">
                <input type="date" placeholder="Fecha" name="title" class="form-control" v-model.trim="form.fecha">  
                </div>
            </div>

            <div class="form-group row">
                <label for="title" class="col-sm-2 col-form-label">Categoria</label>
                <div class="col-sm-6">
                    <b-form-select v-model="form.categoria" :options="categorias"></b-form-select>
                </div>
            </div>


            <div class="form-group row">
                <label for="title" class="col-sm-2 col-form-label">Lugar</label>
                <div class="col-sm-6">
                    <b-form-select v-model="form.lugar" :options="lugares"></b-form-select>
                </div>
            </div>

               <div class="rows">
                <div class="col text-left">
                  <!-- v-on:click="uploadPhoto"-->
                  <b-button   type="submit" variant="primary">Insertar Evento</b-button>
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
  props: {
    token: String,
    username: String
  },
  data() {
    return {
      form: {
        nombre: "",
        hora_inicio: "",
        hora_final: "",
        descripcion: "",
        foto: '',
        fecha: "",
        lugar: "",
        categoria: "",
        empresa: this.username
      },
      categorias_id: [],
      file: "",
      categorias: [],
      lugares: []
    };
  },
  methods: {
    onSubmit(evt) {
        evt.preventDefault();
        console.log("nombre", this.form.nombre);
        console.log("hora_inicio", this.form.hora_inicio);
        console.log("hora_final", this.form.hora_final);
        console.log("descripcion", this.form.descripcion);
        console.log("foto", this.form.foto);
        console.log("fecha", this.form.fecha);
        console.log("lugar", this.form.lugar);
        console.log("categoria", this.form.categoria);
        console.log("empresa", this.form.empresa);
        console.log(this.categorias_id)
        var i;
        for (i = 0; i < this.categorias_id.length; i++) {
            if(this.form.categoria == this.categorias_id[i].nombre){
                this.form.categoria=this.categorias_id[i].id
                break;
            }
        }

      console.log("alv")
      const path = this.$hostname + "/new_evento/";
      console.log(path)
      axios.post(path, {
            nombre: this.form.nombre,
            hora_inicio: this.form.hora_inicio,
            hora_final:this.form.hora_final,
            descripcion:this.form.descripcion,
            foto: this.form.foto,
            fecha:this.form.fecha,
            lugar: this.form.lugar,
            categoria: this.form.categoria,
            empresa: this.form.empresa
        })
        .then(response => {
          console.log(response.data);
          swal("Se ha creado el evento correctamente", "", "success");
            this.form.nombre=''
            this.form.hora_inicio=''
            this.form.hora_final=''
            this.form.descripcion=''
            this.form.foto=''
            this.form.fecha=''
            this.form.lugar=''
            this.form.categoria=''
            this.form.empresa=''
        })
        .catch(error => {
          swal("Error al crear el evento", "", "error");
        });

    },
    uploadPhoto() {
      let formData = new FormData();
      formData.append('file', this.file);
      formData.append('name', this.file.name);
      const path = this.$hostname + "/upload_evento_foto/";
      axios.post(path, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then(response => {
          this.foto=this.$s3_hots+this.file.name
        }).catch(error => {
          swal("No es posible subir la imagen", "", "error");
        });
    },
    uploadPhoto2() {
      // const formData = new FormData()
      // formData.append('myFile', this.foto_evento, this.foto_evento.name)
      console.log("upload");
      const path = this.$hostname + "/uploadFotoEvento/";
      console.log("paso-........");
      console.log(this.daticos);
      axios.get("http://localhost:8000/cliente/", {
          params: {
            usuario: this.daticos.usuario,
            contrasenia: this.daticos.contrasenia
          }
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          swal("Usuario o contraseña Incorrectos", "", "error");
        });
    },
    getCategorias() {
      const path = this.$hostname + "/categoria/";
      axios
        .get(path)
        .then(response => {
          this.categorias_id = response.data;
          var i;
          for (i = 0; i < response.data.length; i++) {
            this.categorias.push(response.data[i].nombre);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    getLugar() {
      const path = this.$hostname + "/lugar/";
      axios
        .get(path)
        .then(response => {
          var i;
          for (i = 0; i < response.data.length; i++) {
            this.lugares.push(response.data[i].direccion);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      let formData = new FormData();
      formData.append('file', this.file);
      var date = new Date();
      var timestamp = date.getTime();
      var randon_number2=Math.floor((Math.random() * 98) + 1);
      var str_acomp=timestamp+''+randon_number2+'_';
      formData.append('name', str_acomp+this.file.name);
      const path = this.$hostname + "/upload_evento_foto/";
      axios.post(path, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then(response => {
          this.form.foto=this.$s3_hots+str_acomp+this.file.name
          console.log(this.form.foto)
        }).catch(error => {
          swal("No es posible subir la imagen", "", "error");
        });
    }
  },

  created() {
    this.getCategorias();
    this.getLugar();
  }
};
</script>

<style lang="css" scope>
</style>
