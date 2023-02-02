<template>
  <table class="min-w-full divide-y divide-gray-300">
    <thead class="bg-gray-50">
      <slot name="head"></slot>
    </thead>
    <tbody class="divide-y divide-gray-200 bg-white">
      <slot name="body"></slot>
    </tbody>
  </table>
</template>
