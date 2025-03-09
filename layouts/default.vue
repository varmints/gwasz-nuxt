<script setup>
useHead({
  bodyAttrs: {
    class: 'background-texture',
  },
})
</script>

<template>
  <MainHeader />
  <main>
    <slot />
  </main>
  <MainFooter />
</template>
