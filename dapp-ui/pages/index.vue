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
  background-color: #1D4ED8;
  color: white;
}
.pricecss{
  font-size: 30px;
      color: #2563EB;

}
.namecss{
  color: rgb(90, 90, 90);
  padding:5px 0 ;
}
.imgcss{
  border:2px #E5E7EB solid;
}
.descss{
    color: #777;
    font-size: 15px;
}
.btn-secondary {
    color: #2563EB;
    background-color:#f7f7f7 ;
    border-color: #fff;
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
    background-color: #F3F4F6;
    background-clip: border-box;
    border: 1px solid #E5E7EB;
    border-radius: 4px;

    /*background  border #999999 radius 2-4px */
}
.navbar-dark{
  background-color: #3B82F6;
    /* background-image: linear-gradient(to right,#1ec7ff , #2F80ED ); */

}

/*tailwind*/

.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-xl {
  --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

/*/*//* */
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
