<script setup>
import { RouterView } from "vue-router";
import AppNav from "@/components/ui/AppNav.vue";
</script>

<template>
  <header class="mb-5">
    <AppNav></AppNav>
  </header>

  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <RouterView />
  </div>
</template>
