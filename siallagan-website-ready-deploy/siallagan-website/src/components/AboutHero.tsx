interface AboutHeroProps {
  image: string;
  title: React.ReactNode;
  subtitle?: string;
}

export default function AboutHero({ image, title, subtitle }: AboutHeroProps) {
  return (
    <section className="relative w-full h-[480px] md:h-[560px] overflow-hidden">
      <img
        src={image}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(15,118,110,0.55) 0%, rgba(15,118,110,0.15) 60%, rgba(0,0,0,0.15) 100%)",
        }}
      />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 h-full flex items-center">
        <div className="max-w-xl fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6 text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/90 text-base md:text-lg max-w-md leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}