import { GiBroadsword } from 'react-icons/gi'
import useScrollProgress from '../hooks/useScrollProgress'

export default function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div className="fixed right-2 md:right-4 top-24 bottom-24 w-2 z-40 hidden sm:block">
      <div className="relative w-full h-full bg-white/10 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full bg-gold/70 rounded-full"
          style={{ height: `${progress}%` }}
        />
      </div>
      <div
        className="absolute -left-2.5 transition-[top] duration-150"
        style={{ top: `calc(${progress}% - 10px)` }}
      >
        <GiBroadsword className="text-gold text-xl drop-shadow rotate-90" />
      </div>
    </div>
  )
}
