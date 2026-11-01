import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// O GitHub Pages serve de https://<usuario>.github.io/<repo>/, ou seja, de um SUBCAMINHO —
// dai o base com o nome do repositorio. start_url, scope, navigateFallback e o basename do
// router derivam daqui (import.meta.env.BASE_URL): renomear o repo e mudar so esta linha.
const BASE = '/duomari/'

export default defineConfig({
  base: BASE,
  plugins: [
    react(),
    VitePWA({
      strategies: 'generateSW',
      registerType: 'autoUpdate',
      includeAssets: ['icons/apple-touch-icon.png', 'icons/favicon-32.png'],
      manifest: {
        name: 'DuoMari',
        short_name: 'DuoMari',
        description: 'Estudo para o concurso FEG 1/2026 — PEB III Geografia.',
        lang: 'pt-BR',
        start_url: BASE,
        scope: BASE,
        display: 'standalone',
        orientation: 'any',
        background_color: '#ffffff',
        theme_color: '#2d6a4f',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          // maskable separado: arte em ~80% do canvas, senao a mascara do Android corta as bordas
          { src: 'icons/icon-512-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        // 'webmanifest' nao entra no subset default do plugin
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2,webmanifest}'],
        // default e 2MB e arquivos maiores sao silenciosamente pulados do precache — o bundle
        // de conteudo (54 topicos + questoes) e grande e PRECISA estar no precache para offline
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        // obrigatorio com roteamento client-side: deep link/refresh offline daria 404
        navigateFallback: `${BASE}index.html`,
      },
    }),
  ],
  build: {
    // o bundle unico carrega os 54 topicos e 324 questoes: e de proposito (offline integral no
    // precache), entao o aviso padrao de 500 kB nao se aplica
    chunkSizeWarningLimit: 1500,
  },
  server: {
    host: true,
  },
})
