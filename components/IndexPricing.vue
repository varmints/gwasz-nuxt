<script setup>

</script>

<template>
  <div class="relative mx-5 flex flex-col items-center justify-center pb-16 pt-16 text-sm font-medium lg:mx-20">
    <h2 class="relative mb-14 text-6xl text-white font-bold md:text-7xl">
      <span class="text-secondary">Cennik</span> zajęć
    </h2>
    <div class="background-texture pricing-card">
      <h3 class="pricing-title">
        5-10 lat (1.5h) *
      </h3>
      <div class="flex flex-col gap-4">
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
      <h3 class="pricing-title mt-14">
        10-16 lat / dorośli (3h) *
      </h3>
      <div class="flex flex-col gap-4">
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
            180 zł
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
  padding: 3rem;
}

.pricing-title {
  font-size: 2rem;
  color: var(--primary);
  font-weight: 700;
  line-height: 1.25;
  text-align: center;
  margin-bottom: 2rem;
}

.pricing-item {
  font-size: 1.25rem;
  color: var(--primary);
}

.pricing-note {
  font-size: 1.25rem;
  color: var(--primary);
  margin-top: 1rem;
}

.pricing-item {
  display: flex;
  width: 100%;
  align-items: end;
  font-size: 1.25rem;
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
