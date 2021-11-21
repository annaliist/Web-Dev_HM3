<template>
  <div class="posts">
    <div id="reset"> <button v-on:click="reset"> Reset likes </button></div>
    <div class="item" v-for="product in productList" :key="product.id">
      <div class="image-box"> <!-- divMain -->

          <div class="top">   <!-- divTop -->
            <div class="author">
              <div class='<img>'> <img v-bind:src=product.profile_image /> </div>
              <div class='<h3 class="comment">'> {{ product.author}} </div>
            </div>
            <div class='<h3>'> {{ product.date }} </div>
          </div>

          <div class="image"> <!-- divImage -->
            <div class="image"> 
              <div class='<img>'> <img v-bind:src=product.image /> </div>
              <div class='<p class="comment">'> {{ product.body }} </div>
            </div>
          </div>

        <div class="bottom"> <div id="like">  <button v-on:click="like"> Like </button> {{ product.counter }}
                                              </div> 
                                              <!-- divBottom --> 
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



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.posts {
  background-color: white;
  padding-top: 50px;
  padding-bottom: 50px;
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

.author img {
  height: 30px;
  width: 30px;
  border-radius: 50%;
}

/* descendant selector */
div img {
  display: block;
  max-width: 100%;
  max-height: 600px;
  width: auto;
  height: auto;
  margin: auto;
  padding-bottom: 10px;
}

.image-box p {
  margin: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
}

.bottom {
  margin: 20px;
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
