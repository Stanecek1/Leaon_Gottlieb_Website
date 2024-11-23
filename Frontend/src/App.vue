
<script setup>
import NavBar from './components/Nav-Bar.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
// import TheWelcome from './components/TheWelcome.vue'

</script>

<template >
  <!-- <div class="container"> -->
    <section class="main-navbar-section">
      <div style="height: 5vh; background-color: rgb(245, 245, 245) !important;" class="d-flex justify-content-center">
        <p class= "nav-title my-auto">Leon S. Gottlieb, Esq</p>
      </div>
      <NavBar/>
    </section>
  <router-view></router-view>


</template>

<style scoped>
</style>
