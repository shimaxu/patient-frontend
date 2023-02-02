<script setup>
import { usePatientStore } from "@/composables/usePatientStore";
import TableContainer from "@/components/ui/TableContainer.vue";
import TableColumn from "@/components/ui/TableColumn.vue";
import TableRaw from "@/components/ui/TableRaw.vue";

let registry = usePatientStore();

registry.fillPatients();
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Patients</h1>
        <p class="mt-2 text-sm text-gray-700">
          A list of all the patients with their name
        </p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
        >
          Add Patient
        </button>
      </div>
    </div>
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div
            class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
          >
            <TableContainer>
              <template #head>
                <tr>
                  <TableColumn :columnName="'Name'"> </TableColumn>
                </tr>
              </template>

              <template #body>
                <tr v-for="(patient, i) in registry.patients.data" :key="i">
                  <TableRaw :rawData="patient.name" :rawId="patient.id">
                  </TableRaw>
                </tr>
              </template>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
