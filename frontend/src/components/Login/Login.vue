<template lang="html">

  <div class="container">
    <div class="row">
      <div class="col text-left">
       <h2>LOGIN</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <form @submit="onSubmit">
              <div class="form-group row">
                <div class="col-sm-6">
                  <input type="test" placeholder="User name" name="username" class="form-control" v-model.trim="form.username">
                </div>
               </div>

              <div class="form-group row">
                <div class="col-sm-6">
                  <input type="password" placeholder="Password" name="password" class="form-control" v-model.trim="form.password">
               </div>
               </div>

               <div class="rows">
                <div class="col text-left">
                  <b-button type="submit" variant="primary">Login</b-button>
                  <b-button type="submit" class="btn-large-space" :to="{name:'NewUser'}">Registro</b-button>
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
        username: "",
        password: "",
        token: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      console.log("1", this.form.username);
      console.log("2", this.password);
      const path = "http://ec2-54-161-138-190.compute-1.amazonaws.com:8080/rest-auth/login/";
      console.log("1", this.bookId);
      axios
        .post(path, this.form)
        .then(response => {
          console.log("respuestas", response);
          this.token = response.data.key;
          console.log("token", this.token);
           this.$router.push({ name: "Evento", params: { token: this.token, username:this.form.username } });
        })
        .catch(error => {
          swal("Usuario o contraseña Incorrectos", "", "error");
        });
    }
  },
  created() {}
};
</script>

<style lang="css" scope>
</style>
