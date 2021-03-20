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

    <div class="crypto" @click="binanceLink()">
      <span class="dollar" ref="refd" v-bind:style="{color:dcolor}">{{Dollar}}</span>
      <span class="rupees" >{{Rupees}}</span>
    </div>
    <div class="search">
      <input type="text" name="" id="" placeholder="Search">
      <input type="submit" name="Search" id="">
    </div>
    <property-form v-if="showModal">
      <h3 slot="header">Register Product</h3>
    </property-form>
  </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.18/vue.min.js"></script>


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
      Dollar:"ETH $dollar",
      Rupees:"₹Rupee",
      dcolor:"#000000"
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
  
  binanceLink(){
    window.open('https://www.binance.com/en-IN/trade/ETH_USDT')
  },
  


  //fetching
  
    _main() {
    const _this=this;
    const urlUSDINR = 'https://api.exchangeratesapi.io/latest?symbols=USD,INR&base=USD';
    var xhttp = new XMLHttpRequest();        
    xhttp.onreadystatechange = function () {
      
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            const usd2inr = JSON.parse(this.responseText).rates.INR;
            // _this.Dollar=usd2inr
            console.log(usd2inr);
             _this.crypto(usd2inr)

        }
    };
    xhttp.open('GET', urlUSDINR, true);
    xhttp.send();

},
async crypto(usd2inr) {
    const url = 'https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT';
    const _this=this;
    var xhttp = new XMLHttpRequest();
    var price =0
    var priceN=0
    var priceINR=0
    setInterval(function(){
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.response);
            // change color function
            priceN = JSON.parse(this.response).price
            if(priceN>price){
                //green text 
                _this.dcolor="#02C076"
                // console.log('UP');
            }
            else{
              _this.dcolor="#CF304A"
                // console.log('down');
                //red
            }
            price = priceN
            let roundPrice= Math.round(price*100)/100 //usd
            priceINR=Math.round(roundPrice*usd2inr)
            _this.Rupees=`₹${priceINR}`
            _this.Dollar=`1ETH $${roundPrice}`
            //display price inr
            // console.log(roundPrice);
            // console.log('INR '+priceINR);
            
        }
    };
    xhttp.open('GET',url , true)
    xhttp.send()},1000)
}


  },
  created(){ 
    this._main()
  }
};
</script>
