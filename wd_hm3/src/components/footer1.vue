<template>
  <div id="footer1">
    <router-link to="contact">Contact Us</router-link>

    <div class="icons">
      <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png"/>
      <img src="https://img.icons8.com/ios-filled/50/000000/twitter.png"/>
      <img src="https://img.icons8.com/ios/50/000000/mail.png"/>
    </div>
    
  </div>
</template>

<script>
export default {
    name: "Footer1",
}
</script>

<style scoped lang="scss">
#footer1 {
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

  .icons img {
    padding-left: 20px;
    padding-right: 20px;
  
  }
}
</style>