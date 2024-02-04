import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsVisible(scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} className='fixed bottom-2 right-2 rounded-full bg-blue-100 p-1 shadow-xl z-50'>
            <Icon icon="mingcute:up-fill" className='h-10 w-10' />
        </button>
      )}
    </div>
  )
}

export default BackToTop
