<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Headerbar from './components/Headerbar.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Headerbar/>
  <Navbar />
  <router-view></router-view>
</template>

<style scoped>

</style>
