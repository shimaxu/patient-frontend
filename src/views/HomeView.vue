<script setup>
import StatsMatrix from "@/components/ui/StatsMatrix.vue";
import { usePatientStore } from "@/composables/usePatientStore";
import IconDocumentation from "@/components/icons/IconDocumentation.vue";

let registry = usePatientStore();

registry.fillAddresses();
</script>

<template>
  <h3 class="text-lg font-medium leading-6 text-gray-900">Total Summary</h3>

  <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
    <div
      class="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
    >
      <StatsMatrix
        name="Addresses"
        :count="registry.addressCount"
        :url="'/addresses'"
      >
        <template #icon>
          <IconDocumentation class="h-6 w-6 text-white" aria-hidden="true" />
        </template>
      </StatsMatrix>
    </div>

    <div
      class="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
    >
      <StatsMatrix
        name="Patients"
        :count="registry.patientCount"
        :url="'/addresses'"
      >
        <template #icon>
          <IconDocumentation class="h-6 w-6 text-white" aria-hidden="true" />
        </template>
      </StatsMatrix>
    </div>
  </dl>
</template>
