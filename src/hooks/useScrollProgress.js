import { useState, useEffect } from 'react'

const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [scrollDirection, setScrollDirection] = useState('up')
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100

      setScrollProgress(scrollPercent)

      // Determine scroll direction
      if (scrollTop > lastScrollY) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }
      setLastScrollY(scrollTop)
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    updateScrollProgress() // Initial calculation

    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [lastScrollY])

  return { scrollProgress, scrollDirection }
}

export default useScrollProgress
