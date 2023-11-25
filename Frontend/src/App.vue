
<script setup>
import NavBar from './components/Nav-Bar.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
// import TheWelcome from './components/TheWelcome.vue'

</script>

<template >
  <!-- <div class="container"> -->
    <section class="main-navbar-section">
      <NavBar/>
    </section>
  <router-view></router-view>


</template>

<style scoped>
</style>
