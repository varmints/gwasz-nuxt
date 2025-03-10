<script lang="ts" setup>
</script>

<template>
  <div
    id="hero"
    class="background-primary background-texture relative min-h-[100svh] flex items-center justify-center pb-48 pt-32 text-sm font-medium lg:px-20 lg:pt-44"
  >
    <PrimitivesContainer>
      <div class="m-auto w-full flex-col items-center">
        <div
          class="grid auto-cols-fr grid-rows-[auto] grid-cols-1 items-center gap-[3.13rem] lg:grid-cols-2"
        >
          <div
            class="row-start-1 flex flex-col items-start justify-start gap-2"
          >
            <h1 class="text-secondary mx-0 my-3 text-6xl md:text-7xl">
              Kursy <span class="text-white font-bold">malarstwa</span> i <span class="text-white font-bold">rysunku</span>
            </h1>
            <div class="mt-6 lg:mt-12">
              <div>
                <p class="text-secondary mb-10 text-3xl font-semibold">
                  Dla dzieci, młodzieży i dorosłych. <span class="text-white">Zapisz się na zajęcia
                    próbne.</span>
                </p>
                <div class="flex flex-wrap gap-8">
                  <BlobsButton v-gsap.magnetic link="mailto:pracownia@gwasz.pl">
                    Napisz
                  </BlobsButton>
                  <BlobsButton v-gsap.magnetic link="tel:+48570566238">
                    Zadzwoń
                  </BlobsButton>
                </div>
              </div>
            </div>
          </div>
          <div
            v-gsap.add.fromInvisible.from="{ x: 0, y: -30 }"
            class="pointer-events-none relative h-120"
          >
            <section v-gsap.timeline.whenVisible="{ start: 'top 30%', end: 'bottom 30%', scrub: 1.5 }" class="absolute bottom-0 left-0 right-0 top-0 h-screen overflow-hidden">
              <img
                v-gsap.add.to="{ x: -20, y: 250, rotate: 100 }"
                src="/images/kwiatek-1.webp"
                alt="Animowany kwiatek"
                height="600"
                width="600"
              >
            </section>
          </div>
        </div>
      </div>
    </PrimitivesContainer>
  </div>
</template>

<style>
.geo-bg {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%) scale(2.5);
  z-index: -1;
  transform-origin: center center;
  opacity: 0.25;
  will-change: transform;
}
</style>
