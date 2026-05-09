const isTouchDevice = (): boolean => {
  return (
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      // @ts-ignore — IE-era prop, kept for parity with the uikit util
      navigator.msMaxTouchPoints > 0)
  )
}

export default isTouchDevice
