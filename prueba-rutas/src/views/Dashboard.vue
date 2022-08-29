<template>
  <h1>Dashboard</h1>
  <div id="nav">
    <router-link :to="{ name: 'home-dasboard' }">home</router-link> |
    <router-link :to="{ name: 'componente-dashboard' }">margarita</router-link>
    |
  </div>
  <router-view />
</template>

<script>
export default {};
</script>

<style></style>
