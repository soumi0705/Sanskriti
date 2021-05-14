<template>
  <div class = "bd-dark">
    <div class="card shadow-md" style="width: 18rem;">
      <div class="card-body ">
        <img class="card-img-top imgcss" src="~/assets/default.jpg" alt="Card image cap" />
        <h5 class="card-title namecss">{{propObject.name}}</h5>
        <p class="card-text descss">Description: {{propObject.description}}</p>
        <h4 class="card-title pricecss">₹{{propObject.price}}/-</h4>
        <p class="card-text">Available: {{propObject.isActive}}</p>
        <button class="btn btn-primary" v-on:click="displayDetails">Buy Now</button>
      </div>
    </div>
    <details-modal v-if="showModal" :propData="propObject">
    </details-modal>
  </div>
</template>

<script>
import DetailsModal from "~/components/detailsModal.vue";

export default {
  props: ["propObject"],
  data() {
    return {
      showModal: false
    }
  },
  components: {
    DetailsModal
  },
  methods: {
    displayDetails() {
      this.showModal = !this.showModal;
    },
    turnInactive(){
      var avail = this.propObject.isActive;
      if(avail == "false"){
        
      }
    }
  }
};
</script>

