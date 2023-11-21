<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav style="display: flex; flex-direction: column;">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/adicionar">Adicionar</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
