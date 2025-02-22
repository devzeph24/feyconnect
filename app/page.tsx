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
    <div className="flex w-full min-h-screen items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/orch.png"
          alt="Orchid Background"
          fill
          className="object-contain md:object-cover"
          priority
          quality={100}
          sizes="100vw"
          style={{ objectPosition: 'center 40%' }}
        />
      </div>
      <button 
        className="flex items-center gap-12 bg-[rgba(105,105,105,0.03)] backdrop-blur rounded-full p-4 cursor-pointer group relative z-10 transition-all duration-200 ease-out active:scale-95 hover:bg-white/[0.08]"
        style={{
          boxShadow: `0 78px 51px 0 rgba(0, 0, 0, 0.1),
            0 50px 30px 0 rgba(0, 0, 0, 0.07),
            0 30px 16px 0 rgba(0, 0, 0, 0.06),
            0 16px 8px rgba(0, 0, 0, 0.04),
            0 6px 4px rgba(0, 0, 0, 0.04),
            0 2px 2px rgba(0, 0, 0, 0.02)`
        }}
      >
        <div className="absolute inset-0 rounded-full" 
          style={{
            padding: '1px',
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.25), #696969 26%, #888888 63%, rgba(255, 255, 255, 0.25) 100%)',
            mask: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor',
            pointerEvents: 'none'
          }}
        />
        <div className="flex -space-x-4">
          {brokers.map((broker, index) => (
            <div
              key={broker.name}
              className="relative w-12 h-12 rounded-full overflow-hidden shadow-lg ring-1 ring-black/10"
              style={{ 
                zIndex: brokers.length - index,
                filter: `brightness(${1 - (index * 0.05)})`,
                boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.05), 2px 2px 8px rgba(0, 0, 0, 0.4)'
              }}
            >
              <Image
                src={broker.icon}
                alt={broker.name}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
          ))}
        </div>
        <span className="text-white text-[15px] font-semibold tracking-[-0.01em] px-8 py-3 bg-[rgba(105,105,105,0.5)] rounded-full transition-colors">
          Sync your broker
        </span>
      </button>
    </div>
  );
}
