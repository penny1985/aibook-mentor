import heroBanner from "@/assets/hero-banner.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-labelledby="hero-heading">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="AI 出書實戰班 — 翻開的書本"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          width={1920}
          height={1080}
        />
      </div>

      {/* Text overlay */}
      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 max-w-5xl">
        {/* Instructor name */}
        <p className="font-body text-accent-gold text-base md:text-lg font-bold tracking-[0.2em] mb-6 animate-fade-in">
          陳沛孺 PENNY
        </p>

        {/* Main headline */}
        <h1 id="hero-heading" className="font-display text-accent-green text-5xl md:text-6xl lg:text-7xl font-black leading-[1.5] mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          AI 出書實戰班
        </h1>

        {/* Sub headline */}
        <p className="font-display text-accent-green text-2xl md:text-3xl lg:text-4xl leading-[1.5] max-w-2xl mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          6 週帶你從企劃到投稿
        </p>

        {/* Description */}
        <p className="font-body text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          出書作者手把手陪跑 × AI 協作方法 × 資深總編親自審閱
        </p>

        {/* Info tags */}
        <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <span className="inline-flex items-center bg-white/50 backdrop-blur-sm border border-border font-body text-foreground text-base px-5 py-3 rounded">
            4/12（日）線上直播
          </span>
          <span className="inline-flex items-center bg-white/50 backdrop-blur-sm border border-border font-body text-foreground text-base px-5 py-3 rounded">
            陪跑限額 10 人
          </span>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
