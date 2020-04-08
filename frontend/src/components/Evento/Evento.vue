<template>
      <div class="container">
    <div class="row">
      <div class="col text-left">
       <h2>Bienvenido</h2>
         <div class="content">
    <p>token: {{token}}</p>
  </div>
    <p>username: {{username}}</p>
        


      </div>
    </div>
    </div>
</template>
<script>
export default {
  props: {
    token: String,
    username: String
  }
}
</script>
<style lang="css" scope>

</style>>