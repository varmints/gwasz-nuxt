<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  tag: {
    type: String as PropType<'section' | 'div'>,
    default: 'section',
    validator: (value: string) => ['section', 'div'].includes(value),
  },
  id: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <component
    :is="tag"
    :id="id"
    v-bind="$attrs"
    class="container-base mx-auto max-w-[90rem]"
  >
    <slot />
  </component>
</template>

  <style scoped>
  .container-base {
  padding-left: var(--base-padding-x);
  padding-right: var(--base-padding-x);
}
</style>
