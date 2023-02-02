<script setup>
import { defineProps } from "vue";

defineProps({
  columnName: String,
});
</script>

<template>
  <th
    scope="col"
    class="pl-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
  >
    {{ columnName }}
  </th>

  <th scope="col" class="relative py-3 pl-3 pr-4 sm:pr-6">
    <span class="sr-only">Edit</span>
  </th>
</template>
