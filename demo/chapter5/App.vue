<template>
  <div id="app">
    <h1>App.vue with router</h1>
    <p>vue with vue-router </p>
    <hr>
    <router-link :to="{name:'about'}">About</router-link>
    <router-link :to="{name:'home'}">Home</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>
<style>
h1{
  border: thin solid saddlebrown;
}
</style>
