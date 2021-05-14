<template>
  <div>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h3>Product Details</h3>
          </div>
          <div class="modal-body">
            <slot name="body">
              <h3>Title: {{propData.name}}</h3>
              <h3>Price: {{propData.price}}</h3>
              <p>Description: {{propData.description}}</p>
              <p>UPI ID: {{propData.upiID}}</p>
              
                <div class="form-group">
                    <label for="quantity">Quantity</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="quantity"
                      placeholder="Quantity"
                    /></div>
              <!-- <form name="buyin" v-on:submit="buy"> -->
                <p>Please select your payment method:</p>
                <input type="radio" class="radios" id="UPI" v-model="p_mode" name="p_mode" value="f">
                <label for="UPI">UPI-INR</label><br>
                <input type="radio" class="radios" id="ETH" v-model="p_mode" name="p_mode" value="t">
                <label for="ETH">ETH</label><br>
                <b-button type="submit" v-on:click="buy" class="mr-5 mt-3">
                  <span>Book Now</span>
                </b-button>
                <b-button type="submit" v-on:click="inactive" class="mr-5 mt-3">
                  <span>Change Availability</span>
                </b-button>
              <!-- </form> -->
              
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { buyProduct, web3, markProduct } from "~/plugins/utils";

export default {
  components: {
  },
  props: ["propData"],
  data() {
    return {
      showModal: false,
      startDate: new Date(),
      flag: true,
      endDate: new Date(),
    };
  },
  methods: {
    
    buy() {
      const p_mode = this.p_mode;
      // get Start date
      const quantity = this.quantity
      // price calculation
      const totalPrice = this.propData.price*(quantity)
      // call metamask.bookProperty
      buyProduct(this.propData.id, quantity, totalPrice, p_mode)
},

    inactive() {
      
      markProduct(this.propData.id)
}
  }
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
