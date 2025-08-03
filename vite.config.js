// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'air-visual-metrics-app', // 👈 change to match your GitHub repo name
});
