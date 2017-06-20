<template>
  <main>
    <h1>App.vue with router</h1>
    <p>vue with vue-router </p>
    <hr>
    <router-link :to="{name:'about'}">About</router-link>
    <hr>
    <router-view></router-view>
  </main>
</template>
<style>
h1{
  color: red
}
</style>
