import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

function customImageLoader() {
  return {
    name: 'custom-image-loader',
    async transform(src, id) {},
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
