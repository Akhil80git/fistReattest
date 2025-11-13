import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,     // 🔥 Isse same Wi-Fi pe mobile se bhi access ho jaayega
    port: 5174,     // Aapka default Vite port (agar chahein to badal bhi sakte ho)
  },
})
