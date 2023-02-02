<script setup>
import { defineProps } from "vue";

defineProps({
  name: String,
  count: Number,
  url: String,
});
</script>

<template>
  <dt>
    <div class="absolute rounded-md bg-indigo-500 p-3">
      <slot name="icon"></slot>
    </div>
    <p class="ml-16 truncate text-sm font-medium text-gray-500">
      {{ name }}
    </p>
  </dt>
  <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
    <p class="text-2xl font-semibold text-gray-900">
      {{ count }}
    </p>

    <div class="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
      <div class="text-sm">
        <RouterLink :to="`${url}`">
          <a
            :href="url"
            class="font-medium text-indigo-600 hover:text-indigo-500"
          >
            View all
            <span class="sr-only"> {{ name }} stats</span>
          </a>
        </RouterLink>
      </div>
    </div>
  </dd>
</template>
