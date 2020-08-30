/* eslint-disable */

import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Organization from "./views/Organization.vue";
import Program from "./views/Program.vue";
import Place from "./views/Place.vue";
// import Acсommodation from './views/Acсommodation.vue';
import Contacts from "./views/Contacts.vue";
import Participation from "./views/Participation.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/index.html",
      name: "home",
      component: Home
    },
    {
      path: "/organization",
      name: "organization",
      component: Organization
    },
    {
      path: "/program",
      name: "program",
      component: Program
    },
    {
      path: "/place",
      name: "place",
      component: Place
    },
    // {
    //   path: '/acсommodation',
    //   name: 'acсommodation',
    //   component: Acсommodation
    // },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts
    },
    {
      path: "/participation",
      name: "participation",
      component: Participation
    }
  ]
});
