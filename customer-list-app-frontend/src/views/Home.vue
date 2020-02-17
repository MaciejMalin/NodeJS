<template>
    <div class="container-fluid">
      <div class="text-center">
        <h1>Fakturki dla opornych</h1>
       <p>Program do wystawiania fakturek VAT</p>
       <div v-if="customers.length === 0">
            <h2> Brak klientów do wyswietlenia </h2>
        </div>
      </div>

        <div class="">
            <table class="table table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Imie</th>
                  <th scope="col">Nazwisko</th>
                  <th scope="col">Email</th>
                  <th scope="col">Telefon</th>
                  <th scope="col">Adres</th>
                  <th scope="col">Opis</th>
                  
                  <th scope="col">Akcje</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="customer in customers" :key="customer._id">
                  <td>{{ customer.first_name }}</td>
                  <td>{{ customer.last_name }}</td>
                  <td>{{ customer.email }}</td>
                  <td>{{ customer.phone }}</td>
                  <td>{{ customer.address }}</td>
                  <td>{{ customer.description }}</td>
                  
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group" style="margin-bottom: 20px;">
                                  <router-link :to="{name: 'Edit', params: {id: customer._id}}" class="btn btn-sm btn-outline-secondary">Wystaw fakturę</router-link>
                                  <button class="btn btn-sm btn-outline-secondary" v-on:click="deleteCustomer(customer._id)">Usuń klienta</button>
                                </div>
                              </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
</template>
<script>
import { server } from "../helper";
import axios from "axios";
export default {
  data() {
    return {
      customers: []
    };
  },
  created() {
    this.fetchCustomers();
  },
  methods: {
    fetchCustomers() {
      axios
        .get(`${server.baseURL}/customer/customers`)
        .then(data => (this.customers = data.data));
    },
    deleteCustomer(id) {
      axios
        .delete(`${server.baseURL}/customer/delete?customerID=${id}`)
        .then(data => {
          console.log(data);
          window.location.reload();
        });
    }
  }
};
</script>
