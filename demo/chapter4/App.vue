<template>
  <main>
    <h1>App.vue</h1>
    <p>vue with vue </p>
    <hr>
    <foo></foo>
  </main>
</template>
<style>
h1{
  color: red
}
</style>
<script>
import Foo from './components/Foo.vue'
export default {
  name:'main',
  components:{
    Foo
  }
}
</script>
