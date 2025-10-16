import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      // 👇 here you can override Tailwind core options
      config: {
        corePlugins: {
          preflight: false, // disables reset
        },
      },
    }),
  ],
})
