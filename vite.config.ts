import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';

// התאמת __dirname לעולם המודרני של ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(() => {
  return {
    // הגדרת בסיס קריטית עבור GitHub Pages
    base: '/icreatecode/', 
    
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'), // נהוג לקשר את @ לתיקיית src לפיתוח נוח
      },
    },
    server: {
      // הגדרות המנוע של AI Studio למניעת הבהובים
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
