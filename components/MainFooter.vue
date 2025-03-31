<script lang="ts" setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const activeLocale = computed(() => {
  return locales.value.filter(i => i.code === locale.value)
})
</script>

<template>
  <div class="background-texture waves-accent background-primary" />
  <footer
    class="background-texture text-primary flex flex-col justify-end font-medium"
  >
    <PrimitivesContainer>
      <div class="w-full flex-col items-center pb-10 pt-8">
        <div
          class="grid auto-cols-fr grid-rows-[auto] grid-cols-1 mt-16 gap-10 md:grid-cols-[1.8fr_.4fr_1fr]"
        >
          <div class="col-span-1 row-span-1">
            <div
              class="flex items-center gap-x-[0.63rem] font-semibold uppercase"
            >
              <div
                class="flex items-center text-lg text-white font-bold"
              >
                Linki
              </div>
            </div>
            <div class="mt-8">
              <div
                class="grid auto-cols-fr grid-cols-[1fr_1fr] grid-rows-[auto] gap-[1.88rem]"
              >
                <div class="col-span-1 row-span-1">
                  <div
                    class="flex flex-col items-start gap-[0.63rem]"
                  >
                    <div
                      class="mb-3 border-b-2 border-white border-solid pb-1 text-lg leading-normal"
                    >
                      Sociale
                    </div>
                    <ul
                      class="mb-3 list-none text-base leading-normal"
                    >
                      <li>
                        <NuxtLink to="https://www.instagram.com/gwasz_pracownia/" target="_blank">
                          Instagram
                        </NuxtLink>
                      </li>
                      <li class="mt-2">
                        <NuxtLink to="https://www.facebook.com/profile.php?id=61572459933698" target="_blank">
                          Facebook
                        </NuxtLink>
                      </li>
                      <li class="mt-2">
                        <NuxtLink to="https://www.tiktok.com/@gwasz_pracownia" target="_blank">
                          TikTok
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  class="flex flex-col items-start gap-[0.63rem]"
                >
                  <div
                    class="mb-3 border-b-2 border-white border-solid pb-1 text-lg leading-normal"
                  >
                    Wskazówki dojazdu
                  </div>
                  <ul class="mb-3 list-none text-base leading-normal">
                    <li>
                      <NuxtLink to="https://maps.app.goo.gl/zh6tuc4QY35S5NU2A" target="_blank">
                        Kliknij, aby otrzymać wskazówki dojazdu w mapach Google.
                      </NuxtLink>
                    </li>
                    <li class="mt-4">
                      🅿️ 🚘 Bezpłatny parking.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-1 row-span-1" />
          <div class="col-span-1 row-span-1">
            <div
              class="mb-5 flex items-center justify-end gap-x-[0.63rem] font-semibold uppercase lg:justify-start"
            >
              <div
                class="flex items-center text-lg text-white font-bold"
              >
                Bądźmy w kontakcie
              </div>
            </div>
            <div class="mt-8 text-lg leading-normal">
              <div class="flex flex-col items-end lg:items-start">
                <p>
                  ul. Oswobodzenia 1/C3
                </p>
                <p class="mb-3">
                  40-403 Katowice
                </p>
                <NuxtLink
                  class="mb-3 border-b-2 border-white border-solid pb-1"
                  to="tel:+48570566238"
                >
                  +48 570 566 238
                </NuxtLink>
                <NuxtLink
                  class="mb-3 border-b-2 border-white border-solid pb-1"
                  to="mailto:pracownia@gwasz.pl"
                >
                  pracownia@gwasz.pl
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-16">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="order-3 text-base md:order-1">
              © 2025 Pracownia Gwasz
            </div>
            <div class="order-4 mx-4 flex gap-4 md:order-3">
              <template v-for="lang in locales" :key="lang.code">
                <div
                  class="relative flex cursor-pointer items-center justify-start gap-4 overflow-hidden"
                  :class="activeLocale[0].code === lang.code ? 'rounded-md bg-white px-3 py-2' : null"
                >
                  <NuxtLink :to="switchLocalePath(lang.code)" class="overflow-hidden text-lg">
                    {{ lang.name ?? lang.code }}
                  </NuxtLink>
                </div>
              </template>
            </div>
            <div class="order-1 flex gap-5 text-base md:order-3">
              <div class="inline-block max-w-full">
                <p
                  class="border-b-2 border-white border-solid pb-1"
                >
                  Polityka prywatności
                </p>
              </div><div class="inline-block max-w-full">
                <p
                  class="border-b-2 border-white border-solid pb-1"
                >
                  Regulamin
                </p>
              </div>
            </div>
            <div class="order-2 basis-full md:hidden" />
          </div>
        </div>
      </div>
    </PrimitivesContainer>
  </footer>
</template>

<style>
.waves-accent {
  --size: 40px;
  --R: calc(var(--size) * 1.28);
  mask:
    radial-gradient(var(--R) at 50% calc(1.8 * var(--size)), #000 99%, #0000 101%) calc(50% - 2 * var(--size)) 0 /
      calc(4 * var(--size)) 100%,
    radial-gradient(var(--R) at 50% calc(-0.8 * var(--size)), #0000 99%, #000 101%) 50% var(--size) /
      calc(4 * var(--size)) 100% repeat-x;
  height: 100px;
}

footer,
.waves-accent {
  background-color: var(--secondary);
}
</style>
