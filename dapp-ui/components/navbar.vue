<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
     
      <img :src="Logo" class="logo"/>
       <h1>Sanskriti</h1>
      <ul class="navbar-nav justify-content-end ml-auto">
        <li class="nav-item">
          <b-button v-on:click="toggle" class="margs">
            <span>Register Your Product</span>
            
          </b-button>
        </li>
      </ul>
    </nav>

    <property-form v-if="showModal">
      <h3 slot="header">Register Product</h3>
    </property-form>
  </div>
</template>

<script>
import PropertyForm from "~/components/propertyForm.vue";
import { accountAddress, setProvider, web3 } from "~/plugins/utils";
import Logo from "~/static/sanskriti logo.png";

export default {
  data() {
    return {
      showModal: false,
      address: null,
      Logo : Logo,
    };
  },
  components: {
    PropertyForm,
  
  },
  methods: {
    toggle() {
      const urlParams = new URLSearchParams(window.location.search);
      const verf = urlParams.get('verified');
      const a_no = urlParams.get('adhaarNo');
      console.log(verf + " " +a_no);
      var regex = new RegExp(/[0-9]{4} [0-9]{4} [0-9]{4}/ );
      if(verf == "IDverified!" && regex.exec(a_no)){
        this.showModal = !this.showModal;
      }
      else{
        window.location.href = "http://localhost:5000/faceID";
      }
    },
  }
};
</script>
