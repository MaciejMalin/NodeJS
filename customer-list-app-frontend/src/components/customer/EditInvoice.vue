<style>
    .invoice-box {
        max-width: 800px;
        margin: auto;
        padding: 30px;
        border: 1px solid #eee;
        box-shadow: 0 0 10px rgba(0, 0, 0, .15);
        font-size: 16px;
        line-height: 24px;
        font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
        color: #555;
    }
    
    .invoice-box table {
        width: 100%;
        line-height: inherit;
        text-align: left;
    }
    
    .invoice-box table td {
        padding: 5px;
        vertical-align: top;
    }
    
    .invoice-box table tr td:nth-child(2) {
        text-align: right;
    }
    
    .invoice-box table tr.top table td {
        padding-bottom: 20px;
    }
    
    .invoice-box table tr.top table td.title {
        font-size: 45px;
        line-height: 45px;
        color: #333;
    }
    
    .invoice-box table tr.information table td {
        padding-bottom: 40px;
    }
    
    .invoice-box table tr.heading td {
        background: #eee;
        border-bottom: 1px solid #ddd;
        font-weight: bold;
    }
    
    .invoice-box table tr.details td {
        padding-bottom: 20px;
    }
    
    .invoice-box table tr.item td{
        border-bottom: 1px solid #eee;
    }
    
    .invoice-box table tr.item.last td {
        border-bottom: none;
    }
    
    .invoice-box table tr.total td:nth-child(2) {
        border-top: 2px solid #eee;
        font-weight: bold;
    }
    
    @media only screen and (max-width: 600px) {
        .invoice-box table tr.top table td {
            width: 100%;
            display: block;
            text-align: center;
        }
        
        .invoice-box table tr.information table td {
            width: 100%;
            display: block;
            text-align: center;
        }
    }
    
    /** RTL **/
    .rtl {
        direction: rtl;
        font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
    }
    
    .rtl table {
        text-align: right;
    }
    
    .rtl table tr td:nth-child(2) {
        text-align: left;
    }

    #first_name, #last_name, #email, #first_name_invoice, #last_name_invoice, #email_invoice {
    background:none;
	border:none;
	bottom:auto;
	clear:none;
	cursor:default;
	/* didn't really know what the default for display should be*/
	/*display:inline;*/
	float:none;
	font-family:Arial, Helvetica, sans-serif;
	font-size:medium;
	font-style:normal;
	font-weight:normal;
	height:auto;
	left:auto;
	letter-spacing:normal;
	line-height:normal;
	max-height:none;
	max-width:none;
	min-height:0;
	min-width:0;
	overflow:visible;
	position:static;
	right:auto;
	text-align:left;
	text-decoration:none;
	text-indent:0;
	text-transform:none;
	top:auto;
	visibility:visible;
	white-space:normal;
	width:auto;
	z-index:auto;
    padding: 5px;
    margin: 0px;
    }
    </style>

<template>
   <div>
        

        <form id="create-post-form" @submit.prevent="createInvoice">
        <div class="invoice-box">
        <table cellpadding="0" cellspacing="0">
            <tr class="top">
                <td colspan="2">
                    <table>
                        <tr>
                            <td class="title">
                                <img src="" style="width:100%; max-width:300px;">
                            </td>
                            
                            <td>
                                Data wystawienia: 27-01-2020<br>
                                Termin płatności: 27-02-2020<br>
                                Gdańsk
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            
            <tr class="information">
                <td colspan="2">
                    <table>
                        <tr>
                            <div style="float: left;">
                                <b>Sprzedawca:</b>
                                <input type="text" id="first_name" name="title" class="form-control" value="Kopyszex SP. Z.O.O.">
                                <input type="text" id="last_name" name="title" class="form-control" value="Łukasz Kopyszko">
                                <input type="text" id="email" name="title" class="form-control" value="lukaszkopyszko@kopyszex.pl">
                            </div>
                            <div style="float: right;">
                                <b>Nabywca:</b>
                                <input type="text" id="first_name_invoice" v-model="invoice.first_name_invoice" name="title" class="form-control" placeholder="Enter firstname">
                                <input type="text" id="last_name_invoice" v-model="invoice.last_name_invoice" name="title" class="form-control" placeholder="Enter Last name">
                                <input type="text" id="email_invoice" v-model="invoice.email_invoice" name="title" class="form-control" placeholder="Enter email">
                            </div>
                        </tr>
                    </table>
                </td>
            </tr>
            
            <tr class="heading">
                <td>
                    Metoda płatności:
                </td>
                
                <td>
                    <select v-model="invoice.payment_method_invoice">
                        <option disabled value="">Proszę wybrać metode płatności</option>
                        <option>Gotówka</option>
                        <option>Przelew bankowy</option>
                        <option>Czek</option>
                    </select>
                </td>
            </tr>
            
            <tr class="details">
                <td>
                    
                </td>
                
                <td>
                    
                </td>
            </tr>
            
            <tr class="heading">
                <td>
                    Usługa/Produkt
                </td>
                
                <td>
                    Cena
                </td>
            </tr>
            
            <tr class="item">
                <td>
                    <input v-model="invoice.product01_invoice" type="text" name="title" class="form-control" placeholder="Wpisz usługę/produkt">
                </td>
                
                <td style="float: right;">
                    <input id="cena" v-model="invoice.price01_invoice" type="number" name="title" class="form-control prc" placeholder="Wpisz cenę">
                </td>
            </tr>
            
            <tr class="item">
                <td>
                    <input v-model="invoice.product02_invoice" type="text" name="title" class="form-control" placeholder="Wpisz usługę/produkt">
                </td>
                
                <td style="float: right;">
                    <input id="cena" v-model="invoice.price02_invoice" type="number" name="title" class="form-control prc" placeholder="Wpisz cenę">
                </td>
            </tr>
            
            <tr class="item">
                <td>
                    <input v-model="invoice.product03_invoice" type="text" name="title" class="form-control" placeholder="Wpisz usługę/produkt">
                </td>
                
                <td style="float: right;">
                    <input id="cena" v-model="invoice.price03_invoice" type="number" name="title" class="form-control prc" placeholder="Wpisz cenę">
                </td>
            </tr>
            
            <tr class="item">
                <td>
                    <input v-model="invoice.product04_invoice" type="text" name="title" class="form-control" placeholder="Wpisz usługę/produkt">
                </td>
                
                <td style="float: right;">
                    <input id="cena" v-model="invoice.price04_invoice" type="number" name="title" class="form-control prc" placeholder="Wpisz cenę">
                </td>
            </tr>
            
            <tr class="item">
                <td>
                    <input type="text" v-model="invoice.product05_invoice" name="title" class="form-control" placeholder="Wpisz usługę/produkt">
                </td>
                
                <td style="float: right;">
                    <input id="cena" v-model="invoice.price05_invoice" type="number" name="title" class="form-control prc" placeholder="Wpisz cenę">
                </td>
            </tr>
            
            <tr class="item">
                <td>
                    <input v-model="invoice.product06_invoice" type="text" name="title" class="form-control" placeholder="Wpisz usługę/produkt">
                </td>
                
                <td style="float: right;">
                    <input id="cena" v-model="invoice.price06_invoice" type="number" name="title" class="form-control prc" placeholder="Wpisz cenę">
                </td>
            </tr>
            
            <tr class="item">
                <td>
                    <input v-model="invoice.product07_invoice" type="text" name="title" class="form-control" placeholder="Wpisz usługę/produkt">
                </td>
                
                <td style="float: right;">
                    <input id="cena" v-model="invoice.price07_invoice" type="number" name="title" class="form-control prc" placeholder="Wpisz cenę">
                </td>
            </tr>
            
            <tr class="item">
                <td>
                    <input v-model="invoice.product08_invoice" type="text" name="title" class="form-control" placeholder="Wpisz usługę/produkt">
                </td>
                
                <td style="float: right;">
                    <input id="cena" v-model="invoice.price08_invoice" type="number" name="title" class="form-control prc" placeholder="Wpisz cenę">
                </td>
            </tr>
            
            <tr class="item">
                <td>
                    <input v-model="invoice.product09_invoice" type="text" name="title" class="form-control" placeholder="Wpisz usługę/produkt">
                </td>
                
                <td style="float: right;">
                    <input id="cena" v-model="invoice.price09_invoice" type="number" name="title" class="form-control prc" placeholder="Wpisz cenę">
                </td>
            </tr>
            
            <tr class="item">
                <td>
                    <input v-model="invoice.product10_invoice" type="text" name="title" class="form-control" placeholder="Wpisz usługę/produkt">
                </td>
                
                <td style="float: right;">
                    <input id="cena" v-model="invoice.price10_invoice" type="number" name="title" class="form-control prc" placeholder="Wpisz cenę">
                </td>
            </tr>
            
            <tr class="total">
                <td></td>
                
                <td>
                   Cena całkowita: <input id="cena" v-model="invoice.sum_invoice" type="number" name="title" class="form-control prc">
                </td>
            </tr>
        </table>
    </div>
    <div class="col-md-12 form-wrapper" style="padding-top: 20px">
        <div class="form-group col-md-12 pull-right">
            <router-link :to="{name: 'InvoiceList'}" class="btn btn-sm btn-info">Powrót do faktur</router-link>
        </div>           
    </div>
    </form>
    </div>  
</template>
<script>
import { server } from "../../helper";
import axios from "axios";
import router from "../../router";
export default {
  data() {
    return {
      id: 0,
      invoice: {},
      first_name_invoice: "",
      last_name_invoice: "",
      email_invoice: ""
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getInvoice();
  },
  methods: {
    getInvoice() {
      axios
        .get(`${server.baseURL}/invoice/invoice/${this.id}`)
        .then(data => (this.invoice = data.data));
    },
    __submitToServer(data) {
      // eslint-disable-next-line no-unused-vars
      axios.post(`${server.baseURL}/invoice/create`, data).then(data => {
        router.push({ name: "home" });
      });
    },
    navigate() {
      router.go(-1);
    }
  }
};
</script>
