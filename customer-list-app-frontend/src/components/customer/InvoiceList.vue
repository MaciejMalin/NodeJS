<template>
    <div class="container-fluid">
      <div class="text-center">
        <h1>Fakturki dla opornych</h1>
       <p>Program do wystawiania fakturek VAT</p>
       <div v-if="invoices.length === 0">
            <h2> Brak faktur do wyświetlenia </h2>
        </div>
      </div>

        <div class="">
            <table class="table table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Imie</th>
                  <th scope="col">Nazwisko</th>
                  <th scope="col">Email</th>
                  <th scope="col">Data wystawienia</th>
                  <th scope="col">Wartość</th>
                  
                  <th scope="col">Akcje</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="invoice in invoices" :key="invoice._id">
                  <td>{{ invoice.first_name_invoice }}</td>
                  <td>{{ invoice.last_name_invoice }}</td>
                  <td>{{ invoice.email_invoice }}</td>
                  <td>{{ invoice.created_at }}</td>
                  <td>{{ invoice.sum_invoice }} zł</td>
                  
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group" style="margin-bottom: 20px; margin-left: 195px;">
                                  <router-link :to="{name: 'EditInvoice', params: {id: invoice._id}}" class="btn btn-sm btn-outline-secondary">Obejrzyj fakturę</router-link>
                                  <button class="btn btn-sm btn-outline-secondary" v-on:click="deleteInvoice(invoice._id)">Usuń fakture</button>
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
import { server } from "../../helper";
import axios from "axios";
export default {
  data() {
    return {
      invoices: []
    };
  },
  created() {
    this.fetchInvoices();
  },
  methods: {
    fetchInvoices() {
      axios
        .get(`${server.baseURL}/invoice/invoices`)
        .then(data => (this.invoices = data.data));
    },
    deleteInvoice(id) {
      axios
        .delete(`${server.baseURL}/invoice/delete?invoiceID=${id}`)
        .then(data => {
          console.log(data);
          window.location.reload();
        });
    }
  }
};
</script>