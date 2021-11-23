<template>
<div id="navbar">
    <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609072752424x654841387818197400%2Fhorisontal%2520%25E2%2580%2593%2520koopia.jpg?w=256&h=45&auto=compress&fit=crop&dpr=1" alt="">
    
    <div class="links">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="contact">Contact</router-link>
    </div>
</div>
</template>

<script>
export default {
    name: "navigation",
};
</script>


<style scoped>
#navbar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;

  a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 20px;
    padding: 0px 5px 0px 5px;

    &.router-link-exact-active {
      color: #EFEFEF;
    }
  }

  img {
    height: 40px;
    width: auto;
  }
}
</style>