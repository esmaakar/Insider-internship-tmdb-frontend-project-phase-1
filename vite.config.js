import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Insider-internship-tmdb-frontend-project-phase-1/',
  plugins: [react()],
})
