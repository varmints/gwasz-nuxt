<script setup>

</script>

<template>
  <div class="relative mx-5 flex flex-col items-center justify-center pb-16 pt-16 font-medium lg:mx-20">
    <h2 class="relative mb-14 text-white font-bold lowercase">
      Cennik zajęć
    </h2>
    <div class="background-texture pricing-card p-10 md:p-12">
      <h4 class="pricing-title">
        5-10 lat (1.5h) *
      </h4>
      <div class="flex flex-col gap-6">
        <div class="pricing-item">
          <div class="left">
            Zajęcia próbne
          </div>
          <div class="dots" />
          <div class="right">
            50 zł
          </div>
        </div>
        <div class="pricing-item">
          <div class="left">
            Zajęcia 4x/mies.
          </div>
          <div class="dots" />
          <div class="right">
            200 zł
          </div>
        </div>
        <div class="pricing-item">
          <div class="left">
            Zajęcia 2x/mies.
          </div>
          <div class="dots" />
          <div class="right">
            120 zł
          </div>
        </div>
      </div>
      <h4 class="pricing-title mt-14">
        10-16 lat / dorośli (3h) *
      </h4>
      <div class="flex flex-col gap-6">
        <div class="pricing-item">
          <div class="left">
            Zajęcia próbne
          </div>
          <div class="dots" />
          <div class="right">
            70 zł
          </div>
        </div>
        <div class="pricing-item">
          <div class="left">
            Zajęcia 4x/mies.
          </div>
          <div class="dots" />
          <div class="right">
            300 zł
          </div>
        </div>
        <div class="pricing-item">
          <div class="left">
            Zajęcia 2x/mies.
          </div>
          <div class="dots" />
          <div class="right">
            160 zł
          </div>
        </div>
      </div>
      <br>
      <div class="pricing-note">
        * - darmowe materiały tylko na próbnych zajęciach
      </div>
    </div>
  </div>
</template>

<style scoped>
.pricing-card {
  max-width: 600px;
  position: relative;
  width: 100%;
  background-color: var(--secondary);
  border-radius: 50px;
}

.pricing-title {
  color: var(--primary);
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
}

.pricing-note {
  color: var(--primary);
  margin-top: 1rem;
}

.pricing-item {
  font-size: var(--font-size-h6);
  line-height: 1;
  display: flex;
  width: 100%;
  align-items: end;
  color: var(--primary);
}

.left,
.right {
  flex-shrink: 0;
}

.left {
  padding-right: 8px; /* spacing between text and dots (2 * letter-spacing from .dots) */
}

.dots {
  height: 1em; /* very important */
  overflow: hidden; /* very important */
  word-wrap: break-word; /* where magic happens */
  color: var(--primary);
  letter-spacing: 4px;
}

.dots:after {
  content: '..........................................................................';
}
</style>
