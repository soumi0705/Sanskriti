<template>
  <div class="container">
    <div>
      
      <div class="row centred">
        <div class="m-3" v-for="post in posts">
          <card :propObject="post" key="post.id" />
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import card from "~/components/card.vue";
import { fetchAllProducts, setProvider } from "~/plugins/utils"


export default {
  components: {
    card
  },
  async mounted() {
    // init Metamask
    await setProvider()


    // fetch all properties
    const products = await fetchAllProducts()
    this.posts = products
  },
  data() {
    return {
      posts: [
      ]
    };
  },
  methods: {
  }
};
</script>

<style>

input .radios{
    width: 10%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.container {
  margin: 10vh auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
}
.margs{
  margin : 1rem 1rem;
}
.logo {
    height: 35px;
    margin: 0.55rem;
}
.btn-primary{
  background-color: black;
  color: white;
}
.btn-secondary {
    color: #fff;
    background-color: #196FE2;
    border-color: #6c757d;
}
.modal-header h3 {
    margin-top: 0;
    color: #394569;
}
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #f7f7f7;
    background-clip: border-box;
    border: 1px solid #999999;
    border-radius: 3px;

    /*background  border #999999 radius 2-4px */
}
.navbar-dark{
  background-color: black;
}
h1 {
    color: #fff;
    margin: 0;
    padding: 0;
    font-size: 40px;
    font-weight: 600;
    font-family: "Montserrat";
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 150;
  font-size: 40px;
  color: #35495e;
  letter-spacing: 1px;
}
.centred{
  justify-content:center;
}
</style>
