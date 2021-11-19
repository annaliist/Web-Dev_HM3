<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="contact">Contact</router-link>
  </div>
  
  <router-view />

  <div id="footer">
    <router-link to="contact">Contact Us</router-link>

    <div class="icons">
      <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png"/>
      <img src="https://img.icons8.com/ios-filled/50/000000/twitter.png"/>
      <img src="https://img.icons8.com/ios/50/000000/mail.png"/>
    </div>
    
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;

  a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 20px;

    &.router-link-exact-active {
      color: #666666;
    }
  }
}

#footer {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  padding: 20px;
  align-content: space-around;

  a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 20px;
  }

  .icons{
    img {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
}
</style>
