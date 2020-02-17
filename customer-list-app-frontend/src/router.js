import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/views/Home';
import EditComponent from '@/components/customer/Edit';
import CreateComponent from '@/components/customer/Create';
import InvoiceListComponent from '@/components/customer/InvoiceList';
import EditInvoiceComponent from '@/components/customer/EditInvoice'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: { name: 'home' } },
    { path: '/home', name: 'home', component: HomeComponent },
    { path: '/create', name: 'Create', component: CreateComponent },
    { path: '/edit/:id', name: 'Edit', component: EditComponent },
    { path: '/invoicelist', name: 'InvoiceList', component: InvoiceListComponent },
    { path: '/editinvoice', name: 'EditInvoice', component: EditInvoiceComponent },
  ]
});