<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

const dummyPages = [
  { link: '/', title: 'ʕ·͡ᴥ·ʔ' },
  { link: '/', title: '( ͡° ᴥ ͡°)' },
  { link: '/', title: '(✿◠‿◠)' },
  { link: '/', title: '⊂(◉‿◉)つ' },
]

onMounted(() => {
  // Animacja scroll trigger dla zmiany wyglądu nagłówka
  gsap
    .timeline({
      defaults: { ease: 'power1.inOut', stagger: 0.2 },
      scrollTrigger: {
        trigger: 'body',
        start: '50px',
        toggleActions: 'play none none reverse',
      },
    })
    .to('[data-company-name]', { opacity: 0 })
    .to('header .logo-path-mask', { opacity: 0 }, '<')
    .set('#header-logo', { pointerEvents: 'none' })

  // Timeline do otwierania menu
  const tl = gsap.timeline({
    paused: true,
    defaults: { duration: 1, ease: 'power2.inOut' },
  })

  tl.set('#navigation', { pointerEvents: 'auto' })
    .to('#navigation-background', { opacity: 1 }, '<')
    .to(
      '[data-nav-text-reveal]',
      { opacity: 1, duration: 0.5, ease: 'none' },
      '<=0.5',
    )

  // Animacja dla poszczególnych elementów menu
  const menuItems = gsap.utils.toArray('[data-nav-item]')
  menuItems.forEach((menuItem) => {
    const menuItemTl = gsap
      .timeline({
        defaults: { duration: 0.4, ease: 'none' },
        paused: true,
      })
      // Zamiast BlurPlugin animujemy właściwość CSS filter
      .to(menuItem, { filter: 'blur(2px)' })
      .to(menuItem, { filter: 'blur(0px)' })
    menuItem.addEventListener('mouseenter', () => menuItemTl.play())
    menuItem.addEventListener('mouseleave', () => menuItemTl.pause(0))
  })

  // Obsługa przycisku menu
  const headerLogo = document.getElementById('header-logo')
  const menuToggle = document.getElementById('menu-toggle')
  menuToggle?.addEventListener('change', function () {
    if (this.checked) {
      headerLogo.classList.add('text-dark')
      tl.play()
    }
    else {
      headerLogo.classList.remove('text-dark')
      tl.reverse()
    }
  })
})
</script>

<template>
  <header class="fixed z-30 w-full">
    <div
      class="left-0 right-0 top-0 grid auto-cols-fr grid-rows-[auto] grid-cols-2 items-center justify-between gap-4 px-6 py-3.5 lg:grid-cols-2 lg:px-20"
    >
      <div class="relative z-40 flex flex-wrap items-center justify-start">
        <a
          id="header-logo"
          v-gsap.magnetic
          href="/"
          class="font-gwasz text-primary-content pointer-cursor inline-block max-w-full justify-self-start text-5xl lg:justify-self-center"
        >GWASZ</a>
      </div>

      <div class="col-start-2 hidden h-full items-center justify-center lg:flex">
        <a data-company-name class="group" href="/">
          <div class="font-gwasz text-primary-content text-6xl" />
        </a>
      </div>

      <div v-gsap.magnetic class="z-40 col-span-1 row-span-1 col-start-3 justify-self-end" aria-label="Menu">
        <div class="relative h-16 flex items-center justify-center lg:h-24 lg:w-24">
          <div class="menu-icon">
            <input id="menu-toggle" class="menu-icon__checkbox" type="checkbox">
            <div>
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>

    <nav
      id="navigation"
      class="pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-30 h-screen flex items-center justify-center text-sm font-medium"
    >
      <div
        id="navigation-background"
        class="absolute left-0 top-0 h-full w-full bg-white opacity-0"
      />
      <div
        class="z-20 w-full flex flex-col flex-wrap items-center justify-center overflow-hidden font-semibold"
      >
        <div class="flex flex-col items-center pt-10">
          <div
            v-for="(page, index) in dummyPages"
            :key="index"
            data-nav-item
            class="relative flex items-center justify-start gap-4 overflow-hidden pr-10"
          >
            <div
              data-nav-border-reveal
              data-nav-text-reveal
              class="h-9 w-9 flex cursor-pointer items-center justify-center rounded-full border-solid pt-1 text-black"
            >
              0{{ index + 1 }}
            </div>
            <div
              data-nav-text-reveal
              class="xs:text-5xl cursor-pointer overflow-hidden text-4xl md:text-[5.63rem] !leading-[1.15]"
            >
              {{ page.title }}
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style>
.menu-icon {
  position: relative;
  width: 50px;
  height: 50px;
  cursor: pointer;
}
.menu-icon .menu-icon__checkbox {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  z-index: 2;
  -webkit-touch-callout: none;
  position: absolute;
  opacity: 0;
}
.menu-icon div {
  margin: auto;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 32px;
  height: 15px;
}
.menu-icon span {
  position: absolute;
  display: block;
  width: 100%;
  height: 5px;
  background-color: var(--bar-bg, #fff);
  border-radius: 5rem;
  transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);
}
.menu-icon span:first-of-type {
  top: 0;
}
.menu-icon span:last-of-type {
  bottom: 0;
}
.menu-icon.active span:first-of-type,
.menu-icon .menu-icon__checkbox:checked + div span:first-of-type {
  transform: rotate(45deg);
  top: 5px;
  background-color: var(--copy);
}
.menu-icon.active span:last-of-type,
.menu-icon .menu-icon__checkbox:checked + div span:last-of-type {
  transform: rotate(-45deg);
  bottom: 5px;
  background-color: var(--copy);
}

[data-nav-border-reveal] {
  --tw-border-opacity: 0;
}
.active-locale {
  font-weight: bolder;
}

/* Globalne style animacji tekstu */
[data-nav-text-reveal] {
  opacity: 0;
}
[data-nav-text-reveal] > div {
  position: relative;
  margin: 0;
}
.split-parent {
  overflow: hidden;
}
.split-child {
  display: inline-block;
}
</style>
