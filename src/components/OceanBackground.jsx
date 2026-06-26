export default function OceanBackground({ variant = 'deep' }) {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            variant === 'deep'
              ? 'linear-gradient(180deg, #0B2545 0%, #0F4C81 55%, #0B2545 100%)'
              : 'linear-gradient(180deg, #cfe8f5 0%, #F4E1B9 70%, #e2c98f 100%)',
        }}
      />

      {/* compass watermark */}
      <svg
        className="absolute right-[-10%] top-1/4 w-[60vw] max-w-[700px] opacity-[0.06] animate-spin-slow"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="95" stroke="#D4AF37" strokeWidth="2" />
        <circle cx="100" cy="100" r="70" stroke="#D4AF37" strokeWidth="1" />
        {Array.from({ length: 16 }).map((_, i) => (
          <line
            key={i}
            x1="100"
            y1="10"
            x2="100"
            y2="25"
            stroke="#D4AF37"
            strokeWidth="1.5"
            transform={`rotate(${i * 22.5} 100 100)`}
          />
        ))}
        <polygon points="100,30 110,100 100,170 90,100" fill="#D4AF37" opacity="0.5" />
      </svg>

      {/* floating clouds */}
      <div className="absolute top-10 left-0 w-full h-40 opacity-30">
        <div className="absolute w-40 h-12 bg-white/70 rounded-full blur-md animate-drift" style={{ top: '10%' }} />
        <div className="absolute w-56 h-16 bg-white/60 rounded-full blur-md animate-drift" style={{ top: '40%', animationDelay: '-12s', animationDuration: '55s' }} />
        <div className="absolute w-32 h-10 bg-white/60 rounded-full blur-md animate-drift" style={{ top: '70%', animationDelay: '-25s', animationDuration: '48s' }} />
      </div>

      {/* waves */}
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-40 animate-wave"
        viewBox="0 0 2400 200"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 C200,150 400,50 600,100 C800,150 1000,50 1200,100 C1400,150 1600,50 1800,100 C2000,150 2200,50 2400,100 L2400,200 L0,200 Z"
          fill="rgba(212,175,55,0.08)"
        />
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-32 animate-wave"
        viewBox="0 0 2400 200"
        preserveAspectRatio="none"
        style={{ animationDelay: '-3s', animationDuration: '8s' }}
      >
        <path
          d="M0,120 C300,60 600,160 900,110 C1200,60 1500,160 1800,110 C2000,80 2200,140 2400,110 L2400,200 L0,200 Z"
          fill="rgba(253,253,253,0.06)"
        />
      </svg>
    </div>
  )
}
