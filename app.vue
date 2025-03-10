<script setup lang="ts">
useHead({
  meta: [
    { name: 'apple-mobile-web-app-title', content: 'Gwasz' },
  ],
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
