<script lang="ts" setup>
</script>

<template>
  <footer
    class="flex flex-col justify-end px-4 pb-10 pt-16 text-sm font-medium lg:px-20"
  >
    <PrimitivesContainer>
      <div class="w-full flex-col items-center">
        <div class="brush-accent background-texture h-18" />
        <div
          class="grid auto-cols-fr grid-rows-[auto] grid-cols-1 mt-16 gap-10 md:grid-cols-[1.8fr_.4fr_1fr]"
        >
          <div class="col-span-1 row-span-1">
            <div
              class="mb-5 flex items-center gap-x-[0.63rem] text-white font-semibold uppercase"
            >
              <div
                class="flex items-center border-2 border-white rounded-3xl border-solid px-5 py-3"
              >
                <div>Linki</div>
              </div>
            </div>
            <div class="mt-10">
              <div
                class="grid auto-cols-fr grid-cols-[1fr_1fr] grid-rows-[auto] gap-[1.88rem]"
              >
                <div class="col-span-1 row-span-1">
                  <div
                    class="flex flex-col items-start gap-[0.63rem]"
                  >
                    <p
                      class="mb-3 border-b-2 border-white border-solid pb-1 text-lg text-white"
                    >
                      Sociale
                    </p>
                    <ul
                      class="text-copy-lighter mb-3 list-none"
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
                  <p
                    class="mb-3 border-b-2 border-white border-solid pb-1 text-lg text-white"
                  >
                    Wskazówki dojazdu
                  </p>
                  <ul class="text-copy-lighter mb-3 list-none">
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
          <div class="col-span-1 row-span-1 text-white">
            <div
              class="mb-5 flex items-center justify-end gap-x-[0.63rem] font-semibold uppercase lg:justify-start"
            >
              <div
                class="flex items-center border-2 border-white rounded-3xl border-solid px-5 py-3"
              >
                <div>Bądźmy w kontakcie</div>
              </div>
            </div>
            <div class="mt-10 text-lg">
              <div class="flex flex-col items-end lg:items-start">
                <NuxtLink
                  class="mb-3 border-b-2 border-white border-solid pb-1"
                  to="tel:+48570566238"
                >
                  +48 570 566 238
                </NuxtLink>
                <NuxtLink
                  class="mb-3 border-b-2 border-white border-solid pb-1"
                  to="mailto:sandra@gwasz.pl"
                >
                  sandra@gwasz.pl
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-10 mt-16 sm:mb-0">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <p class="text-copy-lighter order-3 text-base md:order-1">
              © 2025 Pracownia Gwasz
            </p>
            <div class="order-4 flex gap-4 md:order-3">
              <div
                class="relative flex cursor-pointer items-center justify-start gap-4 overflow-hidden rounded-md bg-white px-2 py-1 text-black"
              >
                <span class="overflow-hidden text-lg md:text-xl">
                  <span>pl</span>
                </span>
              </div>
              <div
                class="relative flex cursor-pointer items-center justify-start gap-4 overflow-hidden text-white"
              >
                <span class="overflow-hidden text-lg md:text-xl">
                  <span>en</span>
                </span>
              </div>
            </div>
            <div class="order-1 flex gap-5 text-lg text-blue-700 md:order-3">
              <div class="inline-block max-w-full">
                <p
                  class="border-b-2 border-white border-solid pb-1 text-white"
                >
                  Polityka prywatności
                </p>
              </div><div class="inline-block max-w-full">
                <p
                  class="border-b-2 border-white border-solid pb-1 text-white"
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
.brush-accent {
  mask-image: url(/images/brush.svg);
  mask-repeat: no-repeat;
  mask-size: 100% 100%;
}

footer {
  background-color: var(--secondary-content);
}
</style>
