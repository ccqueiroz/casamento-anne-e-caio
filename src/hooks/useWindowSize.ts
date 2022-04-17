import { useEffect, useState } from 'react'

type WindowSize = {
  width: number | undefined
  height: number | undefined
  isPortrait: boolean
}

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
    isPortrait: true,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isPortrait:
          window.screen &&
          window.screen.orientation &&
          window.screen.orientation.angle
            ? !window.screen.orientation.angle
            : true,
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export { useWindowSize }