<template lang ="html">
    
      <div class="container">
    <div class="row">
      <div class="col text-left">
       <h2>Registro</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <form @submit="onSubmit">

               
               
              <div class="form-group row">
                    <label for="NIT" class="col-sm-2 col-form-label">NIT</label>
                <div class="col-sm-6">
                  <input type="test" placeholder="NIT" name="NIT" class="form-control" v-model.trim="form.NIT">
                </div>
               </div>



              <div class="form-group row">
                  <label for="nombre" class="col-sm-2 col-form-label">Nombres</label>
                <div class="col-sm-6">
                  <input type="test" placeholder="Nombre" name="nombre" class="form-control" v-model.trim="form.first_name">
               </div>
               </div>

              <div class="form-group row">
                  <label for="last_name" class="col-sm-2 col-form-label">Apellidos</label>
                <div class="col-sm-6">
                  <input type="test" placeholder="Apellidos" name="last_name" class="form-control" v-model.trim="form.last_name">
               </div>
               </div>

                 <div class="form-group row">
<label for="email" class="col-sm-2 col-form-label">Correo</label>
                <div class="col-sm-6">
                  <input type="test" placeholder="Correo" name="email" class="form-control" v-model.trim="form.email">
               </div>
               </div>



                 <div class="form-group row">
                     <label for="direccion" class="col-sm-2 col-form-label">Direccion</label>
                <div class="col-sm-6">
                  <input type="test" placeholder="direccion" name="direccion" class="form-control" v-model.trim="form.direccion">
               </div>
               </div>



                 <div class="form-group row">
<label for="telefono" class="col-sm-2 col-form-label">Telefono</label>
                <div class="col-sm-6">
                  <input type="test" placeholder="Telefono" name="telefono" class="form-control" v-model.trim="form.telefono">
               </div>
               </div>



                 <div class="form-group row">
<label for="username" class="col-sm-2 col-form-label">Usuario</label>
                <div class="col-sm-6">
                  <input type="test" placeholder="Usuario" name="username" class="form-control" v-model.trim="form.username">
               </div>
               </div>



                 <div class="form-group row">
<label for="password" class="col-sm-2 col-form-label">Contraseña</label>
                <div class="col-sm-6">
                  <input type="password" placeholder="Contraseña" name="password" class="form-control" v-model.trim="form.password">
               </div>
               </div>



                 <div class="form-group row">
<label for="password" class="col-sm-2 col-form-label">Contraseña</label>
                <div class="col-sm-6">
                  <input type="password" placeholder="Contraseña" name="password" class="form-control" v-model.trim="form.password2">
               </div>
               </div>

               <div class="rows">
                <div class="col text-left">
                  <b-button type="submit" variant="primary">Registrarse</b-button>
                  <b-button type="submit" class="btn-large-space" :to="{name:'Login'}">Cancelar</b-button>
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
        NIT: "",
        first_name: "",
        last_name:"",
        email:"",
        direccion:"",
        telefono:"",
        username:"",
        password:"",
        password2:""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      console.log("alv");
      const path = "http://localhost:8000/users/";
      axios.post(path, this.form)
        .then(response => {
        this.form.description = response.data.description;
        this.form.NIT=response.data.NIT;
        this.form.first_name=response.data.first_name;
        this.form.last_name=response.data.last_name;
        this.form.email=response.data.email;
        this.form.direccion=response.data.direccion;
        this.form.telefono=response.data.telefono;
        this.form.username=response.data.username;
        this.form.password=response.data.password;
        swal("Se ha registrado exitosamente", "", "success");
        console.log(response);
        })
        .catch(error => {
          console.log(error)
          swal("No se ha podido crear su usuario.", "", "error");
        });
    }
  },
  created() {}



};


</script>

<style lang="css" scope>

</style>
