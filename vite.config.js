import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        // Primary font for titles/large text
        kameron: ['Kameron', 'serif'], 
        // Secondary font for paragraphs/body text
        lato: ['Lato', 'sans-serif'],   
      },
    },
  },
  plugins: [react(), tailwindcss()],
  
})
