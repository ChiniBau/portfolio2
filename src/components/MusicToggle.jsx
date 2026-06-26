import { useRef, useState } from 'react'
import { GiMusicalNotes, GiMute } from 'react-icons/gi'

export default function MusicToggle() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      audio.pause()
    } else {
      audio.play().catch((err) => {
        console.log("Playback failed:", err)
      })
    }

    setPlaying(!playing)
  }

  return (
    <>
      {/* Music file: public/audio/one.mp3 */}
      <audio
        ref={audioRef}
        loop
        src="/audio/one.mp3"
      />

      <button
        onClick={toggle}
        title={playing ? 'Mute the sea shanty' : 'Play the sea shanty'}
        className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center text-gold hover:bg-gold/10 transition"
      >
        {playing ? (
          <GiMusicalNotes className="animate-pulse" />
        ) : (
          <GiMute />
        )}
      </button>
    </>
  )
}