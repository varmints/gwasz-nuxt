<script lang="ts" setup>
const { t } = useI18n()

useSeoMeta({
  title: t('layouts.title'),
  ogTitle: t('layouts.title'),
  description: t('layouts.description'),
  ogDescription: t('layouts.description'),
  ogImage: '',
})
</script>

<template>
  <IndexHero />
  <IndexGallery />
  <IndexPricing />
</template>

<style></style>
