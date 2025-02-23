import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.pdf'], // Ensure PDF files are included in assets
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.pdf')) {
            return 'assets/[name][extname]'; // Ensure consistent asset handling
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});
