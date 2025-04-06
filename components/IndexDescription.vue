<script setup>
const { t } = useI18n()
</script>

<template>
  <div class="relative flex items-center justify-center pb-8 pt-8 font-medium lg:px-20 md:pt-20">
    <PrimitivesContainer>
      <div class="mx-auto w-full">
        <h2 class="mb-8 text-white font-bold lowercase">
          {{ t('description.title') }}
        </h2>

        <div class="columns-1 gap-16 text-white md:columns-2">
          <p>
            {{ t('description.paragraph1') }}
          </p>
          <p>
            {{ t('description.paragraph2') }}
          </p>
          <p>
            <span class="text-secondary font-semibold">{{ t('description.paragraph3').split('?')[0] }}?</span> {{ t('description.paragraph3').split('?')[1] }}
          </p>
          <p>
            {{ t('description.paragraph4') }}
          </p>
        </div>
      </div>
    </PrimitivesContainer>
  </div>
</template>

<style scoped>
p {
  margin-bottom: 1.5em;
  font-size: var(--font-size-h5);
  text-wrap: balance;
  hyphens: auto;
  text-align: justify;
}

h2 {
  text-wrap: balance;
}
</style>
