import Image from "next/image";

export default function Home() {
  const brokers = [
    { name: "Robinhood", icon: "/robinhood.png" },
    { name: "Charles Schwab", icon: "/charleschwab.png" },
    { name: "Fidelity", icon: "/fidelity.png" },
    { name: "WealthSimple", icon: "/wealthsimple.png" },
    { name: "Vanguard", icon: "/vanguard.png" },
    { name: "WE", icon: "/we.png" },
    { name: "Coinbase", icon: "/coinbase.png" },
    { name: "Chase", icon: "/chase.png" },
  ];

  return (
    <div className="flex w-full min-h-screen items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 w-full h-full animate-fade-in">
        <Image
          src="/orch.png"
          alt="Orchid Background"
          fill
          className="object-cover transition-transform duration-[2s] ease-out scale-105 group-hover:scale-100"
          priority
          quality={100}
          sizes="100vw"
          style={{ objectPosition: 'center 40%' }}
        />
      </div>
      <button 
        className="flex items-center gap-4 sm:gap-8 md:gap-12 bg-[rgba(105,105,105,0.03)] backdrop-blur rounded-full p-2 sm:p-3 md:p-4 cursor-pointer group relative z-10 transition-all duration-500 ease-out active:scale-95 hover:bg-white/[0.08] animate-slide-up max-w-full"
        style={{
          boxShadow: `0 78px 51px 0 rgba(0, 0, 0, 0.1),
            0 50px 30px 0 rgba(0, 0, 0, 0.07),
            0 30px 16px 0 rgba(0, 0, 0, 0.06),
            0 16px 8px rgba(0, 0, 0, 0.04),
            0 6px 4px rgba(0, 0, 0, 0.04),
            0 2px 2px rgba(0, 0, 0, 0.02)`
        }}
      >
        <div className="absolute inset-0 rounded-full transition-opacity duration-500" 
          style={{
            padding: '1px',
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.25), #696969 26%, #888888 63%, rgba(255, 255, 255, 0.25) 100%)',
            mask: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor',
            pointerEvents: 'none'
          }}
        />
        <div className="flex -space-x-2 sm:-space-x-3 md:-space-x-4">
          {brokers.map((broker, index) => (
            <div
              key={broker.name}
              className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden shadow-lg ring-1 ring-black/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:z-50"
              style={{ 
                zIndex: brokers.length - index,
                filter: `brightness(${1 - (index * 0.05)})`,
                boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.05), 2px 2px 8px rgba(0, 0, 0, 0.4)',
                animationDelay: `${index * 100}ms`,
                animation: 'slide-in 0.5s ease-out forwards'
              }}
            >
              <Image
                src={broker.icon}
                alt={broker.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, 48px"
              />
            </div>
          ))}
        </div>
        <span className="text-white text-[13px] sm:text-[14px] md:text-[15px] font-semibold tracking-[-0.01em] px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-[rgba(105,105,105,0.5)] rounded-full transition-all duration-300 hover:bg-[rgba(105,105,105,0.6)] hover:scale-105 whitespace-nowrap">
          Sync your broker
        </span>
      </button>
    </div>
  );
}
