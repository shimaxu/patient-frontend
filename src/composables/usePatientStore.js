import { defineStore } from "pinia";

export let usePatientStore = defineStore("registry", {
  state: () => ({
    addresses: [],
    patients: [],
  }),

  actions: {
    fillAddresses() {
      fetch("http://patient-backend.localhost/api/addresses")
        .then((res) => res.json())
        .then((data) => (this.addresses = data));
    },
    fillPatients() {
      fetch("http://patient-backend.localhost/api/patients")
        .then((res) => res.json())
        .then((data) => (this.patients = data));
    },
  },

  getters: {
    addressCount(state) {
      return state.addresses?.meta?.total;
    },
    patientCount(state) {
      return state.patients?.meta?.total;
    },
  },
});
