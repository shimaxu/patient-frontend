<script setup>
import { defineProps } from "vue";

defineProps({
  label: String,
  url: String,
  active: Boolean,
});
</script>

<template>
  <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
    <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
    <RouterLink
      :to="`${url}`"
      :class="[
        active
          ? 'border-indigo-500 text-gray-900'
          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
        'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-gray-900',
      ]"
    >
      {{ label }}
    </RouterLink>
  </div>
</template>
