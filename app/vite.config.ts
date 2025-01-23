import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { loadImage, createCanvas } from 'canvas'

function customImageLoader() {
  return {
    name: 'custom-image-loader',
    async transform(src, id) {
      if (
        !id.endsWith('.png') &&
        !id.endsWith('.jpg') &&
        !id.endsWith('.jpeg')
      ) {
        return
      }

      const image = await loadImage(id)
      const canvas = createCanvas(50, (50 * image.height) / image.width)
      const ctx = canvas.getContext('2d')
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height)

      return {
        code: `export default ${JSON.stringify({
          src: id.replace(__dirname, ''),
          webpSrc: '',
          preview: canvas.toDataURL(),
          width: image.width,
          height: image.height,
        })}`,
      }
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), customImageLoader()],
})
