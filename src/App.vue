<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="ml-5 mr-5">
    <header>
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />

      <nav class="space-x-5 bg-gray-100 rounded-lg p-5 mt-5">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/addresses">Addresses</RouterLink>
        <RouterLink to="/patients">Patients</RouterLink>
      </nav>
    </header>

    <RouterView />
  </div>
</template>
