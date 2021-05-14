<template>
   <div>
    <navbar-section/>
    
    <nuxt />
  </div>
</template>

<script>

import NavbarSection from "~/components/navbar.vue";

export default {
  components: {
    NavbarSection
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI','Monserrat',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.crypto{
     cursor: pointer;
     user-select: none;
     margin-top: 15vh;
    margin-left: auto;
    width: 20%;
    display: block;
        width: 15%;
    display: block;
    padding: 0 10px;
    margin-right: 1%;
    background-color: #F9FAFB;
     --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    border-radius: 2px;
}
 .crypto:hover {
    background-color: #f0f0f0;
}
.crypto span{
  
  text-align:right;
  padding-right:20px ;
}

.crypto .dollar{
  font-size: 20px;
  display: block;
  
}

.crypto .rupees{
  font-size: 15px;
  color: #777777;
  display: block;
}
.search {
    width: 50%;
    margin-left: auto;
    margin-top: 1vh;
    margin-right: auto;
}

.search input[type="text"]{
  width: 80%;
  background-color: #f1f1f1;
  border: 2px #F3F4F6 solid;
   --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  padding-left: 10px;
  font-size: 14px;
  border-radius: 2px;
}

.search input:focus { outline: none; }

.search input[type="submit"]{
   background-color: #3B82F6;
   
   
  font-size: 14px;
  color: #fff;
  border:2px solid #3B82F6;
  width: 10%;
  font-size: 14px;
  border-radius: 2px;
}
</style>
