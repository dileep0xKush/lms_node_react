const logos = [
  {
    name: 'Airbnb',
    src: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg',
  },
  {
    name: 'Microsoft',
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  },
  {
    name: 'Google',
    src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  },
  {
    name: 'Airbnb',
    src: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg',
  },
  {
    name: 'Microsoft',
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  },
  {
    name: 'Google',
    src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  },
];

export default function TrustedBy() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-slate-400 text-sm uppercase tracking-wide mb-16">
          Trusted by companies of all sizes
        </p>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee gap-24 items-center">
            {/* First loop */}
            {logos.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                className="h-8 opacity-90 hover:opacity-100 transition"
              />
            ))}

            {/* Duplicate loop */}
            {logos.map((logo) => (
              <img
                key={`${logo.name}-duplicate`}
                src={logo.src}
                alt={logo.name}
                className="h-8 opacity-90 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
