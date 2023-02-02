<script setup>
import { DisclosureButton } from "@headlessui/vue";

defineProps({
  label: String,
  url: String,
  active: Boolean,
});
</script>

<template>
  <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
  <DisclosureButton
    as="a"
    :href="url"
    :class="[
      active
        ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
        : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700',
      'block border-l-4 py-2 pl-3 pr-4 text-base font-medium',
    ]"
  >
    {{ label }}
  </DisclosureButton>
</template>
