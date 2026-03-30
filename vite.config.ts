import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three') || id.includes('@react-three')) {
            return 'scene';
          }

          if (id.includes('node_modules/swiper') || id.includes('node_modules/lucide-react')) {
            return 'ui';
          }

          if (id.includes('node_modules/framer-motion') || id.includes('node_modules/lenis')) {
            return 'motion';
          }

          if (id.includes('node_modules/react')) {
            return 'react-vendor';
          }

          return undefined;
        },
      },
    },
  },
});
