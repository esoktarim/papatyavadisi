import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    // Transform HTML to optimize CSS loading
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        return html.replace(
          /<link rel="stylesheet"[^>]*>/g,
          (match) => {
            // Add preload for CSS and make it non-blocking
            if (match.includes('assets/') && !match.includes('preload')) {
              const hrefMatch = match.match(/href="([^"]+)"/);
              if (hrefMatch) {
                const href = hrefMatch[1];
                // Add preload link before stylesheet
                return `<link rel="preload" href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript>${match}</noscript>`;
              }
            }
            return match;
          }
        );
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react'],
        },
        // Optimize CSS output
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    // Enable minification (esbuild is faster, terser needs extra dependency)
    minify: 'esbuild',
    // Optimize asset handling
    assetsInlineLimit: 4096, // Inline small assets (< 4KB)
    chunkSizeWarningLimit: 1000,
    // CSS code splitting
    cssCodeSplit: true,
    // Optimize CSS
    cssMinify: true,
  },
  server: {
    host: true,
    port: 5173,
    strictPort: false,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
})
