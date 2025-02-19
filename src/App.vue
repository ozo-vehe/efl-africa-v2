<script setup lang="ts">
import FooterComponent from './components/FooterComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <NavbarComponent />
  <RouterView />
  <FooterComponent />
</template>

<style scoped></style>
