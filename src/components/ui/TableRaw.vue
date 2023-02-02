<script setup>
import { defineProps } from "vue";

const props = defineProps({
  rawId: Number,
  rawData: String,
});
</script>

<template>
  <td
    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
  >
    {{ props.rawData }}
  </td>

  <td
    class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
  >
    <a href="#" class="text-indigo-600 hover:text-indigo-900">
      Edit
      <span class="sr-only">, {{ rawData }}</span>
    </a>
  </td>
</template>
