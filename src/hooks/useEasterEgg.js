import { useCallback, useState } from 'react'

export default function useEasterEgg(threshold = 5) {
  const [count, setCount] = useState(0)
  const [revealed, setRevealed] = useState(false)

  const registerClick = useCallback(() => {
    setCount((prev) => {
      const next = prev + 1
      if (next >= threshold) {
        setRevealed(true)
        return 0
      }
      return next
    })
  }, [threshold])

  const close = useCallback(() => setRevealed(false), [])

  return { count, revealed, registerClick, close }
}
