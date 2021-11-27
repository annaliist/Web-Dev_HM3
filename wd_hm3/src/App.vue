<template>
  <navbar></navbar>

  <router-view />

  <footer1></footer1>
</template>

<script>
import navbar from "@/components/navbar.vue";
import footer1 from "@/components/footer1.vue";

export default {
  components: {
    navbar,
    footer1
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
