import presetWind3 from '@unocss/preset-wind3'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
  ],
  theme: {
    colors: {},
    fontSize: {
      '5xl': '61.04px',
      '4xl': '48.83px',
      '3xl': '39.06px',
      '2xl': '31.25px',
      'xl': '25px',
      'lg': '20px',
      'base': '16px',
      'small': '12.8px',
    },
  },
})
