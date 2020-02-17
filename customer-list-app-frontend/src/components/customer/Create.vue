<template>
   <div>
        <div class="col-md-12 form-wrapper">
          <h2> Utworz klienta </h2>
          <form id="create-post-form" @submit.prevent="createCustomer">
               <div class="form-group col-md-12">
                <label for="title"> Imie </label>
                <input type="text" id="first_name_invoice2" v-model="first_name" name="title" class="form-control" placeholder="Wprowadz imie">
               </div>
               <div class="form-group col-md-12">
                <label for="title"> Nazwisko </label>
                <input type="text" id="last_name_invoice2" v-model="last_name" name="title" class="form-control" placeholder="Wprowadz nazwisko">
               </div>
             <div class="form-group col-md-12">
                <label for="title"> Email </label>
                <input type="email" id="email_invoice2" v-model="email" name="title" class="form-control" placeholder="Wprowadz email">
            </div>
            <div class="form-group col-md-12">
                <label for="title"> Telefon </label>
                <input type="number" id="phone_number_invoice" v-model.number="phone" name="title" class="form-control" placeholder="Wprowadz numer telefonu">
            </div>
            <div class="form-group col-md-12">
                <label for="title"> Adres </label>
                <input type="text" id="address_invoice" v-model="address" name="title" class="form-control" placeholder="Wprowadz adres">
            </div>
              <div class="form-group col-md-12">
                  <label for="description"> Opis </label>
                  <input type="text" id="description" v-model="description" name="description" class="form-control" placeholder="Wprowadz opis">
              </div>
              <div class="form-group col-md-12 pull-right">
                  <button class="btn btn-success" type="submit"> Stworz klienta </button>
              </div>           </form>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { server } from "../../helper";
import router from "../../router";
export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      description: ""
    };
  },
  methods: {
    createCustomer() {
      let customerData = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        phone: this.phone,
        address: this.address,
        description: this.description
      };
      this.__submitToServer(customerData);
    },
    __submitToServer(data) {
      // eslint-disable-next-line no-unused-vars
      axios.post(`${server.baseURL}/customer/create`, data).then(data => {
        router.push({ name: "home" });
      });
    }
  }
};
</script>