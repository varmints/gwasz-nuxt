<script setup>
onMounted(() => {
  const figures = document.querySelectorAll('figure')
  figures.forEach((figure) => {
    const figcaption = figure.querySelector('figcaption')
    if (figcaption) {
      const width = figcaption.offsetWidth
      figure.style.setProperty('--figcaption-width', `${width}px`)
    }
  })
})
</script>

<template>
  <div class="relative flex flex-col items-center justify-center pb-16 pt-16 text-sm font-medium lg:px-20">
    <h2 class="relative mb-14 text-white font-bold lowercase">
      Oferta zajęć
    </h2>
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 sm:grid-cols-2">
      <figure class="alt">
        <NuxtImg src="/images/gallery/01.jpg" alt="5-10 lat" loading="lazy" width="300" height="300" fit="cover" />
        <figcaption>5-10 lat</figcaption>
      </figure>
      <figure>
        <NuxtImg src="/images/gallery/02.jpg" alt="10-16 lat" loading="lazy" width="300" height="300" fit="cover" />
        <figcaption>10-16 lat</figcaption>
      </figure>
      <figure>
        <NuxtImg src="/images/gallery/03.jpg" alt="Dorośli" loading="lazy" width="300" height="300" fit="cover" />
        <figcaption>Dorośli</figcaption>
      </figure>
      <figure class="alt">
        <NuxtImg src="/images/gallery/04.jpg" alt="Półkolonie" loading="lazy" width="300" height="300" fit="cover" />
        <figcaption>Półkolonie</figcaption>
      </figure>
      <figure class="alt">
        <NuxtImg src="/images/gallery/05.jpg" alt="Urodziny" loading="lazy" width="300" height="300" fit="cover" />
        <figcaption>Urodziny</figcaption>
      </figure>
      <figure>
        <NuxtImg src="/images/gallery/06.jpg" alt="Warsztaty" loading="lazy" width="300" height="300" fit="cover" />
        <figcaption>Warsztaty</figcaption>
      </figure>
    </div>
  </div>
</template>

<style scoped>
@property --_x {
  syntax: '<length>';
  inherits: true;
  initial-value: 0px;
}
figure {
  --w: 300px; /* image width */
  --r: 1em; /* radius */
  --figcaption-width: 0;
  --line-height: 3;
  --_x: calc(var(--figcaption-width) - calc(var(--line-height) * 2) * calc(var(--font-size-h6) / 2));
  display: grid;
  place-items: end end;
  font-size: var(--font-size-h6);
  font-weight: 700;
  line-height: var(--line-height);
  text-transform: uppercase;
  cursor: pointer;
}
figure.alt {
  place-items: end start;
}
figure > * {
  grid-area: 1/1;
}
figure img {
  width: var(--w);
  aspect-ratio: 1;
  border-radius: var(--r);
  --_m: /calc(2 * var(--r)) calc(2 * var(--r)) radial-gradient(#000 69%, #0000 72%);
  --_g: conic-gradient(from 90deg at calc(100% - var(--r)) calc(100% - var(--r)), #0000 25%, #000 0);
  --_d: (0.5lh + var(--r));
  mask:
    calc(100% - var(--_d) - var(--_x)) 100% var(--_m),
    100% calc(100% - var(--_d)) var(--_m),
    radial-gradient(0.5lh at 100% 100%, #0000 99%, #000 calc(100% + 1px)) calc(-1 * var(--r) - var(--_x))
      calc(-1 * var(--r)),
    var(--_g) calc(-1 * var(--_d) - var(--_x)) 0,
    var(--_g) 0 calc(-1 * var(--_d));
  mask-repeat: no-repeat;
}
figure.alt img {
  --_g: conic-gradient(from 180deg at var(--r) calc(100% - var(--r)), #0000 25%, #000 0);
  mask:
    calc(var(--_d) + var(--_x)) 100% var(--_m),
    0% calc(100% - var(--_d)) var(--_m),
    radial-gradient(0.5lh at 0 100%, #0000 99%, #000 calc(100% + 1px)) calc(var(--r) + var(--_x)) calc(-1 * var(--r)),
    var(--_g) calc(var(--_d) + var(--_x)) 0,
    var(--_g) 0 calc(-1 * var(--_d));
  mask-repeat: no-repeat;
}
figure figcaption {
  box-sizing: border-box;
  translate: calc(0.5lh - var(--r)) calc(0.5lh - var(--r));
  background: var(--background);
  color: var(--primary);
  border-inline: calc(0.5lh - 0.5ch) solid #0000;
  clip-path: inset(5px round 1lh);
  text-align: center;
  padding: 0 1rem;
}
figure.alt figcaption {
  translate: calc(-0.5lh + var(--r)) calc(0.5lh - var(--r));
}
</style>
