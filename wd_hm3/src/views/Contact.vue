<template>
  <div class="contact">
    <h1>GET IN TOUCH</h1>

    <div class="submit">
        <div class="form">
            <form>
            <input type="text" name="fname" placeholder="First name"><br>
            <input type="text" name="lname" placeholder="Last name"><br>
            <input type="email" name="lname" placeholder="Email"><br>
            <textarea name="message" cols="40" rows="5" placeholder="Message"></textarea>

            </form>

        <button type="button">SUBMIT</button>
        </div>

        <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1622531233735x512153190912028100%2FVertical.jpg" alt="logo">
    </div>
  </div>

</template>

<script>

</script>

<style scoped>
input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
}

button {
    color: white;
    background-color: black;
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
}

button:hover {
    color: black;
    background-color: white;
}

textarea {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
}

h1 {
    padding: 100px 0px 50px 0px;
    font-size: 50px;
}

.contact {
    background-color: #EFEFEF;
}

.contact img {
    width: 350px;
    height: auto;
    padding: 0px 50px 100px 0px;
}

.form {
    padding: 0px 50px 0px 0px;
}

.submit{
    display: flex;
    justify-content: center;
}
</style>