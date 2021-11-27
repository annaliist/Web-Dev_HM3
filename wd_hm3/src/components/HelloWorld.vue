<template>
  <div class="posts">
    <div id="reset"> <button v-on:click="reset"> Reset likes </button></div>
    <div class="item" v-for="product in productList" :key="product.id">
      <div class="image-box"> <!-- divMain -->

          <div class="top">   <!-- divTop -->
            <div class="author">
              <img v-bind:src=product.profile_image />
              <div class='<h3 class="comment">'> {{ product.author}} </div>
            </div>
            <div class="date"> {{ product.date }} </div>
          </div>

          <div class="image"> <!-- divImage -->
            <div class="image"> 
              <div class='img'> <img v-bind:src=product.image /> </div>
              <div class="comment"> {{ product.body }} </div>
            </div>
          </div>

        <div class="bottom">
          <div id="like"> 
            <button v-on:click="like"> Like </button> {{ product.counter }}
          </div> 
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function() {
    return {
  }},
  computed: {
    productList(){
    return this.$store.state.productList
  }},
  methods: {
  like: function() {
  this.$store.commit("like")},
  reset: function() {
  this.$store.commit("reset");
  }},
  };
</script>

<style scoped lang="scss">
#reset {
  padding-bottom: 20px;
  padding-left: 410px;
}

.posts {
  background-color: white;
  padding-top: 20px;
  max-width: 900px;
  margin: auto;
}

.item {
  margin-bottom: 5px;
  padding: 3px 5px;
}

.image-box {
  width: 80%;
  font-family: Georgia;
  font-weight: bold;
  font-size: 20px;
  padding: 5px;
  margin: auto;
  margin-bottom: 50px;
  box-shadow: -1px 1px 5px 9px gainsboro;
}

.top {
  display: flex;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
}

.author{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2c3e50;
  font-size: 16px;
}

.author img {
  height: 30px;
  width: 30px;
  padding-right: 10px;
  border-radius: 50%;
}

.date{
  color: #2c3e50;
  font-size: 16px;
}

.comment {
  color: #2c3e50;
  font-size: 18px;
}

/* descendant selector */
div img {
  display: block;
  max-width: 100%;
  max-height: 600px;
  width: auto;
  height: auto;
  margin: auto;
}

.image div {
  padding: 0px 10px 10px 10px;
}

.img img {
  padding-bottom: 10px;
}

.image-box p {
  margin: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
}

.bottom {
  padding: 0px 0px 10px 20px;
}

/* adjacent sibling selector */
h3 {
  color: darkgrey;
  font-size: 12px;
  padding-left: 5px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
