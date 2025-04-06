<script lang="ts" setup>
</script>

<template>
  <div
    id="hero"
    class="relative flex items-center justify-center pb-16 pt-32 font-medium lg:px-20 lg:pt-40"
  >
    <PrimitivesContainer>
      <div class="m-auto w-full flex-col items-center">
        <div
          class="grid auto-cols-fr grid-rows-[auto] grid-cols-1 items-center gap-[3.13rem] lg:grid-cols-2"
        >
          <div
            class="row-start-1 flex flex-col items-start justify-start gap-2"
          >
            <h1 class="text-secondary mx-0 my-3 font-bold">
              Kursy <span class="text-white">malarstwa</span> i <span class="text-white">rysunku</span>
            </h1>
            <div class="mt-6 lg:mt-10">
              <div>
                <p class="text-secondary mb-10 font-semibold">
                  <span class="text-white">w Katowicach.</span> Dla dzieci, młodzieży i dorosłych. <span class="text-white">Zapisz się na zajęcia
                    próbne:</span>
                </p>
                <div class="flex flex-wrap gap-8">
                  <BlobsButton v-gsap.magnetic link="mailto:pracownia@gwasz.pl">
                    Email
                  </BlobsButton>
                  <BlobsButton v-gsap.magnetic link="tel:+48570566238">
                    Telefon
                  </BlobsButton>
                  <BlobsButton v-gsap.magnetic link="https://www.instagram.com/gwasz_pracownia/">
                    Instagram
                  </BlobsButton>
                  <BlobsButton v-gsap.magnetic link="https://wa.me/+48570566238">
                    Whatsapp
                  </BlobsButton>
                  <BlobsButton v-gsap.magnetic link="https://www.tiktok.com/@gwasz_pracownia">
                    Tiktok
                  </BlobsButton>
                  <BlobsButton v-gsap.magnetic link="https://www.facebook.com/profile.php?id=61572459933698">
                    Facebook
                  </BlobsButton>
                </div>
              </div>
            </div>
          </div>
          <div
            class="pointer-events-none col-span-1 row-span-1 justify-self-center"
          >
            <img
              v-gsap.magnetic.stronger
              v-gsap.preset="'spin'"
              src="/images/kwiatek-1.webp"
              alt="Animowany kwiatek"
              height="600"
              width="600"
            >
          </div>
        </div>
      </div>
    </PrimitivesContainer>
  </div>
</template>

<style scoped>
h1,
p {
  text-wrap: balance;
}

p {
  font-size: var(--font-size-h5);
}
</style>
