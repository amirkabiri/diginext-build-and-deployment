import './App.css'
import image from './hello.png'
import { useEffect, useState } from 'react'
console.log(image)

function Image({ image }) {
  const [src, setState] = useState(image.preview)

  useEffect(() => {
    fetch(image.src)
      .then((res) => res.blob())
      .then((blob) => {
        setState(URL.createObjectURL(blob))
      })

    return () => {
      // URL.revo(blob)
    }
  }, [image.src])

  return <img src={src} width={image.width} height={image.height} alt="" />
}

function App() {
  return (
    <div>
      <Image image={image} />
      <h1>Deployed successfully!</h1>
    </div>
  )
}

export default App
