import { useState, useEffect } from 'react'

// Use Window height value
export default function useWindowHeight() {
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    const updateHeight = () => setWindowHeight(window.innerHeight)
    window.addEventListener('scroll', updateHeight)
    updateHeight()
    return () => window.removeEventListener('scroll', updateHeight)
  }, [])

  return windowHeight
}
